# BUG

Run the following command will generate an anonymous class which is problematic

`npm i typescript@5.1.3 && npm run-script build-release && node .\dist\app.js`

Run the following command will generate an named class which is expected

`npm i typescript@5.0.4 && npm run-script build-release && node .\dist\app.js`