const notes = [
    {
        id:1,
        title:'Recipe',
        description:'Ingredients include 2 eggs...',
        pagesCount: 2,
        isMarked: false,
        access:[],
    },
    {
        id:2,
        title:'Workout',
        description:'3 sets of squats',
        pagesCount:1,
        isMarked: true,
        access:[],
    },
    {
        id:3,
        title: 'Passwords',
        description:'Visa',
        pagesCount:6,
        isMarked:true,
        access:[],
    },
    {
        id:4,
        title:'to do 2021',
        description:'i learn js',
        pagesCount: 3,
        isMarked: false,
        access:[],
    },
]


let newArray = notes.map(item=>({id:item.id,
   title:item.title}));
console.log(newArray)


let filterMassive = notes.filter(item=>(item.isMarked === true));
console.log(filterMassive)


function Counter(arr){
    let initialValue = 0;
     return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue.pagesCount,
    initialValue
);
}
console.log (Counter(notes));