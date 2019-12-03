const mongoose = require('mongoose');

const DB_USER = process.env.DB_USER || 'express';
const DB_PASSWORD = process.env.DB_PASSWORD || 'hFBLCsPw1LDn0rqEK0BaecTBGlOSZq59sC5YCxT';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://'+DB_USER+':'+DB_PASSWORD+'@ds029979.mlab.com:29979/users-ebook', {
  useMongoClient: true
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const UserSchema = new Schema({
  id: ObjectId,
  email: {type: String, required: true, unique: true},
  name: {type: String, required: true},
  password_hash: {type: String, required: true}
},{collection:'users'});

const UserModel = mongoose.model('users', UserSchema);

var user = new UserModel({
  email: 'omkar@mail.com',
  name: 'Omkar',
  password_hash: 'slfkdjfnkgnjdkgfkj'
});

user.save()
  .then(doc => console.log(doc))
  .catch(err => console.log(err));

