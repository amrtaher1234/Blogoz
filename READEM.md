
# Blogoz
this is a simple website made by angular6 and express.
there are two main parts here, the front end and the back end.

## backend:
A simple express server that runs an authentication to a firebase database, 
also it uses JWT to generate a token for a user when he logs in when the 
fontend requests by using an http request.

## frontend:
well, it is kinda messy, i made of course a sign in page and sending back and foorth to the server.
I added some pages like a page that makes you upload images to a database, another one that displays these images the uploaded ones to a slide show.

## how to run 
you have to run the server (express) then the angular, or whatever but just dont call the login function in angular right away cause it will have nothing to request to.

## sorry for that
i will just add the src folder of angular to github, i can't really copy past it to a github cause its size is 300 mega +, also the files are just too much.
i tried uploading it and it took forever, i'll put the package.json file for you so you can run it.

## some faults
- i did not add  a routing back from one page to another
- no log out
- no hiding of the login buttons in the nav, i seriously don't know why it didnt work
- design is kinda meeh

## good points 
- my code is very well written 
- services everywhere
- commented, no fancy variable names (soso-console.log('msh 3awz ye run');
- good usuage of promises in the database handeling.
