import * as mongoose from "mongoose";

export interface IUser extends mongoose.Document {
	name: string;
	speak: () => void;
}

const Schema: mongoose.Schema = new mongoose.Schema({
	name: { type: String, required: true },
	sources: {

	},
	songs: {

	},
	playlists: {

	},
});
Schema.methods.speak = function() {
	console.log("Hi! I'm", this.name, "and my _id is", this._id + ".");
};

const Model: mongoose.Model<IUser> = mongoose.model("User", Schema);
export default Model;
