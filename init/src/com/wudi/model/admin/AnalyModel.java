package com.wudi.model.admin;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.Page;
import com.wudi.util.MyUtil;

public class AnalyModel extends Model<AnalyModel>{
	private static final long serialVersionUID = 4157657332485385218L;
	public static final AnalyModel dao = new AnalyModel();
	public static final String tableName = "analypei";
	public String getId() {
		return get("id");
	}
	public void setId(String id) {
		set("id", id);
	}
	public void setavgpei(double avgpei) {
		set("avgpei", avgpei);
	}
	public double getavgpei() {
		return get("avgpei");
	}
	public int getonepei() {
		return get("onepei");
	}
	public void setonepei(int onepei) {
		set("onepei", onepei);
	}
	public int gettwopei() {
		return get("twopei");
	}
	public void settwopei(int twopei) {
		set("twopei", twopei);
	}
	public int getthreepei() {
		return get("threepei");
	}
	public void setthreepei(int threepei) {
		set("threepei", threepei);
	}
	public static List<AnalyModel> getList(){
		String sql="select * from "+tableName+"";
		return dao.find(sql);
	}
	public static Page<AnalyModel> getList(int pageNumber, int pageSize,String key) {
		String sele_sql="select * ";
		StringBuffer from_sql=new StringBuffer();
		from_sql.append("from ").append(tableName);
		if(!MyUtil.isBlankOrEmpty(key)) {
			from_sql.append(" where id like '%"+key+"%'");
		}
		from_sql.append(" ORDER BY id DESC ");
		return dao.paginate(pageNumber,pageSize,sele_sql,from_sql.toString());
	} 
	public static boolean saveList(List<AnalyModel> list) {
			//先删除掉,再保存
		String sql="delete from "+tableName+"";
		Db.delete(sql);
		Db.batchSave(list, 1000);
		return true;
	}
	public static void analyAll() {
		List<HeadModel> list=HeadModel.getList();
		List<AnalyModel> alist=new ArrayList<>();
		for(HeadModel m:list) {
			List<PlurlModel> plist=PlurlModel.getList(m.getId());
			//找出1赔，2赔，3赔的个数和平均赔率
			double total=0;
			int onepei=0;
			int twopei=0;
			int threepei=0;
			
			for(PlurlModel p:plist) {
				//中奖赔率
				if(p.getResult()==p.getSpf()) {
					total+=p.getValue();
					switch (p.getPei()) {
					case 1:
						onepei++;
						break;
					case 2:
						twopei++;
						break;
					case 3:
						threepei++;
						break;
					default:
						break;
					}
				}
			}
			double avg=new BigDecimal(total/(onepei+twopei+threepei)).setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
			AnalyModel a=new AnalyModel();
			a.setavgpei(avg);
			a.setId(m.getId());
			a.setonepei(onepei);
			a.settwopei(twopei);
			a.setthreepei(threepei);
			alist.add(a);
		}
		AnalyModel.saveList(alist);
	}
	public static void analyByExpect(String expect) {
			List<PlurlModel> plist=PlurlModel.getList(expect);
			//找出1赔，2赔，3赔的个数和平均赔率
			double total=0;
			int onepei=0;
			int twopei=0;
			int threepei=0;
			
			for(PlurlModel p:plist) {
				//中奖赔率
				if(p.getResult()==p.getSpf()) {
					total+=p.getValue();
					switch (p.getPei()) {
					case 1:
						onepei++;
						break;
					case 2:
						twopei++;
						break;
					case 3:
						threepei++;
						break;
					default:
						break;
					}
				}
			}
			double avg=0;
			if(total!=0) {
				avg=new BigDecimal(total/(onepei+twopei+threepei)).setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
			}
			
			AnalyModel a=dao.findById(expect);
			if(a==null) {
				a=new AnalyModel();
				a.setavgpei(avg);
				a.setId(expect);
				a.setonepei(onepei);
				a.settwopei(twopei);
				a.setthreepei(threepei);
				a.save();
			}else {
				a.setavgpei(avg);
				a.setId(expect);
				a.setonepei(onepei);
				a.settwopei(twopei);
				a.setthreepei(threepei);
				a.update();
			}
			
		}
}
