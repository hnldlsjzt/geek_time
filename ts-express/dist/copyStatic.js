"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shelljs_1 = __importDefault(require("shelljs"));
// 使用 shelljs 来复制
shelljs_1.default.cp('-R', "public", "dist");
shelljs_1.default.cp('-R', "views", "dist");
