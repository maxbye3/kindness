System.register(['angular2/core', './go.cal.component'], function(exports_1, context_1) {
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
    var core_1, go_cal_component_1;
    var KindnessComplete;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (go_cal_component_1_1) {
                go_cal_component_1 = go_cal_component_1_1;
            }],
        execute: function() {
            KindnessComplete = (function () {
                function KindnessComplete(gocalComponent) {
                    this.gocalComponent = gocalComponent;
                }
                KindnessComplete.prototype.goCal = function () {
                    this.gocalComponent.toCal();
                };
                KindnessComplete = __decorate([
                    core_1.Component({
                        selector: 'kindness-complete',
                        template: "\n<!-- KINDNESS Done Screen -->\n    <div id='doneView' style=\"display: none;\">\n            \n            <h1> Your daily kindness is complete.\n            <br> New day starts in {{hoursLeft}} hours. \n            <br>In the meantime, plan somein' nice or... \n            <br>\n            <div (click)=\"goCal()\"\n            style=\"\n            border: black solid 2px; padding: 5px; MARGIN-TOP: 7.5PX;\"> \n            check progress \n            </div>\n            \n    <!-- done screen-->\n\n  ",
                        styleUrls: ["app/sonny.dialogue.component.css"],
                        providers: [go_cal_component_1.GoCalComponent]
                    }), 
                    __metadata('design:paramtypes', [go_cal_component_1.GoCalComponent])
                ], KindnessComplete);
                return KindnessComplete;
            }());
            exports_1("KindnessComplete", KindnessComplete);
        }
    }
});
//# sourceMappingURL=kindness-complete.component.js.map