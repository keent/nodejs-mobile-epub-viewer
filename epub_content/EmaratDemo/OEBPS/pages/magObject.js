var canvas, stage, exportRoot;

var counter=0;
var y=0

var mcr1, mcr2;
var mc1, mc2;

function init() {
	canvas = document.getElementById("canvas");
	exportRoot = new lib.mag();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	createjs.Touch.enable(stage);
	//----------- add bg ----------------------
	var container = new createjs.Container();
	stage.addChild(container);
	
	var content = new createjs.DOMElement("bg");
	container.addChild(content);
	
	//-------------------------------------------
	
	mcr1 = new createjs.Container();
	
	mcr1.x=-5;
	mcr1.y=503
	stage.addChild(mcr1);
	
	mc1 = new createjs.DOMElement("m1");
	mcr1.addChild(mc1);
	
	
	//-------------------------------------------
	
	mcr2 = new createjs.Container();
	
	mcr2.x=-5;
	mcr2.y=503
	stage.addChild(mcr2);
	
	mc2 = new createjs.DOMElement("m2");
	mcr2.addChild(mc2);
	mcr2.visible=false;
	//-------------------------------------------
	
	var container = new createjs.Container();
	stage.addChild(container);
	
	var content = new createjs.DOMElement("bg");
	container.addChild(content);
	
	
	stage.update();

	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(stage);
	
	//-----------------------------------
	
	
	exportRoot.type0=-1;
	exportRoot.type1=-1;
	
	exportRoot.point0.xpose=exportRoot.point0.x;
	exportRoot.point1.xpose=exportRoot.point1.x;
	
	var movie0
	var movie1
	exportRoot.addChild(movie0);
	exportRoot.addChild(movie1);
	
	
	for(var k=1;k<3;k++)
	{
		
	exportRoot["m"+k].xpose=exportRoot["m"+k].x;
	exportRoot["m"+k].ypose=exportRoot["m"+k].y;
	
	exportRoot["m"+k].type="n1";
	exportRoot["m"+k].status=0;
	exportRoot["m"+k].tween;
	
	exportRoot["m"+k].disX=0;
	exportRoot["m"+k].disY=0;
	
	exportRoot["m"+k].location=-1;	
	exportRoot["m"+k].onPress=onPressHandler;
	
	}
	
	for(l=3;l<5;l++)
	{
	exportRoot["m"+l].xpose=exportRoot["m"+l].x;
	exportRoot["m"+l].ypose=exportRoot["m"+l].y;
	exportRoot["m"+l].type="n2";
	exportRoot["m"+l].status=0;
	exportRoot["m"+l].tween;
	
	exportRoot["m"+k].disX=0;
	exportRoot["m"+k].disY=0;
	
	exportRoot["m"+l].location=-1;	
	exportRoot["m"+l].onPress=onPressHandler;
	
	}
	
	
	exportRoot.steps_mc.onClick=onClicksteps;
	exportRoot.result_mc.onClick=onClickresult;
	stage.update();
}


function onClicksteps(e)
{
	mcr1.visible=true;
	mcr2.visible=false;
	
}

function onClickresult(e)
{
	mcr2.visible=true;
	mcr1.visible=false;
}


function tick()
{
    stage.update();
}



function onPressHandler(e)
{
	
       e.target.status=0;
       e.target.gotoAndStop(0);
       exportRoot.addChild(e.target);
       
       e.target.disX=0;
       e.target.disY=0;
       e.target.disX=stage.mouseX-e.target.x
       e.target.disY=stage.mouseY-e.target.y
      
      
  
  // ---- mouse Move ----------
  
	e.onMouseMove = function(em)
	{	
	em.target.x = em.stageX- em.target.disX;
	em.target.y = em.stageY- em.target.disY;
	update = true;
        }
	
 // ---- mouse up ----------
	e.onMouseUp = function(eu)
	{
		//exportRoot.menue.flash.gotoAndStop(0);
		for(var i=0;i<2;i++)
		{
		       if(Math.abs(eu.target.x-exportRoot["point"+i].x)<50
		       &&Math.abs(eu.target.y-exportRoot["point"+i].y)<50)
		       {
		       eu.target.x=exportRoot["point"+i].x;
		       eu.target.y=exportRoot["point"+i].y;
		       eu.target.status=1;
		       eu.target.gotoAndStop(1);
		      
		       if(eu.target.location!=-1)
			{
				exportRoot["point"+eu.target.location].x=exportRoot["point"+eu.target.location].xpose;
				exportRoot["rope"+eu.target.location].gotoAndStop(0);
			}
		       
		       eu.target.location=i;
		      
		       exportRoot["type"+i]=eu.target.type;
		       exportRoot["rope"+i].gotoAndStop(1);
		       exportRoot["movie"+i]=eu.target;
		       exportRoot["point"+i].x=1500;
		      
		       test();
		       
		       break;
		       }
		  
		}
		
		
		
		if(eu.target.status!=1)
		{
                       createjs.Tween.removeTweens(eu.target);
		       createjs.Tween.get(eu.target,{override:true}).to({x:eu.target.xpose,y:eu.target.ypose,rotation:0},100,createjs.Ease.easeOut);
		       test();
		       if(counter==1)
			{
			for(var t=1;t<5;t++)
			   {
				if(exportRoot["m"+t].status!=0)
				{
					createjs.Tween.get(exportRoot["movie"+exportRoot["m"+t].location],{override:true}).to({rotation:0},1000,createjs.Ease.elasticOut);
				}
			   }	
			}
			
			if(eu.target.location!=-1)
			{
				exportRoot["point"+eu.target.location].x=exportRoot["point"+eu.target.location].xpose;
				exportRoot["rope"+eu.target.location].gotoAndStop(0);
			        eu.target.location=-1;
			}
		}
		
        }
	
	
}

function test()
{
	counter=0;
	for(var t=1;t<5;t++)
	{
		if(exportRoot["m"+t].status!=0)
		{
		counter +=1;	
		}
	}
	 
	testCounter()
}


function testCounter()
{
	if(counter>=2)
	{
	moveMag();
	}
	
}


function moveMag()
{
	//exportRoot.menue.flash.gotoAndStop(1);
	if(exportRoot.type0==exportRoot.type1)
	{
		createjs.Tween.get(exportRoot.movie0,{override:true}).to({rotation:20},100,createjs.Ease.easeOut);
	        createjs.Tween.get(exportRoot.movie1,{override:true}).to({rotation:-30},100,createjs.Ease.easeOut);
		
	}
	else
	{
		createjs.Tween.get(exportRoot.movie0,{override:true}).to({rotation:-20},300,createjs.Ease.easeOut).call(hello,["mohamed"]);
	        createjs.Tween.get(exportRoot.movie1,{override:true}).to({rotation:20},300,createjs.Ease.easeOut);
	}
}

function hello(txt)
{
	//alert("hello "+txt);
}
