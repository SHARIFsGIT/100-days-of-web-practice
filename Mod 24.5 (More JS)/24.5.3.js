const student = {
    name: 'Sakib',
    id: 12,
    address: 'Gulshan',
    isSingle: true,
    act: function(){
        console.log('Khan')
    },
    friends: ['Apu', 'Mulshan', 'Raz'],
    car: {
        brand: 'BMW',
        made: 2015,
        price: '12M',
        menufacturer: {
            ceo: 'Elon',
        }
    }
}
console.log(student.car)