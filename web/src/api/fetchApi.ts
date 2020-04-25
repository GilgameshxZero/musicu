let API_HOST: string = "http://127.0.0.1:3000";

export function setApiHost(host: string) {
	API_HOST = host;
}

function makeRequest(opts: {
	method: string,
	url: string,
	headers?: Record<string, string>,
	params?: Record<string, string>,
}) {
	return new Promise(function (resolve, reject) {
		const xhr = new XMLHttpRequest();
		xhr.open(opts.method, opts.url);
		xhr.onload = function () {
			if (this.status >= 200 && this.status < 300) {
				resolve(xhr.response);
			} else {
				reject({
					status: this.status,
					statusText: xhr.statusText
				});
			}
		};
		xhr.onerror = function () {
			reject({
				status: this.status,
				statusText: xhr.statusText
			});
		};
		if (opts.headers) {
			Object.keys(opts.headers).forEach(function (key) {
				xhr.setRequestHeader(key, opts.headers[key]);
			});
		}

		const paramStr = Object.keys(opts.params).map(function (key) {
			return encodeURIComponent(key) + "=" + encodeURIComponent(opts.params[key]);
		}).join("&");
		xhr.send(paramStr);
	});
}

// Makes an API request to the backend configured in API_HOST.
export default function fetchApi(opts: {
	method?: string,
	url: string,
	headers?: Record<string, string>,
	params?: Record<string, string>,
}) {
	return makeRequest({
		method: opts["method"] || "GET",
		url: API_HOST + opts["url"],
		headers: opts["headers"],
		params: opts["params"] || {},
	});
}
