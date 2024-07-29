"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sorting = sorting;
exports.searching = searching;
var index_js_1 = require("../index.js");
var question = require("./question.js");
var prompts_1 = require("@inquirer/prompts");
function sorting(arr) {
    return __awaiter(this, void 0, void 0, function () {
        var start, sortedArray, end, heapUsed;
        return __generator(this, function (_a) {
            console.clear();
            if (!arr) {
                arrayNull(null);
                return [2 /*return*/];
            }
            start = performance.now();
            sortedArray = bubbleSort(__spreadArray([], arr, true));
            end = performance.now();
            heapUsed = process.memoryUsage().heapUsed;
            console.log("Execution time: ".concat((end - start).toFixed(2), " ms"));
            console.log("Memory used: ".concat(heapUsed, " bytes"));
            console.log("Hasil Sorting : ".concat(sortedArray.join(', ')));
            question.backToMain(arr);
            return [2 /*return*/];
        });
    });
}
function searching(arr) {
    return __awaiter(this, void 0, void 0, function () {
        var searchInput, sortedArray, start, found, end, heapUsed, answer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.clear();
                    if (!arr) {
                        arrayNull(null);
                        return [2 /*return*/];
                    }
                    console.log("Array : ".concat(arr.join(', ')));
                    return [4 /*yield*/, (0, prompts_1.number)({
                            message: "Masukkan angka yang ingin dicari :",
                            required: true
                        })];
                case 1:
                    searchInput = _a.sent();
                    sortedArray = bubbleSort(__spreadArray([], arr, true));
                    start = performance.now();
                    found = binarySearch(sortedArray, searchInput);
                    switch (found) {
                        case -1:
                            console.log("Angka ".concat(searchInput, " tidak ditemukan"));
                            break;
                        default:
                            console.log("Angka ".concat(searchInput, " ditemukan"));
                            break;
                    }
                    end = performance.now();
                    heapUsed = process.memoryUsage().heapUsed;
                    console.log("Execution time: ".concat((end - start).toFixed(2), " ms"));
                    console.log("Memory used: ".concat(heapUsed, " bytes"));
                    return [4 /*yield*/, (0, prompts_1.input)({
                            message: "Coba lagi ? [Y/N] :"
                        })];
                case 2:
                    answer = _a.sent();
                    if (answer.toLowerCase() === "y") {
                        searching(arr);
                    }
                    else {
                        question.backToMain(arr);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
function binarySearch(arr, target) {
    var left = 0;
    var right = arr.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}
function arrayNull(array) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log("Masukkan angka terlebih dahulu");
            setTimeout(function () {
                (0, index_js_1.main)(array);
            }, 2000);
            return [2 /*return*/];
        });
    });
}
