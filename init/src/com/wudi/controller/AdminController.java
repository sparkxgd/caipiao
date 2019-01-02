package com.wudi.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import com.jfinal.core.Controller;
import com.jfinal.plugin.activerecord.Page;
import com.wudi.bean.Analypei;
import com.wudi.bean.CaiXML;
import com.wudi.bean.Expect;
import com.wudi.constant.ExpectCon;
import com.wudi.model.NavsModel;
import com.wudi.model.admin.AnalyModel;
import com.wudi.model.admin.HeadModel;
import com.wudi.model.admin.PlurlModel;
import com.wudi.util.MyUtil;

/**
 * 
 * @ClassName: AdminController
 * @Description: TODO 后台管理页面跳转管理类
 * @author xiao
 * @date 2018年10月29日下午4:08:09
 *
 */
public class AdminController extends Controller {
	/**
	 * 
	 * @Title: index @Description:后台管理默认到达页面 @param 参数 @return void 返回类型 @throws
	 */
	public void index() {
		render("index.html");
	}

	public void main() {
		render("main.html");
	}

	/**
	 * 
	 * @Title: getnavs @Description: 获取主页面左侧菜单数据 @param 参数 @return void 返回类型 @throws
	 */
	public void getnavs() {
		Object object = NavsModel.getListForLeft();
		renderJson(object);
	}

	/**
	 * 显示菜单列表
	 */
	public void navsinfo() {
		render("sys/navsinfo.html");
	}

	/**
	 * 
	 * @Title: getnavs @Description: 获取侧菜单数据列表 @param 参数 @return void 返回类型 @throws
	 */
	public void getNavsList() {
		// 获取页面查询的关键字
		String key = getPara("key");
		int limit = getParaToInt("limit");
		int page = getParaToInt("page");
		Page<NavsModel> list = NavsModel.getList(page, limit, key);
		setAttr("code", 0);
		setAttr("msg", "你好！");
		setAttr("count", list.getTotalRow());
		setAttr("data", list.getList());
		renderJson();
	}

	/**
	 * 打开菜单添加页面
	 */
	public void openNavsAdd() {
		render("sys/navsAdd.html");
	}

	/**
	 * 添加保存菜单信息
	 */
	public void saveNavs() {
		String title = getPara("title");
		String href = getPara("href");
		String icon = "&#xe630;";
		String fid = getPara("fid");
		boolean result = NavsModel.saveModel(title, href, icon, fid);
		setAttr("result", result);
		renderJson();

	}

	/**
	 * TODO:根据id查找信息数据
	 */
	public void getModeListById() {
		String id = getPara("id");
		NavsModel m = NavsModel.getModeById(id);
		List<NavsModel> ml = NavsModel.getModeListByFid("-1");
		setAttr("m", m);// 找数据去更新
		setAttr("ml", ml);// 父节点列表
		renderJson();
	}

	/**
	 * TODO:根据fid查找信息数据
	 */
	public void getModeByFId() {
		List<NavsModel> ml = NavsModel.getModeListByFid("-1");
		setAttr("ml", ml);// 找数据去更新
		renderJson();
	}

	/**
	 * 打开菜单修改页面
	 */
	public void openNavsEdit() {
		// 接收页面数据
		String id = getPara("id");
		setAttr("id", id);
		renderFreeMarker("sys/navsEdit.html");
	}

	/**
	 * 更新保存菜单信息
	 */
	public void updatenavs() {
		String id = getPara("id");
		String title = getPara("title");
		String href = getPara("href");
		String icon = "&#xe630;";
		String fid = getPara("fid");
		boolean result = NavsModel.updateModel(id, title, href, icon, fid);
		setAttr("result", result);
		renderJson();

	}

