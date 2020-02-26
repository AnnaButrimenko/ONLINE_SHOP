export default function(values) {
  const errors = {};
  if (
    values.firstName &&
    !/^[a-zA-Zа-яА-Я]+$/i.test(values.firstName)
  ) {
    errors.firstName = 'Allowed characters for First Name is a-z, A-Z, а-я, А-Я.';
  }
  if (
    values.firstName &&
    !/.{2,25}$/i.test(values.firstName)
  ) {
    errors.firstName = 'First Name must be between 2 and 25 characters';
  }
  if (
    values.lastName &&
    !/^[a-zA-Zа-яА-Я]+$/i.test(values.lastName)
  ) {
    errors.lastName = 'Allowed characters for First Name is a-z, A-Z, а-я, А-Я.';
  }
  if (
    values.lastName &&
    !/.{2,25}$/i.test(values.lastName)
  ) {
    errors.lastName = 'Last Name must be between 2 and 25 characters';
  }
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'That is not a valid email.';
  }
  if (
    values.login &&
    !/^[a-zA-Z0-9]+$/i.test(values.login)
  ) {
    errors.login = 'Allowed characters for login is a-z, A-Z, 0-9.';
  }
  if (
    values.login &&
    !/^.{3,10}$/i.test(values.login)
  ) {
    errors.login = 'Login must be between 3 and 10 characters';
  }
  if (
    values.birthdayMonth &&
    (values.birthdayMonth > 12 || values.birthdayMonth < 1)
  ) {
    errors.birthdayMonth = 'Invalid month';
  }
  if (
    values.birthdayYear &&
    !/^[1|2][0-9][0-9][0-9]$/i.test(values.birthdayYear)
  ) {
    errors.birthdayYear = 'Invalid year';
  }
  if (
    values.password &&
    !/^[0-9a-zA-Z]{7,30}$/i.test(values.password)
  ) {
    errors.password = 'Password must be between 7 and 30 characters';
  }
  if (
    values.password &&
    !/^[a-zA-Z0-9]+$/i.test(values.password)
  ) {
    errors.password = 'Allowed characters for password is a-z, A-Z, 0-9.';
  }
  if (
    values.newPassword &&
    !/^[0-9a-zA-Z]{7,30}$/i.test(values.newPassword)
  ) {
    errors.newPassword = 'Password must be between 7 and 30 characters';
  }
  if (
    values.newPassword &&
    !/^[a-zA-Z0-9]+$/i.test(values.newPassword)
  ) {
    errors.newPassword = 'Allowed characters for password is a-z, A-Z, 0-9.';
  }
  if (values.newPassword !== values.confirmNewPassword) {
    errors.confirmNewPassword = 'The passwords are different!';
  }
  if (
    values.telephone &&
    !/^\+380\d{3}\d{2}\d{2}\d{2}$/i.test(values.telephone)
  ) {
    errors.telephone = 'That is not a valid phone number. Try +380XXX XX XX XX';
  }

  return errors;
}
