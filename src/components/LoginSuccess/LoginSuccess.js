import React from 'react';
import './LoginSuccess.scss';
import SuccessIcon from '../../assets/images/success.svg';

const LoginSuccess = () => (
  <div className="LoginSuccess">
    <img src={SuccessIcon} alt="success icon"/>
    <h3>Logged Successful</h3>
  </div>
);

export default LoginSuccess;