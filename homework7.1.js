const arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];


const re = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail|yahoo)\.com$/;

const trustedEmails = [];
let index = 0;

for (let i = 0; i < arr.length; i++) {
    const email = arr[i].email;
    if (re.test(email)) {
        trustedEmails[index] = email;
        index++;
    }
}

console.log(trustedEmails);