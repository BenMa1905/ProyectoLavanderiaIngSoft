const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    rut: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    birthdate:{
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    telephone: {
        type: Number,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: [
            'admin',
            'client'
        ]
    },
    membership: {
        type: Schema.Types.ObjectId,
        ref: 'membership',
    },
    
    /*imgUrl:{
        type:String,
        required:false,
    }*/
})

/*
userSchema.methods.setImgUrl = function setImgUrl (filename) {
    const { host, port } = appConfig
    this.imgUrl = `${host}:${port}/public/${filename}`
}
*/
module.exports = mongoose.model('user', userSchema);