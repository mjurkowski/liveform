import React, { Component } from 'react';

import Field from './Field/Field';
import FormFields from './fields-list';
import API from '../../api';

import './LoginForm.scss';

class LoginForm extends Component {
  state = {
    showValidation: false,
    isLoading: false,
    feedback: '',
    ...FormFields.reduce((obj, element) => {
      obj[element.name] = element.default
      return obj
    }, {})
  }

  submitForm = (e) => {
    e.preventDefault();

    this.setState({showValidation: true});

    if(this.formValidation()) {
      let {email, password, remember} = this.state;

      this.setState({isLoading: true, feedback: ''}, () => {
        API.login(email, password, remember)
          .then(response => {
            this.setState({isLoading: false});
            this.props.onSuccess();
          })
          .catch(response => {
            this.setState({feedback: response.error, isLoading: false});
          })
      })
      
      
    }
  }

  formValidation = () => FormFields.reduce((prevState, currentElement) => prevState ? currentElement.validation(this.state[currentElement.name]) : false, true);

  fieldChangeHandler = (field, value) => this.setState({[field]: value});

  render() {
    return (
      <form method="POST" className="LoginForm" onSubmit={this.submitForm}>
        <div className="formName">Login</div>
        <fieldset>
          {FormFields.map((el, index) => (
            <Field
              key={index}
              value={this.state[el.name]}
              onChange={(val) => this.fieldChangeHandler(el.name, val)}
              valid={this.state.showValidation ? el.validation(this.state[el.name]) : true}
              {...el}
            />
          ))}
          <input type="submit" value="login" className="SubmitButton"/>
          { this.state.isLoading && <p>Loading</p>}
          { this.state.feedback && <p className="feedback">{this.state.feedback}</p>}
        </fieldset> 
      </form> 
    );
  }
}

export default LoginForm;