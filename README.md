npm init
npm install
npm update

fetching from aerisweather
sample Request URL and JSON response https://www.aerisweather.com/wizard/api/options?endpoint=forecasts&action=id

picking up maxTempC through loc={cityName,countryCode}

heroku: https://aerisapi.herokuapp.com/weather?loc=singapore,sg

Celtra creative: https://kk.celtra.com/builder/#path=creatives/cdd8d6f0

Real Time Feed: d49a5e21

Expected user flow:
1. Use custom tag variable to pick up the cityName, countryCode
2. If no values is obtained, show temperature to be 'unavailable'

Stretch
* read the temperature that is shown by the API, and then set up conditional range to show different messages, e.g. if temp = 10-15C => "Cold"
* connect another API to show picture of a city, picking up the values of the city name that the user type. so that when they click submit, it will show the temperature as well as the popular picture from the city.
* swagger API documentation
* admin app for API

Immediate next step:
* allow input of cityName, countryCode through input field in the creative, and then user can click submit.
the parameters will be passed to the API URL and then the current temperature will be shown in the creative
Would this be coded within the creative itself through executeJS as we are calling the API directly, or would there be another route within the nodeJS server. As i write this, i realize that there is likely no way to make the query loc= to be dynamic, as there is no way to connect between the feed and the builder? any idea on how can i approach this? 
Alternatively, would there be an API that will be able to pick up user location and then show the weather that is the closest to user location?
