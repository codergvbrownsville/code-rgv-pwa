# Running and Installing the project

The `$` before the command meansthat these commands need to be inputted in the terminal.
***

Requirement:
* [Node](https://nodejs.org/en/), _it usually includes the Node Package Mananger_.

Clone the project
```sh
$ git clone https://github.com/codergvbrownsville/code-rgv-pwa.git
```

Go into the project directory
```sh
$ cd code-rgv-pwa
```

Install the dependencies
```sh
$ npm install
```
This will install all the dependencies, after the installation it will run the lint
and tests.

If there are no errors after the intallation and tests have ran. Run the project
```sh
$ npm run serve-dev
```
This will run the project in `development` mode. If there no errors, head on to your 
browser and go to `localhost:8080`

## Production build requirement:
* Mongodb
* `events.json` imported into the mongo database
* Mongodb server running

To import `events.json` into your mongodb instance, run the script `seed-db.hs` while your mongodb server is running.
```sh
$ ./seed-db.sh
```
You should see a response similar to this. Of course, the dates will be different.
```sh
2017-10-07T16:01:39.934-0500	connected to: localhost
2017-10-07T16:01:39.960-0500	imported 34 documents
```
Once, the data has been imported. Run:
```sh
$ npm run serve-prod
```
Then, open your browser to `localhost:3000`

### Some helpful tools
* [React dev tool](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* [Redux dev tool](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)