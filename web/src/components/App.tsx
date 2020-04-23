import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.scss";
import "styles/_colors.scss";
import "styles/_sizes.scss";
import "styles/_no-classes.scss";
import Navigator, {
	NavigatorSelectionType,
} from "./Navigator";
import Player from "./Player";
import Explore from "./Explore";
import Settings from "./Settings";

interface IProps {

}

interface IState {
	isPlaying: boolean;
	songProgress: number;
	songName: string;
	navigatorSelection: NavigatorSelectionType;
}

class App extends React.Component<IProps, IState> {
	public constructor(props: IProps) {
		super(props);

		this.state = {
			isPlaying: false,
			songProgress: 0,
			songName: "",
			navigatorSelection: NavigatorSelectionType.Explore,
		};
	}

	private handleNavigatorSelect(navigatorSelection: NavigatorSelectionType) {
		this.setState({
			navigatorSelection: navigatorSelection,
		});
	}

	private handlePlayerBackward() {

	}

	private handlePlayerPlayPause() {
		this.setState({
			isPlaying: !this.state.isPlaying,
		});
	}

	private handlePlayerForward() {

	}

	private handlePlayerSeek(position: number) {
		this.setState({
			songProgress: position,
		});
	}

	public render() {
		return (
			<div className="app">
				<Navigator
					navigatorSelection={this.state.navigatorSelection}
					onNavigatorSelect={this.handleNavigatorSelect.bind(this)} />
				<div className="main">
					{this.state.navigatorSelection === NavigatorSelectionType.Explore &&
						<Explore />}
					{this.state.navigatorSelection === NavigatorSelectionType.Settings &&
						<Settings />}
				</div>
				<Player
					isPlaying={this.state.isPlaying}
					progress={this.state.songProgress}
					title={this.state.songName}

					onBackward={this.handlePlayerBackward.bind(this)}
					onPlayPause={this.handlePlayerPlayPause.bind(this)}
					onForward={this.handlePlayerForward.bind(this)}
					onSeek={this.handlePlayerSeek.bind(this)} />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById("app"),
);

console.log("Running in dev mode. console.log enabled.");
