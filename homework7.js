
const re = /\b[^aA\s]{6,}\b/;


const testStrings = [
    "Wonderful",
    "Joyful",
    "Happiness",
    "Time",
    "Task",
    "Apple"
];


testStrings.forEach(function(str) {
    if (re.test(str)) {
        console.log("Знайдено: ", str);
    } else {
        console.log("Не знайдено: ", str);
    }
});
