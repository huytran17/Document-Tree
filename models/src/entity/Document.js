"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Document = void 0;
var typeorm_1 = require("typeorm");
var Directory_1 = require("./Directory");
var Document = /** @class */ (function () {
    function Document() {
    }
    Document_1 = Document;
    var Document_1;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Document.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)("varchar")
    ], Document.prototype, "label");
    __decorate([
        (0, typeorm_1.Column)("text")
    ], Document.prototype, "content");
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return Document_1; }),
        (0, typeorm_1.JoinColumn)({ name: "parent_id", referencedColumnName: "id" })
    ], Document.prototype, "parent");
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return Directory_1.Directory; }, function (directory) { return directory.documents; })
    ], Document.prototype, "directories");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ name: "created_at", update: false })
    ], Document.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ name: "updated_at" })
    ], Document.prototype, "updatedAt");
    Document = Document_1 = __decorate([
        (0, typeorm_1.Entity)()
    ], Document);
    return Document;
}());
exports.Document = Document;
