export const testData = {
  username: 'standard_user',
  password: 'secret_sauce',
  validUser: {
    firstName: 'John',
    lastName: 'Doe',
    zipCode: '12345'
  },
  invalidUsers: [
    { firstName: '', lastName: 'Doe', zipCode: '12345', error: 'First Name is required' },
    { firstName: 'John', lastName: '', zipCode: '12345', error: 'Last Name is required' },
    { firstName: 'John', lastName: 'Doe', zipCode: '', error: 'Postal Code is required' }
  ]
};