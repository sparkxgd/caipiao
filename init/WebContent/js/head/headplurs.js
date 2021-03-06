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
	    url: 'getHeadPlursList', //数据接口
	    where: {key: '',expect:$('#expect').val()},//给后台传的参数
	    page: true, //开启分页
	    limit: 42,//每页显示信息条数
	    id: 'testReload',
	    cols: [[ //表头
		      {field: 'expect', title: '期数'}
		      ,{field: 'ordernum', title: '场次'} 
		      ,{field: 'result', title: '开奖结果'}
		      ,{field: 'value', title: '赔率', lign:'center', 
		    	  templet: function(d){
		    		  if(d.result==d.spf){
		    			  return '<span class="layui-badge layui-bg-red">'+d.value+'</span>';
		    		  }else{
		    			  return '<span>'+d.value+'</span>'; 
		    		  }
		    		  }
		      }
		      ,{field: 'spf', title: '胜平负'}
		      ,{field: 'pei', title: '赔数'}
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
						  expect :$('#expect').val()
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
		$(".add_btn").click(function(){
			
		})
	}).resize();
  
//=======================监听工具条====================================
	table.on('tool(test)', function(obj){ //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
	  var data = obj.data; //获得当前行数据
	  var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
	  var tr = obj.tr; //获得当前行 tr 的DOM对象
	 
	  if(layEvent === 'detail'){ //查看
		  
	  } else if(layEvent === 'del'){
		  
	  } else if(layEvent === 'edit'){ //编辑
		  var index = layui.layer.open({
              title : "修改信息",
              type : 2,
              content : "openNavsEdit?id="+data.id,
              success : function(layero, index){
                  setTimeout(function(){
                      layui.layer.tips('点击此处返回列表', '.layui-layer-setwin .layui-layer-close', {
                          tips: 3
                      });
                  },500)
              }
          })          
          layui.layer.full(index);
	  }
	});
})


