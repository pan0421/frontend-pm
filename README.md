## frontend-pm

### Build setup
```
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build

# please ensure the server side has started 
# Link to frontend-pm server project: https://github.com/pan0421/frontend-pm-server

# please view using chrome emulated view as this project is mobile-first
```

### Project Overview

This project contains the following pages: 

- Login page - user can login using username or email
- Main page - to view products in sale in grid or list view
- Profile page - to view and edit user profile, including name, birthday, age, education and about me. Change password and Logout functions are also included in this page
- More page - to access the rest tabs, may contain more than one level. 
- 404 page - to handle any other urls (e.g. /abc)

Accounts: 

- The followings are testing accounts. 

  - Username: pmuser1, pmuser2, pan_meng92@hotmail.com
  - Password: for simplicity purpose, all set to "Test1234"

Data (including user accounts, and product list ) is hardcoded at the server side. 

For better representation, vant ui library (mainly Toast, Dialog and Fields components) is used. 

Tech stack used:
- Vuex
- Vue-router
- axios
- vant ui library
- md5

### Area for improvement

#### Field Validation

- Due to time constraint, limited validation is implemented for input fields, including:
  - fields cannot be empty
  - for change password: fields cannot be empty, new password and confirm password should be the same. 
- Area for improvement
  - For change password, it should check the min and max length, valid characters, e.g. only alphanumeric and underscore should be included, no whitespace allowed, etc. 
  - The validation should be checked once the input lose focus. 

#### Login page

- Areas for improvement
  - Forget Password function. 
  - Register Function - field validation should be implemented for both username and password. Additional validations can be email format checks if the username is email. 

#### Home page

- Areas for improvement
  - Lazy loading, in case the data is large
  - Search function. 

### Password Encryption

- Currently, the password hashing is done with md5, which is predictable and not secured. 
- Area for improvement: 
  - Replace with BCrypt Library, with salt workflow
