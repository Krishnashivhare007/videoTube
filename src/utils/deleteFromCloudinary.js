import {v2 as cloudinary} from "cloudinary";

const deleteFromCloudinary=async(publicId)=>{
    try {
        if(!publicId) return null;
        const res=await cloudinary.uploader.destroy(publicId)
        return res;
    } catch (error) {
        return null;
    }
}

export {deleteFromCloudinary}