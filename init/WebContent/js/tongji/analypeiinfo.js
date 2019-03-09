layui.config({
	base : "js/"
}).use(['form','layer','jquery','laypage','table'],function(){
	var form = layui.form,
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		laypage = layui.laypage,
		table = layui.table,
		$ = layui.$;

//==================一个table实例================================
	  table.render({
	    elem: '#demo',//渲染对象
	    height: 620,
	    url: 'getAnalypei', //数据接口
	    where: {key: ''},//给后台传的参数
	    id: 'testReload',
	    page: true, //开启分页
	    limit: 60,//每页显示信息条数
	    loading:true,
	    done:function(res){
	    	var d=res.alist;
	        var arr=new Array();
	        arr.push('<tr><td align="center">合计</td>');
	        for(var i=0;i<d.length;i++){
	        	arr.push('<td align="center">'+d[i].probability+'</td>');
	        }
	        arr.push('</tr>');
	        var str=arr.join("");
	        $('thead').append(str);
	   },
	    cols: [[ //表头
		      {field: 'expect', title: '期数',width:105}
		      ,{field: 'v10', title: '11', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[0];
		    		  var list=d.plurlist;
		    		  if(v.spf==v.result){
		    			  return '<span title="'+v.value+'"  class="layui-badge layui-bg-red">'+v.ordernum+'-'+v.spf+'</span>';
		    		  }else{
		    			  var m=null;
		    			  
		    			  for(var i=0;i<list.length;i++){
		    				  if(list[i].ordernum==v.ordernum&&list[i].result==list[i].spf){
		    					 m=list[i];
		    					 break;
		    				  }
		    			  }
		    			  if(m==null){
			    			  return '<span title="'+v.value+'">'+v.ordernum+'['+v.spf+']-未</span>'; 
		    			  }else{
			    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+m.pei+'-'+m.spf+'['+m.value+']</span>'; 
		    			  }
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v11', title: '12', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[1];
		    		  var list=d.plurlist;
		    		  if(v.spf==v.result){
		    			  return '<span title="'+v.value+'"  class="layui-badge layui-bg-red">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  var m=null;
		    			  
		    			  for(var i=0;i<list.length;i++){
		    				  if(list[i].ordernum==v.ordernum&&list[i].result==list[i].spf){
		    					 m=list[i];
		    					 break;
		    				  }
		    			  }
		    			  if(m==null){
			    			   return '<span title="'+v.value+'">'+v.ordernum+'['+v.spf+']-未</span>'; 
		    			  }else{
			    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+m.pei+'-'+m.spf+'['+m.value+']</span>'; 
		    			  }
		    		  }
		    		 
		    		  }
		      } 
		      ,{field: 'v12', title: '13', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[2];
		    		  var list=d.plurlist;
		    		  if(v.spf==v.result){
		    			  return '<span title="'+v.value+'"  class="layui-badge layui-bg-red">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  var m=null;
		    			  
		    			  for(var i=0;i<list.length;i++){
		    				  if(list[i].ordernum==v.ordernum&&list[i].result==list[i].spf){
		    					 m=list[i];
		    					 break;
		    				  }
		    			  }
		    			  if(m==null){
			    			   return '<span title="'+v.value+'">'+v.ordernum+'['+v.spf+']-未</span>'; 
		    			  }else{
			    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+m.pei+'-'+m.spf+'['+m.value+']</span>'; 
		    			  }
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v13', title: '14', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[3];
		    		  var list=d.plurlist;
		    		  if(v.spf==v.result){
		    			  return '<span title="'+v.value+'"  class="layui-badge layui-bg-red">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  var m=null;
		    			  
		    			  for(var i=0;i<list.length;i++){
		    				  if(list[i].ordernum==v.ordernum&&list[i].result==list[i].spf){
		    					 m=list[i];
		    					 break;
		    				  }
		    			  }
		    			  if(m==null){
			    			   return '<span title="'+v.value+'">'+v.ordernum+'['+v.spf+']-未</span>'; 
		    			  }else{
			    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+m.pei+'-'+m.spf+'['+m.value+']</span>'; 
		    			  }
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v14', title: '15', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[4];
		    		  var list=d.plurlist;
		    		  if(v.spf==v.result){
		    			  return '<span title="'+v.value+'"  class="layui-badge layui-bg-red">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  var m=null;
		    			  
		    			  for(var i=0;i<list.length;i++){
		    				  if(list[i].ordernum==v.ordernum&&list[i].result==list[i].spf){
		    					 m=list[i];
		    					 break;
		    				  }
		    			  }
		    			  if(m==null){
			    			   return '<span title="'+v.value+'">'+v.ordernum+'['+v.spf+']-未</span>'; 
		    			  }else{
			    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+m.pei+'-'+m.spf+'['+m.value+']</span>'; 
		    			  }
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v15', title: '16', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[5];
		    		  var list=d.plurlist;
		    		  if(v.spf==v.result){
		    			  return '<span title="'+v.value+'"  class="layui-badge layui-bg-red">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  var m=null;
		    			  
		    			  for(var i=0;i<list.length;i++){
		    				  if(list[i].ordernum==v.ordernum&&list[i].result==list[i].spf){
		    					 m=list[i];
		    					 break;
		    				  }
		    			  }
		    			  if(m==null){
			    			   return '<span title="'+v.value+'">'+v.ordernum+'['+v.spf+']-未</span>'; 
		    			  }else{
			    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+m.pei+'-'+m.spf+'['+m.value+']</span>'; 
		    			  }
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v16', title: '17', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[6];
		    		  var list=d.plurlist;
		    		  if(v.spf==v.result){
		    			  return '<span title="'+v.value+'"  class="layui-badge layui-bg-red">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  var m=null;
		    			  
		    			  for(var i=0;i<list.length;i++){
		    				  if(list[i].ordernum==v.ordernum&&list[i].result==list[i].spf){
		    					 m=list[i];
		    					 break;
		    				  }
		    			  }
		    			  if(m==null){
			    			   return '<span title="'+v.value+'">'+v.ordernum+'['+v.spf+']-未</span>'; 
		    			  }else{
			    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+m.pei+'-'+m.spf+'['+m.value+']</span>'; 
		    			  }
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v17', title: '18', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[7];
		    		  var list=d.plurlist;
		    		  if(v.spf==v.result){
		    			  return '<span title="'+v.value+'"  class="layui-badge layui-bg-red">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  var m=null;
		    			  
		    			  for(var i=0;i<list.length;i++){
		    				  if(list[i].ordernum==v.ordernum&&list[i].result==list[i].spf){
		    					 m=list[i];
		    					 break;
		    				  }
		    			  }
		    			  if(m==null){
			    			   return '<span title="'+v.value+'">'+v.ordernum+'['+v.spf+']-未</span>'; 
		    			  }else{
			    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+m.pei+'-'+m.spf+'['+m.value+']</span>'; 
		    			  }
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v18', title: '19', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[8];
		    		  var list=d.plurlist;
		    		  if(v.spf==v.result){
		    			  return '<span title="'+v.value+'"  class="layui-badge layui-bg-red">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  var m=null;
		    			  
		    			  for(var i=0;i<list.length;i++){
		    				  if(list[i].ordernum==v.ordernum&&list[i].result==list[i].spf){
		    					 m=list[i];
		    					 break;
		    				  }
		    			  }
		    			  if(m==null){
			    			   return '<span title="'+v.value+'">'+v.ordernum+'['+v.spf+']-未</span>'; 
		    			  }else{
			    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+m.pei+'-'+m.spf+'['+m.value+']</span>'; 
		    			  }
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v19', title: '110', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[9];
		    		  var list=d.plurlist;
		    		  if(v.spf==v.result){
		    			  return '<span title="'+v.value+'"  class="layui-badge layui-bg-red">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  var m=null;
		    			  
		    			  for(var i=0;i<list.length;i++){
		    				  if(list[i].ordernum==v.ordernum&&list[i].result==list[i].spf){
		    					 m=list[i];
		    					 break;
		    				  }
		    			  }
		    			  if(m==null){
			    			   return '<span title="'+v.value+'">'+v.ordernum+'['+v.spf+']-未</span>'; 
		    			  }else{
			    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+m.pei+'-'+m.spf+'['+m.value+']</span>'; 
		    			  }
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v110', title: '111', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[10];
		    		  var list=d.plurlist;
		    		  if(v.spf==v.result){
		    			  return '<span title="'+v.value+'"  class="layui-badge layui-bg-red">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  var m=null;
		    			  
		    			  for(var i=0;i<list.length;i++){
		    				  if(list[i].ordernum==v.ordernum&&list[i].result==list[i].spf){
		    					 m=list[i];
		    					 break;
		    				  }
		    			  }
		    			  if(m==null){
			    			   return '<span title="'+v.value+'">'+v.ordernum+'['+v.spf+']-未</span>'; 
		    			  }else{
			    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+m.pei+'-'+m.spf+'['+m.value+']</span>'; 
		    			  }
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v111', title: '112', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[11];
		    		  var list=d.plurlist;
		    		  if(v.spf==v.result){
		    			  return '<span title="'+v.value+'"  class="layui-badge layui-bg-red">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  var m=null;
		    			  
		    			  for(var i=0;i<list.length;i++){
		    				  if(list[i].ordernum==v.ordernum&&list[i].result==list[i].spf){
		    					 m=list[i];
		    					 break;
		    				  }
		    			  }
		    			  if(m==null){
			    			   return '<span title="'+v.value+'">'+v.ordernum+'['+v.spf+']-未</span>'; 
		    			  }else{
			    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+m.pei+'-'+m.spf+'['+m.value+']</span>'; 
		    			  }
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v112', title: '113', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[12];
		    		  var list=d.plurlist;
		    		  if(v.spf==v.result){
		    			  return '<span title="'+v.value+'"  class="layui-badge layui-bg-red">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  var m=null;
		    			  
		    			  for(var i=0;i<list.length;i++){
		    				  if(list[i].ordernum==v.ordernum&&list[i].result==list[i].spf){
		    					 m=list[i];
		    					 break;
		    				  }
		    			  }
		    			  if(m==null){
			    			   return '<span title="'+v.value+'">'+v.ordernum+'['+v.spf+']-未</span>'; 
		    			  }else{
			    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+m.pei+'-'+m.spf+'['+m.value+']</span>'; 
		    			  }
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v113', title: '114', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[13];
		    		  var list=d.plurlist;
		    		  if(v.spf==v.result){
		    			  return '<span title="'+v.value+'"  class="layui-badge layui-bg-red">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  var m=null;
		    			  
		    			  for(var i=0;i<list.length;i++){
		    				  if(list[i].ordernum==v.ordernum&&list[i].result==list[i].spf){
		    					 m=list[i];
		    					 break;
		    				  }
		    			  }
		    			  if(m==null){
			    			   return '<span title="'+v.value+'">'+v.ordernum+'['+v.spf+']-未</span>'; 
		    			  }else{
			    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+m.pei+'-'+m.spf+'['+m.value+']</span>'; 
		    			  }
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v20', title: '21', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[14];
		    		  var list=d.plurlist;
		    		  if(v.spf==v.result){
		    			   return '<span title="'+v.value+'"  class="layui-badge layui-bg-green">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  var m=null;
		    			  
		    			  for(var i=0;i<list.length;i++){
		    				  if(list[i].ordernum==v.ordernum&&list[i].result==list[i].spf){
		    					 m=list[i];
		    					 break;
		    				  }
		    			  }
		    			  if(m==null){
			    			   return '<span title="'+v.value+'">'+v.ordernum+'['+v.spf+']-未</span>'; 
		    			  }else{
			    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+m.pei+'-'+m.spf+'['+m.value+']</span>'; 
		    			  }
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v21', title: '22', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[15];
		    		  var list=d.plurlist;
		    		  if(v.spf==v.result){
		    			   return '<span title="'+v.value+'"  class="layui-badge layui-bg-green">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  var m=null;
		    			  
		    			  for(var i=0;i<list.length;i++){
		    				  if(list[i].ordernum==v.ordernum&&list[i].result==list[i].spf){
		    					 m=list[i];
		    					 break;
		    				  }
		    			  }
		    			  if(m==null){
			    			   return '<span title="'+v.value+'">'+v.ordernum+'['+v.spf+']-未</span>'; 
		    			  }else{
			    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+m.pei+'-'+m.spf+'['+m.value+']</span>'; 
		    			  }
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v22', title: '23', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[16];
		    		  var list=d.plurlist;
		    		  if(v.spf==v.result){
		    			   return '<span title="'+v.value+'"  class="layui-badge layui-bg-green">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  var m=null;
		    			  
		    			  for(var i=0;i<list.length;i++){
		    				  if(list[i].ordernum==v.ordernum&&list[i].result==list[i].spf){
		    					 m=list[i];
		    					 break;
		    				  }
		    			  }
		    			  if(m==null){
			    			   return '<span title="'+v.value+'">'+v.ordernum+'['+v.spf+']-未</span>'; 
		    			  }else{
			    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+m.pei+'-'+m.spf+'['+m.value+']</span>'; 
		    			  }
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v23', title: '24', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[17];
		    		  var list=d.plurlist;
		    		  if(v.spf==v.result){
		    			   return '<span title="'+v.value+'"  class="layui-badge layui-bg-green">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  var m=null;
		    			  
		    			  for(var i=0;i<list.length;i++){
		    				  if(list[i].ordernum==v.ordernum&&list[i].result==list[i].spf){
		    					 m=list[i];
		    					 break;
		    				  }
		    			  }
		    			  if(m==null){
			    			   return '<span title="'+v.value+'">'+v.ordernum+'['+v.spf+']-未</span>'; 
		    			  }else{
			    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+m.pei+'-'+m.spf+'['+m.value+']</span>'; 
		    			  }
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v24', title: '25', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[18];
		    		  var list=d.plurlist;
		    		  if(v.spf==v.result){
		    			   return '<span title="'+v.value+'"  class="layui-badge layui-bg-green">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  var m=null;
		    			  
		    			  for(var i=0;i<list.length;i++){
		    				  if(list[i].ordernum==v.ordernum&&list[i].result==list[i].spf){
		    					 m=list[i];
		    					 break;
		    				  }
		    			  }
		    			  if(m==null){
			    			   return '<span title="'+v.value+'">'+v.ordernum+'['+v.spf+']-未</span>'; 
		    			  }else{
			    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+m.pei+'-'+m.spf+'['+m.value+']</span>'; 
		    			  }
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v25', title: '26', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[19];
		    		  var list=d.plurlist;
		    		  if(v.spf==v.result){
		    			   return '<span title="'+v.value+'"  class="layui-badge layui-bg-green">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  var m=null;
		    			  
		    			  for(var i=0;i<list.length;i++){
		    				  if(list[i].ordernum==v.ordernum&&list[i].result==list[i].spf){
		    					 m=list[i];
		    					 break;
		    				  }
		    			  }
		    			  if(m==null){
			    			   return '<span title="'+v.value+'">'+v.ordernum+'['+v.spf+']-未</span>'; 
		    			  }else{
			    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+m.pei+'-'+m.spf+'['+m.value+']</span>'; 
		    			  }
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v26', title: '27', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[20];
		    		  if(v.spf==v.result){
		    			   return '<span title="'+v.value+'"  class="layui-badge layui-bg-green">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+v.spf+'</span>';   
		    		  }
		    		 
		    		  }
		      },{field: 'v27', title: '28', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[21];
		    		  if(v.spf==v.result){
		    			   return '<span title="'+v.value+'"  class="layui-badge layui-bg-green">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+v.spf+'</span>';   
		    		  }
		    		 
		    		  }
		      },{field: 'v28', title: '29', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[22];
		    		  if(v.spf==v.result){
		    			   return '<span title="'+v.value+'"  class="layui-badge layui-bg-green">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+v.spf+'</span>';   
		    		  }
		    		 
		    		  }
		      },{field: 'v29', title: '210', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[23];
		    		  if(v.spf==v.result){
		    			   return '<span title="'+v.value+'"  class="layui-badge layui-bg-green">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+v.spf+'</span>';   
		    		  }
		    		 
		    		  }
		      },{field: 'v210', title: '211', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[24];
		    		  if(v.spf==v.result){
		    			   return '<span title="'+v.value+'"  class="layui-badge layui-bg-green">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+v.spf+'</span>';   
		    		  }
		    		 
		    		  }
		      },{field: 'v211', title: '212', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[25];
		    		  if(v.spf==v.result){
		    			   return '<span title="'+v.value+'"  class="layui-badge layui-bg-green">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+v.spf+'</span>';   
		    		  }
		    		 
		    		  }
		      },{field: 'v212', title: '213', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[26];
		    		  if(v.spf==v.result){
		    			   return '<span title="'+v.value+'"  class="layui-badge layui-bg-green">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+v.spf+'</span>';   
		    		  }
		    		 
		    		  }
		      },{field: 'v213', title: '214', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[27];
		    		  if(v.spf==v.result){
		    			   return '<span title="'+v.value+'"  class="layui-badge layui-bg-green">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+v.spf+'</span>';   
		    		  }
		    		 
		    		  }
		      },{field: 'v31', title: '31', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[28];
		    		  if(v.spf==v.result){
		    			   return '<span title="'+v.value+'"  class="layui-badge layui-bg-green">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+v.spf+'</span>';   
		    		  }
		    		 
		    		  }
		      },{field: 'v32', title: '32', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[29];
		    		  if(v.spf==v.result){
		    			   return '<span title="'+v.value+'"  class="layui-badge layui-bg-green">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+v.spf+'</span>';   
		    		  }
		    		 
		    		  }
		      },{field: 'v33', title: '33', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[30];
		    		  if(v.spf==v.result){
		    			   return '<span title="'+v.value+'"  class="layui-badge layui-bg-green">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+v.spf+'</span>';   
		    		  }
		    		 
		    		  }
		      },{field: 'v34', title: '34', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[31];
		    		  if(v.spf==v.result){
		    			   return '<span title="'+v.value+'"  class="layui-badge layui-bg-green">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+v.spf+'</span>';   
		    		  }
		    		 
		    		  }
		      },{field: 'v35', title: '35', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[32];
		    		  if(v.spf==v.result){
		    			   return '<span title="'+v.value+'"  class="layui-badge layui-bg-green">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+v.spf+'</span>';   
		    		  }
		    		 
		    		  }
		      },{field: 'v36', title: '36', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[33];
		    		  if(v.spf==v.result){
		    			   return '<span title="'+v.value+'"  class="layui-badge layui-bg-green">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+v.spf+'</span>';   
		    		  }
		    		 
		    		  }
		      },{field: 'v37', title: '37', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[34];
		    		  if(v.spf==v.result){
		    			   return '<span title="'+v.value+'"  class="layui-badge layui-bg-green">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+v.spf+'</span>';   
		    		  }
		    		 
		    		  }
		      },{field: 'v38', title: '38', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[35];
		    		  if(v.spf==v.result){
		    			   return '<span title="'+v.value+'"  class="layui-badge layui-bg-green">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+v.spf+'</span>';   
		    		  }
		    		 
		    		  }
		      },{field: 'v39', title: '39', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[36];
		    		  if(v.spf==v.result){
		    			   return '<span title="'+v.value+'"  class="layui-badge layui-bg-green">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+v.spf+'</span>';   
		    		  }
		    		 
		    		  }
		      },{field: 'v310', title: '310', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[37];
		    		  if(v.spf==v.result){
		    			   return '<span title="'+v.value+'"  class="layui-badge layui-bg-green">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+v.spf+'</span>';   
		    		  }
		    		 
		    		  }
		      },{field: 'v311', title: '311', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[38];
		    		  if(v.spf==v.result){
		    			   return '<span title="'+v.value+'"  class="layui-badge layui-bg-green">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+v.spf+'</span>';   
		    		  }
		    		 
		    		  }
		      },{field: 'v312', title: '312', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[39];
		    		  if(v.spf==v.result){
		    			   return '<span title="'+v.value+'"  class="layui-badge layui-bg-green">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+v.spf+'</span>';   
		    		  }
		    		 
		    		  }
		      },{field: 'v313', title: '313', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[40];
		    		  if(v.spf==v.result){
		    			   return '<span title="'+v.value+'"  class="layui-badge layui-bg-green">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+v.spf+'</span>';   
		    		  }
		    		 
		    		  }
		      },{field: 'v314', title: '314', width:105,lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[41];
		    		  if(v.spf==v.result){
		    			   return '<span title="'+v.value+'"  class="layui-badge layui-bg-green">'+v.ordernum+'-'+v.spf+'</span>'; 
		    		  }else{
		    			  return '<span title="'+v.value+'">'+v.ordernum+'-'+v.spf+'</span>';   
		    		  }
		    		 
		    		  }
		      }
		    ]]
	  });
	  
