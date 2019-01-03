package com.wudi.util;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Random;

import com.wudi.bean.Analy;
import com.wudi.bean.Analypei;
import com.wudi.model.admin.PlurlModel;

public class MyUtil {
    /**
     * 从输入流中获取字节数组
     * @param inputStream
     * @return
     * @throws IOException
     */
    public static  byte[] readInputStream(InputStream inputStream) throws IOException {  
        byte[] buffer = new byte[1024];  
        int len = 0;  
        ByteArrayOutputStream bos = new ByteArrayOutputStream();  
        while((len = inputStream.read(buffer)) != -1) {  
            bos.write(buffer, 0, len);  
        }  
        bos.close();  
        return bos.toByteArray();  
    } 

	public static boolean isBlankOrEmpty(String string){
		return string==null || string.trim().length() == 0;
	}
	public static String getId() {
		Long t=new Date().getTime();
		Random ra =new Random();
		int a=ra.nextInt(1000000);
		return t.toString()+a;
	}
	public static void calculateVariance(List<Analy> alist,List<Analypei> list) {
		for(Analypei a:list) {
			for(int i=0;i<a.getPlurlist().size();i++) {
				for(Analy al:alist) {
					PlurlModel pm=a.getPlurlist().get(i);
					if(al.getPeiNo()==i&&pm.getResult()==pm.getSpf()) {
						int wn=al.getWinningNum();//记录中奖个数
						al.setWinningNum(wn+1);
					}
				}
			}
		}
	}
	
	
	public static void main(String[] args) {
		double w=new BigDecimal(1502).doubleValue();
		double avg=new BigDecimal(w/1908).setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
		System.out.println(avg);
	}
}
