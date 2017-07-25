# node-express-api

##### node express api server test

A fully functional restful API service to authenticate your web or mobile application.
___

To signup:
```
  POST 'localhost:4030/signup'

  {
     "email": "my-example-email@example.com",
     "password": "12345"
  }
```
To Sign in (Request gives you a jwt token --> copy it)
```
  POST 'localhost:4030/signin'
  {
     "email": "my-example-email@example.com",
     "password": "12345"
  }
```
To GET to resources without signing in (paste token in header)

```
  HEADER:

  1. key is 'authentication'
  2. value is 'YOUR_TOKEN_PASTE_HERE'

  GET 'localhost:4030/'
```

**Server Features**
 - Authentication using Bycrypt, JSON web tokens, and Passport
 - Express Restful service
 - MongoDB & Mongoose & Robo3T (reading database)

**Instructions:**
1. git clone project
2. cd into/project/directory
3. cd server/
4. npm install
5. use POST and GET to test email and password authentication (recommended: POSTMAN)


**Requirements for server:**
1. Mongodb (Database server)
2. Terminal (localhost express server)
3. Postman or Advanced Rest Client or Any restful client to set simple HTTP actions

**(Not required but recommended)**
- Download Robo 3T
