var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { isArray, isPresent, serializeEnum } from "angular2/src/facade/lang";
import { BaseException } from 'angular2/src/facade/exceptions';
import { Map, StringMapWrapper, MapWrapper } from "angular2/src/facade/collection";
import { RenderComponentType } from "angular2/src/core/render/api";
import { Injectable } from "angular2/src/core/di";
import { RenderStore } from 'angular2/src/web_workers/shared/render_store';
import { ViewEncapsulation, VIEW_ENCAPSULATION_VALUES } from 'angular2/src/core/metadata/view';
import { LocationType } from './serialized_types';
// PRIMITIVE is any type that does not need to be serialized (string, number, boolean)
// We set it to String so that it is considered a Type.
export const PRIMITIVE = String;
export let Serializer = class {
    constructor(_renderStore) {
        this._renderStore = _renderStore;
    }
    serialize(obj, type) {
        if (!isPresent(obj)) {
            return null;
        }
        if (isArray(obj)) {
            return obj.map(v => this.serialize(v, type));
        }
        if (type == PRIMITIVE) {
            return obj;
        }
        if (type == RenderStoreObject) {
            return this._renderStore.serialize(obj);
        }
        else if (type === RenderComponentType) {
            return this._serializeRenderComponentType(obj);
        }
        else if (type === ViewEncapsulation) {
            return serializeEnum(obj);
        }
        else if (type === LocationType) {
            return this._serializeLocation(obj);
        }
        else {
            throw new BaseException("No serializer for " + type.toString());
        }
    }
    deserialize(map, type, data) {
        if (!isPresent(map)) {
            return null;
        }
        if (isArray(map)) {
            var obj = [];
            map.forEach(val => obj.push(this.deserialize(val, type, data)));
            return obj;
        }
        if (type == PRIMITIVE) {
            return map;
        }
        if (type == RenderStoreObject) {
            return this._renderStore.deserialize(map);
        }
        else if (type === RenderComponentType) {
            return this._deserializeRenderComponentType(map);
        }
        else if (type === ViewEncapsulation) {
            return VIEW_ENCAPSULATION_VALUES[map];
        }
        else if (type === LocationType) {
            return this._deserializeLocation(map);
        }
        else {
            throw new BaseException("No deserializer for " + type.toString());
        }
    }
    mapToObject(map, type) {
        var object = {};
        var serialize = isPresent(type);
        map.forEach((value, key) => {
            if (serialize) {
                object[key] = this.serialize(value, type);
            }
            else {
                object[key] = value;
            }
        });
        return object;
    }
    /*
     * Transforms a Javascript object (StringMap) into a Map<string, V>
     * If the values need to be deserialized pass in their type
     * and they will be deserialized before being placed in the map
     */
    objectToMap(obj, type, data) {
        if (isPresent(type)) {
            var map = new Map();
            StringMapWrapper.forEach(obj, (val, key) => { map.set(key, this.deserialize(val, type, data)); });
            return map;
        }
        else {
            return MapWrapper.createFromStringMap(obj);
        }
    }
    _serializeLocation(loc) {
        return {
            'href': loc.href,
            'protocol': loc.protocol,
            'host': loc.host,
            'hostname': loc.hostname,
            'port': loc.port,
            'pathname': loc.pathname,
            'search': loc.search,
            'hash': loc.hash,
            'origin': loc.origin
        };
    }
    _deserializeLocation(loc) {
        return new LocationType(loc['href'], loc['protocol'], loc['host'], loc['hostname'], loc['port'], loc['pathname'], loc['search'], loc['hash'], loc['origin']);
    }
    _serializeRenderComponentType(obj) {
        return {
            'id': obj.id,
            'encapsulation': this.serialize(obj.encapsulation, ViewEncapsulation),
            'styles': this.serialize(obj.styles, PRIMITIVE)
        };
    }
    _deserializeRenderComponentType(map) {
        return new RenderComponentType(map['id'], this.deserialize(map['encapsulation'], ViewEncapsulation), this.deserialize(map['styles'], PRIMITIVE));
    }
};
Serializer = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [RenderStore])
], Serializer);
export class RenderStoreObject {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvc2VyaWFsaXplci50cyJdLCJuYW1lcyI6WyJTZXJpYWxpemVyIiwiU2VyaWFsaXplci5jb25zdHJ1Y3RvciIsIlNlcmlhbGl6ZXIuc2VyaWFsaXplIiwiU2VyaWFsaXplci5kZXNlcmlhbGl6ZSIsIlNlcmlhbGl6ZXIubWFwVG9PYmplY3QiLCJTZXJpYWxpemVyLm9iamVjdFRvTWFwIiwiU2VyaWFsaXplci5fc2VyaWFsaXplTG9jYXRpb24iLCJTZXJpYWxpemVyLl9kZXNlcmlhbGl6ZUxvY2F0aW9uIiwiU2VyaWFsaXplci5fc2VyaWFsaXplUmVuZGVyQ29tcG9uZW50VHlwZSIsIlNlcmlhbGl6ZXIuX2Rlc2VyaWFsaXplUmVuZGVyQ29tcG9uZW50VHlwZSIsIlJlbmRlclN0b3JlT2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7T0FBTyxFQUFPLE9BQU8sRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFrQixNQUFNLDBCQUEwQjtPQUMxRixFQUFDLGFBQWEsRUFBbUIsTUFBTSxnQ0FBZ0M7T0FFdkUsRUFBQyxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFDLE1BQU0sZ0NBQWdDO09BQ3pFLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw4QkFBOEI7T0FDekQsRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0I7T0FDeEMsRUFBQyxXQUFXLEVBQUMsTUFBTSw4Q0FBOEM7T0FDakUsRUFBQyxpQkFBaUIsRUFBRSx5QkFBeUIsRUFBQyxNQUFNLGlDQUFpQztPQUNyRixFQUFDLFlBQVksRUFBQyxNQUFNLG9CQUFvQjtBQUUvQyxzRkFBc0Y7QUFDdEYsdURBQXVEO0FBQ3ZELGFBQWEsU0FBUyxHQUFTLE1BQU0sQ0FBQztBQUV0QztJQUVFQSxZQUFvQkEsWUFBeUJBO1FBQXpCQyxpQkFBWUEsR0FBWkEsWUFBWUEsQ0FBYUE7SUFBR0EsQ0FBQ0E7SUFFakRELFNBQVNBLENBQUNBLEdBQVFBLEVBQUVBLElBQVNBO1FBQzNCRSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNwQkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFDZEEsQ0FBQ0E7UUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDakJBLE1BQU1BLENBQVNBLEdBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1FBQ3hEQSxDQUFDQTtRQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxJQUFJQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN0QkEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7UUFDYkEsQ0FBQ0E7UUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsSUFBSUEsaUJBQWlCQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM5QkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDMUNBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLEtBQUtBLG1CQUFtQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDeENBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLDZCQUE2QkEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDakRBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLEtBQUtBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdENBLE1BQU1BLENBQUNBLGFBQWFBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQzVCQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxLQUFLQSxZQUFZQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNqQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUN0Q0EsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDTkEsTUFBTUEsSUFBSUEsYUFBYUEsQ0FBQ0Esb0JBQW9CQSxHQUFHQSxJQUFJQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUNsRUEsQ0FBQ0E7SUFDSEEsQ0FBQ0E7SUFFREYsV0FBV0EsQ0FBQ0EsR0FBUUEsRUFBRUEsSUFBU0EsRUFBRUEsSUFBVUE7UUFDekNHLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3BCQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUNkQSxDQUFDQTtRQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNqQkEsSUFBSUEsR0FBR0EsR0FBVUEsRUFBRUEsQ0FBQ0E7WUFDWkEsR0FBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsSUFBSUEsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDekVBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBO1FBQ2JBLENBQUNBO1FBQ0RBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLElBQUlBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3RCQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQTtRQUNiQSxDQUFDQTtRQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxJQUFJQSxpQkFBaUJBLENBQUNBLENBQUNBLENBQUNBO1lBQzlCQSxNQUFNQSxDQUFD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QSxDQUFDQSxHQUF5QkE7UUFDL0RTLE1BQU1BLENBQUNBLElBQUlBLG1CQUFtQkEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFDVEEsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsRUFBRUEsaUJBQWlCQSxDQUFDQSxFQUN6REEsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsRUFBRUEsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDN0VBLENBQUNBO0FBQ0hULENBQUNBO0FBbkhEO0lBQUMsVUFBVSxFQUFFOztlQW1IWjtBQUdEO0FBQWdDVSxDQUFDQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUeXBlLCBpc0FycmF5LCBpc1ByZXNlbnQsIHNlcmlhbGl6ZUVudW0sIGRlc2VyaWFsaXplRW51bX0gZnJvbSBcImFuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZ1wiO1xuaW1wb3J0IHtCYXNlRXhjZXB0aW9uLCBXcmFwcGVkRXhjZXB0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuXG5pbXBvcnQge01hcCwgU3RyaW5nTWFwV3JhcHBlciwgTWFwV3JhcHBlcn0gZnJvbSBcImFuZ3VsYXIyL3NyYy9mYWNhZGUvY29sbGVjdGlvblwiO1xuaW1wb3J0IHtSZW5kZXJDb21wb25lbnRUeXBlfSBmcm9tIFwiYW5ndWxhcjIvc3JjL2NvcmUvcmVuZGVyL2FwaVwiO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvc3JjL2NvcmUvZGlcIjtcbmltcG9ydCB7UmVuZGVyU3RvcmV9IGZyb20gJ2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvcmVuZGVyX3N0b3JlJztcbmltcG9ydCB7Vmlld0VuY2Fwc3VsYXRpb24sIFZJRVdfRU5DQVBTVUxBVElPTl9WQUxVRVN9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL21ldGFkYXRhL3ZpZXcnO1xuaW1wb3J0IHtMb2NhdGlvblR5cGV9IGZyb20gJy4vc2VyaWFsaXplZF90eXBlcyc7XG5cbi8vIFBSSU1JVElWRSBpcyBhbnkgdHlwZSB0aGF0IGRvZXMgbm90IG5lZWQgdG8gYmUgc2VyaWFsaXplZCAoc3RyaW5nLCBudW1iZXIsIGJvb2xlYW4pXG4vLyBXZSBzZXQgaXQgdG8gU3RyaW5nIHNvIHRoYXQgaXQgaXMgY29uc2lkZXJlZCBhIFR5cGUuXG5leHBvcnQgY29uc3QgUFJJTUlUSVZFOiBUeXBlID0gU3RyaW5nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VyaWFsaXplciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlclN0b3JlOiBSZW5kZXJTdG9yZSkge31cblxuICBzZXJpYWxpemUob2JqOiBhbnksIHR5cGU6IGFueSk6IE9iamVjdCB7XG4gICAgaWYgKCFpc1ByZXNlbnQob2JqKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgIHJldHVybiAoPGFueVtdPm9iaikubWFwKHYgPT4gdGhpcy5zZXJpYWxpemUodiwgdHlwZSkpO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PSBQUklNSVRJVkUpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGlmICh0eXBlID09IFJlbmRlclN0b3JlT2JqZWN0KSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVuZGVyU3RvcmUuc2VyaWFsaXplKG9iaik7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBSZW5kZXJDb21wb25lbnRUeXBlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VyaWFsaXplUmVuZGVyQ29tcG9uZW50VHlwZShvYmopO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gVmlld0VuY2Fwc3VsYXRpb24pIHtcbiAgICAgIHJldHVybiBzZXJpYWxpemVFbnVtKG9iaik7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBMb2NhdGlvblR5cGUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZXJpYWxpemVMb2NhdGlvbihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihcIk5vIHNlcmlhbGl6ZXIgZm9yIFwiICsgdHlwZS50b1N0cmluZygpKTtcbiAgICB9XG4gIH1cblxuICBkZXNlcmlhbGl6ZShtYXA6IGFueSwgdHlwZTogYW55LCBkYXRhPzogYW55KTogYW55IHtcbiAgICBpZiAoIWlzUHJlc2VudChtYXApKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGlzQXJyYXkobWFwKSkge1xuICAgICAgdmFyIG9iajogYW55W10gPSBbXTtcbiAgICAgICg8YW55W10+bWFwKS5mb3JFYWNoKHZhbCA9PiBvYmoucHVzaCh0aGlzLmRlc2VyaWFsaXplKHZhbCwgdHlwZSwgZGF0YSkpKTtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGlmICh0eXBlID09IFBSSU1JVElWRSkge1xuICAgICAgcmV0dXJuIG1hcDtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PSBSZW5kZXJTdG9yZU9iamVjdCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlclN0b3JlLmRlc2VyaWFsaXplKG1hcCk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBSZW5kZXJDb21wb25lbnRUeXBlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVzZXJpYWxpemVSZW5kZXJDb21wb25lbnRUeXBlKG1hcCk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBWaWV3RW5jYXBzdWxhdGlvbikge1xuICAgICAgcmV0dXJuIFZJRVdfRU5DQVBTVUxBVElPTl9WQUxVRVNbbWFwXTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IExvY2F0aW9uVHlwZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Rlc2VyaWFsaXplTG9jYXRpb24obWFwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oXCJObyBkZXNlcmlhbGl6ZXIgZm9yIFwiICsgdHlwZS50b1N0cmluZygpKTtcbiAgICB9XG4gIH1cblxuICBtYXBUb09iamVjdChtYXA6IE1hcDxzdHJpbmcsIGFueT4sIHR5cGU/OiBUeXBlKTogT2JqZWN0IHtcbiAgICB2YXIgb2JqZWN0ID0ge307XG4gICAgdmFyIHNlcmlhbGl6ZSA9IGlzUHJlc2VudCh0eXBlKTtcblxuICAgIG1hcC5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICBpZiAoc2VyaWFsaXplKSB7XG4gICAgICAgIG9iamVjdFtrZXldID0gdGhpcy5zZXJpYWxpemUodmFsdWUsIHR5cGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgLypcbiAgICogVHJhbnNmb3JtcyBhIEphdmFzY3JpcHQgb2JqZWN0IChTdHJpbmdNYXApIGludG8gYSBNYXA8c3RyaW5nLCBWPlxuICAgKiBJZiB0aGUgdmFsdWVzIG5lZWQgdG8gYmUgZGVzZXJpYWxpemVkIHBhc3MgaW4gdGhlaXIgdHlwZVxuICAgKiBhbmQgdGhleSB3aWxsIGJlIGRlc2VyaWFsaXplZCBiZWZvcmUgYmVpbmcgcGxhY2VkIGluIHRoZSBtYXBcbiAgICovXG4gIG9iamVjdFRvTWFwKG9iajoge1trZXk6IHN0cmluZ106IGFueX0sIHR5cGU/OiBUeXBlLCBkYXRhPzogYW55KTogTWFwPHN0cmluZywgYW55PiB7XG4gICAgaWYgKGlzUHJlc2VudCh0eXBlKSkge1xuICAgICAgdmFyIG1hcCA9IG5ldyBNYXA8c3RyaW5nLCBhbnk+KCk7XG4gICAgICBTdHJpbmdNYXBXcmFwcGVyLmZvckVhY2gob2JqLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWwsIGtleSkgPT4geyBtYXAuc2V0KGtleSwgdGhpcy5kZXNlcmlhbGl6ZSh2YWwsIHR5cGUsIGRhdGEpKTsgfSk7XG4gICAgICByZXR1cm4gbWFwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTWFwV3JhcHBlci5jcmVhdGVGcm9tU3RyaW5nTWFwKG9iaik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2VyaWFsaXplTG9jYXRpb24obG9jOiBMb2NhdGlvblR5cGUpOiBPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICAnaHJlZic6IGxvYy5ocmVmLFxuICAgICAgJ3Byb3RvY29sJzogbG9jLnByb3RvY29sLFxuICAgICAgJ2hvc3QnOiBsb2MuaG9zdCxcbiAgICAgICdob3N0bmFtZSc6IGxvYy5ob3N0bmFtZSxcbiAgICAgICdwb3J0JzogbG9jLnBvcnQsXG4gICAgICAncGF0aG5hbWUnOiBsb2MucGF0aG5hbWUsXG4gICAgICAnc2VhcmNoJzogbG9jLnNlYXJjaCxcbiAgICAgICdoYXNoJzogbG9jLmhhc2gsXG4gICAgICAnb3JpZ2luJzogbG9jLm9yaWdpblxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9kZXNlcmlhbGl6ZUxvY2F0aW9uKGxvYzoge1trZXk6IHN0cmluZ106IGFueX0pOiBMb2NhdGlvblR5cGUge1xuICAgIHJldHVybiBuZXcgTG9jYXRpb25UeXBlKGxvY1snaHJlZiddLCBsb2NbJ3Byb3RvY29sJ10sIGxvY1snaG9zdCddLCBsb2NbJ2hvc3RuYW1lJ10sIGxvY1sncG9ydCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY1sncGF0aG5hbWUnXSwgbG9jWydzZWFyY2gnXSwgbG9jWydoYXNoJ10sIGxvY1snb3JpZ2luJ10pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2VyaWFsaXplUmVuZGVyQ29tcG9uZW50VHlwZShvYmo6IFJlbmRlckNvbXBvbmVudFR5cGUpOiBPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICAnaWQnOiBvYmouaWQsXG4gICAgICAnZW5jYXBzdWxhdGlvbic6IHRoaXMuc2VyaWFsaXplKG9iai5lbmNhcHN1bGF0aW9uLCBWaWV3RW5jYXBzdWxhdGlvbiksXG4gICAgICAnc3R5bGVzJzogdGhpcy5zZXJpYWxpemUob2JqLnN0eWxlcywgUFJJTUlUSVZFKVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9kZXNlcmlhbGl6ZVJlbmRlckNvbXBvbmVudFR5cGUobWFwOiB7W2tleTogc3RyaW5nXTogYW55fSk6IFJlbmRlckNvbXBvbmVudFR5cGUge1xuICAgIHJldHVybiBuZXcgUmVuZGVyQ29tcG9uZW50VHlwZShtYXBbJ2lkJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzZXJpYWxpemUobWFwWydlbmNhcHN1bGF0aW9uJ10sIFZpZXdFbmNhcHN1bGF0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNlcmlhbGl6ZShtYXBbJ3N0eWxlcyddLCBQUklNSVRJVkUpKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBSZW5kZXJTdG9yZU9iamVjdCB7fVxuIl19