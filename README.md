# fun-promises-playground

To get used to using promises, we have put together some challenges below for you to complete. Use Node to run your code for each challenge, e.g.

```bash
node ./challenges/1-read-and-log.js
```

## Challenges

### 1. use `fs/promises` to read a file

In the file `1-read-and-log.js` require in `fs/promises` (Note: this is a module that is built into Node JS, so does **not** need to be installed separately).

Use the `fs/promises` `readFile` method to read the contents of `secret-message.txt` and log the result to the terminal.

### 2. use inquirer to ask for a name and log a greeting

You will need to install the [inquirer](https://github.com/SBoudrias/Inquirer.js#installation) npm package (`npm install inquirer`). Once installed require `inquirer` into the `2-greet.js` file.

Use `inquirer` to ask for your name when you run the file with `node`, and then log `"Hello <name>!"` to the console.

### 3. use axios to request a random joke

You will need to install the [axios](https://github.com/axios/axios#example) package and require it into the `3-get-joke.js` file.

Use the `axios` `.get` method to make an http GET request to the `https://icanhazdadjoke.com/` api and log the random quote from the response object.

### 4. Compare & combine files

In the `4-compare-combine.js` file use the `fs/promises` `readFile` method to read the contents of `secret-message.txt` and `super-secret-message.txt` and:

- log the name of the file that contains the most characters of text and how many more characters it contains.
- combine the contents of the two files into a single new file `mega-secret-message.txt` using `fs/promises` `writeFile` method.

_**Hint:** [Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) will be useful here!_

### 5. Save song lyrics

Now we can use what we have practiced so far with promises and using different libraries. Within `4-save-song-lyrics.js`:

- Use `inquirer` to ask for an artist and a song.
- Use the artist and song title to request the song lyrics using `axios` to make an http GET request to this song lyrics api (`https://api.lyrics.ovh/v1/:artist/:song`) _**Warning:** this server might take a little while to respond!_
- Save the lyrics to a `lyrics.txt` file using `fs/promises`
- Use a single `.catch` method to handle any errors that occur in the promise chain. If an error occurs, log a user-friendly message.
- Update your code to save the lyrics to a file that includes the artist name and song title, i.e. `<artist>-<songTitle>.txt`. _**Hint:** [Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) will be useful here!_
- Add the option to choose between exiting or getting another song with `inquirer`. _**Hint:** You will need to consider how to make your code re-usable_

If you have got up to here... CONGRATULATIONS! Time to take a break and make a brew :).

## Additional Challenges

1. Refactor challenges 1, 2 and 3 into flexible/reusable functions.

2. Promisifying an existing callback function

e.g. setTimeout, http request, fs.readFile

- update task 5 to use https://github.com/sindresorhus/ora to log what is happening during the execution of the code
