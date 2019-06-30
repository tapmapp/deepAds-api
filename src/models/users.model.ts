import mongoose, { Document, Model, Schema } from "mongoose";

interface IUser {
  email: string;
  name: string;
  lastName: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
  dateBirth: string;
  genre: string;
  password: string;
  created: string;
  status: string;
  img: string;
}

interface IUserModel extends IUser {
  createUser: object;
  userInfo: object;
  getUsers: object;
  saveCurrentLocation: object;
  usersByDisplayer: object;
}

export const userSchema = new Schema<IUserModel>({
  email: { type: String, required: true, unique: true, index: true },
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

export const UserMethods = userSchema.methods;

const User: Model<Document> = mongoose.model("User", userSchema);

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
userSchema.methods.userInfo = (userId: string) => {
  return User.findOne({ _id: userId }).exec();
};

// GET USERSBY DISPLAYER
userSchema.methods.usersByDisplayer = (displayerId: string) => {
  return User.find({ _id: displayerId }).exec();
};
