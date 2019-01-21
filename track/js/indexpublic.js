// 头部点击效果
function fun1() {
    let headUls=document.getElementsByClassName("headUls")[0].children;
    let n = 0;
    for (let i=0,len=headUls.length;i<len;i++){
        headUls[i].onclick = function () {
            for (let j=0,len=headUls.length;j<len;j++) {
                document.getElementsByClassName("LiUls")[j].style.display = "none";
            }
            n++;
            if(n%2!=0){
                document.getElementsByClassName("LiUls")[i].style.display = "block";
            }
        }
    }
}
// 头部菜单小按钮点击效果
function fun2() {
    let list = document.getElementById("list");
    let listR = document.getElementById("listR");
    let n=0;
    let m = 0;
    list.onclick=function () {
        n++;
        if(n%2!=0){
            this.style.cssText = "transform-origin:center center;transform:rotate(180deg);";
            document.getElementsByClassName("LeftMenuBox")[0].style.cssText = "height:100%;margin-left:-260px;transition:all .5s";
            console.log( document.getElementsByClassName("LeftMenuBox"));
            document.getElementsByClassName("section")[0].style.cssText = "width:100%!important;transition:all .5s";

        }else{
            this.style.cssText = "transform-origin:center center;transform:rotate(360deg)";
            document.getElementsByClassName("LeftMenuBox")[0].style.cssText = "height:100%;margin-left:0px;transition:all .5s";
            document.getElementsByClassName("section")[0].style.cssText = "width:100%important;transition:all .5s";
        }
    }
    listR.onclick=function () {
        m++;
        if(m%2!=0){
            this.style.cssText = "background:#ddd";
            document.getElementsByClassName("LeftMenuBox")[0].style.cssText = "height:100%;margin-left:-260px;transition:all .5s";
            document.getElementsByClassName("section")[0].style.cssText = "width:100%!important;transition:all .5s";
        }else{
            this.style.cssText = "background:#fff";
            document.getElementsByClassName("LeftMenuBox")[0].style.cssText = "height:100%;margin-left:0px;transition:all .5s";
            document.getElementsByClassName("section")[0].style.cssText = "width:100%important;transition:all .5s";
        }
    }
}
// 左边一级菜单栏点击效果
function fun3(){
    let MenuUls = document.getElementsByClassName("MenuUls")[0].children;
    for (let i=0,len= MenuUls.length;i<len;i++){
        MenuUls[i].onclick=function () {
            for (let j=0,len= MenuUls.length;j<len;j++) {
                document.getElementsByClassName("MenuT")[j].style.cssText = "color:rgba(255, 255, 255, 0.47);";
                document.getElementsByClassName("MenuI")[j].style.cssText = "color:rgba(255, 255, 255, 0.47);";
            }
            document.getElementsByClassName("MenuT")[i].style.cssText = "color:white;background:#283d51";
            document.getElementsByClassName("MenuI")[i].style.cssText = "color:#30cc7b ";
        }
    }
}
// 左边二级菜单栏点击效果
function fun4(){
    let SecondUls = document.getElementsByClassName("SecondUls")[0].children;
    let n=0;
    document.getElementsByClassName("Multi")[0].onclick = function () {
        n++;
        if(n%2!=0){
            document.getElementsByClassName("jiantou1")[0].style.cssText = "transform-origin:center center;transform:rotate(-90deg);margin-top:5px;";
            document.getElementsByClassName("SecondUls")[0].style.cssText = "display:block";
        }else{
            document.getElementsByClassName("jiantou1")[0].style.cssText = "transform-origin:center center;transform:rotate(0deg);";
            document.getElementsByClassName("SecondUls")[0].style.cssText = "display:none";
        }
    }
    for (let i=0,len= SecondUls.length;i<len;i++){
        SecondUls[i].onclick=function () {
            for (let j=0,len= SecondUls.length;j<len;j++) {
                SecondUls[j].style.cssText = "color:rgba(255, 255, 255, 0.47);";
            }
            SecondUls[i].style.cssText = "color:white;background:#283d51";
        }
    }
}
// 左边三级菜单栏点击效果
function fun5(){
    let ThirdUls = document.getElementsByClassName("ThirdUls")[0].children;
    let n=0;
    document.getElementsByClassName("Third")[0].onclick = function () {
        n++;
        if(n%2!=0){
            document.getElementsByClassName("jiantou2")[0].style.cssText = "transform-origin:center center;transform:rotate(-90deg);margin-top:5px;";
            document.getElementsByClassName("ThirdUls")[0].style.cssText = "display:block";
        }else{
            document.getElementsByClassName("jiantou2")[0].style.cssText = "transform-origin:center center;transform:rotate(0deg);";
            document.getElementsByClassName("ThirdUls")[0].style.cssText = "display:none";
        }
    }
    for (let i=0,len= ThirdUls.length;i<len;i++){
        ThirdUls[i].onclick=function () {
            for (let j=0,len= ThirdUls.length;j<len;j++) {
                ThirdUls[j].style.cssText = "color:rgba(255, 255, 255, 0.47);";
            }
            ThirdUls[i].style.cssText = "color:white;background:#283d51";
        }
    }
}
$(function () {
    fun1();
    fun2();
    fun3();
    fun4();
    fun5();
});