import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './right.css';
import './left.css';
import './up.css';
import './down.css';
import './fade.css';

export class Animator extends Component {
  state = {
    show: false,
    slideRight: false
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState(state => ({
        ...state,
        show: true
      }));
    }, this.props.timeout || 200);
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName={this.props.transition}
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {this.state.show ? this.props.render() : null}
      </ReactCSSTransitionGroup>
    );
  }
}


