System.register(['angular2/core', 'angular2/router', './kindness-detail.component', './kindness.service'], function(exports_1, context_1) {
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
    var core_1, router_1, kindness_detail_component_1, kindness_service_1;
    var KindnessComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (kindness_detail_component_1_1) {
                kindness_detail_component_1 = kindness_detail_component_1_1;
            },
            function (kindness_service_1_1) {
                kindness_service_1 = kindness_service_1_1;
            }],
        execute: function() {
            KindnessComponent = (function () {
                function KindnessComponent(_kindnessService, _router) {
                    this._kindnessService = _kindnessService;
                    this._router = _router;
                    this.title = 'Kindness App';
                }
                KindnessComponent.prototype.onSelect = function (kindness) { this.selectedKindness = kindness; };
                KindnessComponent.prototype.getKindness = function () {
                    var _this = this;
                    this._kindnessService.getKindness().then(function (kindnesses) { return _this.kindnesses = kindnesses; });
                };
                KindnessComponent.prototype.gotoDetail = function () {
                    var link = ['KindnessDetail', { id: this.selectedKindness.id }];
                    this._router.navigate(link);
                };
                KindnessComponent.prototype.ngOnInit = function () {
                    this.getKindness();
                };
                KindnessComponent = __decorate([
                    core_1.Component({
                        selector: 'my-kindness',
                        template: "  \n  <h2>My Actions</h2>\n  <ul class=\"heroes\">\n  \n    <!-- each hero goes here -->\n    <li *ngFor=\"#kindness of kindnesses;\" \n    [class.selected]=\"kindness === selectedKindness\"\n    (click)=\"onSelect(kindness)\">\n    <span class=\"badge\">{{kindness.id}}</span> {{kindness.deed}}\n</ul>\n<div *ngIf=\"selectedKindness\">\n  <h2>\n    {{selectedKindness.deed | uppercase}} is my kindness\n  </h2>\n  <button (click)=\"gotoDetail()\">View Details</button>\n</div>\n  ",
                        directives: [kindness_detail_component_1.KindnessDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [kindness_service_1.KindnessService, router_1.Router])
                ], KindnessComponent);
                return KindnessComponent;
            }());
            exports_1("KindnessComponent", KindnessComponent);
        }
    }
});
//# sourceMappingURL=kindness.component.js.map