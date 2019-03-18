package com.wudi.constant;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.wudi.bean.Analy;
import com.wudi.bean.Analypei;
import com.wudi.bean.Expect;

public class ExpectCon {
	public static List<Analypei> list=new ArrayList<>();
	public static List<Analy> alist=new ArrayList<>();
	
	public static Map<String,Expect> exs=new HashMap<String,Expect>();
	static {
		Expect y7=new Expect(2007,105);
		exs.put("2007",y7);
		Expect y8=new Expect(2008,102);
		exs.put("2008",y8);
		Expect y9=new Expect(2009,109);
		exs.put("2009",y9);
		Expect y10=new Expect(2010,128);
		exs.put("2010",y10);
		Expect y11=new Expect(2011,141);
		exs.put("2011",y11);
		Expect y12=new Expect(2012,178);
		exs.put("2012",y12);
		Expect y13=new Expect(2013,185);
		exs.put("2013",y13);
		Expect y14=new Expect(2014,189);
		exs.put("2014",y14);
		Expect y15=new Expect(2015,199);
		exs.put("2015",y15);
		Expect y16=new Expect(2016,199);
		exs.put("2016",y16);
		Expect y17=new Expect(2017,195);
		exs.put("2017",y17);
		Expect y18=new Expect(2018,176);
		exs.put("2018",y18);
		
	}
	
	
	public static void main(String[] args) {
		String year="2001";
    	Expect ex=ExpectCon.exs.get(year);
		for(int i=1;i<=ex.getLength();i++) {
			String eee=ex.getExpect(i);
			System.out.println(eee);
		}
		
	}
}
