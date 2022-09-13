import mongoose from "mongoose";
const { Schema, model } = mongoose;
// import isEmail from 'validator/lib/isEmail.js';

const employeeSchema = Schema({
    firstName: {
        type: String,
        // required: true
    },
    lastName: {
        type: String,
        // required: true
    },
    city: String,
    email: {
        type: String,
        // required: true,
        // validate: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'invalid email']
    },
    mobile: {
        type: Number,
        // required: true,
    },
    dob: Date,
    img: String
}, { timestamps: true });

// mobile validation
// employeeSchema.path('mobile').validate(function validatePhone() {
//     return (this.mobile > 999999999);
// });

export default model("Ëmployee", employeeSchema);
