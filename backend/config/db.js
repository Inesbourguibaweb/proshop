import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Enable debug mode for detailed logs
    mongoose.set('debug', true);

    // Connect to MongoDB without deprecated options
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
