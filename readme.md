# Start out with nothing and add stuff in as we learn
   Turns out you can't have an express director and then try to npm i --save express
      in that director.
   npm init
   npm i --save express
   node app.js at this point generates an error. app.js does not exist, so I guess
      that would cause that every time.
   touch app.js, and then node app.js has no errors. app.js is blank, but at least
      I don't get any errors.
   app.js:
      Added express
      Added app.get("/)
      Added app.listen
      All of this works

# Version 2:
   - Add in ejs file capability
   - Add in views directory
   - Added views/landing.ejs
   - Added views/index.ejs
   - ROUTES are working
   - Added partials directory
   - Added partials/header.ejs
   - Added partials/footer.ejs
   - Added Bootstrap 4 to both the header and footer ejs files
   - Included header and footer ejs files in landing and index ejs files