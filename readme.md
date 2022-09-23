# Protected Api in a Docker Container

## Dependencies

- Node v18
- Express Js v4.18
- jsonwebtoken v8.5.1

## Starting the app

`docker-compose up -d`

## Description

This app has two endpoints

- **[POST] /auth/login** (public api)
  - To login to access the protected apis
  - This api accepts two mandatory parameters in request body
      - name
      - password
- **[GET] /time** (protected api)
  - To get current time

To get current time you first have to login to the system by calling the auth/login api
<br/>You will then recieve a token from api response<br/>
Use the token to send as a header named "authorization:\<token>" when calling the **/time** api

## Design

- I have used json web token to authenticate protected api
- The system checks if a protected api has a valid authorization header through middlewares
- The user will recieve this token after logging in
- You can login with mock user data as
  - name : john123
  - password : test123
- Not providing the token to protected api or invalid username, password while logging in will generate an error.
