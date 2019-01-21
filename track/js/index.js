//page3-1
var echartsWarp= document.getElementById('pageLeftTop');
function resizeWorldMapContainer() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp.style.width = document.getElementById('pageLeftTop').innerWidth+'px';
    echartsWarp.style.height = document.getElementById('pageLeftTop').innerHeight+'px';
}
resizeWorldMapContainer ();//设置容器高宽
var myChart = echarts.init(echartsWarp);// 基于准备好的dom，初始化echarts实例

//page3-2
var echartsWarp2= document.getElementById('pageRightTop');
function resizeWorldMapContainer2() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp2.style.width = document.getElementById('pageRightTop').innerWidth+'px';
    echartsWarp2.style.height = document.getElementById('pageRightTop').innerHeight+'px';
}
resizeWorldMapContainer ();//设置容器高宽
var myChart2 = echarts.init(echartsWarp2);// 基于准备好的dom，初始化echarts实例

//page4-1
var echartsWarpFour= document.getElementById('pageLeftTopFour');
function resizeWorldMapContainerFour() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarpFour.style.width = document.getElementById('pageLeftTopFour').innerWidth+'px';
    echartsWarpFour.style.height = document.getElementById('pageLeftTopFour').innerHeight+'px';
}
resizeWorldMapContainerFour ();//设置容器高宽
var myChartFour = echarts.init(echartsWarpFour);// 基于准备好的dom，初始化echarts实例

//page4-2
var echartsWarpFour2= document.getElementById('pageRightTopFour');
function resizeWorldMapContainerFour2() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarpFour2.style.width = document.getElementById('pageRightTopFour').innerWidth+'px';
    echartsWarpFour2.style.height = document.getElementById('pageRightTopFour').innerHeight+'px';
}
resizeWorldMapContainerFour2 ();//设置容器高宽
var myChartFour2 = echarts.init(echartsWarpFour2);// 基于准备好的dom，初始化echarts实例


window.onresize = function () {//用于使chart自适应高度和宽度
    //page3-1
    resizeWorldMapContainer();//重置容器高宽
    myChart.resize();
    //page3-2
    resizeWorldMapContainer2();//重置容器高宽
    myChart2.resize();
    //page4-1
    resizeWorldMapContainerFour();//重置容器高宽
    myChartFour.resize();
    //page4-1
    resizeWorldMapContainerFour2();//重置容器高宽
    myChartFour2.resize();
};