package com.wudi.controller;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

import com.jfinal.core.Controller;
import com.jfinal.plugin.activerecord.Page;
import com.wudi.bean.CaiXML;
import com.wudi.model.NavsModel;
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
		int limit=getParaToInt("limit");
		int page=getParaToInt("page");
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
	
	
	
	/**
	 * 打开更新信息页面
	 */
	public void opencaip() {
		// 接收页面数据
		String id = getPara("id");
		setAttr("id", id);
		render("sys/navsEdit.html");
	}
	
	public void updateCaipiao() {
		String expect=getPara("q");
		 try {
			URL url = new URL("http://zx.500.com/static/public/sfc/daigou/xml/"+expect+".xml");
			 InputStream is = url.openStream();
             InputStreamReader isr = new InputStreamReader(is,"utf-8");
             //为字符输入流添加缓冲
             BufferedReader br = new BufferedReader(isr);
             String data = br.readLine();//读取数据
             setAttr("data", data);
             renderJson();
		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	public void openPlurlAdd() {
		render("plurl/plurlAdd.html");
	}
	
	/**
     * 从网络Url中下载文件
     * @param urlStr
     * @param fileName
     * @param savePath
     * @throws IOException
     */
    public void  downLoadFromUrl() throws IOException{
    	int start=getParaToInt("start");
    	int finish=getParaToInt("finish");
    	for(int i=start;i<=finish;i++) {
    		String expect=String.valueOf(i);
    	String urlStr="http://zx.500.com/static/public/sfc/daigou/xml/"+expect+".xml";
    	String fileName=expect+".xml";
    	String savePath="WebContent/downfile";
        URL url = new URL(urlStr);  
        HttpURLConnection conn = (HttpURLConnection)url.openConnection();  
                //设置超时间为3秒
        conn.setConnectTimeout(3*1000);
        //防止屏蔽程序抓取而返回403错误
        conn.setRequestProperty("User-Agent", "Mozilla/4.0 (compatible; MSIE 5.0; Windows NT; DigExt)");

        //得到输入流
        InputStream inputStream = conn.getInputStream();  
        //获取自己数组
        byte[] getData = MyUtil.readInputStream(inputStream);    

        //文件保存位置
        File saveDir = new File(savePath);
        if(!saveDir.exists()){
            saveDir.mkdir();
        }
        File file = new File(saveDir+File.separator+fileName);    
        FileOutputStream fos = new FileOutputStream(file);     
        fos.write(getData); 
        if(fos!=null){
            fos.close();  
        }
        if(inputStream!=null){
            inputStream.close();
        }
        CaiXML c=new CaiXML(expect);
		PlurlModel.saveList(expect,c.getPlurls());
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
		int limit=getParaToInt("limit");
		int page=getParaToInt("page");
		Page<PlurlModel> list = PlurlModel.getList(page, limit, key);
		setAttr("code", 0);
		setAttr("msg", "你好！");
		setAttr("count", list.getTotalRow());
		setAttr("data", list.getList());
		renderJson();
	}
}