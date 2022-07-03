const mongoose = require('mongoose');


const connectDB = async () => {
    console.log('Check')
    const connection = await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB connected');
}

module.exports = { connectDB }