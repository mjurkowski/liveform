import FormFields from './fields-list'

describe('E-mail validation of', () => {
  const validation = FormFields[0].validation;
  const emailToTests = [
    { email: 'test@test.pl', expect: true },
    { email: 'test@', expect: false },
    { email: 'test.test.pl', expect: false },
    { email: '123test@.pl', expect: false },
    { email: 'test@test.jsdfjdslk', expect: true },
  ]

  emailToTests.forEach(el => {
    it(el.email + ' should be ' + el.expect.toString(), () => {
      expect(validation(el.email)).toBe(el.expect)
    })
  })
})

describe('Password validation of', () => {
  const validation = FormFields[1].validation;
  const passwordsToTests = [
    { password: 'Password1', expect: true },
    { password: 'pass', expect: false },
    { password: 'pass1', expect: false },
    { password: 'Pass1', expect: false },
    { password: 'PASS1234a', expect: true },
  ]

  passwordsToTests.forEach(el => {
    it(el.password + ' should be ' + el.expect.toString(), () => {
      expect(validation(el.password)).toBe(el.expect)
    })
  })
})