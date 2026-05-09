// const lect = "19-34";
// const choPromise = new Promise((resolve, reject) => {
//     if(lect === "19-34"){
//         resolve("Promise fulfilled ");
//     }
//     else{
//         reject("Promise rejected you have to cover all the lectures");
//     }
// });
// // console.log(choPromise);

// async function consume(){
//     const message = await choPromise;
//     console.log(message);
// }
// consume();


// choPromise
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((err) => {
//         console.log(err);
//     });



// 

const btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    console.log("button clicked");});

    setTimeout(()=>{
        console.log("set timeout");
    },0);

    async function fetchData() {
        console.log(await fetch("https://dummyjson.com/products"));
    }

    fetchData();

    for(var i = 0;i<=10000;i++){
        console.log("Parth");
    }

    console.log("Hello Parth");