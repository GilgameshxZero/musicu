import * as React from "react";
import "./Library.scss";
import LibraryMenu, {
	LibraryViewerType,
} from "./LibraryMenu";
import SourcesViewer from "./SourcesViewer";
import SongsViewer from "./SongsViewer";
import PlaylistsViewer from "./PlaylistsViewer";
import SettingsViewer from "./SettingsViewer";

interface IProps {
}

interface IState {
	currentLibrary: LibraryViewerType;
}

export default class Library extends React.Component<IProps, IState> {
	public constructor(props: IProps) {
		super(props);

		this.state = {
			currentLibrary: LibraryViewerType.Sources,
		};
	}

	private handleLibraryViewerUpdate(updatedLibraryViewer: LibraryViewerType) {
		this.setState({
			currentLibrary: updatedLibraryViewer,
		});
	}

	public render() {
		return (
			<div className="library">
				<LibraryMenu
					currentLibrary={this.state.currentLibrary}
					onLibraryViewerUpdate={this.handleLibraryViewerUpdate.bind(this)}
				/>
				{this.state.currentLibrary == LibraryViewerType.Sources &&
					<SourcesViewer />
				}
				{this.state.currentLibrary == LibraryViewerType.Songs &&
					<SongsViewer />
				}
				{this.state.currentLibrary == LibraryViewerType.Playlists &&
					<PlaylistsViewer />
				}
				{this.state.currentLibrary == LibraryViewerType.Settings &&
					<SettingsViewer />
				}
			</div>
		);
	}
}
