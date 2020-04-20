import * as mongoose from "mongoose";
import * as express from "express";
import User, {
  IUser
} from "./User";

mongoose.connect("mongodb://localhost/musicu", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db: mongoose.Connection = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", function () {
  console.log("Database connection open.");

  const newUser: IUser = new User({
    name: "user-0",
  });
  newUser.speak();
  newUser.save(function (error: mongoose.Error, result: IUser) {
    User.countDocuments({}, function (error: mongoose.Error, result: Number) {
      console.log("There are", result, "users.");
    });
  });
});

const app: express.Application = express();
const port: string = process.env.PORT || "61002";

app.get("/dumb", function (req, res) {
  res.send("⤜(ⱺ ʖ̯ⱺ)⤏");
});

app.listen(port, function () {
  console.log("Serving endpoints on port", port + ".");
});
