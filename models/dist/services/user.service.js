"use strict";
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var moleculer = require("moleculer");
var moleculer_decorators_1 = require("moleculer-decorators");
var web = require("moleculer-web");
var broker = new moleculer.ServiceBroker({
    logLevel: "debug",
});
var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserService.prototype.Login = function (ctx) { };
    UserService.prototype.Login3 = function () {
        // this function will never be called since a mixin will override it, unless you specify skipHandler: false.
    };
    // With options
    // No need for "handler:{}" here
    UserService.prototype.Login2 = function (ctx) { };
    UserService.prototype["event.name"] = function (payload, sender, eventName) { };
    UserService.prototype.authorize = function (ctx, route, req, res) { };
    UserService.prototype.started = function () {
        // Reserved for moleculer, fired when started
    };
    UserService.prototype.created = function () {
        // Reserved for moleculer, fired when created
    };
    UserService.prototype.stopped = function () {
        // Reserved for moleculer, fired when stopped
    };
    __decorate([
        (0, moleculer_decorators_1.Action)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UserService.prototype, "Login", null);
    __decorate([
        (0, moleculer_decorators_1.Action)({
            skipHandler: true, // Any options will be merged with the mixin's action.
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UserService.prototype, "Login3", null);
    __decorate([
        (0, moleculer_decorators_1.Action)({
            cache: false,
            params: {
                a: "number",
                b: "number",
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UserService.prototype, "Login2", null);
    __decorate([
        (0, moleculer_decorators_1.Event)({
            group: "group_name",
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], UserService.prototype, "event.name", null);
    __decorate([
        moleculer_decorators_1.Method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], UserService.prototype, "authorize", null);
    UserService = __decorate([
        (0, moleculer_decorators_1.Service)({
            mixins: [web],
            settings: {
                port: 3000,
                routes: [],
            },
        })
    ], UserService);
    return UserService;
}(moleculer.Service));
module.exports = UserService;
//# sourceMappingURL=user.service.js.map