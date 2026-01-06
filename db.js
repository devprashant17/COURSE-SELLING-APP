const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://prashantkarki:nHTQ99lLTXjSI6aI@cluster0.bc0zy5d.mongodb.net/COURSE-SELLING-APP');

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
    title: String,
    decription: String,
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
