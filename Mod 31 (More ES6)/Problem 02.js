let students = {
    2222: {
        name: 'John',
        section: 'D',
        class: 'X',
        address: {
            'building no': 85,
            'street': 'DC road',
            'city': 'Horn',
            'country': 'Germany'
        }
    },
    3333: {
        name: 'Herry',
        section: 'C',
        class: 'IX',
        address: {
            'building no': 12,
            'street': 'St. Jonson',
            'city': 'Peterburg',
            'country': 'UK'
        }
    }
}
const findPererburg = students['3333'].address.city;
console.log(findPererburg)

const findHarry = students['3333'].name;
console.log(findHarry)