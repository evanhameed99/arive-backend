
import mongoose, { ConnectOptions } from 'mongoose';
import 'dotenv/config';
mongoose.connect(process.env.MONGO_URI as string , {
    useNewUrlParser: true,
} as ConnectOptions, (err) => {
    if (err) {
        return console.error('Could not connect to mongoDb!', err);
    }
}
);


const mongoDB = mongoose.connection;


export default mongoDB;


