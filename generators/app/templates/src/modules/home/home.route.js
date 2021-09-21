"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_service_1 = require("./home.service");
var homeService = new home_service_1.HomeService;
exports.HomeRoutes = [
    {
        path: '/',
        method: 'GET',
        handler: homeService.index
    }
];
