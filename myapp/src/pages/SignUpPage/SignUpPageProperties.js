export const signupErrors = {
  noUsername: false,
  noEmail: false,
  wrongEmailForm: false,
  noPassword: false,
  emailExists: false,
  usernameExists: false,
};

export const stdErrors = ['noUsername', 'noEmail', 'noPassword', 'wrongEmailForm'];

export const errorMap = {
  noUsername: 'Please enter a username\n',
  noEmail: 'Please enter an email\n',
  noPassword: 'Please enter a password\n',
  wrongEmailForm: 'Please enter an email in the following form: email@email.com\n',
};

export const emailEndings = ['.com', '.net', '.edu', '.org', '.io'];
