// Error handling : 

// try{
//     console.log(a);
// }
// catch{
//     console.log("a jaisa koi variable define nahi hai");
// }
// finally{
//     console.log("always executed");
// }



// a = 1100;
// try{
//     if(a<1000){
//         throw new Error("a is less than 1000");
//     }
// }
// catch(err){
//     console.error(err);
// }
// finally{
//     a=1000;
//     console.log("finally block executed, a is set to " + a);
// }



try{
    prabh();
}catch(err){
    console.error(err);
}finally{
    function prabh(){
        console.log("Hello all from prabh");
    }
    prabh();
}