import mongoose from "mongoose";

export default function conncetDb() {
    mongoose.connect(process.env.ECOM_MONGODB_URI, {

    }).then((onSuccess) => {
        console.log("connected to mongodb in the host: ", onSuccess.connection.host);
    }).catch((err) => {
        console.log("error connecting to mongodb: ", err.message);
    })
}