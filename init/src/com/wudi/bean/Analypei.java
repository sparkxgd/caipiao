package com.wudi.bean;

import java.math.BigDecimal;
import java.util.List;

import com.wudi.model.admin.PlurlModel;

public class Analypei {
	private String expect;
	private List<PlurlModel> plurlist;
	private int total;
	private int zhong;
	private double chance;//中奖概率
	
	public String getExpect() {
		return expect;
	}
	public void setExpect(String expect) {
		this.expect = expect;
	}
	public List<PlurlModel> getPlurlist() {
		return plurlist;
	}
	public void setPlurlist(List<PlurlModel> plurlist) {
		this.plurlist = plurlist;
		int t=0;
		for(PlurlModel m : plurlist) {
			if(m.getResult()==m.getSpf()) {
				t++;
			}
		}
		this.zhong=t;
		this.total=plurlist.size();
	}
	public int getTotal() {
		return total;
	}
	public int getZhong() {
		return zhong;
	}
	public double getChance() {
		double z=Double.valueOf(zhong);
		chance=new BigDecimal(z/total).setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
		return chance;
	}
	
	
}
