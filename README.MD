# REST API with Node && Express 

 [How to build a REST API with Node js & Express by Programming with Mosh
](https://www.youtube.com/watch?v=pKd0Rpw7O48)

## Intro  

- [ ***HTTP module*** ](https://nodejs.org/api/http.html) is build-in module
  that handle http requests 
- [ ***Express*** ](https://expressjs.com/) is a **fast** && lightweight framework for building web applications
***
## [ 0:57 ](https://youtu.be/pKd0Rpw7O48?t=57) - REST Services || REST APIs 

- Client-Server Architecture 
  - *Client*  is a frontend part 
  - *Server* is a backend part 
  - Client can directly call the services by sending HTTP Requests 
  -  Http request is done by HTTP protocol 
-  **REST** is short of  **RE**presentational  **S**tate **T**ransfer 
-  **API** is short of **A**pplication **P**rogramming **I**nterface 
-  **REST** is basically convention for building http services 
-  We simple use http protocol princple to provide support **CRUD** Operations on data
-  CRUD is short of **C**reate - **R**ead - **U**pdate - **D**elete 
-  HTTP Methods 
   -  *GET* for getting data 
   -  *POST* for creating data
   -  *PUT* for updating data
   -  *Delete* for deleting data

***
## [ 14:58 ](https://youtu.be/pKd0Rpw7O48?t=898) - Nodemon 
[ ***Nodemon*** ](https://nodemon.io/) is short of node monitor it's a package
  for **monitoring** || **reload** automatically changes in the app 
  - In terminal : `nodemon app.js` instead of `node app.js`  


***
## [ 16:29 ](https://youtu.be/pKd0Rpw7O48?t=989) - Environment Variables (.env) 

- *Environment Variable* is a variable that is a part of the environment in which the
process runs , it's value is set outside of the application 

- To Set the variable you can set it in terminal 
    - for windows  :
      - In Command Prompt: `set PORT=5000`
      - In Power Shell: `$env:PORT=5000 `
      - In Bash (Windows): `export PORT=5000`
    - for MAC  : `export PORT=5000`
    - If you faced a problem check this [Solution](https://stackoverflow.com/questions/53256555/not-able-to-set-process-env-port-variable-in-windows-for-node)
- To read Variable in the application, we need to call **process object**
  `process.env.PORT` (*PORT is the Variable*)

