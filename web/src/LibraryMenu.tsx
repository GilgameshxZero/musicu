import * as React from "react";
import "./LibraryMenu.scss";
import logoImg from "./assets/logo.svg";

export enum LibraryViewerType {
	Sources = 0,
	Songs,
	Playlists,
	Settings,
}

interface IProps {
	currentLibrary: LibraryViewerType;
	onLibraryViewerUpdate: (updatedLibraryViewer: LibraryViewerType) => void;
}

export default class LibraryMenu extends React.Component<IProps> {
	public render() {
		return (
			<div className="library-menu">
				<img className="logo"
					src={logoImg} />
				<div className="main-buttons">
					<input type="button"
						className={this.props.currentLibrary == LibraryViewerType.Sources ? "selected" : ""}
						value="Sources"
						onClick={() => this.props.onLibraryViewerUpdate(LibraryViewerType.Sources)} />
					<input type="button"
						className={this.props.currentLibrary == LibraryViewerType.Songs ? "selected" : ""}
						value="Songs"
						onClick={() => this.props.onLibraryViewerUpdate(LibraryViewerType.Songs)} />
					<input type="button"
						className={this.props.currentLibrary == LibraryViewerType.Playlists ? "selected" : ""}
						value="Playlists"
						onClick={() => this.props.onLibraryViewerUpdate(LibraryViewerType.Playlists)} />
					<input type="button"
						className={this.props.currentLibrary == LibraryViewerType.Settings ? "selected" : ""}
						value="Settings"
						onClick={() => this.props.onLibraryViewerUpdate(LibraryViewerType.Settings)} />
				</div>
			</div>
		);
	}
}
