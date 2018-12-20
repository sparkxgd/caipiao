package com.wudi.bean;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class CaiRow extends CaiHead{
	private int ordernum;
	private int result;
	private String plurlStr;
	private List<Plurl> plurls=new ArrayList<Plurl>();
	public List<Plurl> getPlurls() {
		return plurls;
	}
	public int getOrdernum() {
		return ordernum;
	}
	public void setOrdernum(int ordernum) {
		this.ordernum = ordernum;
	}
	public int getResult() {
		return result;
	}
	public void setResult(int result) {
		this.result = result;
	}
	public String getPlurlStr() {
		return plurlStr;
	}
	public void setPlurlStr(String plurl) {
		this.plurlStr = plurl;
		toPlurl();
	}
	private void toPlurl() {
		String p[]=plurlStr.split("&nbsp;");
		//比较大小
			Plurl pl3=new Plurl();
			pl3.setExpect(Integer.parseInt(super.getExpect()));
			pl3.setOrdernum(ordernum);
			pl3.setResult(result);
			pl3.setValue(Double.parseDouble(p[0]));
			pl3.setSpf(3);
			
			Plurl pl1=new Plurl();
			pl1.setExpect(Integer.parseInt(super.getExpect()));
			pl1.setOrdernum(ordernum);
			pl1.setResult(result);
			pl1.setValue(Double.parseDouble(p[1]));
			pl1.setSpf(1);
			
			Plurl pl0=new Plurl();
			pl0.setExpect(Integer.parseInt(super.getExpect()));
			pl0.setOrdernum(ordernum);
			pl0.setResult(result);
			pl0.setValue(Double.parseDouble(p[2]));
			pl0.setSpf(0);
			
			plurls.add(pl3);
			plurls.add(pl1);
			plurls.add(pl0);
	        Collections.sort(plurls, new Comparator<Plurl>(){
	            /*
	             * 返回负数表示：p1 小于p2，
	             * 返回0 表示：p1和p2相等，
	             * 返回正数表示：p1大于p2
	             */
	            public int compare(Plurl p1, Plurl p2) {
	                if(p1.getValue() > p2.getValue()){
	                    return 1;
	                }
	                if(p1.getValue() == p2.getValue()){
	                    return 0;
	                }
	                return -1;
	            }
	        });
	        
	        for(int i=0;i<plurls.size();i++) {
	        	plurls.get(i).setPei(i+1);
	        }
		}
}
