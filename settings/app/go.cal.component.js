System.register(['angular2/core', './cal.component'], function(exports_1, context_1) {
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
    var core_1, cal_component_1;
    var GoCalComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cal_component_1_1) {
                cal_component_1 = cal_component_1_1;
            }],
        execute: function() {
            GoCalComponent = (function () {
                function GoCalComponent(calComponent) {
                    this.calyCount = 0;
                    this.calComponent = calComponent;
                }
                /*
                  * Go To Calander View
                  */
                GoCalComponent.prototype.toCal = function () {
                    setTimeout(function () {
                        document.getElementById("calyGif").style.display = "block";
                        document.getElementById("calyGif").style.opacity = "1";
                    }, 500);
                    jQuery("html, body").animate({
                        scrollTop: jQuery(document).height()
                    }, 1000);
                    // Cal Count
                    this.calyCount++;
                    this.setupCaly();
                    return;
                };
                GoCalComponent.prototype.setupCaly = function () {
                    switch (this.calyCount) {
                        case 1:
                            this.calComponent.calyState("intro");
                            this.calComponent.intTask();
                            break;
                        case 2:
                            console.log("caly phone");
                            document.getElementById("calyCall").style.display = "none";
                            this.calComponent.calyState("return-phone");
                            break;
                        default:
                            console.log("caly gone");
                            document.getElementById("calType").innerHTML = ""; // remove text from bubble
                            document.getElementById("calyGif").style.right = "-200px";
                            document.getElementById("calType").innerHTML = "";
                            document.getElementById("calyGif").style.display = "none";
                            document.getElementById("calyPhone").style.display = "none";
                            document.getElementById("calyCall").style.display = "block";
                            this.calComponent.calyState("");
                            break;
                    }
                };
                GoCalComponent = __decorate([
                    core_1.Component({
                        selector: 'go-cal',
                        template: "\n<div class=\"kindnessCal\">\n  <!--cal view-->\n  <div class=\"menuItem\" (click)=\"toCal()\">\n    <a>\n      <img src=\"./img/caly/chatIdle.png\">\n      <p>See More</p>\n    </a>\n  </div>\n</div>\n\n  ",
                        styleUrls: ['app/background.component.css'],
                        providers: [cal_component_1.CalComponent]
                    }), 
                    __metadata('design:paramtypes', [cal_component_1.CalComponent])
                ], GoCalComponent);
                return GoCalComponent;
            }());
            exports_1("GoCalComponent", GoCalComponent);
        }
    }
});
//# sourceMappingURL=go.cal.component.js.map