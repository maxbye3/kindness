System.register(['angular2/core', './kindness.service', './kindness.component', 'angular2/router', './dashboard.component', './background.component', './kindness-detail.component'], function(exports_1, context_1) {
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
    var core_1, kindness_service_1, kindness_component_1, router_1, dashboard_component_1, background_component_1, kindness_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (kindness_service_1_1) {
                kindness_service_1 = kindness_service_1_1;
            },
            function (kindness_component_1_1) {
                kindness_component_1 = kindness_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (background_component_1_1) {
                background_component_1 = background_component_1_1;
            },
            function (kindness_detail_component_1_1) {
                kindness_detail_component_1 = kindness_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <router-outlet></router-outlet>\n     \n    <!-- <a [routerLink]=\"['ChangeTheme']\">Change Theme</a> -->\n    <!-- <background></background> -->\n  ",
                        styleUrls: ['app/app.component.css'],
                        directives: [
                            kindness_component_1.KindnessComponent,
                            background_component_1.BackgroundComponent,
                            router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            kindness_service_1.KindnessService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/changetheme',
                            name: 'ChangeTheme',
                            component: background_component_1.BackgroundComponent
                        },
                        // default views
                        {
                            path: '/kindness',
                            name: 'Kindness',
                            component: kindness_component_1.KindnessComponent
                        },
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/detail/:id',
                            name: 'KindnessDetail',
                            component: kindness_detail_component_1.KindnessDetailComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map