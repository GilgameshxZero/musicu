import * as React from "react";
import "./Settings.scss";

export enum SubmenuSelectionType {
	Account,
	Sources,
	Playback,
	Themes,
}

interface IProps {
}

interface IState {
	submenuSelection: SubmenuSelectionType,
}

export default class Settings extends React.Component<IProps, IState> {
	public constructor(props: IProps) {
		super(props);

		this.state = {
			submenuSelection: SubmenuSelectionType.Account,
		};
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
			<div className="settings">
				<div className="submenu no-select">
					{this.renderSubmenuSelection("Account", SubmenuSelectionType.Account)}
					{this.renderSubmenuSelection("Sources", SubmenuSelectionType.Sources)}
					{this.renderSubmenuSelection("Playback", SubmenuSelectionType.Playback)}
					{this.renderSubmenuSelection("Themes", SubmenuSelectionType.Themes)}
				</div>
				<div className="viewer">
				</div>
			</div>
		);
	}
}
