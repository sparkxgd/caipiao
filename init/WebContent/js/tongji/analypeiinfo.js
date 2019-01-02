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
	    url: 'getAnalypei', //数据接口
	    where: {key: ''},//给后台传的参数
	    page: true, //开启分页
	    limit: 14,//每页显示信息条数
	    id: 'testReload',
	    cols: [[ //表头
		      {field: 'expect', title: '期数'}
		      ,{field: 'v10', title: '11', lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[0];
		    		  if(v.result==v.spf){
		    			  return '<span style="background-color: red;color:yellow">'+v.value+'</span>'; 
		    		  }else{
		    			  return '<span>'+v.value+'</span>'; 
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v11', title: '12', lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[1];
		    		  if(v.result==v.spf){
		    			  return '<span style="background-color: red;color:yellow">'+v.value+'</span>'; 
		    		  }else{
		    			  return '<span>'+v.value+'</span>'; 
		    		  }
		    		 
		    		  }
		      } 
		      ,{field: 'v12', title: '13', lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[2];
		    		  if(v.result==v.spf){
		    			  return '<span style="background-color: red;color:yellow">'+v.value+'</span>'; 
		    		  }else{
		    			  return '<span>'+v.value+'</span>'; 
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v13', title: '14', lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[3];
		    		  if(v.result==v.spf){
		    			  return '<span style="background-color: red;color:yellow">'+v.value+'</span>'; 
		    		  }else{
		    			  return '<span>'+v.value+'</span>'; 
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v14', title: '15', lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[4];
		    		  if(v.result==v.spf){
		    			  return '<span style="background-color: red;color:yellow">'+v.value+'</span>'; 
		    		  }else{
		    			  return '<span>'+v.value+'</span>'; 
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v15', title: '16', lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[5];
		    		  if(v.result==v.spf){
		    			  return '<span style="background-color: red;color:yellow">'+v.value+'</span>'; 
		    		  }else{
		    			  return '<span>'+v.value+'</span>'; 
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v16', title: '17', lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[6];
		    		  if(v.result==v.spf){
		    			  return '<span style="background-color: red;color:yellow">'+v.value+'</span>'; 
		    		  }else{
		    			  return '<span>'+v.value+'</span>'; 
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v17', title: '18', lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[7];
		    		  if(v.result==v.spf){
		    			  return '<span style="background-color: red;color:yellow">'+v.value+'</span>'; 
		    		  }else{
		    			  return '<span>'+v.value+'</span>'; 
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v18', title: '19', lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[8];
		    		  if(v.result==v.spf){
		    			  return '<span style="background-color: red;color:yellow">'+v.value+'</span>'; 
		    		  }else{
		    			  return '<span>'+v.value+'</span>'; 
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v19', title: '110', lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[9];
		    		  if(v.result==v.spf){
		    			  return '<span style="background-color: red;color:yellow">'+v.value+'</span>'; 
		    		  }else{
		    			  return '<span>'+v.value+'</span>'; 
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v110', title: '111', lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[10];
		    		  if(v.result==v.spf){
		    			  return '<span style="background-color: red;color:yellow">'+v.value+'</span>'; 
		    		  }else{
		    			  return '<span>'+v.value+'</span>'; 
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v111', title: '112', lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[11];
		    		  if(v.result==v.spf){
		    			  return '<span style="background-color: red;color:yellow">'+v.value+'</span>'; 
		    		  }else{
		    			  return '<span>'+v.value+'</span>'; 
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v112', title: '113', lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[12];
		    		  if(v.result==v.spf){
		    			  return '<span style="background-color: red;color:yellow">'+v.value+'</span>'; 
		    		  }else{
		    			  return '<span>'+v.value+'</span>'; 
		    		  }
		    		 
		    		  }
		      }
		      ,{field: 'v113', title: '114', lign:'center', 
		    	  templet: function(d){
		    		  var v=d.plurlist[13];
		    		  if(v.result==v.spf){
		    			  return '<span style="background-color: red;color:yellow">'+v.value+'</span>'; 
		    		  }else{
		    			  return '<span>'+v.value+'</span>'; 
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


