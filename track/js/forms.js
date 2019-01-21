let formInput = document.getElementsByClassName("formInput");
for (let i=0,len=formInput.length;i<len;i++){
    formInput[i].onclick=function () {

    // let inpus = document.getElementsByTagName("input")[0].value;
        for (let j=0,len=formInput.length;j<len;j++){
            document.getElementsByTagName("input")[j].style.cssText= "border-bottom:1px solid #9e9e9e";
            document.getElementsByClassName("formOneTxt")[j].style.cssText= "top:4px";
            // console.log($(this).find("input").val())
            // // if(inpus != ""){
            // if($(this).find("input").val() == ""){
            //     document.getElementsByClassName("formOneTxt")[i].style.cssText= "top:-12px";
            // }else {
            //     document.getElementsByTagName("input")[j].style.cssText= "border-bottom:1px solid #9e9e9e";
            //     document.getElementsByClassName("formOneTxt")[j].style.cssText= "top:4px";
            // }
        }
        document.getElementsByTagName("input")[i].style.cssText= "border-bottom:2px solid red";
        document.getElementsByClassName("formOneTxt")[i].style.cssText= "top:-12px;transition:all .5s;";

    }
}


