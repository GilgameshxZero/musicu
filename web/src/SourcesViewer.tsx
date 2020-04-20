import * as React from "react";
import "./SourcesViewer.scss";
import Pane from "./Pane";
import backImg from "./assets/back.png";

enum SourceViewViews {
	Panes,
	AddSource,
}

interface IProps {
}

interface IState {
	currentView: SourceViewViews;
}

export default class SourcesViewer extends React.Component<IProps, IState> {
	public constructor(props: IProps) {
		super(props);

		this.state = {
			currentView: SourceViewViews.Panes,
		};
	}

	private handleAddSourceClick() {
		this.setState({
			currentView: SourceViewViews.AddSource,
		})
	}

	private renderAddSourceView() {
		return (
			<div className="add-source">
				<div className="banner">
					<img className="back" src={backImg}
						onClick={() => this.setState({
							currentView: SourceViewViews.Panes,
						})} />
					<h1>Add source</h1>
				</div>
			</div>
		);
	}

	public render() {
		return (
			<div className="sources-viewer">
				{this.state.currentView === SourceViewViews.Panes &&
					<div className="panes">
						<Pane image="plus" label="Add source"
							onClick={this.handleAddSourceClick.bind(this)} />
						<Pane image="plus" label="Add source"
							onClick={this.handleAddSourceClick.bind(this)} />
						<Pane image="plus" label="Add source"
							onClick={this.handleAddSourceClick.bind(this)} />
						<Pane image="plus" label="Add source"
							onClick={this.handleAddSourceClick.bind(this)} />
						<Pane image="plus" label="Add source"
							onClick={this.handleAddSourceClick.bind(this)} />
						<Pane image="plus" label="Add source"
							onClick={this.handleAddSourceClick.bind(this)} />
						<Pane image="plus" label="Add source"
							onClick={this.handleAddSourceClick.bind(this)} />
						<Pane image="plus" label="Add source"
							onClick={this.handleAddSourceClick.bind(this)} />
					</div>
				}
				{this.state.currentView === SourceViewViews.AddSource &&
					this.renderAddSourceView()
				}
			</div>
		);
	}
}