	public void updateLoadFromUrl() throws IOException {
		String expect = getPara("id");
		String urlStr = "http://zx.500.com/static/public/sfc/daigou/xml/" + expect + ".xml";
		String fileName = expect + ".xml";
		String savePath = "WebContent/downfile";
		URL url = new URL(urlStr);
		HttpURLConnection conn = (HttpURLConnection) url.openConnection();
		// 设置超时间为3秒
		conn.setConnectTimeout(3 * 1000);
		// 防止屏蔽程序抓取而返回403错误
		conn.setRequestProperty("User-Agent", "Mozilla/4.0 (compatible; MSIE 5.0; Windows NT; DigExt)");

		// 得到输入流
		InputStream inputStream = conn.getInputStream();
		// 获取自己数组
		byte[] getData = MyUtil.readInputStream(inputStream);

		// 文件保存位置
		File saveDir = new File(savePath);
		if (!saveDir.exists()) {
			saveDir.mkdir();
		}
		File file = new File(saveDir + File.separator + fileName);
		FileOutputStream fos = new FileOutputStream(file);
		fos.write(getData);
		if (fos != null) {
			fos.close();
		}
		if (inputStream != null) {
			inputStream.close();
		}
		System.out.println(expect);
		CaiXML c = new CaiXML(expect);
		HeadModel.saveModel(c.getHead());// 保存开奖信息
		PlurlModel.saveList(expect, c.getPlurls());//保存赔率
		AnalyModel.analyByExpect(expect);//顺便分析，注意，要先保存开奖信息，在保存赔率，才可以分析
		setAttr("result", true);
		renderJson();
	}

	/**
	 * 打开更新信息页面
	 */
	public void openAddExpect() {
		render("head/addExpect.html");
	}

	/**
	 * 从网络Url中下载文件
	 * 
	 * @param urlStr
	 * @param fileName
	 * @param savePath
	 * @throws IOException
	 */
	public void addLoadFromUrl() throws IOException {
		String ex = getPara("expect");
		String expects[] = ex.split(",");
		for (String expect : expects) {
			String urlStr = "http://zx.500.com/static/public/sfc/daigou/xml/" + expect + ".xml";
			String fileName = expect + ".xml";
			String savePath = "WebContent/downfile";
			URL url = new URL(urlStr);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			// 设置超时间为3秒
			conn.setConnectTimeout(3 * 1000);
			// 防止屏蔽程序抓取而返回403错误
			conn.setRequestProperty("User-Agent", "Mozilla/4.0 (compatible; MSIE 5.0; Windows NT; DigExt)");

			// 得到输入流
			InputStream inputStream = conn.getInputStream();
			// 获取自己数组
			byte[] getData = MyUtil.readInputStream(inputStream);

			// 文件保存位置
			File saveDir = new File(savePath);
			if (!saveDir.exists()) {
				saveDir.mkdir();
			}
			File file = new File(saveDir + File.separator + fileName);
			FileOutputStream fos = new FileOutputStream(file);
			fos.write(getData);
			if (fos != null) {
				fos.close();
			}
			if (inputStream != null) {
				inputStream.close();
			}
			System.out.println(expect);
			CaiXML c = new CaiXML(expect);
			HeadModel.saveModel(c.getHead());// 保存
			PlurlModel.saveList(expect, c.getPlurls());
		}
		setAttr("result", true);
		renderJson();
	}

	public void openPlurlAdd() {
		render("plurl/plurlAdd.html");
	}

	public void test() {
		String years = getPara("year");
		String year[] = years.split(",");
		for (String y : year) {
			Expect ex = ExpectCon.exs.get(y);
			for (int i = 1; i <= ex.getLength(); i++) {
				String expect = ex.getExpect(i);
				System.out.println(expect);
			}
		}
		setAttr("result", true);
		renderJson();
	}

	/**
	 * 从网络Url中下载文件
	 * 
	 * @param urlStr
	 * @param fileName
	 * @param savePath
	 * @throws IOException
	 */
	public void downLoadFromUrl() throws IOException {
		String years = getPara("year");
		String year[] = years.split(",");
		for (String y : year) {
			Expect ex = ExpectCon.exs.get(y);
			for (int i = 1; i <= ex.getLength(); i++) {
				String expect = ex.getExpect(i);
				String urlStr = "http://zx.500.com/static/public/sfc/daigou/xml/" + expect + ".xml";
				String fileName = expect + ".xml";
				String savePath = "WebContent/downfile";
				URL url = new URL(urlStr);
				HttpURLConnection conn = (HttpURLConnection) url.openConnection();
				// 设置超时间为3秒
				conn.setConnectTimeout(3 * 1000);
				// 防止屏蔽程序抓取而返回403错误
				conn.setRequestProperty("User-Agent", "Mozilla/4.0 (compatible; MSIE 5.0; Windows NT; DigExt)");

				// 得到输入流
				InputStream inputStream = conn.getInputStream();
				// 获取自己数组
				byte[] getData = MyUtil.readInputStream(inputStream);

				// 文件保存位置
				File saveDir = new File(savePath);
				if (!saveDir.exists()) {
					saveDir.mkdir();
				}
				File file = new File(saveDir + File.separator + fileName);
				FileOutputStream fos = new FileOutputStream(file);
				fos.write(getData);
				if (fos != null) {
					fos.close();
				}
				if (inputStream != null) {
					inputStream.close();
				}
				System.out.println(expect);
				CaiXML c = new CaiXML(expect);
				HeadModel.saveModel(c.getHead());// 保存
				PlurlModel.saveList(expect, c.getPlurls());
			}
		}

		setAttr("result", true);
		renderJson();
	}

