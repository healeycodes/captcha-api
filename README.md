# CAPTCHA API ![](https://github.com/healeycodes/captcha-api/workflows/Node%20CI/badge.svg)

> My blog post: [Let's Build a CAPTCHA Generator with Node.js](https://healeycodes.com/javascript/webdev/node/tutorial/2019/11/11/lets-generate-captchas.html)

<br>

🔒 Keep those nasty bots out with a home-grown CAPTCHA!

![](https://github.com/healeycodes/captcha-api/blob/master/preview.jpg)

<br>

### Install

`npm i`

### Run

`npm start`

### API

All routes default to 200x100 size unless specified.

- `/test/:width?/:height?/`
    - Get a web page with an image element to manually test the API.

- `/captcha/:width?/:height?/`
    - Get a CAPTCHA object for proper usage.
    - `{ "image": <data url>, "text": <validation text> }`

### Test

Uses Jest to run integration tests.

`npm test`

<br>

n.b. CAPTCHAs are [not accessible](https://www.w3.org/TR/turingtest/) and in some cases not even effective.
