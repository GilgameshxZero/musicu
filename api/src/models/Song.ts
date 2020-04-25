import * as mongoose from "mongoose";

export interface ISong extends mongoose.Document {
	name: string;
	songs: mongoose.Schema.Types.ObjectId[];
}

const Schema: mongoose.Schema = new mongoose.Schema({
	name: { type: String, required: true },
	songs: [mongoose.Schema.Types.ObjectId],
});

const Model: mongoose.Model<ISong> = mongoose.model("Song", Schema);
export default Model;
