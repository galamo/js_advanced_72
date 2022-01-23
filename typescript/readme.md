

# typescript 

## Example:
```javascript


function setUser(user){
// bla 
}


setUser()
// email - string
// id - number
// {} - object
// id - string

setUserId(id){
    // bla
}

setUserId(id)
// number 
// string 


```


## "Run Typescript Code in Browser"
1. Transpile index.ts => index.js 
2. Loading index.js in HTML
3. Lunch HTML in browser

### 1 

- We have `npm` installed run `npm -v`
- Run in your command line `npm install -g typescript `
- If the step above is not working - open the command line as administrator and try again
- Navigate to the relevant file (index.ts) location
- Run `tsc index.ts`

### 2 + 3 => already known


## Setup your own typescript environment
1. create a folder with typescript file - index.ts
2. create a typescript function which recieved userName, userId, age, jobs and print all the informaiton to console .log
3. configure your environment to compile the index.ts to index.js
4. run the index.js in the HTML file
