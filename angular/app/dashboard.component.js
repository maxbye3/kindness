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
    var DashboardComponent;
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
            DashboardComponent = (function () {
                function DashboardComponent(router, _kindnessService) {
                    this.router = router;
                    this._kindnessService = _kindnessService;
                    this.kindnesses = [];
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._kindnessService.getKindness()
                        .then(function (kindnesses) { return _this.kindnesses = kindnesses.slice(0, 5); });
                };
                DashboardComponent.prototype.gotoDetail = function () { };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'my-dashboard',
                        template: "\n  <h3>Top Kindness Action</h3>\n<div class=\"grid grid-pad\">\n  <div *ngFor=\"#kindness of kindnesses;\"\n  (click)=\"gotoDetail(kindness)\" \n   class=\"col-1-4\">\n    <div class=\"module hero\">\n      <h4>{{kindness.deed}}</h4>\n    </div>\n  </div>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, kindness_service_1.KindnessService])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map