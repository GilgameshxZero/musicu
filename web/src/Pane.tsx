import * as React from "react";
import "./Pane.scss";
import logoImg from "./assets/logo.svg";
import plusImg from "./assets/plus.svg";

interface IProps {
	image?: string,
	label: string,
	sublabel?: string,
	onClick?: () => void,
}

export default class Pane extends React.Component<IProps> {
	private renderImage() {
		let predefinedSource = this.props.image;
		switch (this.props.image) {
			case undefined:
				predefinedSource = logoImg;
				break;
			case "plus":
				predefinedSource = plusImg;
		}

		return <img src={predefinedSource} />;
	}

	public render() {
		return (
			<div className="pane"
				onClick={this.props.onClick}>
				{this.renderImage()}
				<div className="labels">
					<span className={"label " + (this.props.sublabel === undefined ?
						"double" : "")}>{this.props.label}</span>
					<span className="sublabel">{this.props.sublabel}</span>
				</div>
			</div>
		);
	}
}
