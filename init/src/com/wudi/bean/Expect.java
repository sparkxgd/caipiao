package com.wudi.bean;

public class Expect {
	private int year;// 2001
	private int length;
	
	public Expect(int year,int length) {
		this.length=length;
		this.year=year;
	}
	
	public int getLength() {
		return length;
	}

	public int getYear() {
		return year;
	}
	public String getExpect(int index) {
		int s = year*1000+index;
		String ss=String.valueOf(s);
		String expectStr=ss.substring(2, 7);
		return expectStr;
	}

}
