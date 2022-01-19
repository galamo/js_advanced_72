# Install Nodejs 
1. go to: `https://nodejs.org/en/download/`
2. Download your installer - Windows/Mac
3. Double click the .exe file and install node.js 

# Validate Nodejs installed 
1. open command line
2. run `npm -v` => 7.20.5
3. run `node -v` => v16.13.2


# Run Fruits Api

1. `git pull <repo name>`
2. `cd restApi`
3. `npm install`
4. `node inde.js`
5. browse in your browser to `http://localhost:<PORT>/fruits`
6. Add new fruit -  browse in your browser to `http://localhost:<PORT>/fruit/<FruitName>`
7. Validate your fruits! run 5 again!


# npm 
Node package manager

`npm install typescript`
`npm install axios` ===>>>> Network!!!!!!!!!


# Homework
1. Create HTML page to interact the new API - fruitsApi
2. GET /fruits - will show all the fruits on load
3. GET /fruit/FRUIT_NAME - add new fruit
4. After adding new fruit - show the updated list of fruits


# Api Documentation

## GET /fruits
## POST /fruit 

## POST /login 
1. support api to authenticate users
2. payload ( body ) ``` { userName: String, password:String } ```
3. content Type: application/json
4. Example:  ``` { userName:"Admin", password: "1234" }  ```

### use cases:
1. missing parameter
2. invalid parameter type
3. success 
4. wrong credentials