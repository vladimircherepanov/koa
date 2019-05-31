import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcrypt';
import uniqueValigator from 'mongoose-unique-validator';

mongoose.plugin(uniqueValigator);

const UserSchema = new Schema ({
    email: {
        type: String,
        unique: 'email "VALUE" already registred',
        lowercase: true,
        required: 'email is required'
    },
    password: {
        type: String,
        required: 'Password is required'
    },
    firstName: {
        type: String,
        lowercase: true,
        required: 'First name is required'
    },
    lastName: {
        type: String,
        lowercase: true,
        required: 'Last name is required'
    }
},

    {
        timestamp: true
    }
);

UserSchema.statics.createFields = ['email', 'password', 'firstName', 'lastName'];
UserSchema.pre('save', function(next) {
    if(!this.IsModified('password')) {
        return next();
    }
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
    next();
});
UserSchema.statics.FindOneWithPublicFields = function (params, cb) {
    return this.findOne(params, cb).select({ password: 0, _id: 0, __v: 0});
};

export default mongoose.model('user', UserSchema);









