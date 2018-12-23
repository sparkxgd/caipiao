layui.config({
	base : "js/"
}).use(['form','layer','jquery'],function(){
	var form = layui.form,
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		$ = layui.$;
	//加载页面数据
	$.get("getForecastinfo", function(data){
		var m=data.avg;
        //执行加载数据的方法
        $("#forecast").html(m);
		form.render();//必须要再次渲染，要不然option显示不出来
	})
	
	
})


