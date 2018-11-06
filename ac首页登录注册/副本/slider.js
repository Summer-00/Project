
window.onload= function () {(function () {

    var mainArr=document.getElementsByClassName("slider-main")[0].children;
    var pointArr=document.getElementsByClassName("slider-point")[0].children;
    var slider=document.getElementsByClassName("slider")[0];
    console.log(mainArr);
    var m=0;
    for( i= 0;i<pointArr.length;i++){
        pointArr[i].index=i;
        console.log(pointArr[i].index);
        pointArr[i].onclick=function(){
            console.log(this.index);
            m=this.index;
            for(j=0;j<pointArr.length;j++){
                pointArr[j].style.background="white";
                mainArr[j].style.display="none";
            }
            this.style.background="gray";
            mainArr[this.index].style.display="block";
            return m;
        }
    }
    var n=m;
    var timer=0;
    function start()
    {    timer=setInterval(function(){

        n=m;
        for(j=0;j<mainArr.length;j++){
            mainArr[j].style.display="none";
            pointArr[j].style.background="white";
        }
        mainArr[n].style.display="block";
        pointArr[n].style.background="gray";
        if(n<mainArr.length-1){
            m++
        }
        else{
            m=0;
        }
    },2000);}
    start();


    slider.onmouseover=function(){
        clearInterval(timer);
    };
    slider.onmouseout=function(){
        clearInterval(timer);
        start();

    }

})();

};