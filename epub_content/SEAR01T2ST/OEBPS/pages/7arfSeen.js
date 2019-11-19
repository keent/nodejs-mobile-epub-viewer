window.addEventListener("load",init,false);

var canvas, stage, exportRoot;
var timer;
var wsound;
var rsound;
var counter=0;
var arr=[];
var started=false;
var q=0;//for check exercise end
var i=0;//increase for more circles
function init() {
	canvas = document.getElementById("canvas");
	wsound = document.getElementById('false');
	rsound =  document.getElementById('true');
	
	exportRoot = new lib._7rof();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
        createjs.Touch.enable(stage);
	
  //---------- BG Image ------------------------
	 var container = new createjs.Container();
	stage.addChild(container);
	
	var content = new createjs.DOMElement("bg");
	container.addChild(content);
	
  //----------- header -------------------------
	headers = document.getElementById("canvas1");
	title=new lib.header();
	var titleStage=new createjs.Stage(headers);
	
	titleStage.addChild(title);
    titleStage.update();
	createjs.Ticker.addListener(titleStage);

	createjs.Ticker.setFPS(60);
	createjs.Ticker.addListener(window);
	
	stage.update();
	
	
  //----------- Start -------------------------
    exportRoot.start.onClick=Start;
	exportRoot.markb.onPress=Move;
	exportRoot.reset_btn.onClick=restart;
	
   
   arr=[0,1,2,3,4,5,6,7,8,9];
   arr.sort(function(){
	   return 0.5-Math.random();
	   })
	   	
   for(var i=0 ;i<6 ;i++){
     exportRoot["ans"+i].type=0; 
     exportRoot["ans"+i].status=0;     	
	}
	
	for(var l=6;l<10;l++){
	 exportRoot["ans"+l].type=1;
	 exportRoot["ans"+l].status=0; 	
		}


   exportRoot.txt1.text=0;
   exportRoot.txt1.color ="orange";
   exportRoot.txt1.font="bold 25px Arial";
	

}

function Start(){
 exportRoot.gotoAndStop(1);
 timer=setInterval(setTimer,1500);
}

function Move(e){
 // -- onPress ----------
	e.target.disX=stage.mouseX - e.target.x;
	e.target.disY=stage.mouseY - e.target.y;
	exportRoot.addChild(e.target);
	
 // -- onMouseMove ----------	
e.onMouseMove=function(e1){
	 e1.target.x=e1.stageX - e1.target.disX; 
	if(e.target.x > 450)
	{
		e.target.x=450
	}
	if(e.target.x < 100)
	{
		e.target.x=100
	}
}
 // -- onMouseUp ----------
e.onMouseUp=function(e2){}

}//end function move	




function tick(){
  if(started=true){
	for(var i=0;i<10;i++){
		if(exportRoot["ans"+i].y>650){
			exportRoot["ans"+i].alpha=0;
			}
	  if(Math.abs(exportRoot["ans"+i].y - exportRoot.markb.y)<50
	  && Math.abs(exportRoot["ans"+i].x - exportRoot.markb.x)<50
	  		&& exportRoot["ans"+i].status==0){
				
		   exportRoot["ans"+i].status=1;
		   exportRoot["ans"+i].alpha=0;
		   
		 // check ture answers 
		  if( exportRoot["ans"+i].type==0 ){		
		  
		   counter=counter+5;
		   exportRoot.txt1.text=counter;
		   
		
           rsound.play();
		   }
		   
		  else { 	
		 
           wsound.play();
	 }
   }	
  }

 stage.update();
 }
}


function setTimer(){
	exportRoot["ans"+arr[i]].y=-50;
	 exportRoot["ans"+arr[i]].alpha=1;
	 createjs.Tween.get(exportRoot["ans"+arr[i]],{override:true}).to({y:750},3000,createjs.Ease.easeOut);
	 i++;
	 q++;
	 if(q > 9)
	   {
	    setTimeout(result,3000);
		clearInterval(timer); 
	} 
}	
	
function result(){
 started=false;	
 exportRoot.gotoAndStop(2);
 exportRoot.pannel.result_txt.text=counter;
 }

function restart(){
 i=0;
 q=0;
 started=true;
 counter=0;	
 
  arr.sort(function(){
	   return 0.5-Math.random();
	   })
 exportRoot.gotoAndStop(1);
 
 timer=setInterval(setTimer,1500);
	
 exportRoot.txt1.text=counter;

 for(var l=0;l<10;l++){
   exportRoot["ans"+l].status=0; 	
  }
  
  
  
}