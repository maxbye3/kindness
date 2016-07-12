System.register(['angular2/core', './sonny.component'], function(exports_1, context_1) {
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
    var core_1, sonny_component_1;
    var SonnyDialogue;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sonny_component_1_1) {
                sonny_component_1 = sonny_component_1_1;
            }],
        execute: function() {
            SonnyDialogue = (function () {
                function SonnyDialogue(sonnyComponent) {
                    this.sonnyComponent = sonnyComponent;
                }
                SonnyDialogue.prototype.ngOnInit = function () {
                    var _this = this;
                    //this.greeting(false,["Hello! Welcome!<br>This is the Kindness Prototype!","Click <img src='./img/icons/sonny.png' style='height: 20px;border: #473939 solid 0.5px;padding: 5px;vertical-align: bottom;'> if you need my help"]);
                    this.greeting(false, ["Hello!"]);
                    this.jiggleIcon();
                    // if sonnyStay set to false then this callback will launch:
                    this.launchOutro = function () { return _this.outro(); };
                };
                /*
                * SONNY'S OUTRO
                */
                SonnyDialogue.prototype.outro = function () {
                    var _this = this;
                    this.sonnyComponent.sonnyState('exit');
                    setTimeout(function () {
                        _this.sonnyIntHelp();
                    }, 5000);
                };
                /*
                * SONNY HELP
                */
                SonnyDialogue.prototype.sonnyIntHelp = function () {
                    var ctx = this;
                    var sonny = document.getElementById("sonnyIcon");
                    jQuery("#sonnyIcon p").html("SHOW");
                    this.cleanSonny();
                    sonny.addEventListener("click", function () {
                        // add slide left
                        // launch sonny
                        ctx.sonnyComponent.sonnyState('intro');
                        // ask for help
                        ctx.greeting(true, ["How can I help?"]);
                    }, false);
                    return;
                };
                /*
                * GREETING
                */
                SonnyDialogue.prototype.greeting = function (sonnyStay, phraseArray) {
                    var _this = this;
                    setTimeout(function () {
                        _this.sonnySpeech(sonnyStay, phraseArray);
                    }, 2200);
                }; // greeting 
                /*
                * JIGGLE ICON
                */
                SonnyDialogue.prototype.jiggleIcon = function () {
                    setTimeout(function () {
                        document.getElementById("sonnyIcon").className += ' jiggleLink';
                    }, 7200);
                };
                /*
                * CLEAN SONNY
                * cleans sonny graphic so starting animation doesn't showCursor
                * cleans the speech bubble so prev phrase doesn't appear
                */
                SonnyDialogue.prototype.cleanSonny = function () {
                    jQuery("#typed").html('');
                    var sonnyImg = document.getElementById("sonnyGif");
                    sonnyImg.src = "";
                };
                /*
                * SONNY SPEECH
                */
                SonnyDialogue.prototype.sonnySpeech = function (sonnyStay, phraseArray) {
                    debugger;
                    var sonnyStay = sonnyStay;
                    var ctx = this;
                    jQuery("#typed").typed({
                        strings: phraseArray,
                        typeSpeed: 0,
                        showCursor: false,
                        backDelay: 750,
                        backSpeed: 2,
                        loop: false,
                        loopCount: false,
                        callback: function () {
                            if (!sonnyStay) {
                                ctx.launchOutro();
                            }
                            // cleanup
                            phraseArray = [];
                            return;
                        }
                    });
                };
                SonnyDialogue = __decorate([
                    core_1.Component({
                        selector: 'sonny-speech',
                        template: '',
                        providers: [sonny_component_1.SonnyComponent]
                    }), 
                    __metadata('design:paramtypes', [sonny_component_1.SonnyComponent])
                ], SonnyDialogue);
                return SonnyDialogue;
            }());
            exports_1("SonnyDialogue", SonnyDialogue);
        }
    }
});
//# sourceMappingURL=sonny.dialogue.component.js.map