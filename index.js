#!/usr/bin/env node
import * as question from "./utils/question.js";
export function main(array) {
    console.clear();
    if (array) {
        console.log(`Array : ${array.join(', ')}`);
    }
    console.log(`
1. Input angka
2. Sorting
3. Searching
4. Selesai
    `);
    question.defaultQuestion(array);
}
main(null);
