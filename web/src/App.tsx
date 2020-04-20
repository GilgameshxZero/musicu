import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.scss";
import Library from "./Library";
import CurrentSong from "./CurrentSong";

ReactDOM.render(
	<div className="app">
		<Library />
		<CurrentSong />
	</div>,
	document.getElementById("app"),
);
