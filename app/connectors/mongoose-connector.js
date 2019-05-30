import mongoose from 'mongoose';

mongoose.Promise = Promise;

export default (mongoUri) => {
    if (!mongoUri) {
        throw Error('Bad')
    }
    
    return new Promise ((res, rej)=> {
        mongoose
            .connect (mongoUri, {useNewUrlParser: true })
            .then((mongodb) => {
                res(mongodb);
                console.log('DB Connected');
            })
            .catch((err) => {
                rej(err);   
            });
            
    });
};