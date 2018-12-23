package com.wudi.bean;

public class Plurl {
	private double value;//赔率值
	private int ordernum;//胜负彩第一几场次
	private String expect;//开奖期号
	private int result;//比赛结果
	private int pei;//几赔,赔率最高是三赔，中间是二赔，最低的是一赔
	private int spf;//胜平负，以主场为对象，3代表胜，1代表平，0代表负，如果是3，说明这个赔率就是3的赔率。
	public double getValue() {
		return value;
	}
	public int getSpf() {
		return spf;
	}
	public void setSpf(int spf) {
		this.spf = spf;
	}
	public void setValue(double value) {
		this.value = value;
	}
	public int getOrdernum() {
		return ordernum;
	}
	public void setOrdernum(int ordernum) {
		this.ordernum = ordernum;
	}
	public String getExpect() {
		return expect;
	}
	public void setExpect(String expect) {
		this.expect = expect;
	}
	public int getResult() {
		return result;
	}
	public void setResult(int result) {
		this.result = result;
	}
	public int getPei() {
		return pei;
	}
	public void setPei(int pei) {
		this.pei = pei;
	}

	
	

}
