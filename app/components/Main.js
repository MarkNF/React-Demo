var React = require('react');
var ReactCssTransitionGroup = require('react-addons-css-transition-group');
require('../main.css');

function Main (props) {
	return (
			<div className='main-container'>
				<ReactCssTransitionGroup
					transitionName="appear"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}>
						{React.cloneElement(props.children, {key: props.location.pathname})}
				</ReactCssTransitionGroup>
			</div>
		)
};

module.exports = Main;