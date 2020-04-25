import * as express from "express";
import * as https from "https";
import * as url from "url";

export default function createEndpoints(app: express.Application) {
	app.get("/search", function (req, res) {
		const searchResponse = res;
		https.get(url.format({
			protocol: "https",
			hostname: "www.youtube.com",
			pathname: "/results",
			query: {
				search_query: req.param("query"),
				pbj: 1,
			}
		}), (res) => {
			let data = "";
			res.on("data", (chunk: string) => {
				data += chunk;
			});

			res.on("end", () => {
				const re = new RegExp("href=\"/watch\\?v=([^&]+?)\"", "g");
				const videoIds = new Set();
				let match;
				while (match = re.exec(data)) {
					videoIds.add(match[1]);

				}

				searchResponse.header("Access-Control-Allow-Origin", "*")
					.status(200)
					.send(Array.from(videoIds));
			});
		}).end();
	});
}
