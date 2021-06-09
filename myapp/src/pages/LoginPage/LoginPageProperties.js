export const loginErrors = {
  noEmail: false,
  wrongEmailForm: false,
  noPassword: false,
  noAccount: false,
  wrongPassword: false,
};

export const stdErrors = ['noEmail', 'noPassword', 'wrongEmailForm'];

export const errorMap = {
  noEmail: 'Please enter an email\n',
  noPassword: 'Please enter a password\n',
  wrongEmailForm: 'Please enter an email in the following form: email@email.com\n',
};

export const emailEndings = ['.com', '.net', '.edu', '.org', '.io'];
