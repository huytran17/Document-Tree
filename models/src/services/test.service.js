var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var moleculer = require("moleculer");
var _a = require("moleculer-decorators"), Service = _a.Service, Action = _a.Action, Event = _a.Event, Method = _a.Method;
var web = require("moleculer-web");
var broker = new moleculer.ServiceBroker({
    logger: console,
    logLevel: "debug"
});
var TestService = /** @class */ (function (_super) {
    __extends(TestService, _super);
    // Optional constructor
    function TestService() {
        var _this = _super.call(this) || this;
        // Without constructor (typescript)
        _this.settings = {
            port: 3001
        };
        _this.settings = {
            // Overrides above by default, to prevent this, add "constructOverride: false" to @Service
            port: 3001
        };
        return _this;
    }
    TestService.prototype.Login = function (ctx) { };
    TestService.prototype.Login3 = function () {
        // this function will never be called since a mixin will override it, unless you specify skipHandler: false.
    };
    // With options
    // No need for "handler:{}" here
    TestService.prototype.Login2 = function (ctx) { };
    TestService.prototype["event.name"] = function (payload, sender, eventName) { };
    __decorate([
        Action()
    ], TestService.prototype, "Login");
    __decorate([
        Action({
            skipHandler: true
        })
    ], TestService.prototype, "Login3");
    __decorate([
        Action({
            cache: false,
            params: {
                a: "number",
                b: "number"
            }
        })
    ], TestService.prototype, "Login2");
    __decorate([
        Event({
            group: "group_name"
        })
    ], TestService.prototype, "event.name");
    TestService = __decorate([
        Service({
            mixins: [web],
            settings: {
                port: 3000,
                routes: []
            }
        })
    ], TestService);
    return TestService;
}(moleculer.Service));
module.exports = TestService;
