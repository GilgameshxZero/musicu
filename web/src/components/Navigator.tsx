import * as React from "react";
import "./Navigator.scss";

export enum NavigatorSelectionType {
	Explore,
	Settings,
}

interface IProps {
	navigatorSelection: NavigatorSelectionType,
	onNavigatorSelect: (navigatorSelection: NavigatorSelectionType) => void,

	exploreSearch: string,
	onExploreSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

interface IState {
}

export default class Navigator extends React.Component<IProps, IState> {
	public constructor(props: IProps) {
		super(props);
	}

	private renderTab(label: string, selection: NavigatorSelectionType) {
		return (
			<div className={"tab no-select" +
				(this.props.navigatorSelection === selection ? " selected" : "")}
				onClick={() => {
					this.props.onNavigatorSelect(selection);
				}}>
				<div className="text">
					{label}
				</div>
				<div className="highlight"></div>
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
					type="input"
					placeholder="Search..."
					value={this.props.exploreSearch}
					onChange={this.props.onExploreSearchChange} />
				<div className="spacer"></div>
				{this.renderTab(
					"Settings",
					NavigatorSelectionType.Settings)}
			</div>
		);
	}
}
