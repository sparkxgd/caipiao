package com.wudi.bean;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.dom4j.Attribute;
import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;

import com.wudi.util.MyUtil;

public class CaiXML {
	private List<CaiRow> rows=new ArrayList<>();
	
	
	public CaiXML(String expect) {
		SAXReader reader = new SAXReader();
		try {
			Document document = reader.read(new File("./WebContent/downfile/"+expect+".xml"));
			 //获取文档根节点
			 Element root = document.getRootElement();
			List<Element> list = root.elements() ;
			Element head=null;
			for (Element el:list){
				if("head".equals(el.getName())) {
					head=el;
				}else if("row".equals(el.getName())) {
					setRow(el,head);
				}
			 }
		} catch (DocumentException e) {
			e.printStackTrace();
		}
	}
	
	private void setRow(Element row,Element head) {
		Attribute ordernumA= row.attribute("ordernum");
		String ordernum=ordernumA.getValue();
		Attribute resultA= row.attribute("result");
		String result=resultA.getValue();
		Attribute plurlA=row.attribute("plurl");
		String plurl=plurlA.getValue();
		CaiRow r=new CaiRow();
		
		Attribute expectA= head.attribute("expect");
		String expect=expectA.getValue();
		Attribute updatetimeA= head.attribute("updatetime");
		String updatetime=updatetimeA.getValue();
		Attribute fsendtimeA= head.attribute("fsendtime");
		String fsendtime=fsendtimeA.getValue();
		Attribute shenheprocessA= head.attribute("shenheprocess");
		String shenheprocess=shenheprocessA.getValue();
		
		r.setExpect(expect);
		r.setFsendtime(fsendtime);
		r.setShenheprocess(shenheprocess);
		r.setUpdatetime(updatetime);
		r.setOrdernum(Integer.valueOf(ordernum));
		r.setActive(1);//默认已经开奖
		if(MyUtil.isBlankOrEmpty(result)) {
			r.setResult(-1);//暂未开奖
			r.setActive(0);
		}else if("*".equals(result)){
			r.setResult(-2);//异常开奖，已经放弃或改期了
		}else {
			r.setResult(Integer.parseInt(result));//暂未开奖
		}
		
		r.setPlurlStr(plurl);
		rows.add(r);
	}
	
	
	
	public CaiHead getHead() {
		return rows.get(0);
	}

	public List<CaiRow> getRows() {
		return rows;
	}
	
	public List<Plurl> getPlurls() {
		List<Plurl> list=new ArrayList<>();
		for(CaiRow r:rows) {
			for(Plurl p:r.getPlurls()) {
				list.add(p);
			}
		}
		return list;
	}

}
