System.register(['angular2/core', './kindness'], function(exports_1, context_1) {
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
    var core_1, kindness_1;
    var KindnessDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (kindness_1_1) {
                kindness_1 = kindness_1_1;
            }],
        execute: function() {
            KindnessDetailComponent = (function () {
                function KindnessDetailComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', kindness_1.Kindness)
                ], KindnessDetailComponent.prototype, "kindness", void 0);
                KindnessDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-kindness-detail',
                        template: "\n  <div *ngIf=\"kindness\">\n    <h2>{{kindness.deed}} details!</h2>\n    <div><label>id: </label>{{kindness.id}}</div>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"kindness.deed\" placeholder=\"deed\"/>\n    </div>\n  </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], KindnessDetailComponent);
                return KindnessDetailComponent;
            }());
            exports_1("KindnessDetailComponent", KindnessDetailComponent);
        }
    }
});
//# sourceMappingURL=kindness-detail.component.js.map