	public void openPlurl() {
		render("plurl/plurlinfo.html");
	}

	public void getPlurlList() {
		// 获取页面查询的关键字
		String key = getPara("key");
		int limit = getParaToInt("limit");
		int page = getParaToInt("page");
		Page<PlurlModel> list = PlurlModel.getList(page, limit, key);
		setAttr("code", 0);
		setAttr("msg", "你好！");
		setAttr("count", list.getTotalRow());
		setAttr("data", list.getList());
		renderJson();
	}

	public void openHeads() {
		render("head/headinfo.html");
	}

	public void getHeadList() {
		// 获取页面查询的关键字
		String key = getPara("key");
		int limit = getParaToInt("limit");
		int page = getParaToInt("page");
		Page<HeadModel> list = HeadModel.getList(page, limit, key);
		setAttr("code", 0);
		setAttr("msg", "你好！");
		setAttr("count", list.getTotalRow());
		setAttr("data", list.getList());
		renderJson();
	}

	public void openHeadPlurs() {
		String expect = getPara("id");
		setAttr("expect", expect);
		renderFreeMarker("head/headplurs.html");
	}

	public void getHeadPlursList() {
		// 获取页面查询的关键字
		String key = getPara("key");
		String expect = getPara("expect");
		int limit = getParaToInt("limit");
		int page = getParaToInt("page");
		Page<PlurlModel> list = PlurlModel.getList(page, limit, key, expect);
		setAttr("code", 0);
		setAttr("msg", "你好！");
		setAttr("count", list.getTotalRow());
		setAttr("data", list.getList());
		renderJson();
	}

	public void openAnaly() {
		render("tongji/analyinfo.html");
	}

	public void getAnalyList() {
		// 获取页面查询的关键字
		String key = getPara("key");
		int limit = getParaToInt("limit");
		int page = getParaToInt("page");
		Page<AnalyModel> list = AnalyModel.getList(page, limit, key);
		setAttr("code", 0);
		setAttr("msg", "你好！");
		setAttr("count", list.getTotalRow());
		setAttr("data", list.getList());
		renderJson();
	}

	public void analy() {
		AnalyModel.analyAll();
		setAttr("result", true);
		renderJson();
	}
	public void openForecast() {
		render("tongji/forecastinfo.html");
	}
	public void getForecastinfo() {
		List<AnalyModel> list=AnalyModel.getList();
		double total=0;
		int t=0;
		for(AnalyModel a:list) {
			if(a.getavgpei()!=0) {
				total+=a.getavgpei();
				t++;
			}
		}
		double avg=new BigDecimal(total/t).setScale(3, BigDecimal.ROUND_HALF_UP).doubleValue();
		setAttr("avg", avg);
		renderJson();
	}

	/**
	 *根据每期赔率从小到大的排序显示，查看中奖情况
	 */
	public void openAnalypei() {
		render("tongji/analypeiinfo.html");
	}
	
	public void getAnalypei() {
		List<HeadModel> listh=HeadModel.getList();
		List<PlurlModel> listp=PlurlModel.getList();
		List<Analypei> list=new ArrayList<>();
		for(HeadModel h:listh) {
			Analypei ap=new Analypei();
			List<PlurlModel> lp=new ArrayList<>();
			for(PlurlModel p:listp) {
				if(p.getExpect().equals(h.getId())) {
					lp.add(p);
				}
			}
			ap.setExpect(h.getId());
			ap.setPlurlist(lp);
			list.add(ap);
		}
		setAttr("code", 0);
		setAttr("msg", "你好！");
		setAttr("count", list.size());
		setAttr("data", list);
		renderJson();
	}
}