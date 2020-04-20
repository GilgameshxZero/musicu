import * as React from "react";
import "./CurrentSong.scss";

export default class CurrentSong extends React.Component {
	public render() {
		return (
			<div className="current-song">
				<iframe src="https://www.youtube.com/embed/iY27pp3vnrA?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				<iframe src="https://www.youtube.com/embed/L_4dDwEVJJM?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</div>
		);
	}
}
