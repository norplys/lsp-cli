import { main } from "../index.js";
import * as question from "./question.js";
import { number, input } from '@inquirer/prompts';
export async function sorting(arr) {
    console.clear();
    if (!arr) {
        arrayNull(null);
        return;
    }
    const start = performance.now();
    const sortedArray = bubbleSort([...arr]);
    const end = performance.now();
    const { heapUsed } = process.memoryUsage();
    console.log(`Execution time: ${(end - start).toFixed(2)} ms`);
    console.log(`Memory used: ${heapUsed} bytes`);
    console.log(`Hasil Sorting : ${sortedArray.join(', ')}`);
    question.backToMain(arr);
}
export async function searching(arr) {
    console.clear();
    if (!arr) {
        arrayNull(null);
        return;
    }
    console.log(`Array : ${arr.join(', ')}`);
    const searchInput = await number({
        message: "Masukkan angka yang ingin dicari :",
        required: true
    });
    const sortedArray = bubbleSort([...arr]);
    const start = performance.now();
    const found = binarySearch(sortedArray, searchInput);
    switch (found) {
        case -1:
            console.log(`Angka ${searchInput} tidak ditemukan`);
            break;
        default:
            console.log(`Angka ${searchInput} ditemukan`);
            break;
    }
    const end = performance.now();
    const { heapUsed } = process.memoryUsage();
    console.log(`Execution time: ${(end - start).toFixed(2)} ms`);
    console.log(`Memory used: ${heapUsed} bytes`);
    const answer = await input({
        message: "Coba lagi ? [Y/N] :"
    });
    if (answer.toLowerCase() === "y") {
        searching(arr);
    }
    else {
        question.backToMain(arr);
    }
}
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
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
async function arrayNull(array) {
    console.log("Masukkan angka terlebih dahulu");
    setTimeout(() => {
        main(array);
    }, 2000);
    return;
}
