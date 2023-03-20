const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name not provided"]
    },
    email: {
        type: String,
        unique: [true, "Email already exists"],
        lowercase: true,
        trim: true,
        required: [true, "Email not provided"],
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: '{VALUE} is not a valid email!'
        }
    },
    role: {
        type: String,
        enum: ["normal", "admin"],
        required: [true, "Please specify user role"]
    },
    password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

// static signup method
userSchema.statics.signup = async (email, password) => {
    const exists = await this.findOne({ email })

    if (exists) {
        throw Error('Email already in use');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ email, password: hash })

    return user;
};


module.exports = mongoose.model('User', userSchema);