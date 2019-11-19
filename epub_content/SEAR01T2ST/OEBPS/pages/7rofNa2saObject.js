window.addEventListener("load",init,false);

var canvas, stage, exportRoot;
var wsound;
var rsound;
var f=0;
function init() {
	canvas = document.getElementById("canvas");
	wsound = document.getElementById('false');
	rsound =  document.getElementById('true');
	exportRoot = new lib._7rofNa2sa();

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
	
	createjs.Ticker.setFPS(59);
	createjs.Ticker.addListener(stage);
	stage.update();
	
	
	//---------- Start ------------------------
	
	for(var r=1;r<4;r++){
		exportRoot["ans"+r].onClick=Right;
		
		}
		
	for(var w=4;w<9;w++){
		exportRoot["ans"+w].onClick=Wrong;
		
		}
		
	exportRoot.again.onClick=Restart;	
	
}

function Right(e){
	 f++;
     e.target.gotoAndStop(1);	
     //rsound.currentTime = 0;
     //rsound.stop()
     rsound.play();
	 
	 if(f>=3){
		 exportRoot.q.alpha=0;
		 exportRoot.again.alpha=1;
		 exportRoot.good.alpha=1;
		 }
	}
	
	

function Wrong(e1)
{
 //wsound.currentTime = 0;
 //wsound.stop()
 wsound.play();
	}
function Restart(){
	f=0;
	exportRoot.q.alpha=1;
        exportRoot.again.alpha=0;
	exportRoot.good.alpha=0;
	
	for(var t=1;t<9;t++){
		exportRoot["ans"+t].gotoAndStop(0);
		}
		
	for(var r=1;r<4;r++){
		exportRoot["ans"+r].onClick=Right;
		
		}
		
	for(var w=4;w<9;w++){
		exportRoot["ans"+w].onClick=Wrong;
		
		}	
	}	
	