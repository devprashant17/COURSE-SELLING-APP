const mongoose = require('mongoose');

const ObjectId = mongoose.ObjectId;
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String
});

const adminSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String
});

const courseSchema = new Schema({
    title: {type:String,unique:true},
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
});

const purchasesSchema = new Schema({
    courseId: ObjectId,
    userId: ObjectId
});


const userModel = mongoose.model('User',userSchema);
const adminModel = mongoose.model('Admin',adminSchema);
const courseModel = mongoose.model('Course',courseSchema);
const purchasesModel = mongoose.model('Purchases',purchasesSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchasesModel
}