//====================点击【搜索】按钮事件===========================
  var active = {
		  reload : function() {
			  var demoReload = $('#demoReload');
							// 执行重载
			  table.reload('testReload', {
				  page : {
					  curr : 1// 重新从第 1 页开始
					  },
					  where : {//要查询的字段
						  key : demoReload.val(),
						  id : 11
						  }
					  });
			  }
  };
//绑定搜索事件
  $('.layui-btn').on('click', function() {
	  var type = $(this).data('type');
	  active[type] ? active[type].call(this) : '';
	  });
  
//=============绑定【添加】事件============================
	$(window).one("resize",function(){
		$("#add_info").click(function(){
			var index = layui.layer.open({
				title : "【添加期数信息】",
				icon: 2,
				type : 2,
				area: ['600px', '400px'],
				content : "openAddExpect",
				success : function(layero, index){
					setTimeout(function(){
						layui.layer.tips('点击此处返回列表', '.layui-layer-setwin .layui-layer-close', {
							tips: 3
						});
					},500)
				}
			})			
			layui.layer.full(index);
		})
	}).resize();
	$(window).one("resize",function(){
		$("#add_pi").click(function(){ //更新
			  layer.confirm('分析需要一些时间，确定要分析信息？',{icon:3, title:'提示信息'},function(index){
					var msgid;
					//向服务端发送删除指令
			 		 $.ajax({//异步请求返回给后台
				    	  url:'analy',
				    	  type:'POST',
				    	  data:{"id":''},
				    	  dataType:'json',
				    	  beforeSend: function(re){
				    		  msgid = top.layer.msg('数据处理中，请稍候',{icon: 16,time:false,shade:0.8});
				          },
				    	  success:function(d){
				    		  top.layer.close(msgid);
				    		  if(d.result){
				    			//弹出loading
							   		layer.closeAll("iframe");
							  	 //刷新父页面
							  	 	parent.location.reload();
				    		  }else{
				    			  top.layer.msg("操作失败！，数据库操作有问题！！");
				    		  }
					    		
				    	  },
				    	  error:function(XMLHttpRequest, textStatus, errorThrown){
				    		  top.layer.msg('操作失败！！！服务器有问题！！！！<br>请检测服务器是否启动？', {
				    		        time: 20000, //20s后自动关闭
				    		        btn: ['知道了']
				    		      });
				           }
				      });
			 //关闭当前提示
		      layer.close(index);
		    });
		  })
	}).resize();
