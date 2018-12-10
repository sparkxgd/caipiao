package com.wudi.util;

import java.util.Date;
import java.util.Random;

public class StringUtil{

	public static boolean isBlankOrEmpty(String string){
		return string==null || string.trim().length() == 0;
	}
	public static String getId() {
		Long t=new Date().getTime();
		Random ra =new Random();
		int a=ra.nextInt(10000);
		return t.toString()+a;
	}
}
