layui.config({
	base : "js/"
}).use(['form','layer','jquery'],function(){
	var form = layui.form,
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		$ = layui.$;

//==================一个table实例================================
	$.get("getAnalypeitwoData",
		function(data){
		var list=data.list;
		var arr=new Array();
		for(var j=0;j<list.length;j++){
			var d=list[j].plurlist;
			arr.push("<fieldset class='layui-elem-field layui-field-title' style='margin-top: 30px;'>");
			arr.push("<legend>赔率");
			arr.push(1.0+(j*0.1));
			arr.push("--");
			arr.push(1.099+(j*0.1));
			arr.push("</legend></fieldset>");
			arr.push("<blockquote class='layui-elem-quote layui-quote-nm'>");
			arr.push("<div class='layui-anim'>"+list[j].chance+"</div>");
			
			  var k=0;//从第一个中连续计数，直到不中位置，重置为0，又进行下一轮计数
		        for(var i=0;i<d.length;i++){
		        	
		        	if(d[i].result==d[i].spf){
		        		k++;
		        		arr.push('<span class="layui-badge" title="'+d[i].value+'第'+d[i].ordernum+'场，胜平负：'+d[i].spf+'，开奖：'+d[i].result+',赔：'+d[i].pei+'">'+d[i].expect+'['+k+']</span>');
		        	}else{
		        		k=0;
		        		arr.push('<span class="layui-badge layui-bg-cyan" title="'+d[i].value+'第'+d[i].ordernum+'场，胜平负：'+d[i].spf+'，开奖：'+d[i].result+',赔：'+d[i].pei+'">'+d[i].expect+'</span>');
		        	}
		        	if(i>200){
		        		break;
		        	}
		        }
		        arr.push("</blockquote>");
		}
		var str=arr.join("");
        $('#mydiv').append(str);
		form.render();
		}
	)

	
})


