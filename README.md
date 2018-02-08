A working copy of the React-Redux tutorial web application: a to-do list generator. Ironically named `tictactoe`, which is the *React* tutorial application...

To build the distribution:

    npx browserify -t [ babelify --presets [ env react ] --plugins transform-object-rest-spread ] index.js -o dist/index.js
    
To serve this application:

    npx http-server .