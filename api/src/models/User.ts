import * as mongoose from "mongoose";

export interface IUser extends mongoose.Document {
	name: string;
	songs: mongoose.Schema.Types.ObjectId[];
}

const Schema: mongoose.Schema = new mongoose.Schema({
	name: { type: String, required: true },
	songs: [mongoose.Schema.Types.ObjectId],
});

const Model: mongoose.Model<IUser> = mongoose.model("User", Schema);
export default Model;
