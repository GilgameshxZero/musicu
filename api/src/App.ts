import * as mongoose from "mongoose";
import * as express from "express";
import User, {
  IUser
} from "./models/User";
import createDumbEndpoints from "./api/dumb";
import createSearchEndpoints from "./api/search";

mongoose.connect("mongodb://localhost/musicu", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db: mongoose.Connection = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", function () {
  console.log("Database connection open.");

  const newUser: IUser = new User();
  newUser.save(function (error: mongoose.Error, result: IUser) {
    User.countDocuments({}, function (error: mongoose.Error, result: Number) {
      console.log("There are", result, "users.");
    });
  });
});

const app: express.Application = express();
const port: number = Number(process.env.PORT) || 3000;
createDumbEndpoints(app);
createSearchEndpoints(app);
app.listen(port, function () {
  console.log("Serving on port", port + ".");
});
