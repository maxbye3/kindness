import { isBlank, isPresent, isFunction } from 'angular2/src/facade/lang';
import { BaseException } from 'angular2/src/facade/exceptions';
import { Map } from 'angular2/src/facade/collection';
import { PromiseWrapper } from 'angular2/src/facade/async';
import { RouteRule, RedirectRule, PathMatch } from './rules';
import { Route, AsyncRoute, AuxRoute, Redirect } from '../route_config/route_config_impl';
import { AsyncRouteHandler } from './route_handlers/async_route_handler';
import { SyncRouteHandler } from './route_handlers/sync_route_handler';
import { ParamRoutePath } from './route_paths/param_route_path';
import { RegexRoutePath } from './route_paths/regex_route_path';
/**
 * A `RuleSet` is responsible for recognizing routes for a particular component.
 * It is consumed by `RouteRegistry`, which knows how to recognize an entire hierarchy of
 * components.
 */
export class RuleSet {
    constructor() {
        this.rulesByName = new Map();
        // map from name to rule
        this.auxRulesByName = new Map();
        // map from starting path to rule
        this.auxRulesByPath = new Map();
        // TODO: optimize this into a trie
        this.rules = [];
        // the rule to use automatically when recognizing or generating from this rule set
        this.defaultRule = null;
    }
    /**
     * Configure additional rules in this rule set from a route definition
     * @returns {boolean} true if the config is terminal
     */
    config(config) {
        let handler;
        if (isPresent(config.name) && config.name[0].toUpperCase() != config.name[0]) {
            let suggestedName = config.name[0].toUpperCase() + config.name.substring(1);
            throw new BaseException(`Route "${config.path}" with name "${config.name}" does not begin with an uppercase letter. Route names should be CamelCase like "${suggestedName}".`);
        }
        if (config instanceof AuxRoute) {
            handler = new SyncRouteHandler(config.component, config.data);
            let routePath = this._getRoutePath(config);
            let auxRule = new RouteRule(routePath, handler);
            this.auxRulesByPath.set(routePath.toString(), auxRule);
            if (isPresent(config.name)) {
                this.auxRulesByName.set(config.name, auxRule);
            }
            return auxRule.terminal;
        }
        let useAsDefault = false;
        if (config instanceof Redirect) {
            let routePath = this._getRoutePath(config);
            let redirector = new RedirectRule(routePath, config.redirectTo);
            this._assertNoHashCollision(redirector.hash, config.path);
            this.rules.push(redirector);
            return true;
        }
        if (config instanceof Route) {
            handler = new SyncRouteHandler(config.component, config.data);
            useAsDefault = isPresent(config.useAsDefault) && config.useAsDefault;
        }
        else if (config instanceof AsyncRoute) {
            handler = new AsyncRouteHandler(config.loader, config.data);
            useAsDefault = isPresent(config.useAsDefault) && config.useAsDefault;
        }
        let routePath = this._getRoutePath(config);
        let newRule = new RouteRule(routePath, handler);
        this._assertNoHashCollision(newRule.hash, config.path);
        if (useAsDefault) {
            if (isPresent(this.defaultRule)) {
                throw new BaseException(`Only one route can be default`);
            }
            this.defaultRule = newRule;
        }
        this.rules.push(newRule);
        if (isPresent(config.name)) {
            this.rulesByName.set(config.name, newRule);
        }
        return newRule.terminal;
    }
    /**
     * Given a URL, returns a list of `RouteMatch`es, which are partial recognitions for some route.
     */
    recognize(urlParse) {
        var solutions = [];
        this.rules.forEach((routeRecognizer) => {
            var pathMatch = routeRecognizer.recognize(urlParse);
            if (isPresent(pathMatch)) {
                solutions.push(pathMatch);
            }
        });
        // handle cases where we are routing just to an aux route
        if (solutions.length == 0 && isPresent(urlParse) && urlParse.auxiliary.length > 0) {
            return [PromiseWrapper.resolve(new PathMatch(null, null, urlParse.auxiliary))];
        }
        return solutions;
    }
    recognizeAuxiliary(urlParse) {
        var routeRecognizer = this.auxRulesByPath.get(urlParse.path);
        if (isPresent(routeRecognizer)) {
            return [routeRecognizer.recognize(urlParse)];
        }
        return [PromiseWrapper.resolve(null)];
    }
    hasRoute(name) { return this.rulesByName.has(name); }
    componentLoaded(name) {
        return this.hasRoute(name) && isPresent(this.rulesByName.get(name).handler.componentType);
    }
    loadComponent(name) {
        return this.rulesByName.get(name).handler.resolveComponentType();
    }
    generate(name, params) {
        var rule = this.rulesByName.get(name);
        if (isBlank(rule)) {
            return null;
        }
        return rule.generate(params);
    }
    generateAuxiliary(name, params) {
        var rule = this.auxRulesByName.get(name);
        if (isBlank(rule)) {
            return null;
        }
        return rule.generate(params);
    }
    _assertNoHashCollision(hash, path) {
        this.rules.forEach((rule) => {
            if (hash == rule.hash) {
                throw new BaseException(`Configuration '${path}' conflicts with existing route '${rule.path}'`);
            }
        });
    }
    _getRoutePath(config) {
        if (isPresent(config.regex)) {
            if (isFunction(config.serializer)) {
                return new RegexRoutePath(config.regex, config.serializer);
            }
            else {
                throw new BaseException(`Route provides a regex property, '${config.regex}', but no serializer property`);
            }
        }
        if (isPresent(config.path)) {
            // Auxiliary routes do not have a slash at the start
            let path = (config instanceof AuxRoute && config.path.startsWith('/')) ?
                config.path.substring(1) :
                config.path;
            return new ParamRoutePath(path);
        }
        throw new BaseException('Route must provide either a path or regex property');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZV9zZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvcm91dGVyL3J1bGVzL3J1bGVfc2V0LnRzIl0sIm5hbWVzIjpbIlJ1bGVTZXQiLCJSdWxlU2V0LmNvbnN0cnVjdG9yIiwiUnVsZVNldC5jb25maWciLCJSdWxlU2V0LnJlY29nbml6ZSIsIlJ1bGVTZXQucmVjb2duaXplQXV4aWxpYXJ5IiwiUnVsZVNldC5oYXNSb3V0ZSIsIlJ1bGVTZXQuY29tcG9uZW50TG9hZGVkIiwiUnVsZVNldC5sb2FkQ29tcG9uZW50IiwiUnVsZVNldC5nZW5lcmF0ZSIsIlJ1bGVTZXQuZ2VuZXJhdGVBdXhpbGlhcnkiLCJSdWxlU2V0Ll9hc3NlcnROb0hhc2hDb2xsaXNpb24iLCJSdWxlU2V0Ll9nZXRSb3V0ZVBhdGgiXSwibWFwcGluZ3MiOiJPQUFPLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSwwQkFBMEI7T0FDaEUsRUFBQyxhQUFhLEVBQW1CLE1BQU0sZ0NBQWdDO09BQ3ZFLEVBQUMsR0FBRyxFQUE0QyxNQUFNLGdDQUFnQztPQUN0RixFQUFDLGNBQWMsRUFBQyxNQUFNLDJCQUEyQjtPQUVqRCxFQUFlLFNBQVMsRUFBRSxZQUFZLEVBQWMsU0FBUyxFQUFDLE1BQU0sU0FBUztPQUM3RSxFQUNMLEtBQUssRUFDTCxVQUFVLEVBQ1YsUUFBUSxFQUNSLFFBQVEsRUFFVCxNQUFNLG1DQUFtQztPQUVuQyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sc0NBQXNDO09BQy9ELEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQ0FBcUM7T0FHN0QsRUFBQyxjQUFjLEVBQUMsTUFBTSxnQ0FBZ0M7T0FDdEQsRUFBQyxjQUFjLEVBQUMsTUFBTSxnQ0FBZ0M7QUFNN0Q7Ozs7R0FJRztBQUNIO0lBQUFBO1FBQ0VDLGdCQUFXQSxHQUFHQSxJQUFJQSxHQUFHQSxFQUFxQkEsQ0FBQ0E7UUFFM0NBLHdCQUF3QkE7UUFDeEJBLG1CQUFjQSxHQUFHQSxJQUFJQSxHQUFHQSxFQUFxQkEsQ0FBQ0E7UUFFOUNBLGlDQUFpQ0E7UUFDakNBLG1CQUFjQSxHQUFHQSxJQUFJQSxHQUFHQSxFQUFxQkEsQ0FBQ0E7UUFFOUNBLGtDQUFrQ0E7UUFDbENBLFVBQUtBLEdBQW1CQSxFQUFFQSxDQUFDQTtRQUUzQkEsa0ZBQWtGQTtRQUNsRkEsZ0JBQVdBLEdBQWNBLElBQUlBLENBQUNBO0lBbUpoQ0EsQ0FBQ0E7SUFqSkNEOzs7T0FHR0E7SUFDSEEsTUFBTUEsQ0FBQ0EsTUFBdUJBO1FBQzVCRSxJQUFJQSxPQUFPQSxDQUFDQTtRQUVaQSxFQUFFQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxXQUFXQSxFQUFFQSxJQUFJQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM3RUEsSUFBSUEsYUFBYUEsR0FBR0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsV0FBV0EsRUFBRUEsR0FBR0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDNUVBLE1BQU1BLElBQUlBLGFBQWFBLENBQ25CQSxVQUFVQSxNQUFNQSxDQUFDQSxJQUFJQSxnQkFBZ0JBLE1BQU1BLENBQUNBLElBQUlBLG9GQUFvRkEsYUFBYUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDN0pBLENBQUNBO1FBRURBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLFlBQVlBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO1lBQy9CQSxPQUFPQSxHQUFHQSxJQUFJQSxnQkFBZ0JBLENBQUNBLE1BQU1BLENBQUNBLFNBQVNBLEVBQUVBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQzlEQSxJQUFJQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtZQUMzQ0EsSUFBSUEsT0FBT0EsR0FBR0EsSUFBSUEsU0FBU0EsQ0FBQ0EsU0FBU0EsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0E7WUFDaERBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLEdBQUdBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLEVBQUVBLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBO1lBQ3ZEQSxFQUFFQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDM0JBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBO1lBQ2hEQSxDQUFDQTtZQUNEQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQTtRQUMxQkEsQ0FBQ0E7UUFFREEsSUFBSUEsWUFBWUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFFekJBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLFlBQVlBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO1lBQy9CQSxJQUFJQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtZQUMzQ0EsSUFBSUEsVUFBVUEsR0FBR0EsSUFBSUEsWUFBWUEsQ0FBQ0EsU0FBU0EsRUFBRUEsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7WUFDaEVBLElBQUlBLENBQUNBLHNCQUFzQkEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsRUFBRUEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDMURBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO1lBQzVCQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUNkQSxDQUFDQTtRQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxZQUFZQSxL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QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNCbGFuaywgaXNQcmVzZW50LCBpc0Z1bmN0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtCYXNlRXhjZXB0aW9uLCBXcmFwcGVkRXhjZXB0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtNYXAsIE1hcFdyYXBwZXIsIExpc3RXcmFwcGVyLCBTdHJpbmdNYXBXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2NvbGxlY3Rpb24nO1xuaW1wb3J0IHtQcm9taXNlV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5cbmltcG9ydCB7QWJzdHJhY3RSdWxlLCBSb3V0ZVJ1bGUsIFJlZGlyZWN0UnVsZSwgUm91dGVNYXRjaCwgUGF0aE1hdGNofSBmcm9tICcuL3J1bGVzJztcbmltcG9ydCB7XG4gIFJvdXRlLFxuICBBc3luY1JvdXRlLFxuICBBdXhSb3V0ZSxcbiAgUmVkaXJlY3QsXG4gIFJvdXRlRGVmaW5pdGlvblxufSBmcm9tICcuLi9yb3V0ZV9jb25maWcvcm91dGVfY29uZmlnX2ltcGwnO1xuXG5pbXBvcnQge0FzeW5jUm91dGVIYW5kbGVyfSBmcm9tICcuL3JvdXRlX2hhbmRsZXJzL2FzeW5jX3JvdXRlX2hhbmRsZXInO1xuaW1wb3J0IHtTeW5jUm91dGVIYW5kbGVyfSBmcm9tICcuL3JvdXRlX2hhbmRsZXJzL3N5bmNfcm91dGVfaGFuZGxlcic7XG5cbmltcG9ydCB7Um91dGVQYXRofSBmcm9tICcuL3JvdXRlX3BhdGhzL3JvdXRlX3BhdGgnO1xuaW1wb3J0IHtQYXJhbVJvdXRlUGF0aH0gZnJvbSAnLi9yb3V0ZV9wYXRocy9wYXJhbV9yb3V0ZV9wYXRoJztcbmltcG9ydCB7UmVnZXhSb3V0ZVBhdGh9IGZyb20gJy4vcm91dGVfcGF0aHMvcmVnZXhfcm91dGVfcGF0aCc7XG5cbmltcG9ydCB7VXJsfSBmcm9tICcuLi91cmxfcGFyc2VyJztcbmltcG9ydCB7Q29tcG9uZW50SW5zdHJ1Y3Rpb259IGZyb20gJy4uL2luc3RydWN0aW9uJztcblxuXG4vKipcbiAqIEEgYFJ1bGVTZXRgIGlzIHJlc3BvbnNpYmxlIGZvciByZWNvZ25pemluZyByb3V0ZXMgZm9yIGEgcGFydGljdWxhciBjb21wb25lbnQuXG4gKiBJdCBpcyBjb25zdW1lZCBieSBgUm91dGVSZWdpc3RyeWAsIHdoaWNoIGtub3dzIGhvdyB0byByZWNvZ25pemUgYW4gZW50aXJlIGhpZXJhcmNoeSBvZlxuICogY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGNsYXNzIFJ1bGVTZXQge1xuICBydWxlc0J5TmFtZSA9IG5ldyBNYXA8c3RyaW5nLCBSb3V0ZVJ1bGU+KCk7XG5cbiAgLy8gbWFwIGZyb20gbmFtZSB0byBydWxlXG4gIGF1eFJ1bGVzQnlOYW1lID0gbmV3IE1hcDxzdHJpbmcsIFJvdXRlUnVsZT4oKTtcblxuICAvLyBtYXAgZnJvbSBzdGFydGluZyBwYXRoIHRvIHJ1bGVcbiAgYXV4UnVsZXNCeVBhdGggPSBuZXcgTWFwPHN0cmluZywgUm91dGVSdWxlPigpO1xuXG4gIC8vIFRPRE86IG9wdGltaXplIHRoaXMgaW50byBhIHRyaWVcbiAgcnVsZXM6IEFic3RyYWN0UnVsZVtdID0gW107XG5cbiAgLy8gdGhlIHJ1bGUgdG8gdXNlIGF1dG9tYXRpY2FsbHkgd2hlbiByZWNvZ25pemluZyBvciBnZW5lcmF0aW5nIGZyb20gdGhpcyBydWxlIHNldFxuICBkZWZhdWx0UnVsZTogUm91dGVSdWxlID0gbnVsbDtcblxuICAvKipcbiAgICogQ29uZmlndXJlIGFkZGl0aW9uYWwgcnVsZXMgaW4gdGhpcyBydWxlIHNldCBmcm9tIGEgcm91dGUgZGVmaW5pdGlvblxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgY29uZmlnIGlzIHRlcm1pbmFsXG4gICAqL1xuICBjb25maWcoY29uZmlnOiBSb3V0ZURlZmluaXRpb24pOiBib29sZWFuIHtcbiAgICBsZXQgaGFuZGxlcjtcblxuICAgIGlmIChpc1ByZXNlbnQoY29uZmlnLm5hbWUpICYmIGNvbmZpZy5uYW1lWzBdLnRvVXBwZXJDYXNlKCkgIT0gY29uZmlnLm5hbWVbMF0pIHtcbiAgICAgIGxldCBzdWdnZXN0ZWROYW1lID0gY29uZmlnLm5hbWVbMF0udG9VcHBlckNhc2UoKSArIGNvbmZpZy5uYW1lLnN1YnN0cmluZygxKTtcbiAgICAgIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKFxuICAgICAgICAgIGBSb3V0ZSBcIiR7Y29uZmlnLnBhdGh9XCIgd2l0aCBuYW1lIFwiJHtjb25maWcubmFtZX1cIiBkb2VzIG5vdCBiZWdpbiB3aXRoIGFuIHVwcGVyY2FzZSBsZXR0ZXIuIFJvdXRlIG5hbWVzIHNob3VsZCBiZSBDYW1lbENhc2UgbGlrZSBcIiR7c3VnZ2VzdGVkTmFtZX1cIi5gKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnIGluc3RhbmNlb2YgQXV4Um91dGUpIHtcbiAgICAgIGhhbmRsZXIgPSBuZXcgU3luY1JvdXRlSGFuZGxlcihjb25maWcuY29tcG9uZW50LCBjb25maWcuZGF0YSk7XG4gICAgICBsZXQgcm91dGVQYXRoID0gdGhpcy5fZ2V0Um91dGVQYXRoKGNvbmZpZyk7XG4gICAgICBsZXQgYXV4UnVsZSA9IG5ldyBSb3V0ZVJ1bGUocm91dGVQYXRoLCBoYW5kbGVyKTtcbiAgICAgIHRoaXMuYXV4UnVsZXNCeVBhdGguc2V0KHJvdXRlUGF0aC50b1N0cmluZygpLCBhdXhSdWxlKTtcbiAgICAgIGlmIChpc1ByZXNlbnQoY29uZmlnLm5hbWUpKSB7XG4gICAgICAgIHRoaXMuYXV4UnVsZXNCeU5hbWUuc2V0KGNvbmZpZy5uYW1lLCBhdXhSdWxlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhdXhSdWxlLnRlcm1pbmFsO1xuICAgIH1cblxuICAgIGxldCB1c2VBc0RlZmF1bHQgPSBmYWxzZTtcblxuICAgIGlmIChjb25maWcgaW5zdGFuY2VvZiBSZWRpcmVjdCkge1xuICAgICAgbGV0IHJvdXRlUGF0aCA9IHRoaXMuX2dldFJvdXRlUGF0aChjb25maWcpO1xuICAgICAgbGV0IHJlZGlyZWN0b3IgPSBuZXcgUmVkaXJlY3RSdWxlKHJvdXRlUGF0aCwgY29uZmlnLnJlZGlyZWN0VG8pO1xuICAgICAgdGhpcy5fYXNzZXJ0Tm9IYXNoQ29sbGlzaW9uKHJlZGlyZWN0b3IuaGFzaCwgY29uZmlnLnBhdGgpO1xuICAgICAgdGhpcy5ydWxlcy5wdXNoKHJlZGlyZWN0b3IpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZyBpbnN0YW5jZW9mIFJvdXRlKSB7XG4gICAgICBoYW5kbGVyID0gbmV3IFN5bmNSb3V0ZUhhbmRsZXIoY29uZmlnLmNvbXBvbmVudCwgY29uZmlnLmRhdGEpO1xuICAgICAgdXNlQXNEZWZhdWx0ID0gaXNQcmVzZW50KGNvbmZpZy51c2VBc0RlZmF1bHQpICYmIGNvbmZpZy51c2VBc0RlZmF1bHQ7XG4gICAgfSBlbHNlIGlmIChjb25maWcgaW5zdGFuY2VvZiBBc3luY1JvdXRlKSB7XG4gICAgICBoYW5kbGVyID0gbmV3IEFzeW5jUm91dGVIYW5kbGVyKGNvbmZpZy5sb2FkZXIsIGNvbmZpZy5kYXRhKTtcbiAgICAgIHVzZUFzRGVmYXVsdCA9IGlzUHJlc2VudChjb25maWcudXNlQXNEZWZhdWx0KSAmJiBjb25maWcudXNlQXNEZWZhdWx0O1xuICAgIH1cbiAgICBsZXQgcm91dGVQYXRoID0gdGhpcy5fZ2V0Um91dGVQYXRoKGNvbmZpZyk7XG4gICAgbGV0IG5ld1J1bGUgPSBuZXcgUm91dGVSdWxlKHJvdXRlUGF0aCwgaGFuZGxlcik7XG5cbiAgICB0aGlzLl9hc3NlcnROb0hhc2hDb2xsaXNpb24obmV3UnVsZS5oYXNoLCBjb25maWcucGF0aCk7XG5cbiAgICBpZiAodXNlQXNEZWZhdWx0KSB7XG4gICAgICBpZiAoaXNQcmVzZW50KHRoaXMuZGVmYXVsdFJ1bGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKGBPbmx5IG9uZSByb3V0ZSBjYW4gYmUgZGVmYXVsdGApO1xuICAgICAgfVxuICAgICAgdGhpcy5kZWZhdWx0UnVsZSA9IG5ld1J1bGU7XG4gICAgfVxuXG4gICAgdGhpcy5ydWxlcy5wdXNoKG5ld1J1bGUpO1xuICAgIGlmIChpc1ByZXNlbnQoY29uZmlnLm5hbWUpKSB7XG4gICAgICB0aGlzLnJ1bGVzQnlOYW1lLnNldChjb25maWcubmFtZSwgbmV3UnVsZSk7XG4gICAgfVxuICAgIHJldHVybiBuZXdSdWxlLnRlcm1pbmFsO1xuICB9XG5cblxuICAvKipcbiAgICogR2l2ZW4gYSBVUkwsIHJldHVybnMgYSBsaXN0IG9mIGBSb3V0ZU1hdGNoYGVzLCB3aGljaCBhcmUgcGFydGlhbCByZWNvZ25pdGlvbnMgZm9yIHNvbWUgcm91dGUuXG4gICAqL1xuICByZWNvZ25pemUodXJsUGFyc2U6IFVybCk6IFByb21pc2U8Um91dGVNYXRjaD5bXSB7XG4gICAgdmFyIHNvbHV0aW9ucyA9IFtdO1xuXG4gICAgdGhpcy5ydWxlcy5mb3JFYWNoKChyb3V0ZVJlY29nbml6ZXI6IEFic3RyYWN0UnVsZSkgPT4ge1xuICAgICAgdmFyIHBhdGhNYXRjaCA9IHJvdXRlUmVjb2duaXplci5yZWNvZ25pemUodXJsUGFyc2UpO1xuXG4gICAgICBpZiAoaXNQcmVzZW50KHBhdGhNYXRjaCkpIHtcbiAgICAgICAgc29sdXRpb25zLnB1c2gocGF0aE1hdGNoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGhhbmRsZSBjYXNlcyB3aGVyZSB3ZSBhcmUgcm91dGluZyBqdXN0IHRvIGFuIGF1eCByb3V0ZVxuICAgIGlmIChzb2x1dGlvbnMubGVuZ3RoID09IDAgJiYgaXNQcmVzZW50KHVybFBhcnNlKSAmJiB1cmxQYXJzZS5hdXhpbGlhcnkubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIFtQcm9taXNlV3JhcHBlci5yZXNvbHZlKG5ldyBQYXRoTWF0Y2gobnVsbCwgbnVsbCwgdXJsUGFyc2UuYXV4aWxpYXJ5KSldO1xuICAgIH1cblxuICAgIHJldHVybiBzb2x1dGlvbnM7XG4gIH1cblxuICByZWNvZ25pemVBdXhpbGlhcnkodXJsUGFyc2U6IFVybCk6IFByb21pc2U8Um91dGVNYXRjaD5bXSB7XG4gICAgdmFyIHJvdXRlUmVjb2duaXplcjogUm91dGVSdWxlID0gdGhpcy5hdXhSdWxlc0J5UGF0aC5nZXQodXJsUGFyc2UucGF0aCk7XG4gICAgaWYgKGlzUHJlc2VudChyb3V0ZVJlY29nbml6ZXIpKSB7XG4gICAgICByZXR1cm4gW3JvdXRlUmVjb2duaXplci5yZWNvZ25pemUodXJsUGFyc2UpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gW1Byb21pc2VXcmFwcGVyLnJlc29sdmUobnVsbCldO1xuICB9XG5cbiAgaGFzUm91dGUobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnJ1bGVzQnlOYW1lLmhhcyhuYW1lKTsgfVxuXG4gIGNvbXBvbmVudExvYWRlZChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5oYXNSb3V0ZShuYW1lKSAmJiBpc1ByZXNlbnQodGhpcy5ydWxlc0J5TmFtZS5nZXQobmFtZSkuaGFuZGxlci5jb21wb25lbnRUeXBlKTtcbiAgfVxuXG4gIGxvYWRDb21wb25lbnQobmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5ydWxlc0J5TmFtZS5nZXQobmFtZSkuaGFuZGxlci5yZXNvbHZlQ29tcG9uZW50VHlwZSgpO1xuICB9XG5cbiAgZ2VuZXJhdGUobmFtZTogc3RyaW5nLCBwYXJhbXM6IGFueSk6IENvbXBvbmVudEluc3RydWN0aW9uIHtcbiAgICB2YXIgcnVsZTogUm91dGVSdWxlID0gdGhpcy5ydWxlc0J5TmFtZS5nZXQobmFtZSk7XG4gICAgaWYgKGlzQmxhbmsocnVsZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gcnVsZS5nZW5lcmF0ZShwYXJhbXMpO1xuICB9XG5cbiAgZ2VuZXJhdGVBdXhpbGlhcnkobmFtZTogc3RyaW5nLCBwYXJhbXM6IGFueSk6IENvbXBvbmVudEluc3RydWN0aW9uIHtcbiAgICB2YXIgcnVsZTogUm91dGVSdWxlID0gdGhpcy5hdXhSdWxlc0J5TmFtZS5nZXQobmFtZSk7XG4gICAgaWYgKGlzQmxhbmsocnVsZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gcnVsZS5nZW5lcmF0ZShwYXJhbXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXNzZXJ0Tm9IYXNoQ29sbGlzaW9uKGhhc2g6IHN0cmluZywgcGF0aCkge1xuICAgIHRoaXMucnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgaWYgKGhhc2ggPT0gcnVsZS5oYXNoKSB7XG4gICAgICAgIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKFxuICAgICAgICAgICAgYENvbmZpZ3VyYXRpb24gJyR7cGF0aH0nIGNvbmZsaWN0cyB3aXRoIGV4aXN0aW5nIHJvdXRlICcke3J1bGUucGF0aH0nYCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRSb3V0ZVBhdGgoY29uZmlnOiBSb3V0ZURlZmluaXRpb24pOiBSb3V0ZVBhdGgge1xuICAgIGlmIChpc1ByZXNlbnQoY29uZmlnLnJlZ2V4KSkge1xuICAgICAgaWYgKGlzRnVuY3Rpb24oY29uZmlnLnNlcmlhbGl6ZXIpKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVnZXhSb3V0ZVBhdGgoY29uZmlnLnJlZ2V4LCBjb25maWcuc2VyaWFsaXplcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihcbiAgICAgICAgICAgIGBSb3V0ZSBwcm92aWRlcyBhIHJlZ2V4IHByb3BlcnR5LCAnJHtjb25maWcucmVnZXh9JywgYnV0IG5vIHNlcmlhbGl6ZXIgcHJvcGVydHlgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzUHJlc2VudChjb25maWcucGF0aCkpIHtcbiAgICAgIC8vIEF1eGlsaWFyeSByb3V0ZXMgZG8gbm90IGhhdmUgYSBzbGFzaCBhdCB0aGUgc3RhcnRcbiAgICAgIGxldCBwYXRoID0gKGNvbmZpZyBpbnN0YW5jZW9mIEF1eFJvdXRlICYmIGNvbmZpZy5wYXRoLnN0YXJ0c1dpdGgoJy8nKSkgP1xuICAgICAgICAgICAgICAgICAgICAgY29uZmlnLnBhdGguc3Vic3RyaW5nKDEpIDpcbiAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5wYXRoO1xuICAgICAgcmV0dXJuIG5ldyBQYXJhbVJvdXRlUGF0aChwYXRoKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oJ1JvdXRlIG11c3QgcHJvdmlkZSBlaXRoZXIgYSBwYXRoIG9yIHJlZ2V4IHByb3BlcnR5Jyk7XG4gIH1cbn1cbiJdfQ==