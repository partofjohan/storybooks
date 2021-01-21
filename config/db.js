const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
            useFindAndModify: false
        });
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch(error) {
        console.error(error);
        process.exit(1);    //Exit with failure
    }
}

module.exports = connectDB;