package com.wudi.bean;

public class CaiHead {
	private String expect;
	private String updatetime;
	private String fsendtime;
	private String shenheprocess;
	private int active;//0代表未有开，1代表开机
	public String getExpect() {
		return expect;
	}
	public void setExpect(String expect) {
		this.expect = expect;
	}
	public String getUpdatetime() {
		return updatetime;
	}
	public void setUpdatetime(String updatetime) {
		this.updatetime = updatetime;
	}
	public String getFsendtime() {
		return fsendtime;
	}
	public void setFsendtime(String fsendtime) {
		this.fsendtime = fsendtime;
	}
	public String getShenheprocess() {
		return shenheprocess;
	}
	public void setShenheprocess(String shenheprocess) {
		this.shenheprocess = shenheprocess;
	}
	public int getActive() {
		return active;
	}
	public void setActive(int active) {
		this.active = active;
	}
	
	

}
