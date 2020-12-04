require('../css/main.scss');

const React = require('react');
const ReactDOM = require('react-dom');
const TimerWrapper = require('./timer.jsx');

ReactDOM.render(
	<TimerWrapper />,
	document.getElementById('timer-app')
)