import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Field.scss';


class Field extends Component {
  state = {
    focus: false,
  }

  changeHandler = (e) => {
    this.props.onChange(this.props.type === 'checkbox' ? e.target.checked : e.target.value);
  }

  invalidFeedback = () => this.props.invalidFeedback || 'invalid ' + this.props.name;

  checkboxField = () => {
    const props = this.props;

    return (
      <div className="Field">
        <div className="CheckboxField">
          <input
            type={props.type}
            name={props.name}
            id={props.name}
            checked={props.value}
            onChange={this.changeHandler}
          />
          <label htmlFor={props.name}>{props.placeholder}</label>
        </div>
        { !props.valid && <p className="error">{this.invalidFeedback()}</p> }
      </div>
    );
  }

  showPlaceholder = () => !this.state.focus && this.props.value.length === 0;

  toggleFocus = (e) => {
    this.setState({focus: e.type === 'focus' });
  }

  inputField = () => {
    const props = this.props;

    let classes = ['InputField'];

    if(this.showPlaceholder()) {
      classes.push('placeholder');
    }
    if(this.state.focus) {
      classes.push('focus');
    }

    return (
      <div className="Field">
        <div className={classes.join(' ')}>
          <label htmlFor={props.name}>{props.placeholder}</label>
          <input
            type={props.type}
            name={props.name}
            id={props.name}
            value={props.value}
            onChange={this.changeHandler}
            onFocus={this.toggleFocus}
            onBlur={this.toggleFocus}
          />
        </div>
        { !props.valid && <p className="error">{this.invalidFeedback()}</p> }
      </div>
    );
  }

  render() {
    return this.props.type === 'checkbox' ? this.checkboxField() : this.inputField();
  }
}

Field.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.string.isRequired,
  value: PropTypes.any,
  invalidFeedback: PropTypes.string,
  name: PropTypes.string
};

Field.defaultProps = {
  invalidFeedback: '',
  onChange: () => {},
  value: '',
  name: ''
}

export default Field;