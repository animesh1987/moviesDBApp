<h1>MoviesDb App<h1>

## Setup and install

-  Clone project and cd into directory
yarn install
# OR
npm install

- Now simply run this to boot up the server:

```
yarn dev
# OR
npm run dev
```

Once the application is loaded in the browser:

- The first page displays the empty state.
- To trigger search either press the search button or type something in search bar
  and press enter.
- Once a movie list from json data file is loaded, click on any movie to view the detail
  and movies list filtered by genre type.
- The 'Search By' buttons just trigger the callback and set the active class accordingly.
- The 'Sort By' buttons just trigger the callback and set the active class accordingly.
- Once on movie detail view click on 'Search' button in top right hand corner to reset
  the state of the application.
