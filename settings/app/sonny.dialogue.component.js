System.register(['angular2/core', './sonny.component', './kindness-complete.component', './kindness.service'], function(exports_1, context_1) {
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
    var core_1, sonny_component_1, kindness_complete_component_1, kindness_service_1;
    var SonnyDialogue;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sonny_component_1_1) {
                sonny_component_1 = sonny_component_1_1;
            },
            function (kindness_complete_component_1_1) {
                kindness_complete_component_1 = kindness_complete_component_1_1;
            },
            function (kindness_service_1_1) {
                kindness_service_1 = kindness_service_1_1;
            }],
        execute: function() {
            SonnyDialogue = (function () {
                function SonnyDialogue(sonnyComponent, kindnessService) {
                    this.sonnyComponent = sonnyComponent;
                    this.kindnessService = kindnessService;
                }
                SonnyDialogue.prototype.ngOnInit = function () {
                    var _this = this;
                    //calculate the number of hours left
                    this.hoursLeft = this.calculateHoursLeft();
                    // setTimeout(() => {  
                    //     document.getElementById("kindnessView").style.display = 'none';
                    // }, 0); 
                    var victoryTrue = document.getElementById("doneView").style.display != "none";
                    if (!victoryTrue) {
                        this.greeting(false, ["Hello! Welcome!<br>This is the prototype of the Kindness App!", "Click this icon <img src='./img/icons/sonny.png' style='height: 20px;border: #473939 solid 0.5px;padding: 5px;vertical-align: bottom;'> if you need my help."]);
                    }
                    else {
                        this.greeting(false, ["Welcome Back!<br>You've submitted your daily kindness", "However, there's more to explore. Click <img src='./img/icons/sonny.png' style='height: 20px;border: #473939 solid 0.5px;padding: 5px;vertical-align: bottom;'> if you need my help."]);
                    }
                    setTimeout(function () {
                        _this.jiggleIcon();
                    }, 8000);
                    // if sonnyStay set to false then this callback will launch:
                    this.launchOutro = function () { return _this.outro(); };
                    // TEMP - LAUNCH CONTACT
                    // document.getElementById("kindnessView").style.display = 'none';
                    // this.sonnyComponent.startTalking();
                    // this.contactme();
                    // TEMP - LAUNCH HELP MENU       
                    // this.transitionViews("kindnessView","helpView");
                    // // launch sonny
                    // this.sonnyComponent.sonnyState('intro');
                    // // ask for help
                    // this.greeting(true,["How can I help?"]);  
                };
                /*
                * HELP SCREEN
                * needs to be moved
                */
                /*
                * goCal()
                */
                SonnyDialogue.prototype.calWin = function () {
                    console.log('pre-yolo');
                    this.calComponent.calanderWin();
                };
                /*
                * Calculate the hourse left
                */
                SonnyDialogue.prototype.calculateHoursLeft = function () {
                    var d = new Date();
                    var n = d.getHours();
                    var hoursLeft = 24 - n;
                    return hoursLeft;
                };
                /*
                * BACK TO KINDNESS VIEW
                */
                SonnyDialogue.prototype.goBack = function (page) {
                    var _this = this;
                    this.sonnySpeech(true, ["Click <img src='./img/icons/sonny.png' style='height: 20px;border: #473939 solid 0.5px;padding: 5px;vertical-align: bottom;'> if you need anything else!!"]);
                    if (page == "help")
                        this.transitionViews("helpView", "kindnessView");
                    else
                        this.transitionViews("contactView", "kindnessView");
                    setTimeout(function () {
                        _this.outro();
                        _this.jiggleIcon();
                    }, 3200);
                };
                /*
                * EXAMPLE KINDNESS
                */
                SonnyDialogue.prototype.giveExample = function () {
                    document.getElementById("typed").innerHTML = "okay.. let me think..";
                    console.log("provide kidness example");
                    this.transitionViews("helpView", "kindnessView");
                    // sony asks if this okay
                    this.sonnySpeech(false, ["Here's something you could do.. Feel free to edit the act if it's not quite right.."]);
                    // placeholders edited        
                    document.getElementById("inputPerson").value = "folks";
                    document.getElementById("inputKindness").value = "call them and catch up";
                };
                /*
                 * CONTACT ME
                 */
                SonnyDialogue.prototype.contactme = function () {
                    document.getElementById("typed").innerHTML = "Great! Let me just find the forms..";
                    this.transitionViews("helpView", "contactView");
                    // sony contact disclaimer
                    this.sonnySpeech(true, ["Using the fields below you can contact the developer directly, who thinks he's a being from the moon.",
                        "I know.. It's a bit strange. I think it's some psychological miswiring. Luckily, we're working through it.",
                        "Seriously though, thanks for taking the time.", "All feedback is used to improve the app."]);
                };
                SonnyDialogue.prototype.launchBirds = function () {
                    var _this = this;
                    // console.log("launch birds");
                    setTimeout(function () {
                        document.getElementById("birdContainer").style.left = "100%";
                    }, 500);
                    setTimeout(function () {
                        document.getElementById("birdContainer").style.left = "-400px";
                    }, 50000);
                    setTimeout(function () {
                        _this.launchBirds();
                    }, 100000);
                };
                /*
                * SONNY HELP
                */
                SonnyDialogue.prototype.intHelp = function () {
                    this.launchBirds();
                    var sonny = document.getElementById("sonnyIcon");
                    var ctx = this;
                    document.getElementById("typed").innerHTML = "";
                    sonny.addEventListener("click", function () {
                        //if done screen detected then transition from tht screen otherwise
                        var victoryTrue = document.getElementById("doneView").style.display != "none";
                        if (victoryTrue) {
                            // transition from done view to helpView
                            ctx.transitionViews('doneView', 'helpView');
                        }
                        else {
                            // transition from kindness view to help view
                            ctx.transitionViews('kindnessView', 'helpView');
                        }
                        // launch sonny
                        ctx.sonnyComponent.sonnyState('intro');
                        // ask for help
                        ctx.greeting(true, ["How can I help?"]);
                    });
                };
                SonnyDialogue.prototype.sonnyClick = function () {
                    console.log("click!");
                };
                /*
                 * OUTRO/INTRO TRANSITION
                 */
                SonnyDialogue.prototype.transitionViews = function (screen1, screen2) {
                    // exit screen 1
                    document.getElementById(screen1).className = "";
                    document.getElementById(screen1).className += " outro";
                    // enter screen 2
                    document.getElementById(screen2).className = "";
                    document.getElementById(screen2).className += " intro";
                };
                /* HELP SCREEN (END)*/
                /*
                * SONNY'S OUTRO
                */
                SonnyDialogue.prototype.outro = function () {
                    var _this = this;
                    this.sonnyComponent.sonnyState('exit');
                    setTimeout(function () {
                        _this.intHelp();
                    }, 5000);
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
                * JIGGLE Sonny ICON
                */
                SonnyDialogue.prototype.jiggleIcon = function () {
                    document.getElementById('sonnyIcon').style.display = 'initial';
                    document.getElementById("sonnyIcon").className += ' jiggleLink';
                };
                /*
                * SONNY SPEECH
                */
                SonnyDialogue.prototype.sonnySpeech = function (sonnyStay, phraseArray) {
                    var sonnyStay = sonnyStay;
                    var ctx = this;
                    jQuery("#typed").typed({
                        strings: phraseArray,
                        typeSpeed: 0,
                        showCursor: false,
                        backDelay: 750,
                        backSpeed: 0,
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
                        template: "\n    <kindness-complete></kindness-complete>\n    <!-- Help Screen -->\n    <div id='helpView'>\n            <div class=\"themeButton selected\" (click)=\"giveExample()\">\n                give me an example kindness\n            </div>\n\n            <div class=\"themeButton selected\" >\n                show me the tour again\n            </div>\n\n            <div class=\"themeButton selected\" (click)=\"contactme()\">\n            I have a question \n            </div>\n\n            <div class=\"themeButton selected\" (click)=\"goBack('help')\">\n                go back\n            </div>\n        </div>\n    <!--help screen-->\n\n    <!-- Contact View -->\n    <div id=\"contactView\" style=\"position: absolute\">\n        <form action=\"\" id=\"kindness\" style=\"width: 80%\">\n          <div style=\"text-align: left;\">\n            <h3>Your Email</h3>\n            <input class=\"input\" type=\"text\" id=\"inputOptional\" placeholder=\"optional\">\n            \n\n            <h3>Message </h3>\n            <input class=\"input\" type=\"text\" id=\"inputMessage\" placeholder=\"Leave thoughts, feelings, death threats, comments and/or feedback here\">\n           \n          </div>\n\n          <div class=\"themeButton selected\">\n            SUBMIT\n          </div>\n\n          <div class=\"themeButton selected\" (click)=\"goBack('email')\">\n                go back\n            </div>\n\n\n        </form>\n      </div><!-- contact view -->\n    ",
                        styleUrls: ["app/sonny.dialogue.component.css"],
                        directives: [kindness_complete_component_1.KindnessComplete],
                        providers: [sonny_component_1.SonnyComponent, kindness_service_1.KindnessService]
                    }), 
                    __metadata('design:paramtypes', [sonny_component_1.SonnyComponent, kindness_service_1.KindnessService])
                ], SonnyDialogue);
                return SonnyDialogue;
            }());
            exports_1("SonnyDialogue", SonnyDialogue);
        }
    }
});
//# sourceMappingURL=sonny.dialogue.component.js.map