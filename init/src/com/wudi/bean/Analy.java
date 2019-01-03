package com.wudi.bean;

import java.math.BigDecimal;

public class Analy {
	private int peiNo;//第几赔
	private int winningNum;//中奖次数
	private int total;//总记录
	private double probability;//中奖概率
	private double variance;//方差
	public Analy(int peiNo,int total) {
		this.peiNo=peiNo;
		this.total=total;
	}
	public int getWinningNum() {
		return winningNum;
	}
	public void setWinningNum(int winningNum) {
		this.winningNum = winningNum;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
	public double getVariance() {
		return variance;
	}
	public void setVariance(double variance) {
		this.variance = variance;
	}
	public int getPeiNo() {
		return peiNo;
	}
	public double getProbability() {
		double w=new BigDecimal(winningNum).doubleValue();
		probability=new BigDecimal(w/total).setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
		return probability;
	}
	
}
