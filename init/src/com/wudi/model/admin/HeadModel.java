package com.wudi.model.admin;

import com.jfinal.plugin.activerecord.Model;
import com.wudi.bean.CaiHead;

public class HeadModel extends Model<HeadModel>{
	private static final long serialVersionUID = 7448105882425197123L;
	public static final HeadModel dao = new HeadModel();
	public static final String tableName = "cai_head";
	public String getId() {
		return get("id");
	}
	public void setId(String id) {
		set("id", id);
	}
	public void setfsendtime(String fsendtime) {
		set("fsendtime", fsendtime);
	}
	public String getfsendtime() {
		return get("fsendtime");
	}
	public String getupdatetime() {
		return get("updatetime");
	}
	public void setupdatetime(String updatetime) {
		set("updatetime", updatetime);
	}
	public int getactive() {
		return get("active");
	}
	public void setactive(int active) {
		set("active", active);
	}
	
	public static boolean saveModel(CaiHead h) {
		HeadModel m=new HeadModel();
		m.setId(h.getExpect());
		m.setfsendtime(h.getFsendtime());
		m.setupdatetime(h.getUpdatetime());
		m.setactive(h.getActive());
		m.save();
		return true;
	}
}
