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
    var sonnySpeech;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sonny_component_1_1) {
                sonny_component_1 = sonny_component_1_1;
            }],
        execute: function() {
            sonnySpeech = (function () {
                //sonnyImg : HTMLImageElement; 
                function sonnySpeech(sonnyComponent) {
                    this.sonnyComponent = sonnyComponent;
                }
                sonnySpeech.prototype.ngOnInit = function () {
                    // if sonnyStay set to false then this callback will launch:
                    var _this = this;
                    this.launchOutro = function () { return _this.sonnyComponent.sonnyState('exit'); };
                    setTimeout(function () {
                        // GREETING          
                        _this.sonnySpeech(false, "Hello! Welcome!<br>This is the Kindness Prototype!", "Click <img src='./img/icons/sonny.png' style='height: 20px;border: #473939 solid 0.5px;padding: 5px;vertical-align: bottom;'> if you need my help", null);
                        setTimeout(function () {
                            jQuery(".sonnyIcon").addClass("jiggleLink");
                        }, 5000);
                        // greeting  
                    }, 2200);
                };
                sonnySpeech.prototype.sonnySpeech = function (sonnyStay, item1, item2, item3) {
                    var itemArray = [item1, item2, item3];
                    var sonnyArray = [];
                    var sonnyStay = sonnyStay;
                    var classname = this;
                    for (var i = 0; i < itemArray.length; i++) {
                        if (itemArray[i] != null) {
                            sonnyArray.push(itemArray[i]);
                        }
                    }
                    jQuery("#typed").typed({
                        strings: sonnyArray,
                        typeSpeed: 0,
                        showCursor: false,
                        backDelay: 750,
                        backSpeed: 2,
                        loop: false,
                        loopCount: false,
                        callback: function () {
                            if (!sonnyStay) {
                                classname.launchOutro();
                            }
                        }
                    });
                };
                sonnySpeech = __decorate([
                    core_1.Component({
                        selector: 'sonny-speech',
                        template: '',
                        // directives: [SonnyComponent],
                        providers: [sonny_component_1.SonnyComponent]
                    }), 
                    __metadata('design:paramtypes', [sonny_component_1.SonnyComponent])
                ], sonnySpeech);
                return sonnySpeech;
            }());
            exports_1("sonnySpeech", sonnySpeech);
        }
    }
});
//# sourceMappingURL=speech.component.js.map