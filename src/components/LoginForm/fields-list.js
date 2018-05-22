const FormFields = [
  {
    name: 'email',
    type: 'email',
    default: '',
    invalidFeedback: 'invalid email',
    placeholder: 'E-mail',
    validation: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) && !(/^(?=.*[$&+,:;=?#|'<>-^*()%!])$/.test(val))
  },
  {
    name: 'password',
    type: 'password',
    default: '',
    invalidFeedback: 'invalid password',
    placeholder: 'Password',
    validation: (val) => /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*).{6,}$/.test(val)
  },
  {
    name: 'remember',
    type: 'checkbox',
    default: false,
    placeholder: 'Remember me',
    validation: () => true
  }
];

export default FormFields;