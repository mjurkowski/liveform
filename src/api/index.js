import FormFields from '../components/LoginForm/fields-list';

const loginMOCK = (data) => {
  for(var i=0; i<FormFields.length; i++) {
    var field = FormFields[i];
    if(!field.validation(data[field.name])) {
      return {
        status: 'error',
        error: field.invalidFeedback
      };
    }
  }
  
  if (data.email === 'test@test.pl' && data.password === 'Password1') {
    return {
      status: 'success',
      error: null
    };
  }

  return {
    status: 'error',
    error: 'invalid email or password'
  };
}

const API = {
  login: (email, password, remember) => {
    const data = {email, password, remember};

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let response = loginMOCK(data);

        if(response.status === 'success') {
          resolve(response);
        }

        reject(response);
      },2000);
    });
  }
};

export default API;