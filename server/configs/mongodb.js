import mongoose from "mongoose"

// Connet to the MongoDB database 

const connectDB = async () => { 
  mongoose.connection.on('connected', () => console.log('DAtabase connected successfully'));

  await mongoose.connect(`${process.env.MONGODB_URI}/lms`)
}


export default connectDB;