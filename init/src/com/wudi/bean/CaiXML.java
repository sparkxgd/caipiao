package com.wudi.bean;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.dom4j.Attribute;
import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;

import com.wudi.util.StringUtil;

public class CaiXML {
	private CaiHead head;
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
		if(StringUtil.isBlankOrEmpty(result)) {
			r.setResult(-1);
		}else {
			r.setResult(Integer.valueOf(result));
		}
		
		r.setPlurlStr(plurl);
		rows.add(r);
	}
	
	
	
	
	public CaiHead getHead() {
		return head;
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
