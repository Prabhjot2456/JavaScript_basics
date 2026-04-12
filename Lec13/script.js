// Deep copy:

//     const myObj = {
//         name: "Prabh",
//         hobby:{
//             hobby1:"sleeping",
//         },
//     };
// // const copyOfMyObj = JSON.stringify(myObj);   // it will convert the object into a string
// // console.log(typeof copyOfMyObj);   // it will give string

// const copyOfMyObj = JSON.parse(JSON.stringify(myObj));   // it will create a new reference in memory for all the nested objects
// // console.log(typeof copyOfMyObj);
// myObj.name = "Prabhjot";
// myObj.hobby.hobby1 = "eating";
// console.log(copyOfMyObj);



// structured clone:
    // const myObj = {
    //     name: "Prabh",
    //     hobby:{
    //         hobby1:"sleeping",
    //     },
    // };
// const copyOfMyObj = structuredClone(myObj);  
// myObj.name = "Prabhjot";
// myObj.hobby.hobby1 = "eating";
// console.log(copyOfMyObj);



// BOM Overview:

// console.log(navigator);
// console.log(navigator.userAgentData);

// sensors:
// navigator.geolocation.getCurrentPosition((pos)=>{
//     console.log(pos);
//     console.log(pos.coords.longitude);
//     console.log(pos.coords.latitude);
// })


// console.log(navigator.mediaDevices.getUserMedia({video:true}));

// const video = document.getElementById("camera");
// navigator.mediaDevices.getUserMedia({video:true}).then((stream)=>{
//     video.srcObject = stream;
// })