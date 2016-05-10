System.register(['angular2/core', 'angular2/router', './kindness.service'], function(exports_1, context_1) {
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
    var core_1, router_1, kindness_service_1;
    var KindnessDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (kindness_service_1_1) {
                kindness_service_1 = kindness_service_1_1;
            }],
        execute: function() {
            KindnessDetailComponent = (function () {
                function KindnessDetailComponent(_kindnessService, _routeParams) {
                    this._kindnessService = _kindnessService;
                    this._routeParams = _routeParams;
                }
                KindnessDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._kindnessService.getKindnessById(id)
                        .then(function (kindness) { return _this.kindness = kindness; });
                };
                KindnessDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                KindnessDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-kindness-detail',
                        template: "    \n  <div *ngIf=\"kindness\">\n    <h2>{{kindness.deed}} details!</h2>\n    <div><label>id: </label>{{kindness.id}}</div>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"kindness.deed\" placeholder=\"deed\"/>\n    </div>\n    <button (click)=\"goBack()\">Back</button>\n  </div>"
                    }), 
                    __metadata('design:paramtypes', [kindness_service_1.KindnessService, router_1.RouteParams])
                ], KindnessDetailComponent);
                return KindnessDetailComponent;
            }());
            exports_1("KindnessDetailComponent", KindnessDetailComponent);
        }
    }
});
//# sourceMappingURL=kindness-detail.component.js.map