import mongoose from 'mongoose';

const connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
      } catch (error) {
        handleError(error);
      }
}

export default connect;