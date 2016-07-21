System.register(['angular2/core', './weather.component'], function(exports_1, context_1) {
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
    var core_1, weather_component_1;
    var SonnyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_component_1_1) {
                weather_component_1 = weather_component_1_1;
            }],
        execute: function() {
            SonnyComponent = (function () {
                function SonnyComponent(weatherComponent) {
                    this.weatherComponent = weatherComponent;
                }
                SonnyComponent.prototype.ngOnInit = function () {
                    this.sonnyState("intro");
                };
                SonnyComponent.prototype.startTalking = function () {
                    var speechBubble = document.getElementById('speechBubble').style;
                    //speechBubble.display="block";
                    speechBubble.width = "0vw";
                    speechBubble.opacity = ".5";
                    setTimeout(function () {
                        var bubbleOffset = window.innerWidth - 140;
                        speechBubble.width = bubbleOffset + "px";
                        speechBubble.opacity = "1";
                    }, 0);
                };
                SonnyComponent.prototype.stopTalking = function () {
                    document.getElementById("typed").innerHTML = "";
                    var speechBubble = document.getElementById('speechBubble').style;
                    speechBubble.width = "0vw";
                    speechBubble.opacity = "0";
                };
                /*
                 * JIGGLE Sonny ICON
                 */
                SonnyComponent.prototype.jiggleIcon = function (img) {
                    this.weatherComponent.rain(); // tinsel rain 
                    setTimeout(function () {
                        img.src = "./img/sonny/exit.gif?t=" + new Date().getTime();
                        document.getElementById('sonnyIcon').style.display = 'initial';
                        setTimeout(function () {
                            document.getElementById("sonnyIcon").className += ' jiggleLink';
                            setTimeout(function () {
                                document.getElementById("sonnyIcon").className = "menuItem";
                            }, 2000);
                        }, 500);
                    }, 5000);
                };
                /*
                * Changing Sonny Graphic
                */
                SonnyComponent.prototype.sonnyState = function (state) {
                    var _this = this;
                    var sonnyIcon = document.getElementById('sonnyIcon');
                    var sonnyImg = document.getElementById("sonnyGif");
                    var sonnyStatic = document.getElementById("sonnyStatic");
                    switch (state) {
                        case "intro":
                            sonnyImg.style.display = 'initial';
                            sonnyIcon.style.display = 'none';
                            sonnyStatic.style.display = 'none';
                            sonnyStatic.src = "./img/sonny/idle.png";
                            sonnyImg.src = "./img/sonny/intro.gif?t=" + new Date().getTime();
                            setTimeout(function () {
                                sonnyStatic.style.display = 'intial';
                                _this.sonnyState("talking");
                            }, 2000);
                            break;
                        case "exit":
                            setTimeout(function () {
                                _this.stopTalking();
                                sonnyImg.src = "./img/sonny/exit.gif?t=" + new Date().getTime();
                                setTimeout(function () {
                                    _this.sonnyState("");
                                }, 3000);
                            }, 3000);
                            break;
                        case "talking":
                            this.startTalking();
                            sonnyImg.src = "./img/sonny/talking.gif?t=" + new Date().getTime();
                            //sonnyStatic.style.display = 'none';
                            break;
                        case "winning":
                            this.stopTalking();
                            sonnyImg.style.display = "none";
                            sonnyStatic.style.display = "block";
                            sonnyIcon.style.display = 'none';
                            sonnyStatic.src = "./img/sonny/winning.gif?t=" + new Date().getTime();
                            this.jiggleIcon(sonnyStatic);
                            break;
                        case "intro-winning":
                            this.stopTalking();
                            sonnyImg.style.display = 'initial';
                            sonnyIcon.style.display = 'none';
                            sonnyImg.src = "./img/sonny/intro.gif?t=" + new Date().getTime();
                            setTimeout(function () {
                                sonnyImg.src = "./img/sonny/winning.gif?t=" + new Date().getTime();
                                _this.jiggleIcon(sonnyImg);
                            }, 2000);
                            break;
                        case "bounce":
                            sonnyImg.src = "./img/sonny/bounce.gif?t=" + new Date().getTime();
                            break;
                        case "checkout":
                            sonnyImg.src = "./img/sonny/checkout.gif?t=" + new Date().getTime();
                            break;
                        case "yawn":
                            sonnyImg.src = "./img/sonny/yawn.gif?t=" + new Date().getTime();
                            break;
                        case "idle":
                            sonnyImg.src = "./img/sonny/idle.gif?t=" + new Date().getTime();
                            break;
                        case "idle-blink.gif":
                            sonnyImg.src = "./img/sonny/idle-blink.gif?t=" + new Date().getTime();
                            break;
                        case "idle-look.gif":
                            sonnyImg.src = "./img/sonny/idle-look.gif?t=" + new Date().getTime();
                            break;
                        default:
                            sonnyImg.src = "./img/sonny/none.png";
                            // sonny call icon appear
                            sonnyIcon.style.display = 'initial';
                            sonnyIcon.className = 'menuItem';
                            sonnyIcon.style.opacity = "1";
                            // get rid of sonny gif
                            sonnyImg.style.display = 'none';
                            sonnyImg.src = "./img/sonny/none.png";
                            break;
                    }
                };
                SonnyComponent = __decorate([
                    core_1.Component({
                        selector: 'sonny',
                        templateUrl: 'app/sonny.component.html',
                        styleUrls: ['app/sonny.component.css'],
                        providers: [weather_component_1.WeatherComponent]
                    }), 
                    __metadata('design:paramtypes', [weather_component_1.WeatherComponent])
                ], SonnyComponent);
                return SonnyComponent;
            }());
            exports_1("SonnyComponent", SonnyComponent);
        }
    }
});
//# sourceMappingURL=sonny.component.js.map