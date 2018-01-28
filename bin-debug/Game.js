var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Game = (function (_super) {
    __extends(Game, _super);
    //private rightMostBound:number;
    function Game() {
        var _this = _super.call(this) || this;
        _this.bodyNumber = 3;
        _this.points = new Array();
        _this.factor = 50;
        _this.except = new Array();
        _this.grounds = new Array();
        _this.nextRefresh = 0;
        _this.km = 0;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Game.prototype.onAddToStage = function (event) {
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
            context.onUpdate = function () {
            };
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Game.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.leftBound = this.stage.stageWidth * 0.25;
                this.rightBound = this.stage.stageWidth * 0.75;
                this.topBound = this.stage.stageHeight * 0.15;
                this.downBound = this.stage.stageHeight - 200;
                // await this.loadResource()
                this.createGameScene(this);
                return [2 /*return*/];
            });
        });
    };
    Game.prototype.keepTrack = function () {
        var ballX = this.bodyCircle.position[0] * 50;
        var ballY = this.stage.stageHeight - this.bodyCircle.position[1] * 50;
        if (ballX > this.rightBound) {
            this.bodyCircle.position[0] = this.rightBound / this.factor;
            for (var i = 0; i < this.world.bodies.length; ++i) {
                var body = this.world.bodies[i];
                if (body.id != this.FloorId)
                    body.position[0] -= 5 / 50;
                this.km += 1;
                //this.rightBound -= 300;
                if ((body.displays != undefined) && (body.id != this.bodyPlaneId && body.id != this.FloorId))
                    body.displays[0].x -= 5;
                //this.refresh();
            }
            if ((this.km % 250) == 249) {
                this.refresh();
            }
        }
        /*if(ballY < this.topBound) {
            this.bodyCircle.position[1] = (this.stage.stageHeight - this.topBound ) / 50;
          for(var i = 0; i < this.world.bodies.length; ++i){
            var body:p2.Body = this.world.bodies[i];
              body.position[1] -= Math.abs(body.velocity[1])/50;
              if(body.displays!=undefined)body.displays[0].y += Math.abs(body.velocity[1]);
              //this.km -= 1;
          }
        }
          if(ballY > this.downBound) {
            this.bodyCircle.position[1] = (this.stage.stageHeight - this.downBound ) / 50;
          for(var i = 0; i < this.world.bodies.length; ++i){
            var body:p2.Body = this.world.bodies[i];
              body.position[1] += Math.abs(body.velocity[1])/50;
              if(body.displays!=undefined)body.displays[0].y -= Math.abs(body.velocity[1]);
              //this.km -= 1;
          }
        }*/
        if (ballX < this.leftBound) {
            this.bodyCircle.position[0] = this.leftBound / this.factor;
            for (var i = 0; i < this.world.bodies.length; ++i) {
                var body = this.world.bodies[i];
                if (body.id != this.FloorId)
                    body.position[0] += 5 / 50;
                if ((body.displays != undefined) && (body.id != this.bodyPlaneId))
                    body.displays[0].x += 5;
                this.km -= 1;
            }
        }
        //alert(this.grounds[(this.nextRefresh+2)%3].shapes[0].position[0]);
        if (ballY > this.stage.stageHeight + 100)
            this.gameOver();
        this.kmText.text = (this.km + ballX - 160) + "m";
    };
    Game.prototype.onTouchMove = function (evt) {
        //this.points.push([evt.stageX, evt.stageY]);
        //this.bodyCircle.velocity[0] += (evt.stageX-this.startTouchX)/30/50;
        //this.bodyCircle.velocity[1] += (this.startTouchY-evt.stageY)/30/50;
        //if(Math.abs(this.startTouchY-evt.stageY)<=100)
        /*if(this.startTouchX - evt.stageX > 0 ){
            this.bodyCircle.velocity[0] -= 10;
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            //this.touch = false;
        } else if( this.startTouchX - evt.stageX < 0 ){
            this.bodyCircle.velocity[0] += 10;
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            //this.touch = false;
        } else if( this.startTouchY - evt.stageY < 0 ){
            this.bodyCircle.velocity[1] -= 10;
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        } else if( this.startTouchY - evt.stageY > 0 ){
            this.bodyCircle.velocity[1] += 10;
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        }
        else{
        }*/
    };
    Game.prototype.onTouchBegin = function (evt) {
        //this.touch = true;
        this.startTouchX = evt.stageX;
        this.startTouchY = evt.stageY;
        //this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
    };
    Game.prototype.onTouchTap = function (evt) {
        this.bodyCircle.velocity[1] = 10;
    };
    Game.prototype.createDebug = function () {
        var sprite = new egret.Sprite();
        this.addChild(sprite);
        this.debugDraw = new p2DebugDraw(this.world, sprite, this.stage.stageHeight);
    };
    Game.prototype.touchEventHandler = function (te) {
        var mousePos = new Array(te.stageX / this.factor, te.stageY / this.factor);
        switch (te.type) {
            case egret.TouchEvent.TOUCH_BEGIN:
                this.prePoint = this.copyPoint(mousePos);
                this.points.push(this.prePoint, this.prePoint);
                this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchEventHandler, this);
                break;
            case egret.TouchEvent.TOUCH_END://alert("aaa");
                this.createConvexBody();
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchEventHandler, this);
                break;
            case egret.TouchEvent.TOUCH_MOVE:
                var dis = p2.vec2.dist(mousePos, this.prePoint);
                if (dis > 30 / this.factor) {
                    this.points.push(this.prePoint);
                    this.prePoint = this.copyPoint(mousePos);
                    this.points[this.points.length - 1] = this.copyPoint(mousePos);
                }
                else {
                    this.points[this.points.length - 1] = this.copyPoint(mousePos);
                }
                break;
        }
    };
    Game.prototype.createConvexBody = function () {
        /* 错误的做法，使用Convex形状，创建多边形.
        var triangleShape: p2.Convex = new p2.Convex({vertices:this.points});
        var body: p2.Body = new p2.Body({ mass: 1, position:[100/this.factor,100/this.factor] });
        body.addShape(triangleShape);
        */
        //正确的做法，使用fromPolygon()函数，来创建刚体
        var body = new p2.Body({ mass: 3 });
        for (var i = 0; i < this.points.length; ++i) {
            this.points[i][1] = (this.stage.stageHeight - this.points[i][1] * this.factor) / this.factor;
        }
        body.fromPolygon(this.points, { optimalDecomp: false });
        this.world.addBody(body);
        this.points = [];
    };
    Game.prototype.copyPoint = function (p) {
        return new Array(p[0], p[1]);
    };
    Game.prototype.createGameScene = function (_self) {
        this.touchEnabled = true;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchEventHandler, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEventHandler, this);
        //this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        //this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.kmText = new egret.TextField();
        this.kmText.text = "0 km";
        this.kmText.size = 50;
        this.kmText.fontFamily = "Segoe UI Light";
        this.kmText.anchorOffsetX = this.kmText.textWidth / 2;
        this.kmText.anchorOffsetY = this.kmText.textHeight / 2;
        this.kmText.x = 100;
        this.kmText.y = 200;
        var world = new p2.World();
        this.world = world;
        var bg = new egret.Shape();
        bg.graphics.beginFill(0x87fd82);
        bg.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
        bg.graphics.endFill();
        _super.prototype.addChild.call(this, bg);
        this.addChild(this.kmText);
        world.sleepMode = p2.World.NO_SLEEPING;
        world.gravity = [0, -10];
        var ball = new egret.Bitmap(RES.getRes("ball_png"));
        this.addChild(ball);
        this.bodyCircle = new p2.Body({ mass: 5, position: [this.stage.stageWidth * 0.25 / 50, (this.stage.stageHeight - 200) / 50] });
        var shpCircle = new p2.Circle({ radius: 1 });
        this.bodyCircle.addShape(shpCircle);
        world.addBody(this.bodyCircle);
        this.except.push(this.bodyCircle.id);
        ball.width = shpCircle.radius * 50 * 2;
        ball.height = shpCircle.radius * 50 * 2;
        ball.anchorOffsetX = ball.width / 2;
        ball.anchorOffsetY = ball.height / 2;
        this.bodyCircle.displays = [ball];
        var groundWidth = 100 + 300 * Math.random();
        var startPoint = 100 + 300 * Math.random();
        var ground = new egret.Bitmap(RES.getRes("square_png"));
        var points = new Array();
        points.push([startPoint, 200], [startPoint + groundWidth, 200]);
        points.push([startPoint + 200 * Math.random(), 200 + 200 * Math.random()]);
        //this.groundID.push(this.addSquare(new Array([100,0],[400,0],[400,300],[0,300])));
        this.grounds.push(this.addSquare(points));
        var bodyPlane = new p2.Body({ position: [0, 200 / this.factor] /*[this.stage.stageWidth/2/50,(200)/50]*/ });
        var Plane = new p2.Plane();
        bodyPlane.addShape(Plane);
        bodyPlane.displays = [ground];
        this.world.addBody(bodyPlane);
        this.except.push(bodyPlane.id);
        this.bodyPlaneId = bodyPlane.id;
        //bodyPlane.displays = [ground];
        ground.scaleX = 5;
        ground.scaleY = 2;
        ground.anchorOffsetX = ground.width / 2;
        ground.x = this.stage.stageWidth / 2;
        ground.y = this.stage.stageHeight - 200;
        this.addChild(ground);
        var x = this.addSquare(new Array([0, this.stage.stageHeight], [this.stage.stageWidth, this.stage.stageHeight], [this.stage.stageWidth, this.stage.stageHeight + 100], [0, this.stage.stageHeight + 100]));
        this.except.push(x.id);
        this.FloorId = x.id;
        this.createDebug();
        //alert(this.bodyCircle.position);
        //alert(this.grounds[2].position);
        egret.Ticker.getInstance().register(function (dt) {
            //使世界时间向后运动
            world.step(dt / 1000);
            this.debugDraw.drawDebug(this.except);
            if (this.points.length > 1)
                this.debugDraw.drawLineConvex(this.points, 0xffffff, 0.7, true);
            ball.x = this.bodyCircle.position[0] * 50;
            ball.y = this.stage.stageHeight - this.bodyCircle.position[1] * 50;
            ball.rotation = 360 - this.bodyCircle.angle * 180 / Math.PI;
            if (this.bodyCircle.position[1] < -1) {
                //this.bodyCircle.position[1] = -1;
                //this.world.removeBody(this.bodyCircle);
            }
            this.keepTrack();
            //this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        }, this);
        var tx = new egret.TextField();
        tx.text = "Let it Move!";
        tx.size = 100;
        this.addChild(tx);
        tx.fontFamily = "Segoe UI Light";
        tx.anchorOffsetX = tx.textWidth / 2;
        tx.anchorOffsetY = tx.textHeight / 2;
        tx.x = this.stage.stageWidth / 2;
        tx.y = this.stage.stageHeight / 2 - 300;
        //egret.Tween.get( ball ,{ loop:true } ).to({scaleX:.5, scaleY:.5}, 2000, egret.Ease.backInOut);
        // var restartButton:egret.Bitmap = new egret.Bitmap( RES.getRes("button_png") );
        //restartButton.anchorOffsetX = restartButton.width / 2;
        //restartButton.anchorOffsetY = restartButton.height / 2;
        //restartButton.x = this.stage.stageWidth / 2;
        //restartButton.y = this.stage.stageHeight / 2 + 300;
        //restartButton.touchEnabled = true;
        //restartButton.addEventListener( egret.TouchEvent.TOUCH_TAP, this.touchHandler, this );
        //this.addChild(restartButton);
    };
    Game.prototype.touchHandler = function (evt) {
        var stage = this.stage;
        stage.addChild(new Game());
        this.stage.removeChild(this);
        //var button:egret.Bitmap = evt.currentTarget;
    };
    Game.prototype.addSquare = function (v) {
        for (var i = 0; i < v.length; ++i) {
            v[i][0] /= this.factor;
            v[i][1] /= this.factor;
        }
        var bodyGround = new p2.Body({ position: [0, 0] /*[this.stage.stageWidth/2/50,(200)/50]*/ });
        var shpGround = new p2.Convex({ vertices: v });
        bodyGround.addShape(shpGround);
        this.world.addBody(bodyGround);
        this.except.push(bodyGround.id);
        var square = new egret.Sprite();
        square.graphics.lineStyle(1, 0xffffff);
        square.graphics.beginFill(0xffffff, 1);
        square.graphics.moveTo(v[0][0] * this.factor, this.stage.stageHeight - v[0][1] * this.factor);
        for (var i = 1; i < v.length; ++i)
            square.graphics.lineTo(v[i][0] * this.factor, this.stage.stageHeight - v[i][1] * this.factor);
        square.graphics.lineTo(v[0][0] * this.factor, this.stage.stageHeight - v[0][1] * this.factor);
        square.graphics.endFill();
        bodyGround.displays = [square];
        //alert(bodyGround.displays[0].x);
        this.addChild(square);
        return bodyGround;
    };
    Game.prototype.gameOver = function () {
        this.removeChildren();
        this.world.removeBody(this.bodyCircle);
        var restartButton = new egret.Bitmap(RES.getRes("button_png"));
        restartButton.anchorOffsetX = restartButton.width / 2;
        restartButton.anchorOffsetY = restartButton.height / 2;
        restartButton.x = this.stage.stageWidth / 2;
        restartButton.y = this.stage.stageHeight / 2 + 300;
        restartButton.touchEnabled = true;
        restartButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        this.addChild(restartButton);
    };
    Game.prototype.refresh = function () {
        var l = this.world.bodies.length;
        for (var i = 0; i < l; i++) {
            var body = this.world.bodies[i];
            var isValid = true;
            for (var k = 0; k < this.except.length; k++)
                if (body.id === this.except[k])
                    isValid = false;
            if (isValid === true)
                this.world.removeBody(body);
            l = this.world.bodies.length;
        }
        //alert(this.refreshBound);
        var points = new Array();
        var groundWidth = 100 + 300 * Math.random();
        var startPoint = 540 + 100 * Math.random();
        points.push([startPoint, 200], [startPoint + groundWidth, 200]);
        points.push([startPoint + 200 * Math.random(), 200 + 600 * Math.random()]);
        //this.groundID.push(this.addSquare(new Array([100,0],[400,0],[400,300],[0,300])));
        this.grounds.push(this.addSquare(points));
        if (this.grounds.length >= 3) {
            this.removeChild(this.grounds[0].displays[0]);
            this.world.removeBody(this.grounds[0]);
            this.grounds.splice(0, 1);
        }
        //this.refreshBound += 600;
    };
    return Game;
}(egret.DisplayObjectContainer));
__reflect(Game.prototype, "Game");
//# sourceMappingURL=Game.js.map