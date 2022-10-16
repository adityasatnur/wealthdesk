# Wealthdesk-task

Steps to run app
- npm install
- npm start

Created App in react 18v
 since app is created in codesandbox url as follows
https://codesandbox.io/s/weather-app-qqb9px

App is responsive in mobile, tab & desktop
Added a loader in weather page
Popup is created to add city which checks if value is empty or not and add it to the list of cities
Search bar is implemented which will search if the entered string matches part of city names in list
List will be sorted in ascending or descending when clicked on "Name"
when clicked on city name if the cityname is valid then it will redirect to weahter page and load data else it will show loader
Routing is implemented for redirection

All availble data present in API is shown
celcius=> farenheit & vice versa conversion is implemented
slick carousel is used for future weather data

MainApp component includes mainpage, which is further divided in 
- citylist=>city 
- searchbar
- popup

wheras from city it will redirect to weahterapp page
which is further divided in carousel & clock

Utils folder has API, Loader and other common functions

More optimizations was possible in both CSS & React but due to lack of time could'nt complete it.


