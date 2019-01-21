function tab1(){//图片效果
    let tabBoxTwo = $(".tabBoxTwo")[0].children;
    for (let i=0,len=tabBoxTwo.length;i<len;i++){
        $(".tabUp")[i].onclick=function () {
            $(this).parents(".tabTwoBox").find(".tabBoxBg").css({
                display:"block"
            });
           $(this).parents(".tabTwoBox").find(".tabBoxBg").animate({
               top:"0"
           },300);
        }
        $(".icon-more-right")[i].onclick=function () {
            $(this).parents(".tabTwoBox").find(".tabBoxBg").css({
                display:"block"
            });
            $(this).parents(".tabTwoBox").find(".tabBoxBg").animate({
                top:"0"
            },300);
        }
        $(".icon-close2")[i].onclick = function () {
            $(this).parents(".tabTwoBox").find(".tabBoxBg").css({
                display:"none"
            });
            $(this).parents(".tabTwoBox").find(".tabBoxBg").animate({
                top:"100%"
            },300);
        }
    }
}
function tab2(){//下拉列表效果
    let tabUls = $(".pullDownListUls")[0].children;
    for (let i=0,len=tabUls.length;i<len;i++) {
        tabUls[i].onclick = function () {
            for (let j=0,len=tabUls.length;j<len;j++){
                tabUls[j].className = "";
            }
            tabUls[i].className = "active1";
        }
    }
}
function tab3(){//tab选项卡效果
    let tabListUls = $(".tabListUls")[0].children;
    for (let i=0,len=tabListUls.length;i<len;i++) {
        tabListUls[i].onclick = function () {
            for (let j=0,len=tabListUls.length;j<len;j++){
                $(".tabText")[j].style.display = "none";
                tabListUls[j].style.cssText = "background:eea236;color:#333";
            }
            tabListUls[i].style.cssText = "background:orange;color:white";
            $(".tabText")[i].style.display = "block";
        }
    }
}
$(function(){
    tab1();
    tab2();
    tab3();
});