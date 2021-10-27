"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Directory = void 0;
var typeorm_1 = require("typeorm");
var Document_1 = require("./Document");
var Directory = /** @class */ (function () {
    function Directory() {
    }
    Directory_1 = Directory;
    var Directory_1;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Directory.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)("varchar")
    ], Directory.prototype, "label");
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return Directory_1; }),
        (0, typeorm_1.JoinColumn)({ name: "parent_id", referencedColumnName: "id" })
    ], Directory.prototype, "parent");
    __decorate([
        (0, typeorm_1.OneToMany)(function (type) { return Document_1.Document; }, function (document) { return document.directories; })
    ], Directory.prototype, "documents");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ name: "created_at", update: false })
    ], Directory.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ name: "updated_at" })
    ], Directory.prototype, "updatedAt");
    Directory = Directory_1 = __decorate([
        (0, typeorm_1.Entity)()
    ], Directory);
    return Directory;
}());
exports.Directory = Directory;
