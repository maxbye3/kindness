System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SonnyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SonnyComponent = (function () {
                function SonnyComponent() {
                }
                SonnyComponent.prototype.ngOnInit = function () {
                    this.sonnyState("intro");
                };
                SonnyComponent.prototype.startTalking = function () {
                    var speechBubble = document.getElementById('speechBubble').style;
                    speechBubble.display = "block";
                    speechBubble.width = "0vw";
                    speechBubble.opacity = ".5";
                    setTimeout(function () {
                        var bubbleOffset = window.innerWidth - 140;
                        speechBubble.width = bubbleOffset + "px";
                        speechBubble.opacity = "1";
                    }, 0);
                };
                SonnyComponent.prototype.stopTalking = function () {
                    var speechBubble = document.getElementById('speechBubble').style;
                    speechBubble.width = "0vw";
                    speechBubble.opacity = "0";
                    setTimeout(function () {
                        speechBubble.display = "none";
                    }, 700);
                };
                /*
                * Changing Sonny Graphic
                */
                SonnyComponent.prototype.sonnyState = function (state) {
                    var _this = this;
                    this.sonnyImg = document.getElementById("sonnyGif");
                    switch (state) {
                        case "intro":
                            this.sonnyImg.src = "./img/sonny/intro.gif?t=" + new Date().getTime();
                            setTimeout(function () {
                                _this.sonnyState("talking");
                            }, 2000);
                            break;
                        case "exit":
                            console.log('exit');
                            setTimeout(function () {
                                _this.stopTalking();
                                _this.sonnyImg.src = "./img/sonny/exit.gif?t=" + new Date().getTime();
                            }, 3000);
                            break;
                        case "talking":
                            this.startTalking();
                            this.sonnyImg.src = "./img/sonny/talking.gif?t=" + new Date().getTime();
                            break;
                        case "winning":
                            this.stopTalking();
                            this.sonnyImg.src = "./img/sonny/winning.gif?t=" + new Date().getTime();
                            break;
                        case "bounce":
                            this.sonnyImg.src = "./img/sonny/bounce.gif?t=" + new Date().getTime();
                            break;
                        case "checkout":
                            this.sonnyImg.src = "./img/sonny/checkout.gif?t=" + new Date().getTime();
                            break;
                        case "yawn":
                            this.sonnyImg.src = "./img/sonny/yawn.gif?t=" + new Date().getTime();
                            break;
                        case "idle":
                            this.sonnyImg.src = "./img/sonny/idle.gif?t=" + new Date().getTime();
                            break;
                        case "idle-blink.gif":
                            this.sonnyImg.src = "./img/sonny/idle-blink.gif?t=" + new Date().getTime();
                            break;
                        case "idle-look.gif":
                            this.sonnyImg.src = "./img/sonny/idle-look.gif?t=" + new Date().getTime();
                            break;
                        default:
                            this.sonnyImg.src = "";
                    }
                };
                SonnyComponent = __decorate([
                    core_1.Component({
                        selector: 'sonny',
                        templateUrl: 'app/sonny.component.html',
                        styleUrls: ['app/sonny.component.css'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], SonnyComponent);
                return SonnyComponent;
            }());
            exports_1("SonnyComponent", SonnyComponent);
        }
    }
});
//# sourceMappingURL=sonny.component.js.map