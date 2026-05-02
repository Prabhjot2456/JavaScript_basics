// promise : a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// states of a promise : pending, fulfilled, rejected 

// fetch : network calling method that returns a promise which resolves to the Response to that request, whether it is successful or not.



// async function networkRequest() {
//     const data = await fetch("https://dummyjson.com/products");
//     // console.log(data);
//     const originalData = await data.json();
//     console.log(originalData);
// }
// networkRequest();


// async function networkRequest() {
//     const data = await fetch("https://dummyjson.com/products");
//     const originalData = await data.json();
//     return originalData;
// }
// const products = networkRequest(); 
// // console.log(products); // Promise { <pending> }



// fetch("https://dummyjson.com/products")
//     .then((resolve)=>{
//         console.log("data received");
//         // console.log(resolve);
//         return resolve.json();
//     }).then((resolve)=>{
//         console.log(resolve);
//     })
//     .catch(()=>{
//         console.log("error while fetching data");
//     })



