let mainData = {
    data:[
        {
            bookId: 1,
            bookDetails:{
                name: 'Habluder adda',
                category: 'XYZ',
                price: '20$'
            },
            bookCategory: 'Basic',
        },
        {
            bookId: 2,
            bookDetails:{
                name: 'Gabluder adda',
                category: 'ABC',
                price: '40$'
            },
            bookCategory: 'Beginner',
        },
    ]
}
const showHabluderAdda = mainData.data[0].bookDetails.name;
console.log(showHabluderAdda);

const showBeginner = mainData.data[1].bookCategory;
console.log(showBeginner);