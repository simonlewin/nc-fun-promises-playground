# fun-promises-playground

To get used to using promises, we have put together some challenges below for you to complete. Use Node to run your code for each challenge, e.g.

```bash
node ./challenges/1-read-and-log.js
```

## 1. use `fs/promises` to read a file

In the file `1-read-and-log.js` require in `fs/promises` (Note: this is a module that is built into Node JS, so does **not** need to be installed separately).

Use the `fs/promises` `readFile` method to read the contents of `secret-message.txt` and log the result to the terminal.

## 2. use inquirer to ask for a name and log a greeting

You will need to initialise this project as an npm project with `npm init -y` and then install the [inquirer](https://github.com/SBoudrias/Inquirer.js#installation) npm package (`npm install inquirer`). Once installed require `inquirer` into the `2-greet.js` file.

Use `inquirer` to ask for your name when you run the file with `node`, and then log `"Hello <name>!"` to the console.

## 3. use axios to request a random Kanye quote

You will need to install the [axios](https://github.com/axios/axios#example) package and require it into the `3-get-kanye-quote.js` file.

Use the `axios` `.get` method to make an http GET request to the `https://api.kanye.rest/` api and log the random quote from the response object.

## 4. Save song lyrics

- Use `inquirer` to ask for an artist and a song.
- Use the artist and song to request the song lyrics using `axios` & this song lyrics api (`https://api.lyrics.ovh/v1/:artist/:song`) _**Warning:** this server might take a little while to respond!_
- Save the lyrics to a `lyrics.txt` file using `fs/promises`
- Use a single `.catch` method to handle any errors that occur in the promise chain. If an error occurs, log a user-friendly message.
- Update your code to save the lyrics to a file that includes the artist name and song title, i.e. `<artist>-<songTitle>.txt`. _**HINT:** [Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) will be useful here!_
- Add the option to choose between exiting or getting another song with `inquirer`. _**HINT:** You will need to consider how to make your code re-usable_

--- refactor above 1-3 to flexible/reusable functions and use these to implement 4-5

6. 2x http requests for Promise.all() and do something with results (& add Promise.all to notes) - maybe two favourite star wars chars / other api example.

- and another .all example, read two files at once and:
  - log which has more chars and by how many
  - combine them into a single file

Stretch goals:

- promisify a cb function (w/ tests), e.g. setTimeout, http request, fs.readFile,
- update task 5 to use https://github.com/sindresorhus/ora to log what is happening during the execution of the code

INCLUDE INSTRUCTIONS node & to install packages (not fs)
