const React = require('react')
const ReactDOM = require('react-dom')
const Button = require('./button.jsx')

const Text = (props) => <p>{props.timer? "Time Left:" + props.timer:"Timer not running"}</p>
class TimerWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timeLeft: null,
			timerId: null,
			pause: false
		}
		this.startTimer = this.startTimer.bind(this);
		this.cancel = this.cancel.bind(this);
		this.pause = this.pause.bind(this);
		this.reset = this.reset.bind(this);
	}
	startTimer(amountTime) {
		this.cancel();
		let timeLeft = amountTime;
		const timerId = setInterval(()=>{ 
			timeLeft--;
			this.setState({
				timeLeft: timeLeft
			});
			if(timeLeft < 1) this.reset();
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
		if(this.state.pause) this.startTimer(this.state.timeLeft);
		else {
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
		return <div>
			<Button timer="5" startTimer={this.startTimer}/>
			<Button timer="10" startTimer={this.startTimer}/>
			<Button timer="15" startTimer={this.startTimer}/>
			<Text timer={this.state.timeLeft}/>
			<button onClick={this.pause}>Pause/Resume</button>
			<button onClick={this.cancel}>Cancel Timer</button>
			<button onClick={this.reset}>Reset</button>
		</div>
	}
}

module.exports = TimerWrapper;