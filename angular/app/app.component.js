System.register(['angular2/core', './kindness-detail.component', './kindness.service'], function(exports_1, context_1) {
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
    var core_1, kindness_detail_component_1, kindness_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (kindness_detail_component_1_1) {
                kindness_detail_component_1 = kindness_detail_component_1_1;
            },
            function (kindness_service_1_1) {
                kindness_service_1 = kindness_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_kindnessService) {
                    this._kindnessService = _kindnessService;
                    this.title = 'Kindness App';
                }
                AppComponent.prototype.onSelect = function (kindness) { this.selectedKindness = kindness; };
                AppComponent.prototype.getKindness = function () {
                    var _this = this;
                    this._kindnessService.getKindness().then(function (kindnesses) { return _this.kindnesses = kindnesses; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getKindness();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "  \n  <h2>My Actions</h2>\n  <ul class=\"heroes\">\n  \n    <!-- each hero goes here -->\n    <li *ngFor=\"#kindness of kindnesses;\" \n    [class.selected]=\"kindness === selectedKindness\"\n    (click)=\"onSelect(kindness)\">\n    <span class=\"badge\">{{kindness.id}}</span> {{kindness.deed}}\n</ul>\n<my-kindness-detail [kindness]=\"selectedKindness\"></my-kindness-detail>\n  ",
                        styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .heroes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .heroes .text {\n    position: relative;\n    top: -3px;\n  }\n  .heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"],
                        directives: [kindness_detail_component_1.KindnessDetailComponent],
                        providers: [kindness_service_1.KindnessService]
                    }), 
                    __metadata('design:paramtypes', [kindness_service_1.KindnessService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map