(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.quiz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 5
	this.next = new lib.Symbol10();
	this.next.setTransform(509.5,542.4,1,1,0,0,180,23.5,26.4);

	this.prev = new lib.Symbol10();
	this.prev.setTransform(41.5,542.4,1,1,0,0,0,23.5,26.4);

	this.cheakAnswerBtn = new lib.Symbol8_1();
	this.cheakAnswerBtn.setTransform(276.5,541.4,1,1,0,0,0,99.5,31.4);

	this.mc0 = new lib.Symbol7();
	this.mc0.setTransform(457.5,232,1,1,0,0,0,-20.3,26);

	this.mc1 = new lib.Symbol7();
	this.mc1.setTransform(457.3,304.9,1,1,0,0,0,-20.5,25.9);

	this.mc2 = new lib.Symbol7();
	this.mc2.setTransform(457.3,380,1,1,0,0,0,-20.5,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc2},{t:this.mc1},{t:this.mc0},{t:this.cheakAnswerBtn},{t:this.prev},{t:this.next}]}).to({state:[]},1).wait(1));

	// text
	this.questionTxt = new cjs.Text("---", "24px Arial", "#333333");
	this.questionTxt.textAlign = "right";
	this.questionTxt.lineHeight = 27;
	this.questionTxt.lineWidth = 452;
	this.questionTxt.setTransform(36,30.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.questionTxt}]}).to({state:[]},1).wait(1));

	// Layer 7
	this.c2 = new cjs.Text("---", "24px Arial");
	this.c2.textAlign = "right";
	this.c2.lineHeight = 40;
	this.c2.lineWidth = 376;
	this.c2.setTransform(45,364);

	this.c1 = new cjs.Text("---", "24px Arial");
	this.c1.textAlign = "right";
	this.c1.lineHeight = 40;
	this.c1.lineWidth = 376;
	this.c1.setTransform(45,289);

	this.c0 = new cjs.Text("---", "24px Arial");
	this.c0.textAlign = "right";
	this.c0.lineHeight = 40;
	this.c0.lineWidth = 376;
	this.c0.setTransform(45,215);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.c0},{t:this.c1},{t:this.c2}]}).to({state:[]},1).wait(1));

	// Layer 8
	this.tryAgain = new lib.Symbol8();
	this.tryAgain.setTransform(276.5,541.4,1,1,0,0,0,99.5,31.4);
	this.tryAgain._off = true;

	this.timeline.addTween(cjs.Tween.get(this.tryAgain).wait(1).to({_off:false},0).wait(1));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("Aj/ghIgYAAIAAAhIAWAAQAkAAAiAJQAhALARALQggAQguAQQgtAPgZAAIgbAAQgLAAgGgEQgHgFgEgHQgFgHgBgJIgDgSIAAhgIgeACQgZABgWAFQgWAFgQAJQgPAJgIANQgIAOgBAQQAAAaARAQQARAQAaAAQARAAAQgGQAPgGAJgJQAAAMAFANQAFAMAJAKQAJAKAMAGQAMAFANABIAcAAQATAAAjgLQAigLAngRQAGAUAQAKQARAJAZAAIBBAAQAMAAANgGQALgGAFgKQAHAKANAGQAOAGALAAIArAAQAMAAAMgGQANgGAGgKQAGAKANAGQAOAGALAAIArAAQAMAAAMgGQANgGAGgKQAGAKANAGQAOAGALAAIAhAAQAgAAASgVQASgWAAgnIAAjFIgeAAIAADDIgCATQgBAJgEAGQgFAHgHAFQgIAEgKAAIgaAAQgQAAgKgMQgLgMAAgTIAAgWIgeAAIAAAWQAAAVgLALQgJALgQAAIgbAAQgQAAgKgMQgLgMAAgTIAAgWIgeAAIAAAWQAAAVgLALQgJALgQAAIgbAAQgRAAgKgMQgLgMAAgTIAAgWIgcAAIAAAWQAAAVgKALQgKALgQAAIg6AAQgOAAgIgFQgIgFgEgIIA8gfIAAggIglAQQgkgVgogNQgngMghAAIAAAAABighIAaAAIAAgbIgaAAIAAAbACSghIAbAAIAAgbIgbAAIAAAbAEWg8IgbAAIAAAbIAbAAIAAgbAHTinIAAEXIAeAAIAAkXIgeAAAmAh/IgaAAIAAAbIAaAAIAAgbAmwh/IgbAAIAAAbIAbAAIAAgbAm1gcIAZgIIAhgDIAAAzQgIAIgPAGQgQAHgOAAQgNAAgIgIQgIgIAAgMQAAgKAHgJQAFgIAMgGIAAAAAgtCNIAAAbIAaAAIAAgbIgaAAAABCoIAbAAIAAgbIgbAAIAAAbAjCCKIAAAaIAaAAIAAgaIgaAA").cp();
	this.shape.setTransform(273.2,96.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).wait(1));

	// Layer 4
	this.falseTxt = new cjs.Text("3", "37px Arial", "#333333");
	this.falseTxt.textAlign = "center";
	this.falseTxt.lineHeight = 48;
	this.falseTxt.lineWidth = 37;
	this.falseTxt.setTransform(137.5,355.5);

	this.totalTxt = new cjs.Text("3", "37px Arial", "#333333");
	this.totalTxt.textAlign = "center";
	this.totalTxt.lineHeight = 48;
	this.totalTxt.lineWidth = 37;
	this.totalTxt.setTransform(137.5,190.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#666666").ss(2,1,1).rr(-108,-28,216,56,15);
	this.shape_1.setTransform(277,97);

	this.trueTxt = new cjs.Text("3", "37px Arial", "#333333");
	this.trueTxt.textAlign = "center";
	this.trueTxt.lineHeight = 48;
	this.trueTxt.lineWidth = 37;
	this.trueTxt.setTransform(137.5,271.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(2,1,1).p("AcIm2MgtdAAAIAANGMAtdAAAA8HGQIKyAAIAAOcAxV0rIAAN1A8Hm2IKyAA");
	this.shape_2.setTransform(287,294.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#666666").ss(1,1,1).p("ABfs4QAAAogdAcQgbAbgnAAQgmAAgcgbQgcgcAAgoQAAgnAcgcQAcgcAmAAQAnAAAbAcQAdAcAAAnIAAAAAhCgfQAcgcAmAAQAnAAAbAcQAdAcAAAmQAAAngdAbQgbAdgnAAQgmAAgcgdQgcgbAAgnQAAgmAcgcIAAAAAAALaQAnAAAbAbQAdAcAAAoQAAAngdAbQgbAdgnAAQgmAAgcgdQgcgbAAgnQAAgoAcgcQAcgbAmAAIAAAA").cp();
	this.shape_3.setTransform(445.5,291.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("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").cp();
	this.shape_4.setTransform(313,289.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(153,153,153,0.557)").s().p("ABfs4QAAAogdAcQgbAbgnAAQgmAAgcgbQgcgcAAgoQAAgnAcgcQAcgcAmAAQAnAAAbAcQAdAcAAAnIAAAAAhCgfQAcgcAmAAQAnAAAbAcQAdAcAAAmQAAAngdAbQgbAdgnAAQgmAAgcgdQgcgbAAgnQAAgmAcgcIAAAAAAALaQAnAAAbAbQAdAcAAAoQAAAngdAbQgbAdgnAAQgmAAgcgdQgcgbAAgnQAAgoAcgcQAcgbAmAAIAAAA").cp();
	this.shape_5.setTransform(445.5,291.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.trueTxt},{t:this.shape_1},{t:this.totalTxt},{t:this.falseTxt}]},1).wait(1));

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s("#666666").ss(1,1,1).p("EAgGAbzMhALAAAMAAAg3lMBALAAAMAAAA3l").cp();
	this.shape_6.setTransform(280.5,278);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},1).wait(1));

	// Layer 3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AbMPZMAAAgiNIHWAAQhbKFgnKEQgODggHDiQgMFOADFQIk2jcEgihgS0IHWAAMAAAAiNIk2DcQADlQgMlOQgHjigOjgQgnqEhbqFIAAAA").cp();
	this.shape_7.setTransform(281,261.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(18,30.7,515,538);


// symbols:
(lib.Symbol9 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494949").s().p("AGEgLQgGAGgFAIIAFgBIAFAAQAHAAAIAFQAJAEALALIhDAAQgDAAgDgFQgCgIAAgQIAAgRIgDgVQgBgGgGgHIgJAWIAFAGQADAFgBAIIAAAXQAAAXAGAJQAEAIAKAAIBpAAIAAgYIgLgDIgZgXIgMgJIgLgDQgHAAgGAFIAAAAAEyAIQAIAAACAOIgDAAQgFAAgEgCQgEgCAAgDIACgFQABgCADAAIAAAAAEhAXQAAAKAFAGQAFAGAJAAIAGgBQgLAMgKAGQgIAFgIAAIgMgCIgPgIIgEAFQASANAJAFQAIAEAIAAQAMAAANgOQANgPAAgPIAAgWQAAgOgFgIQgFgJgHAAQgIAAgHANQgGAKAAANIAAAAAgpABQgCgCgHgGIgUgMIgIATIADAAIgIASIgCAOQAAAIAEAFQAEAEAHAAQAIAAAJgEQAJgFADgHIACgJIABgLQAAgGgDgGIAAAAAAoADQgDgGgGgGIgFAWQAFAEADAHIADAJQAAAHgPANIgRANQgFADgFAAIgKgCIgNgHIgEAFIAZAPQAHAFAHAAQAGAAAKgIQAIgGAGgJQAGgIAAgGIAAgCIAYgBQAHgCAFgIIATAIIAWADIAAgTQAAgMgHgOQgGgMgFAAQgFAAgHAHQgHAFgFALQgCAGgHACIgMACIgOAAIAAgBQAAgJgDgJIAAAAAhCgxIgNgHIgJARIARAJIAHgOIAMAIIAKgSIgQgJIgIAOAg5ANQAEAEACADQgCADgEABIgKACIgFgCIgDgFQAAgGAGgJIAMAJADsg3QgDgCgBgDQAAgCABgBIgEgCQgIASAAAIIAEADIALA5IAAAMQAAAKgKAFQgJAGgQAAQgKAAgGgEQgGgEAAgIIACgPIAKgSIgFgEQgLAQgDAKQgDAKAAANQAAANAIAIQAJAHAPAAQASAAAOgKQAOgKAAgOIAAgUIgKg2IADACIAEgKIACgLIgKgGABXAQQACgIAEAAQADAAAEAFIAEAHQgBABgBAAIgPgFAihhMQADAAACACIACgDQABgCAAgBQgBgCgBgBQgBgBgBAAQgFAAgHAIIgBADQgBACAAAAQAAACABABQACACACABQgDABgCABQgCACgBADIATgGQABgBACgBIACgEQgDABgDABIgGgDQgDgBgCgCIACgCQACAAACAAIAAAAAmUAYQAAgDAJgGQAIgFAFAAQADAAABACQADAEABAEIAEgJIABgIQAAgEgDgEQgDgEgFAAQgGAAgGAFIgNAMIgHAMQgDAGABAEQAAAJADADQAFAEANAAIAGAAQADAAACABQAAACgEACIgTAIIgNADIgNACQgTAAAAgRQAAgGADgJIAKgUIgEgCQgLARgEAKQgDAJAAAMQAAAYAcAAQAKAAALgDIAVgJQAJgFAEgLQADgJABgJQAAgFgDgCIgNgCQgCABAAAAIgDAAIgHgBQgEgBAAgCIAAAAAiqghQAAADABADIAHA7IgCASIAFACIAHgRIACgOIgBgUIgJg7IgIAPIgCAKAj1gkIAVAKIAKgTIgUgLIgLAUAjtgQQgHAAgGAFQgGAGgFAIIAFgBIAFAAQAHAAAIAFQAJAEALALIg7AAIAAgBQAAgJgDgJQgDgGgGgGIgFAWQAFAEADAHIADAJQAAAHgPANIgRANQgGADgGAAIgKgCIgNgHIgEAFIAZAPQAIAFAIAAQAGAAAKgIQAIgGAGgJQAGgIAAgGIAAgCIBhAAIAAgYIgLgDIgZgXIgMgJQgFgDgGAAIAAAA").cp();
	this.shape.setTransform(95.7,31.8);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#CCCCCC"],[0.149,0.906],0,-24.3,0,24.3).s("#999999").ss(1.5,1,1).p("AM0iPQAAhzh0AAI1/AAQh0AAAABzIAAEfQAABzB0AAIV/AAQB0AAAAhzIAAkf").cp();
	this.shape_1.setTransform(99.5,31.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(17.5,5.6,164,51.9);


(lib.Symbol10 = function() {
	this.initialize();

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(153,153,153,0.859)").s().p("AhvAAIDfC6IAAlzIjfC5").cp();
	this.shape_2.setTransform(20.8,26.8);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.859)").s("#333333").ss(1,1,1).rr(-29,-32.5,58,65,14);
	this.shape_3.setTransform(23.5,26.3,0.81,0.81,0,0,180);

	this.addChild(this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,47,52.7);


(lib.Symbol9_1 = function() {
	this.initialize();

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAJAhIgJhcIgIATIAIBXIAAAFIAAAHIAAABIAGgNQACgGABgIIAAAA").cp();
	this.shape_4.setTransform(137.6,29.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AggAAQgGAEgDAJIAMgBQAKAAAKADIAQAJIAUAPIhdAAIAAAUICFAAIAAgUIgHAAQgFgBgOgNIgagWQgPgKgMAAQgMAAgIAHIAAAAAACgfIAJgRIgRgKIgJARIARAK").cp();
	this.shape_5.setTransform(129.5,30.4,0.824,0.824);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AANg+IgJARIATAKIAJgRIgTgKAATgKIgJAQQAJAKACAFQADAHAAAOIg4AAIAAAUIBBAAIAAgcQAAgVgEgJQgBgEgJgKIAAAAAgCgYIAHgRIgRgJIgJAQIATAK").cp();
	this.shape_6.setTransform(121.8,30.1,0.824,0.824);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAYgEIg4AAIAAATIBBAAIAAgbQAAgVgEgJQgBgGgJgKIgJATQAJAJACAFQADAIAAANIAAAAAAVArIgUgKIgGARIARAKIAJgR").cp();
	this.shape_7.setTransform(116.8,34,0.824,0.824);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAogZQAGAKgBAJQAAAJgKANQgLAOgOAJQgPAIgPABIgfgFIgCAFIAiALQAJADAJAAQAGAAAOgJQAOgIAKgMQALgOAAgNIAAgaQAAgNgFgKQgFgJgKgJIgGATQAIAJAEAIIAAAA").cp();
	this.shape_8.setTransform(110,34.7,0.824,0.824);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgEhMIAIBrIAAAGIgBAIIADABIAHgPQADgIABgKIgMhwIgJAXAAJBJQABgCAAgBIgCgEQgCgBgCAAQgEAAgGAGQgGAHAAADIACAFIAGAEQgLAEgBAGIAUgIIAHgEQAEgCAAgDIgFACIgDAAIgIgDQgFgDAAgCQABgBACgBIADgBQAEAAADADIACgE").cp();
	this.shape_9.setTransform(96.8,31.7,0.824,0.824);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AA8gGQgFAAgPgOIgZgWQgPgMgMAAQgMAAgIAIQgGAGgDAIIAMgBQAKAAAJADIARAKIAUAOIhdAAIAAATICFAAIAAgTIgHAAAAHAmIgRgKIgJARIATAKIAHgR").cp();
	this.shape_10.setTransform(89.2,34.1,0.824,0.824);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgZgvIAHAJIAEAMIAHBKQABALAFAGQADAHAIgBIAQAAIAAgUIgQAAQgEAAgDgFQgDgGgCgVIgCg4QgCgTgEgOIgPAX").cp();
	this.shape_11.setTransform(81.7,29.3,0.824,0.824);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AAKgnQAJAJACAFQADAIAAANIg4AAIAAATIBBAAIAAgbQAAgVgEgJQgBgGgJgKIgJATAAVArIgUgKIgGARIARAKIAJgR").cp();
	this.shape_12.setTransform(76.4,34,0.824,0.824);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AANg+IgJARIATAKIAJgRIgTgKAATgKIgJAQQAJAKACAFQADAHAAAOIg4AAIAAAUIBBAAIAAgcQAAgVgEgJQgBgEgJgKIAAAAAgCgYIAHgRIgRgJIgJAQIATAK").cp();
	this.shape_13.setTransform(71.5,30.1,0.824,0.824);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AA0g/QgJgDABgHIgCgBIgEANIgCAPIAGADIAPBiIhJAAQgTAAgKgEQgOgFAAgNIABgJIAGgOIgEgDIgHAOQgFANAAAKQAAASAMAGQAMAHAcAAIBVAAIAAgXIgOhaIAGACIAEgWIgNgFAAAgLQAAgGAGgEIAMgFIACgPQgKAEgKANQgKAOAAAKQAAACADABQADABACAAIAKAAIAFABQACADAAACQAAAFgKAEQgHAEgOAAIgSgBIgCACIAPAEIAQACQAPAAAHgHQAJgGAAgNQAAgGgDgEQgCgDgGAAIgGABIgEAAIgFgBQAAgBAAgBIAAAA").cp();
	this.shape_14.setTransform(64,29,0.824,0.824);

	// Layer 1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FFFFFF","#CCCCCC"],[0.149,0.906],0,-24.3,0,24.3).s("#999999").ss(1.5,1,1).p("AM0iPQAAhzh0AAI1/AAQh0AAAABzIAAEfQAABzB0AAIV/AAQB0AAAAhzIAAkf").cp();
	this.shape_15.setTransform(99.5,31.5);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(17.5,5.6,164,51.9);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABlhBIiECDIhFhD");
	this.shape_16.setTransform(0.1,-0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#333333").ss(5,1,1).p("ABlhBIiECDIhFhD");
	this.shape_17.setTransform(0,0.8);

	this.addChild(this.shape_17,this.shape_16);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.2,-7.3,20.6,14.9);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABWhVIg6BUIAKAMIBEBdIgFAAIgzAAIgyhIIgyBIIgiAAIgVAAIBLhoIADgDIg6hSIgNgSIA2AAIAsBEIAthEIA1AAIgMAS").cp();
	this.shape_18.setTransform(-0.3,-0.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.467)").s().p("AhdhnIA6BSIgDADIg8hVIAFAAABcBWIAOASIg4AAIgyhIIgyBIIg3AAIANgSIAiAAIAzhIIAxBIIAyAAABOhnIAUAAIhEBiIgKgOIA6hU").cp();
	this.shape_19.setTransform(0.4,0.9);

	this.addChild(this.shape_19,this.shape_18);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.9,-11.2,22.1,22.6);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#005875").ss(1.5,1,1).p("ACUiTQA+A9AABWQAABXg+A9Qg9A+hXAAQhWAAg9g+QgsgsgNg5QgFgWAAgZQAAgYAFgWQANg5AsgsQA9g+BWAAQBXAAA9A+IAAAA").cp();

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(255,255,255,0.176)").ss(1,1,1).p("ACOiNQA7A7AABSQAABTg7A7Qg7A7hTAAQhSAAg7g7Qg7g7AAhTQAAhSA7g7QA7g7BSAAQBTAAA7A7IAAAA").cp();

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#29AAD5","#0099CC"],[0,0.906],0.5,-5.2,0,0.5,-5.2,26.4).s().p("ACOiNQA7A7AABSQAABTg7A7Qg7A7hTAAQhSAAg7g7Qg7g7AAhTQAAhSA7g7QA7g7BSAAQBTAAA7A7Qg7g7hTAAQhSAAg7A7Qg7A7AABSQAABTA7A7QA7A7BSAAQBTAAA7g7QA7g7AAhTQAAhSg7g7IAAAAACTiSQA9A9AABVQAABVg9A9Qg9A9hWAAQhVAAg9g9QgvgvgLg/QgDgSAAgSQAAgSADgSQALg/AvgvQA9g8BVAAQBWAAA9A8IAAAA").cp();

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#FFFFFF","#CCCCCC"],[0,1],-2.4,-2.4,0,-2.4,-2.4,24.8).s().p("ACTiSQg9g8hWAAQhVAAg9A8QgvAvgLA/QgDASAAASQAAATADASQALA+AvAvQA9A+BVAAQBWAAA9g+QA9g8AAhWQAAhVg9g9IAAAAACUiTQA+A9AABWQAABXg+A9Qg9A+hXAAQhWAAg9g+QgsgsgNg5QgFgWAAgZQAAgYAFgWQANg5AsgsQA9g+BWAAQBXAAA9A+IAAAA").cp();

	this.addChild(this.shape_23,this.shape_22,this.shape_21,this.shape_20);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.9,-20.9,42,42);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#999999").ss(1.5,1,1).p("ACUiTQA+A9AABWQAABXg+A9Qg9A+hXAAQhWAAg9g+Qg+g9AAhXQAAhWA+g9QA9g+BWAAQBXAAA9A+IAAAA").cp();

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACLiJQA5A5AABQQAABRg5A5Qg6A6hRAAQhQAAg6g6Qg5g5AAhRQAAhQA5g5QA6g6BQAAQBRAAA6A6IAAAA").cp();

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#FFFFFF","#E0E0E0"],[0,1],-1.4,-4.4,0,-1.4,-4.4,24.8).s().p("ACLiJQA5A5AABQQAABRg5A5Qg6A6hRAAQhQAAg6g6Qg5g5AAhRQAAhQA5g5QA6g6BQAAQBRAAA6A6IAAAA").cp();

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#FFFFFF","#CCCCCC"],[0,1],-2.4,-2.4,0,-2.4,-2.4,24.8).s().p("ACUiTQA+A9AABWQAABXg+A9Qg9A+hXAAQhWAAg9g+Qg+g9AAhXQAAhWA+g9QA9g+BWAAQBXAAA9A+IAAAAACLiJQg6g6hRAAQhQAAg6A6Qg5A5AABQQAABRA5A6QA6A5BQAAQBRAAA6g5QA5g6AAhRQAAhQg5g5IAAAA").cp();

	this.addChild(this.shape_27,this.shape_26,this.shape_25,this.shape_24);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.9,-20.9,42,42);


(lib.Symbol8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol9();
	this.instance.setTransform(99.5,31.4,1,1,0,0,0,99.5,31.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(17.5,5.6,164,51.9);


(lib.Symbol8_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Symbol9_1();
	this.instance_1.setTransform(99.5,31.4,1,1,0,0,0,99.5,31.4);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(17.5,5.6,164,51.9);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Symbol5();
	this.instance_2.setTransform(-0.3,1.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(255,255,255,0.176)").ss(1,1,1).p("ACNiMQA7A6AABSQAABSg7A7Qg6A7hTAAQhRAAg7g7Qg7g7AAhSQAAhSA7g6QA7g7BRAAQBTAAA6A7IAAAA").cp();

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#003300").ss(1.5,1,1).p("ACUiTQA+A9AABWQAABXg+A9Qg9A+hXAAQhWAAg9g+Qg+g9AAhXQAAhWA+g9QA9g+BWAAQBXAAA9A+IAAAA").cp();

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#15975D","#006666"],[0.149,0.906],-5.4,-7,0,-5.4,-7,26.6).s().p("ACNiNQA7A7AABSQAABSg7A7Qg6A7hTAAQhSAAg7g7Qg6g7AAhSQAAhSA6g7QA7g6BSAAQBTAAA6A6Qg6g6hTAAQhSAAg7A6Qg6A7AABSQAABSA6A7QA7A7BSAAQBTAAA6g7QA7g7AAhSQAAhSg7g7IAAAAACSiQQA8A8AABUQAABVg8A8Qg9A9hVAAQhUAAg8g9Qg9g8AAhVQAAhUA9g8QA8g9BUAAQBVAAA9A9IAAAA").cp();
	this.shape_30.setTransform(0,0.1);

	this.addChild(this.shape_30,this.shape_29,this.shape_28,this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.9,-20.9,42,42);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.instance_3 = new lib.Symbol3();
	this.instance_3.setTransform(0.4,0.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(255,0,0,0.157)").ss(1,1,1).p("ACKiJQA6A5AABQQAABRg6A5Qg5A6hRAAQhQAAg5g6Qg6g5AAhRQAAhQA6g5QA5g6BQAAQBRAAA5A6IAAAA").cp();

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#530000").ss(1.5,1,1).p("ACUiTQA+A9AABWQAABXg+A9Qg9A+hXAAQhWAAg9g+Qg+g9AAhXQAAhWA+g9QA9g+BWAAQBXAAA9A+IAAAA").cp();

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#C60000","#9A2929"],[0,1],-4.3,-4.9,0,-4.4,-4.9,21.1).s().p("ACKiJQA6A5AABQQAABRg6A5Qg5A6hRAAQhQAAg5g6Qg6g5AAhRQAAhQA6g5QA5g6BQAAQBRAAA5A6Qg5g6hRAAQhQAAg5A6Qg6A5AABQQAABRA6A5QA5A6BQAAQBRAAA5g6QA6g5AAhRQAAhQg6g5IAAAAACUiTQA+A9AABWQAABXg+A9Qg9A+hXAAQhWAAg9g+Qg+g9AAhXQAAhWA+g9QA9g+BWAAQBXAAA9A+IAAAA").cp();

	this.addChild(this.shape_33,this.shape_32,this.shape_31,this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.9,-20.9,42,42);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.008)").s().p("AeZEEMg8xAAAIAAoHMA8xAAAIAAIH").cp();
	this.shape_34.setTransform(-248.2,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34}]}).to({state:[]},1).wait(3));

	// Symbol 1
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(-20.9,25.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(3));

	// Symbol 2
	this.instance_5 = new lib.Symbol2();
	this.instance_5.setTransform(-20.9,25.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Symbol 6
	this.instance_6 = new lib.Symbol6();
	this.instance_6.setTransform(-20.9,25.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Symbol 4
	this.instance_7 = new lib.Symbol4();
	this.instance_7.setTransform(-20.9,25.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-442.7,0,442.8,52);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;