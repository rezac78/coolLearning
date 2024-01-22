import { Cloudinary } from 'cloudinary-core';

const cl = new Cloudinary({ cloud_name: process.env.CLOUDINARY_CLOUD_NAME, secure: true });
export default cl;
