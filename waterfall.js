window.onload=function  () {
	WaterFall();
	//var picbox={"picdata":[{"src":'1.jpg'},{"src":'2.jpg'},{"src":'3.jpg'},{"src":'4.jpg'},{"src":'5.jpg'},{"src":'6.jpg'},{"src":'7.jpg'},{"src":'8.jpg'},{"src":'9.jpg'},{"src":'10.jpg'},{"src":'11.jpg'},{"src":'12.jpg'},{"src":'13.jpg'},{"src":'14.jpg'},{"src":'15.jpg'},{"src":'16.jpg'},{"src":'17.jpg'},{"src":'18.jpg'},{"src":'19.jpg'},{"src":'20.jpg'},{"src":'21.jpg'},{"src":'22.jpg'},{"src":'23.jpg'},{"src":'24.jpg'},{"src":'25.jpg'},{"src":'26.jpg'},{"src":'27.jpg'},{"src":'28.jpg'},{"src":'29.jpg'},{"src":'30.jpg'},{"src":'31.jpg'},{"src":'32.jpg'},{"src":'33.jpg'},{"src":'34.jpg'},{"src":'35.jpg'},{"src":'36.jpg'}]};
	//var picbox={"picdata":[{"src":"1.jpg"},{"src":"2.jpg"}]}
	// console.log(picbox.picdata[0].src);
	 var picbox=document.getElementsByTagName('img');
	 var times=picbox.length;
	window.onscroll=function(){
		if(checkscrollmove()==true)
		{
           var jsmain=document.getElementsByClassName('main')[0];
           for(var i=1;i<=times;i++){
              var boxchild=document.createElement('div');
              boxchild.className='box';
              jsmain.appendChild(boxchild);
              var picchild=document.createElement('div');
              picchild.className='picture';
              boxchild.appendChild(picchild);
              var imgchild=document.createElement('img');
              imgchild.src="pic/"+i+".jpg";
              picchild.appendChild(imgchild); 
              // console.log(picbox.length);
           }
           WaterFall();
		};
	}
}
function WaterFall()
{
   var jsmain=document.getElementsByClassName('main')[0];
   var jsbox=document.getElementsByClassName('box')[0];
   var boxarr=getboxnum(jsmain,jsbox);
   //console.log(boxarr);
   var wid=document.documentElement.clientWidth;
   var boxwid=boxarr[0].offsetWidth;
   var col=Math.floor(wid/boxwid);
   //console.log(col);
   jsmain.style.width=col*boxwid+"px";
   jsmain.style.margin="0 auto";
   var picarr=new Array();

   for(var i=0;i<boxarr.length;i++){
   	if(i<col)
   		picarr[i]=boxarr[i].offsetHeight;
   	else{
   		var hmin=Math.min.apply(null,picarr);
   		//console.log(hmin);
   		var hminnum=getarrminnum(picarr,hmin);
   		// console.log(boxarr[i]);
   		boxarr[i].style.position="absolute";
   		boxarr[i].style.top=hmin+"px";
   		boxarr[i].style.left=hminnum*boxwid+"px";
   		picarr[hminnum]=boxarr[i].offsetHeight+picarr[hminnum];
   	}  
   }
}
function getarrminnum (array,value) {
	for(var i=0;i<array.length;i++){
		if(array[i]==value)
			return i;
	}
}
function getboxnum (parent,child) {
	var boxnum=new Array();
	var allnum=parent.getElementsByTagName('*');
    for(var i=0;i<allnum.length;i++){
    	 if(allnum[i].className==child.className){
    	 	boxnum.push(allnum[i]);
    	 }
    }	 	
    return boxnum;
}
function checkscrollmove () {
	var jsmain=document.getElementsByClassName('main')[0];
	var jsbox=document.getElementsByClassName('box')[0];
    var boxarr=getboxnum(jsmain,jsbox);
    var lastbox=boxarr[boxarr.length-1].offsetTop+Math.floor(boxarr[boxarr.length-1].offsetHeight/2);
    var scrollmove=document.body.scrollTop||document.documentElement.scrollTop;
    var height=document.body.clientHeight||document.documentElement.clientHeight;
    if(lastbox<(height+scrollmove)){
        return true;
    }
    else
    	return false;

}