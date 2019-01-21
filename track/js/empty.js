
//charts-E1
var pageEm1= document.getElementById('pageEmpOneLeft');
function change1() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    pageEm1.style.width = document.getElementById('pageEmpOneLeft').innerWidth+'px';
    pageEm1.style.height = document.getElementById('pageEmpOneLeft').innerHeight+'px';
}
change1 ();//设置容器高宽
var myChart1 = echarts.init(pageEm1);// 基于准备好的dom，初始化echarts实例

//charts-E2
var pageEm2= document.getElementById('pageEmpOneRight');
function change2() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    pageEm2.style.width = document.getElementById('pageEmpOneRight').innerWidth+'px';
    pageEm2.style.height = document.getElementById('pageEmpOneRight').innerHeight+'px';
}
change2 ();//设置容器高宽
var myChart2 = echarts.init(pageEm2);// 基于准备好的dom，初始化echarts实例

//charts-E3
var pageEm3= document.getElementById('pageEmpTwoLeft');
function change3() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    pageEm3.style.width = document.getElementById('pageEmpTwoLeft').innerWidth+'px';
    pageEm3.style.height = document.getElementById('pageEmpTwoLeft').innerHeight+'px';
}
change3 ();//设置容器高宽
var myChart3 = echarts.init(pageEm3);// 基于准备好的dom，初始化echarts实例

//charts-E4
var pageEm4= document.getElementById('pageEmpTwoRight');
function change4() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    pageEm4.style.width = document.getElementById('pageEmpTwoRight').innerWidth+'px';
    pageEm4.style.height = document.getElementById('pageEmpTwoRight').innerHeight+'px';
}
change4 ();//设置容器高宽
var myChart4 = echarts.init(pageEm4);// 基于准备好的dom，初始化echarts实例
//charts-E5
var pageEm5= document.getElementById('pageEmpThreeLeft');
function change5() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    pageEm5.style.width = document.getElementById('pageEmpThreeLeft').innerWidth+'px';
    pageEm5.style.height = document.getElementById('pageEmpThreeLeft').innerHeight+'px';
}
change5 ();//设置容器高宽
var myChart5 = echarts.init(pageEm5);// 基于准备好的dom，初始化echarts实例

//charts-E6
var pageEm6= document.getElementById('pageEmpThreeRight');
function change6() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    pageEm6.style.width = document.getElementById('pageEmpThreeRight').innerWidth+'px';
    pageEm6.style.height = document.getElementById('pageEmpThreeRight').innerHeight+'px';
}
change6 ();//设置容器高宽
var myChart6 = echarts.init(pageEm6);// 基于准备好的dom，初始化echarts实例
//charts-E7
var pageEm7= document.getElementById('pageEmpFourLeft');
function change7() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    pageEm7.style.width = document.getElementById('pageEmpFourLeft').innerWidth+'px';
    pageEm7.style.height = document.getElementById('pageEmpFourLeft').innerHeight+'px';
}
change7 ();//设置容器高宽
var myChart7 = echarts.init(pageEm7);// 基于准备好的dom，初始化echarts实例

//charts-E8
var pageEm8= document.getElementById('pageEmpFourRight');
function change8() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    pageEm8.style.width = document.getElementById('pageEmpFourRight').innerWidth+'px';
    pageEm8.style.height = document.getElementById('pageEmpFourRight').innerHeight+'px';
}
change8 ();//设置容器高宽
var myChart8 = echarts.init(pageEm8);// 基于准备好的dom，初始化echarts实例
//charts-E9
var pageEm9= document.getElementById('pageEmpFiveLeft');
function change9() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    pageEm9.style.width = document.getElementById('pageEmpFiveLeft').innerWidth+'px';
    pageEm9.style.height = document.getElementById('pageEmpFiveLeft').innerHeight+'px';
}
change9 ();//设置容器高宽
var myChart9 = echarts.init(pageEm9);// 基于准备好的dom，初始化echarts实例

//charts-E10
var pageEm10= document.getElementById('pageEmpFiveRight');
function change10() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    pageEm10.style.width = document.getElementById('pageEmpFiveRight').innerWidth+'px';
    pageEm10.style.height = document.getElementById('pageEmpFiveRight').innerHeight+'px';
}
change10 ();//设置容器高宽
var myChart10 = echarts.init(pageEm10);// 基于准备好的dom，初始化echarts实例

//charts-E11
var pageEm11= document.getElementById('pageEmpSexLeft');
function change11() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    pageEm11.style.width = document.getElementById('pageEmpSexLeft').innerWidth+'px';
    pageEm11.style.height = document.getElementById('pageEmpSexLeft').innerHeight+'px';
}
change11 ();//设置容器高宽
var myChart11 = echarts.init(pageEm11);// 基于准备好的dom，初始化echarts实例

//charts-E12
var pageEm12= document.getElementById('pageEmpSexRight');
function change12() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    pageEm12.style.width = document.getElementById('pageEmpSexRight').innerWidth+'px';
    pageEm12.style.height = document.getElementById('pageEmpSexRight').innerHeight+'px';
}
change12 ();//设置容器高宽
var myChart12 = echarts.init(pageEm11);// 基于准备好的dom，初始化echarts实例

window.onresize = function () {//用于使chart自适应高度和宽度
    //charts-E1
    change1();//重置容器高宽
    myChart1.resize();
    //charts-E2
    change2();//重置容器高宽
    myChart2.resize();
    //charts-E3
    change3();//重置容器高宽
    myChart3.resize();
    //charts-E4
    change4();//重置容器高宽
    myChart4.resize();
    //charts-E5
    change5();//重置容器高宽
    myChart5.resize();
    //charts-E6
    change6();//重置容器高宽
    myChart6.resize();
    //charts-E7
    change7();//重置容器高宽
    myChart7.resize();
    //charts-E8
    change8();//重置容器高宽
    myChart8.resize();
    //charts-E9
    change9();//重置容器高宽
    myChart9.resize();
    //charts-E10
    change10();//重置容器高宽
    myChart10.resize();
    //charts-E11
    change1();//重置容器高宽
    myChart11.resize();
    //charts-E12
    change12();//重置容器高宽
    myChart12.resize();

};