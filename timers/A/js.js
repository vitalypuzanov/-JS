
const downloads = [{
    id:1,
    title: "Recipe",
    status: "Done"
},
{
    id:2,
    title: "Workouts",
    status: "Pending"
},
{
    id:3,
    title: "Passwords",
    status: "Pending"
},
{
    id:4,
    title: "To Do 2021",
    status: "Pending"
},
{
    id:5,
    title: "Books",
    status: "Failed"
}
]


  function vit (arr){
 for (let i = 0; i < 3; i++) {
    if(arr[i].status==="Pending"){
        arr[i].status="Done"
    }      
 }
 return arr 
}      
    console.log(downloads)
    console.log(vit(downloads));
//    setTimeout (vit, 5000, downloads);
//    setTimeout(() => console.log(downloads), 8000);
// //   console.log(vit(downloads));

// let onclick = setTimeout(function () {setTimeout(function () {
    
// }, 3000)}, 5000)

// document.getElementById('btn').addEventListener('click', setTimeout(function (params){
     
// },3000);
