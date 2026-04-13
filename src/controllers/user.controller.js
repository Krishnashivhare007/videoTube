import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser=asyncHandler(
    async (req,res)=>{
        res.status(200).json({message:"krishna"})
//status code jo bhejoge vhi aayega postman m bhi..isiliye dhyan se
    }
)

export {registerUser};