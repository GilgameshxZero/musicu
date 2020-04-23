import * as React from "react";
import "./Player.scss";
import controlsBackward from "assets/controls-backward.svg";
import controlsPlay from "assets/controls-play.svg";
import controlsPause from "assets/controls-pause.svg";
import controlsForward from "assets/controls-forward.svg";

interface IProps {
	isPlaying: boolean;

	// Percentage between 0 and 1.
	progress: number;

	title: string;

	onBackward: () => void;
	onPlayPause: () => void;
	onForward: () => void;
	onSeek: (position: number) => void;
}

interface IState {
	progress: number;
}

export default class Navigator extends React.Component<IProps, IState> {
	private seekRef: React.RefObject<HTMLDivElement>;

	public constructor(props: IProps) {
		super(props);

		this.state = {
			progress: props.progress,
		};

		this.seekRef = React.createRef();
	}

	private handleSeekPointerDown(e: React.PointerEvent) {
		this.seekRef.current.onpointermove = this.handleSeekPointerMove.bind(this);
		this.seekRef.current.setPointerCapture(e.pointerId);

		// We don't have to move mouse to seek.
		this.handleSeekPointerMove(e);
	}

	private handleSeekPointerMove(e: React.PointerEvent) {
		const width = this.seekRef.current.clientWidth - this.seekRef.current.clientLeft;
		this.setState({
			progress: Math.min((e.clientX - this.seekRef.current.clientLeft) / width * 100, 100),
		});
	}

	private handleSeekPointerUp(e: React.PointerEvent) {
		e.stopPropagation();
		this.seekRef.current.onpointermove = null;
		this.seekRef.current.releasePointerCapture(e.pointerId);
		this.props.onSeek(this.state.progress);
	}

	private stopPointerEventPropagation(e: React.PointerEvent) {
		e.stopPropagation();
	}

	public render() {
		return (
			<div className="player no-select"
				ref={this.seekRef}
				onPointerDown={this.handleSeekPointerDown.bind(this)}
				onPointerUp={this.handleSeekPointerUp.bind(this)}>
				<div className="progress"
					style={{ width: this.state.progress + "%" }}></div>
				<div className="controls">
					<img className="backward"
						src={controlsBackward}
						onPointerDown={this.stopPointerEventPropagation}
						onPointerUp={this.stopPointerEventPropagation} />
					<img className={"pause" + (this.props.isPlaying ? "" : " no-display")}
						src={controlsPause}
						onClick={this.props.onPlayPause}
						onPointerDown={this.stopPointerEventPropagation}
						onPointerUp={this.stopPointerEventPropagation} />
					<img className={"play" + (this.props.isPlaying ? " no-display" : "")}
						src={controlsPlay}
						onClick={this.props.onPlayPause}
						onPointerDown={this.stopPointerEventPropagation}
						onPointerUp={this.stopPointerEventPropagation} />
					<img className="forward"
						src={controlsForward}
						onPointerDown={this.stopPointerEventPropagation}
						onPointerUp={this.stopPointerEventPropagation} />
				</div>
				<div className="title">
					{this.props.title}
				</div>
				<div className="options">

				</div>
			</div>
		);
	}
}
