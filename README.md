To Run:
1. npm init
2. npm install
3. npm update
4. typescript compiler in VS
5. sudo mongod --dbpath=/Users/kennethceltra/data/db for mongo
6. nodemon app for the server
7. yarn start for the react

written in .ts, hence changes in the backend needs to be edited there and then compiled to .js

fetching from aerisweather
=>sample Request URL and JSON response https://www.aerisweather.com/wizard/api/options?endpoint=forecasts&action=id

For now, the server is only picking up maxTempC through loc={cityName,countryCode}

heroku: https://aerisapi.herokuapp.com/weather?loc=singapore,sg -> this is the current URL that is used as the real time feed link.

Celtra creative: https://kk.celtra.com/builder/#path=creatives/cdd8d6f0

Real Time Feed: d49a5e21

Expected user flow:
1. Use custom tag variable to pick up the cityName, countryCode, the real-time feed api will then be like https://aerisapi.herokuapp.com/weather?loc={customTagVariable}? => i'm not so sure about this actually, but the idea is that this should be able to be updated automatically by the ad server. Otherwise, the real-time feed api will always be fixed to singapore,sg.
2. If no values is obtained, show temperature to be 'unavailable, errors'

Stretch goals
* read the temperature that is shown by the API, and then set up conditional range to show different messages, e.g. if temp = 10-15C => "Cold"
* connect another API to show picture of a city, picking up the values of the city name that the user type. so that when they click submit, it will show the temperature as well as the popular picture from the city.
* rosetta code Haversine to calculate nearest location of user from the object
* swagger API documentation

Immediate next step:
* admin app API => the idea is to have another feed API in the backend with status isActive: True/False. then use create-react-app in the frontend to build an interface to toggle the isActive status to be True/False. If it's true, then show the temperature. If it is false, then show 'error'

* allow input of cityName, countryCode through input field in the creative, and then user can click submit.
the parameters will be passed to the API URL and then the current temperature will be shown in the creative
Would this be coded within the creative itself through executeJS(as we are calling the API directly)? or would there be another route within the nodeJS server. As i write this, i realize that there is likely no way to make the query loc= to be dynamic, as there is no way to connect between the feed and the builder?
