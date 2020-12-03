const Text = props => React.createElement(
	"p",
	null,
	props.timer ? "Time Left:" + props.timer : "Timer not running"
);
class TimerWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timeLeft: null,
			timerId: null,
			pause: false
		};
		this.startTimer = this.startTimer.bind(this);
		this.cancel = this.cancel.bind(this);
		this.pause = this.pause.bind(this);
		this.reset = this.reset.bind(this);
	}
	startTimer(amountTime) {
		this.cancel();
		let timeLeft = amountTime;
		const timerId = setInterval(() => {
			timeLeft--;
			this.setState({
				timeLeft: timeLeft
			});
			if (timeLeft < 1) this.reset();
		}, 1000);
		this.setState({
			timeLeft: timeLeft,
			timerId: timerId
		});
	}
	cancel() {
		clearInterval(this.state.timerId);
		this.setState({
			pause: false
		});
	}
	pause() {
		if (this.state.pause) this.startTimer(this.state.timeLeft);else {
			this.cancel();
			this.setState({
				pause: true
			});
		}
	}
	reset() {
		this.cancel();
		this.setState({
			timeLeft: null,
			timerId: null
		});
	}
	render() {
		return React.createElement(
			"div",
			null,
			React.createElement(Button, { timer: "5", startTimer: this.startTimer }),
			React.createElement(Button, { timer: "10", startTimer: this.startTimer }),
			React.createElement(Button, { timer: "15", startTimer: this.startTimer }),
			React.createElement(Text, { timer: this.state.timeLeft }),
			React.createElement(
				"button",
				{ onClick: this.pause },
				"Pause/Resume"
			),
			React.createElement(
				"button",
				{ onClick: this.cancel },
				"Cancel Timer"
			),
			React.createElement(
				"button",
				{ onClick: this.reset },
				"Reset"
			)
		);
	}
}