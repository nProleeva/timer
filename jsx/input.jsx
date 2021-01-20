require('../css/input.scss');

const React = require('react')
const ReactDOM = require('react-dom')

class InputTimer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timer:''
		}
		this.startTimer = this.startTimer.bind(this);
		this.handler = this.handler.bind(this);
	}
	startTimer() {
		this.props.startTimer(this.state.timer);
	}
	handler(event) {
		this.setState((state)=>{
			return { 
				timer: state.timer.length?event.target.value.replace(/[^0-9]/ig,''):event.target.value.replace(/[^1-9]/ig,'')
			}
		});
	}
	render() {
		return <div className="yourTimer">
				<input type="text" onChange={this.handler} value={this.state.timer}/>
				<button onClick={this.startTimer}>Run</button>
			</div>
	}
}
module.exports = InputTimer;