
function findValueByKey(company, companyName) {
    if (company.name === companyName) {
        return company;
    }


    if (company.clients && company.clients.length > 0) {
        for (let i = 0; i < company.clients.length; i++) {
            const result = findValueByKey(company.clients[i], companyName);
            if (result) {
                return result;
            }
        }
    }

    return null;
}

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

console.log("Result 1:", findValueByKey(company, "Клієнт 1"));
console.log("Result 2:",findValueByKey(company, "Клієнт 2"));
console.log("Result 3:",findValueByKey(company, "Клієнт 3"));