//=======================监听工具条====================================
	table.on('tool(test)', function(obj){ //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
	  var data = obj.data; //获得当前行数据
	  var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
	  var tr = obj.tr; //获得当前行 tr 的DOM对象
	 
	  if(layEvent === 'detail'){ //查看
		  var index = layui.layer.open({
              title : data.id+"信息",
              type : 2,
              content : "openHeadPlurs?id="+data.id,
              success : function(layero, index){
                  setTimeout(function(){
                      layui.layer.tips('点击此处返回列表', '.layui-layer-setwin .layui-layer-close', {
                          tips: 3
                      });
                  },500)
              }
          })          
          layui.layer.full(index);
	  } else if(layEvent === 'del'){
		  
		  
		  
	  } else if(layEvent === 'edit'){ //更新
		  layer.confirm('确定更新此信息？',{icon:3, title:'提示信息'},function(index){
				var msgid;
				//向服务端发送删除指令
		 		 $.ajax({//异步请求返回给后台
			    	  url:'updateLoadFromUrl',
			    	  type:'POST',
			    	  data:{"id":data.id},
			    	  dataType:'json',
			    	  beforeSend: function(re){
			    		  msgid = top.layer.msg('数据处理中，请稍候',{icon: 16,time:false,shade:0.8});
			          },
			    	  success:function(d){
			    		  top.layer.close(msgid);
			    		  if(d.result){
			    			//弹出loading
						   		layer.closeAll("iframe");
						  	 //刷新父页面
						  	 	parent.location.reload();
			    		  }else{
			    			  top.layer.msg("操作失败！，数据库操作有问题！！");
			    		  }
				    		
			    	  },
			    	  error:function(XMLHttpRequest, textStatus, errorThrown){
			    		  top.layer.msg('操作失败！！！服务器有问题！！！！<br>请检测服务器是否启动？', {
			    		        time: 20000, //20s后自动关闭
			    		        btn: ['知道了']
			    		      });
			           }
			      });
		 //关闭当前提示
	      layer.close(index);
	    });
	  }
	});
})


