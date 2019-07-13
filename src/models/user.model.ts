import mongoose, { Model, Schema } from "mongoose";

// INTERFACES
import { IUser, IUserModel } from "../interfaces/user.interface";

const userSchema = new Schema<IUserModel>({
  _id: { type: String, required: true, unique: true, index: true },
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: false },
  postalCode: { type: String, required: false },
  city: { type: String, required: false },
  country: { type: String, required: false },
  dateBirth: { type: String },
  genre: { type: String},
  password: { type: String, required: true },
  created: { type: Date, default: Date.now },
  status: { type: Boolean, default: false },
  img: { type: String }
});

export const User: Model<IUserModel> = mongoose.model<IUserModel>("User", userSchema);

// CREATE USER
userSchema.methods.getUsers = () => {
  return User.find().exec();
};

// CREATE USER
userSchema.methods.createUser = (user: IUser) => {

  return new User({
    email: user.email,
    name: user.name,
    lastName: user.lastName,
    address: user.address,
    postalCode: user.postalCode,
    city: user.city,
    country: user.country,
    dateBirth: user.dateBirth,
    genre: user.genre,
    password: user.password,
    created: user.created,
    status,
    img: user.img
  }).save();

};

// USER INFO
userSchema.methods.userInfo = (userId: string): Promise<IUserModel> => {
  return User.findOne({ _id: userId }).exec();
};

// GET USERSBY DISPLAYER
userSchema.methods.usersByDisplayer = (displayerId: string): Promise<IUserModel[]> => {
  return User.find({ _id: displayerId }).exec();
};

// SAVE USER CURRENT LOCATION
userSchema.methods.saveUserCurrentLocation = (user: IUser): Promise<IUserModel[]> => {
  return null;
};
