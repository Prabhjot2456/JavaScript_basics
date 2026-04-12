// Refference Data type

// Arrays : collection of different data types seperated with the help of comma in square brackets
// Array is a special type of object  
// It is ordered

let myarr = [1, "Prabh", true, null, undefined, false, Symbol("id")];
// console.log(myarr);
// console.log(myarr.length);
// console.log(myarr.slice(3, 5));

// myarr.push("Nishchay");      // add anything in the end
// console.log(myarr);

// myarr.pop("Nishchay");       // to remove something from the end also it return the removed value
// console.log(myarr);
// const poppedValueFromArray = myarr.pop();
// console.log(poppedValueFromArray);

// const shiftedValueFromArray = myarr.shift();    // remove element at start 
// console.log(shiftedValueFromArray);

// myarr.unshift("Milan");                         // Add element at the start
// console.log(myarr);

// console.log(typeof myarr);           // It will give 'Object'
// console.log(Array.isArray(myarr));   // We can check array by this method
// console.log(myarr instanceof Array); // Another method to check array

// If we have to extract particular element from array
// console.log(myarr.slice(3, 4)[0]);



// Object : pair of key : values,
// It is unordered
// var myobj = {
//     name : "Prabh",
//     age : 18,
//     ismarried : false,
//     hobbies : ["Listening music", "Traveling"],
//     course: "AIFT",
//     myfather:{
//         name:"Ravinder Singh",
//         age : 45,
//         ismarried : true,
//     }
// }
// console.log(myobj);
// console.log(myobj.name);
// console.log(myobj.hobbies[1]);
// console.log(myobj.myfather.name);

// myobj.age = 19;               // to update value
// console.log(myobj);

// myobj.friend = "Milan";     // to add new key value pair
// console.log(myobj);  

// delete myobj.course;         // to delete key value pair
// console.log(myobj);

// console.log(typeof myobj);   // it will give 'object'  



// Practice
// objects:
var productobj = {
      "id": 1,
      "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "price": 9.99,
      "discountPercentage": 10.48,
      "rating": 2.56,
      "stock": 99,
      "tags": [
        "beauty",
        "mascara"
      ],
      "brand": "Essence",
      "sku": "BEA-ESS-ESS-001",
      "weight": 4,
      "dimensions": {
        "width": 15.14,
        "height": 13.08,
        "depth": 22.99
      },
      "warrantyInformation": "1 week warranty",
      "shippingInformation": "Ships in 3-5 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 3,
          "comment": "Would not recommend!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Eleanor Collins",
          "reviewerEmail": "eleanor.collins@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very satisfied!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Lucas Gordon",
          "reviewerEmail": "lucas.gordon@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Eleanor Collins",
          "reviewerEmail": "eleanor.collins@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 48,
      "meta": {
        "createdAt": "2025-04-30T09:41:02.053Z",
        "updatedAt": "2025-04-30T09:41:02.053Z",
        "barcode": "5784719087687",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
    }




    

// const myobj = {
//     name:'aditya',
//     name:'milan'
// }
// console.log(myobj);


//////////////////////////////////
// myarr = [1, 2, 3, 4];
// myarrcopy = myarr

// myarr.pop();
// myarr.push(20);
// console.log(myarrcopy);    // because it doesnot store full array it only stores address of array

///////////////////////////////////
// let myobj = {
//     name : "Prabh",
// }
// myobjcopy = myobj
// myobj.name = "nikhil" 
// console.log(myobjcopy)   // because it doesnot store full object it only stores address of object