import * as React from "react";
import "./Explore.scss";
import fetchApi from "api/fetchApi";

export enum SubmenuSelectionType {
	All,
	Youtube,
	Playlist,
}

interface IProps {
	exploreSearch: string,
}

interface IState {
	submenuSelection: SubmenuSelectionType,

	searchResponse: string,
}

export default class Explore extends React.Component<IProps, IState> {
	public constructor(props: IProps) {
		super(props);

		this.state = {
			submenuSelection: SubmenuSelectionType.All,
			searchResponse: "[]",
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

	public componentDidUpdate(prevProps: IProps) {
		if (this.props.exploreSearch !== prevProps.exploreSearch) {
			fetchApi({
				url: "/search?query=" + this.props.exploreSearch,
			}).then((response: string) => {
				this.setState({
					searchResponse: response,
				});
			});
		}
	}

	public render() {
		return (
			<div className="explore">
				<div className="submenu no-select">
					<div className="section">
						{this.renderSubmenuSelection("All", SubmenuSelectionType.All)}
						{this.renderSubmenuSelection("Youtube", SubmenuSelectionType.Youtube)}
					</div>
					<div className="section">
						playlists
					</div>
				</div>
				<div className="viewer">
					{JSON.parse(this.state.searchResponse).map((videoId: string) => (
						<div key={videoId}>
							<a href={"https://www.youtube.com/watch?v=" + videoId}>{videoId}</a><br />
							<img src={"https://img.youtube.com/vi/" + videoId + "/hqdefault.jpg"} />
						</div>
					))}
				</div>
			</div>
		);
	}
}
