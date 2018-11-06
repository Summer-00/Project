/**
 * Created by web on 2018/11/6.
 */
window.onload= function () {

    (function (){var dow=document.getElementsByClassName("download")[0];
        var phone=document.getElementsByClassName("download-img")[0];
        dow.onmouseover=function(){
            phone.style.display="block";
            console.log(11111)

        };
        dow.onmouseout=function(){
            phone.style.display="none";
        };
    })
    ();
};