layui.config({
	base : "js/"
}).use(['form','element','layer','jquery'],function(){
	var form = layui.form,
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		element = layui.element,
		$ = layui.jquery;
 // ///////////////////////////////
 // 基于准备好的dom，初始化echarts实例
         var myChart = echarts.init(document.getElementById('tubiao'));
         var option = {
         	    title : {
        	        text: '胜负彩平均赔率',
        	        subtext: '2000年-2019年'
        	    },
        	    tooltip : {
        	        trigger: 'axis'
        	    },
        	    dataZoom: {
        	        show: true,
        	        start : 93,
        	        end : 100
        	    },
        	    legend: {
        	        data:['赔率平均值']
        	    },
        	    toolbox: {
        	        show : true,
        	        feature : {
        	            mark : {show: true},
        	            dataView : {show: true, readOnly: false},
        	            magicType : {show: true, type: ['line', 'bar']},
        	            restore : {show: true},
        	            saveAsImage : {show: true}
        	        }
        	    },
        	    calculable : true,
        	    xAxis : [
        	        {
        	            type : 'category',
        	            data : []
        	        }
        	    ],
        	    yAxis : [
        	        {
        	            type : 'value'
        	        }
        	    ],
        	    series : [
        	        {
        	            name:'赔率平均值',
        	            type:'line',
        	            data:[],
        	            markPoint : {
        	                data : [
        	                    {type : 'max', name: '最大值'},
        	                    {type : 'min', name: '最小值'}
        	                ]
        	            },
        	            markLine : {
        	                data : [
        	                    {type : 'average', name: '平均值'}
        	                ]
        	            }
        	        }
        	    ]
        	};
         // 使用刚指定的配置项和数据显示图表。
 myChart.setOption(option);
// 异步加载数据
 $.get('getanlyavgvalueinfoData').done(function (data) {
		 var names = data.names;
		 var data = data.data;
     // 填入数据
     myChart.setOption({
         xAxis: {
             data: names
         },
         series: [
 	        {
	            name:'赔率平均值',
	            data:data
	        }
	    ]
     });
     });
////////////////////////////////////
 var myChart1 = echarts.init(document.getElementById('tubiao1'));
 var option1 = {
 	    title : {
	        text: '胜负彩一赔个数',
	        subtext: '2000年-2019年'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    dataZoom: {
	        show: true,
	        start : 93,
	        end : 100
	    },
	    legend: {
	        data:['一赔个数']
	    },
	    toolbox: {
	        show : true,
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            magicType : {show: true, type: ['line', 'bar']},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            data : []
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'一赔个数',
	            type:'line',
	            data:[],
	            markPoint : {
	                data : [
	                    {type : 'max', name: '最大值'},
	                    {type : 'min', name: '最小值'}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name: '平均值'}
	                ]
	            }
	        }
	    ]
	};
 // 使用刚指定的配置项和数据显示图表。
myChart1.setOption(option1);
//异步加载数据
$.get('getanlyavgvalueinfoData1').done(function (data) {
 var names = data.names;
 var data = data.data;
// 填入数据
myChart1.setOption({
 xAxis: {
     data: names
 },
 series: [
     {
        name:'一赔个数',
        data:data
    }
]
});
});
 ///////////////////////////////
var myChart2 = echarts.init(document.getElementById('tubiao2'));
var option2 = {
	    title : {
	        text: '胜负彩二赔个数',
	        subtext: '2000年-2019年'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    dataZoom: {
	        show: true,
	        start : 93,
	        end : 100
	    },
	    legend: {
	        data:['二赔个数']
	    },
	    toolbox: {
	        show : true,
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            magicType : {show: true, type: ['line', 'bar']},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            data : []
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'二赔个数',
	            type:'line',
	            data:[],
	            markPoint : {
	                data : [
	                    {type : 'max', name: '最大值'},
	                    {type : 'min', name: '最小值'}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name: '平均值'}
	                ]
	            }
	        }
	    ]
	};
// 使用刚指定的配置项和数据显示图表。
myChart2.setOption(option2);
//异步加载数据
$.get('getanlyavgvalueinfoData2').done(function (data) {
var names = data.names;
var data = data.data;
//填入数据
myChart2.setOption({
xAxis: {
    data: names
},
series: [
    {
       name:'二赔个数',
       data:data
   }
]
});
});
///////////////////////////////
var myChart3 = echarts.init(document.getElementById('tubiao3'));
var option3 = {
	    title : {
	        text: '胜负彩三赔个数',
	        subtext: '2000年-2019年'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    dataZoom: {
	        show: true,
	        start : 93,
	        end : 100
	    },
	    legend: {
	        data:['三赔个数']
	    },
	    toolbox: {
	        show : true,
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            magicType : {show: true, type: ['line', 'bar']},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            data : []
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'三赔个数',
	            type:'line',
	            data:[],
	            markPoint : {
	                data : [
	                    {type : 'max', name: '最大值'},
	                    {type : 'min', name: '最小值'}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name: '平均值'}
	                ]
	            }
	        }
	    ]
	};
// 使用刚指定的配置项和数据显示图表。
myChart3.setOption(option3);
//异步加载数据
$.get('getanlyavgvalueinfoData3').done(function (data) {
var names = data.names;
var data = data.data;
//填入数据
myChart3.setOption({
xAxis: {
    data: names
},
series: [
    {
       name:'三赔个数',
       data:data
   }
]
});
});
 
 
 
 })


