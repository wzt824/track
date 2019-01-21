
//charts-p1
var echartsWarpcharts1= document.getElementById('pageOne');
function resizeWorldMapContainercharts1() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarpcharts1.style.width = document.getElementById('pageOne').innerWidth+'px';
    echartsWarpcharts1.style.height = document.getElementById('pageOne').innerHeight+'px';
}
resizeWorldMapContainercharts1 ();//设置容器高宽
var myChartcharts1 = echarts.init(echartsWarpcharts1);// 基于准备好的dom，初始化echarts实例


//charts-p2
var echartsWarpcharts2= document.getElementById('pageThree');
function resizeWorldMapContainercharts2() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarpcharts2.style.width = document.getElementById('pageThree').innerWidth+'px';
    echartsWarpcharts2.style.height = document.getElementById('pageThree').innerHeight+'px';
}
resizeWorldMapContainercharts2 ();//设置容器高宽
var myChartcharts2 = echarts.init(echartsWarpcharts2);// 基于准备好的dom，初始化echarts实例

//charts-p3
var echartsWarpcharts3= document.getElementById('pageFour');
function resizeWorldMapContainercharts3() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarpcharts3.style.width = document.getElementById('pageFour').innerWidth+'px';
    echartsWarpcharts3.style.height = document.getElementById('pageFour').innerHeight+'px';
}
resizeWorldMapContainercharts3 ();//设置容器高宽
var myChartcharts3 = echarts.init(echartsWarpcharts3);// 基于准备好的dom，初始化echarts实例

//charts-p4
var echartsWarpcharts4= document.getElementById('pageFive');
function resizeWorldMapContainercharts4() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarpcharts4.style.width = document.getElementById('pageFive').innerWidth+'px';
    echartsWarpcharts4.style.height = document.getElementById('pageFive').innerHeight+'px';
}
resizeWorldMapContainercharts4 ();//设置容器高宽
var myChartcharts4 = echarts.init(echartsWarpcharts4);// 基于准备好的dom，初始化echarts实例


//charts-p5
var echartsWarpcharts5= document.getElementById('pageSex');
function resizeWorldMapContainercharts5() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarpcharts5.style.width = document.getElementById('pageSex').innerWidth+'px';
    echartsWarpcharts5.style.height = document.getElementById('pageSex').innerHeight+'px';
}
resizeWorldMapContainercharts5 ();//设置容器高宽
var myChartcharts5 = echarts.init(echartsWarpcharts5);// 基于准备好的dom，初始化echarts实例


//charts-p6
var echartsWarpcharts6= document.getElementById('pageSeven');
function resizeWorldMapContainercharts6() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarpcharts6.style.width = document.getElementById('pageSeven').innerWidth+'px';
    echartsWarpcharts6.style.height = document.getElementById('pageSeven').innerHeight+'px';
}
resizeWorldMapContainercharts6 ();//设置容器高宽
var myChartcharts6 = echarts.init(echartsWarpcharts6);// 基于准备好的dom，初始化echarts实例


window.onresize = function () {//用于使chart自适应高度和宽度
    //charts-p1
    resizeWorldMapContainercharts1();//重置容器高宽
    myChartcharts1.resize();
    //charts-p2
    resizeWorldMapContainercharts2();//重置容器高宽
    myChartcharts2.resize();
    //charts-p3
    resizeWorldMapContainercharts3();//重置容器高宽
    myChartcharts3.resize();
    //charts-p4
    resizeWorldMapContainercharts4();//重置容器高宽
    myChartcharts4.resize();
    //charts-p5
    resizeWorldMapContainercharts5();//重置容器高宽
    myChartcharts5.resize();
    //charts-p6
    resizeWorldMapContainercharts6();//重置容器高宽
    myChartcharts6.resize();
};