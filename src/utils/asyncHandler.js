const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=> next(err))
    }
}//with promise same as below







export {asyncHandler}


// const asyncHandler=(fn)=>{()=>{}}//same as below higher order function
// const asyncHandler=(fn)=>async (req,res,next)=>{//with try catch
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code||500).json({
//             success:false,
//             message:error.message
//         })
//     }
// }
