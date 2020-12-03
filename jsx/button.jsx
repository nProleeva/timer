class Button extends React.Component {
	constructor(props) {
		super(props);
		this.startTimer = this.startTimer.bind(this);
	}
	startTimer(event) {
		this.props.startTimer(this.props.timer);
	}
	render() {
		return <button onClick={this.startTimer}>{this.props.timer} seconds</button>
	}
}