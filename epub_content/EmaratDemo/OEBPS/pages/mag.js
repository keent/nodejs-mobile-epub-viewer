(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.mag = function() {
	this.initialize();

	// Layer 1
	this.result_mc = new lib.buttonMode();
	this.result_mc.setTransform(236.5,528);

	this.steps_mc = new lib.buttonMode();
	this.steps_mc.setTransform(434.5,528);

	this.rope1 = new lib.rope_righ();
	this.rope1.setTransform(151.1,222.1,0.81,0.81);

	this.point1 = new lib.hit();
	this.point1.setTransform(151.2,222.2);
	this.point1.alpha = 0.102;

	this.point0 = new lib.hit();
	this.point0.setTransform(396.5,222.1);
	this.point0.alpha = 0.102;

	this.rope0 = new lib.rope_righ();
	this.rope0.setTransform(396.5,222.1,0.81,0.81);

	this.m3 = new lib.mc4();
	this.m3.setTransform(212.1,318.8,0.634,0.634);

	this.m1 = new lib.mc1();
	this.m1.setTransform(468.9,318.3,0.634,0.634);

	this.m2 = new lib.mc1();
	this.m2.setTransform(338.7,318.3,0.634,0.634);

	this.m4 = new lib.mc4();
	this.m4.setTransform(85,318.8,0.634,0.634);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFDFD").s().p("AAZgaIgBAYQAAABAAAAQgDADgDACIgBABIghAVIgIAAIADgKIAEgJQACgDALgLIAdgTAgFAaIAdgTIgBATIgcAA").cp();
	this.shape.setTransform(153.5,276.6);

	this.addChild(this.shape,this.m4,this.m2,this.m1,this.m3,this.rope0,this.point0,this.point1,this.rope1,this.steps_mc,this.result_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(27.2,211.2,504.3,337.8);


// symbols:
(lib.buttonMode = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,204,0.008)").s().p("AuDjRIcHAAIAAGjI8HAAIAAmj").cp();
	this.shape.setTransform(7,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82.9,-21,180,42.1);


(lib.text61f = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA+hNIAACbIgWAAIhRh5IAAB5IgUAAIAAibIAVAAIBSB5IAAh5IAUAA").cp();

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.1,-7.8,12.4,15.8);


(lib.text59f = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAyg6QAHALABAOIgUACQgCgPgJgIQgJgIgSAAQgSAAgJAHQgIAHAAAKQAAAJAGAFQAGAGAYAFQAZAGAKAEQANAFAHAJQAGAKAAANQAAAMgHAMQgHALgNAGQgOAGgRAAQgUAAgOgGQgPgHgIgMQgIgNAAgPIATgCQACAMAFAHQAFAIALAFQAKAEAMAAQAMAAAJgDQAJgEAFgGQAEgGAAgIQAAgHgEgFQgEgGgKgEQgGgCgVgFQgVgGgJgCQgLgGgGgJQgFgJAAgLQAAgLAGgLQAHgKANgGQANgFAQAAQAQAAAOAGQANAFAHALIAAAA").cp();

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.2,-8,12.5,16.3);


(lib.Symbol8 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0000").s().p("AGQgVIBKAaIAAAQIuzABIAAgCIBmAAIAAgpIMDAA").cp();
	this.shape_3.setTransform(40,25.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AD0101").s().p("AAkEKIhHgbIAAn4IBHAmIAAHt").cp();
	this.shape_4.setTransform(83.7,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.502)").s().p("ALdjJQAbARgDAmQgDAhAFA0IABAIIAAASQgEAZgdgZIgPgNIhKhPQgdglh7geQh7gfBmAAICrACQBGAEAbASIAAAAAnlDDQB8AehmABIisgCQhFgEgbgSQgbgSADglQADgjgFgyIgCgOIABgNQAEgZAdAZIAKAKIAEADIAOAOQAlAkAXAeQAeAlB6AeIAAAA").cp();
	this.shape_5.setTransform(-2.8,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AGCj4IAAH3IsDAAIAAAAIABAAIAAn9IMCAAIAAAGAEii6QgcgShFgEIirgCQhkAAB4AfQB8AeAdAlIBJBPIAPANQAdAXAEgXIAAgSIgBgIQgFg0ADghQADgmgagRIAAAA").cp();
	this.shape_6.setTransform(41.4,-2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AGeEAIAAAAIs8AAIAAngQgBgLAGgEIALgIIAHgIIMmAAIAAACIAAH9IgBAAAh/DTQh7gegdglQgYgegkgkIgOgOIgFgDIgJgKQgegYgDAYIgBANIABAOQAGAzgDAiQgDAlAaASQAbASBFAEICsACQBmgBh7geIAAAA").cp();
	this.shape_7.setTransform(-38.6,-2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000099").s().p("AHDDiIAAArIhmAAIsfAAIAFlXIAAAAIACiZIBBgpIAAHtIAAAAIM9AAIAAABIAAAA").cp();
	this.shape_8.setTransform(-42.2,0.9);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87.3,-27.8,174.8,55.9);


(lib.rope_righ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#959595","#E0E0E0","#8E8A8A"],[0,0.525,1],-3,-0.2,2.4,-0.2).s().p("AgapUQAPAHAQAAQAMAAAKgDIAASlIg1AAIAAyp").cp();
	this.shape_9.setTransform(-0.4,67.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#C7C7C7","rgba(255,255,255,0)","#C7C7C7"],[0,0.51,1],0,0,0,0,0,7.9).s().p("AAWBKQgKADgMAAQgRAAgPgHQgMgGgKgKQgXgWAAggQAAgfAXgXQAXgWAfAAQAgAAAXAWQAXAXAAAfQAAAggXAWQgPAPgSAFIAAAA").cp();
	this.shape_10.setTransform(0,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-7.4,15.6,134.4);


(lib.hit = function() {
	this.initialize();

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0066CC").s("#000000").ss(1,1,1).p("ABNhMQAgAgAAAsQAAAtggAgQggAggtAAQgsAAggggQggggAAgtQAAgsAgggQAgggAsAAQAtAAAgAgIAAAA").cp();

	this.addChild(this.shape_11);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.8,-10.8,21.8,21.8);


(lib.dots_right = function() {
	this.initialize();

	// Layer 2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#999999").ss(1,1,1).p("AJlDhIzJAAIAAnBITJAAIAAHB").cp();

	this.addChild(this.shape_12);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-61.3,-22.4,122.8,45);


(lib.mc4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#959595","#E0E0E0","#8E8A8A"],[0,0.525,1],-3.4,14,3.6,14).s().p("AAjJOQgBAAgBgBQghgPgiAYIAAyrQATAJAVAAQAQAAANgEIAASe").cp();
	this.shape_13.setTransform(0,69.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#C7C7C7","rgba(255,255,255,0)","#C7C7C7"],[0,0.51,1],0,0,0,0,0,10.1).s().p("AAcBfQgNAEgPAAQgWAAgTgJQgPgIgNgMQgegdAAgpQAAgoAegdQAdgdAoAAQApAAAdAdQAeAdAAAoQAAApgeAdQgTASgXAHIAAAA").cp();
	this.shape_14.setTransform(0.6,0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AgHgpIASAeQADAEAOABQgFAzgXgDQgEABgFAAQgJgBgJgFQANgNAFgTQAFgQgCgZQAAgDgBgCIAAAA").cp();
	this.shape_15.setTransform(4.2,139.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A6A1A1").s().p("AgPAXQAAAGAAAFQgCATgLATIgbgsQgQgSABgPQACgeAcgUQABgBAAAAQAkgYAfAPQACABABAAQALAGALAKQAaAlgMAzQgOgBgDgEIgUgeQAAgFgCgGQgFgOgSgIIgSAAQgSAOAQAlIAAAA").cp();
	this.shape_16.setTransform(0.3,134.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AgdlAQALgTABgTQABgFgBgGQAVggAXANQABABABAAQAAADAAACQADAZgFATQgFATgNAMIAAKwQggAjgGhIIAAqY").cp();
	this.shape_17.setTransform(0.5,174.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCCCCC").s().p("AgTAaQgPglASgOIASAAQASAIAFAOQACAEAAAHQgBAAgBgBQgXgLgVAeIAAAA").cp();
	this.shape_18.setTransform(0.7,134.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).wait(1));

	// Layer 2
	this.instance = new lib.text61f("synched",0);
	this.instance.setTransform(36.2,182.9,1.469,1.469);

	this.instance_1 = new lib.text59f("synched",0);
	this.instance_1.setTransform(-47.9,182.6,1.469,1.469);

	this.instance_2 = new lib.Symbol8();
	this.instance_2.setTransform(-3.7,184.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.1,156.5,174.8,55.9);


(lib.mc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#959595","#E0E0E0","#8E8A8A"],[0,0.525,1],-3.4,14,3.6,14).s().p("AAjJOQgBAAgBgBQghgPgiAYIAAyrQATAJAVAAQAQAAANgEIAASe").cp();
	this.shape_19.setTransform(0.5,69.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#C7C7C7","rgba(255,255,255,0)","#C7C7C7"],[0,0.51,1],0,0,0,0,0,10.1).s().p("AAcBfQgNAEgPAAQgWAAgTgJQgPgIgNgMQgegdAAgpQAAgoAegdQAdgdAoAAQApAAAdAdQAeAdAAAoQAAApgeAdQgTASgXAHIAAAA").cp();
	this.shape_20.setTransform(1.2,1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AgbAkQANgMAFgTQAFgRgCgZQAAgCgBgDIASAeQADAEAOABQgFA0gXgEQgEABgFAAQgJAAgJgGIAAAA").cp();
	this.shape_21.setTransform(4.8,140.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgdlAQALgTABgTQABgFgBgGQAVggAXANQABABABAAQAAADAAACQADAZgFATQgFATgNAMIAAKwQggAjgGhIIAAqY").cp();
	this.shape_22.setTransform(1.1,174.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A6A1A1").s().p("AgPAXQAAAGAAAFQgCATgLATIgbgsQgQgSABgPQACgeAcgUQABgBAAAAQAkgYAfAPQACABABAAQALAGALAKQAaAlgMAzQgOgBgDgEIgUgeQAAgFgCgGQgFgOgSgIIgSAAQgSAOAQAlIAAAA").cp();
	this.shape_23.setTransform(0.9,135.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CCCCCC").s().p("AAbAIQgBAAgBgBQgXgLgVAeQgPglASgOIASAAQASAIAFAOQACAEAAAHIAAAA").cp();
	this.shape_24.setTransform(1.3,135.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).wait(1));

	// Layer 2
	this.instance_3 = new lib.text61f("synched",0);
	this.instance_3.setTransform(-43.4,184,1.469,1.469);

	this.instance_4 = new lib.text59f("synched",0);
	this.instance_4.setTransform(37.5,183.6,1.469,1.469);

	this.instance_5 = new lib.Symbol8();
	this.instance_5.setTransform(1.9,185.1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.5,157.2,174.8,55.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;