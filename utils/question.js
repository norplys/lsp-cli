import * as algorithm from "./algorithm.js";
import { main } from "../index.js";
import { number, input } from '@inquirer/prompts';
export async function defaultQuestion(array) {
    const choice = await number({
        message: 'Masukkan pilihan :',
        required: true
    });
    switch (choice) {
        case 1:
            inputNumber();
            break;
        case 2:
            algorithm.sorting(array);
            break;
        case 3:
            algorithm.searching(array);
            break;
        case 4:
            console.log("Terima kasih");
            process.exit(0);
        default:
            console.log("Input tidak valid");
            defaultQuestion(array);
            break;
    }
}
export async function inputNumber() {
    console.clear();
    const total = await number({
        message: "Masukkan Jumlah Nilai Tugas :",
        required: true
    });
    if (total < 1) {
        console.log("Input tidak valid, mohon masukkan angka lebih dari 0");
        return inputNumber();
    }
    console.log(`
Input Angka Secara Acak
------------------------
`);
    const arr = [];
    for (let i = 0; i < total; i++) {
        const value = await number({
            message: `Masukkan angka ke-${i + 1} :`,
            required: true
        });
        arr.push(value);
    }
    backToMain(arr);
}
export async function backToMain(array) {
    const answer = await input({
        message: "Kembali ke menu ? [Y] :"
    });
    if (answer.toLowerCase() === "y") {
        main(array);
    }
    else {
        console.log("Input tidak valid");
        backToMain(array);
    }
}
