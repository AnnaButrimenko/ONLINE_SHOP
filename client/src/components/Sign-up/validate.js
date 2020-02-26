export default function(values) {
  const errors = {};
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'password',
    'telephone',
    'login',
    'agreement'
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

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
    values.password &&
    !/^[a-zA-Z0-9]+$/i.test(values.password)
  ) {
    errors.password = 'Allowed characters for password is a-z, A-Z, 0-9.';
  }

  if (
    values.password &&
    !/^.{7,30}$/i.test(values.password)
  ) {
    errors.password = 'Password must be between 7 and 30 characters';
  }

  if (
    values.telephone &&
    !/^\+380\d{3}\d{2}\d{2}\d{2}$/i.test(values.telephone)
  ) {
    errors.telephone = 'That is not a valid phone number. Try +380XXX XX XX XX';
  }

  if (
    !values.agreement
  ) {
    errors.agreement = 'We need your agreement to create your personal profile';
  }

  return errors;
}
