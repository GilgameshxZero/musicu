import * as React from "react";
import "./Explore.scss";
import xhrGet from "api/xhr";

export enum SubmenuSelectionType {
	All,
	Youtube,
	Playlist,
}

interface IProps {
}

interface IState {
	submenuSelection: SubmenuSelectionType,
}

export default class Explore extends React.Component<IProps, IState> {
	private text: string;
	public constructor(props: IProps) {
		super(props);

		this.state = {
			submenuSelection: SubmenuSelectionType.All,
		};

		xhrGet("http://localhost:3000/dumb", (response: string) => {
			this.text = response;
			this.forceUpdate();
		}, (status: number) => {
			console.log("Failed:", status);
		});
	}

	private renderSubmenuSelection(label: string, selection: SubmenuSelectionType) {
		return (
			<div className={"selection" +
				(this.state.submenuSelection === selection ? " selected" : "")}
				onClick={() => {
					this.setState({
						submenuSelection: selection,
					});
				}}>
				{label}
			</div>
		)
	}

	public render() {
		return (
			<div className="explore">
				<div className="submenu no-select">
				</div>
				<div className="viewer">
					{this.text}
				</div>
			</div>
		);
	}
}
