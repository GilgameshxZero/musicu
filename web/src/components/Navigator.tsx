import * as React from "react";
import "./Navigator.scss";

export enum NavigatorSelectionType {
	Explore,
	Settings,
}

interface IProps {
	navigatorSelection: NavigatorSelectionType,
	onNavigatorSelect: (navigatorSelection: NavigatorSelectionType) => void,
}

interface IState {
}

export default class Navigator extends React.Component<IProps, IState> {
	public constructor(props: IProps) {
		super(props);
	}

	private renderTab(label: string, selection: NavigatorSelectionType) {
		return (
			<div className="tab no-select"
				onClick={() => {
					this.props.onNavigatorSelect(selection);
				}}>
				<div className="text">
					{label}
				</div>
				{this.props.navigatorSelection === selection &&
					<div className="highlight"></div>}
			</div>
		);
	}

	public render() {
		return (
			<div className="navigator">
				{this.renderTab(
					"Explore",
					NavigatorSelectionType.Explore)}
				<input className="search"
					type="input" />
				<div className="spacer"></div>
				{this.renderTab(
					"Settings",
					NavigatorSelectionType.Settings)}
			</div>
		);
	}
}
