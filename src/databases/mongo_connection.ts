
import mongoose, { ConnectOptions } from 'mongoose';

mongoose.connect('mongodb+srv://evan:evan123456789@cluster0.akxqt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
} as ConnectOptions, (err) => {
    if (err) {
        return console.error('Could not connect to mongoDb!', err);
    }
}
);


const mongoDB = mongoose.connection;


export default mongoDB;


