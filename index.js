#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
var question = require("./utils/question.js");
function main(array) {
    console.clear();
    if (array) {
        console.log("Array : ".concat(array.join(', ')));
    }
    console.log("\n1. Input angka\n2. Sorting\n3. Searching\n4. Selesai\n    ");
    question.defaultQuestion(array);
}
main(null);
