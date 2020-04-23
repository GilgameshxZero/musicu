import * as express from "express";

export default function createEndpoints(app: express.Application) {
	app.get("/dumb", function (req, res) {
		res.header("Access-Control-Allow-Origin", "*")
			.status(200)
			.send("⤜(ⱺ ʖ̯ⱺ)⤏");
	});
}
