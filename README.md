# BMC Sample

## Description

Plain and simple application that shows a list of movies on home sceen, and has capability to navigate to details screen with more details about the movie

## Screens

### Movie Listing Screen

This screen mainly contains a list of movies which are interactable to navigate to its details page.

### Movie Details Screen

This page is pretty simple, it shows more details about the image. Details included as of now are overview, genre and release date along with an image of the movie.

## Service Layer

### TMDB API Integration

#### List of Movies API

- **Endpoint:** `https://api.themoviedb.org/3/discover/movie`
- **Description:** Retrieves a list of movies from The Movie Database (TMDB).
- **Method:** `GET`
- **Response:** JSON format containing the list of movies.

#### Movie Details API

- **Endpoint:** `https://api.themoviedb.org/3/movie/{movieId}`
- **Description:** Retrieves details of a specific movie from TMDB based on the provided movie ID.
- **Method:** `GET`
- **Parameters:**
  - `movieId`: ID of the movie for which details are requested.
- **Response:** JSON format containing details of the specified movie.

#### Movie Image Retrieval API

- **Endpoint:** `https://image.tmdb.org/t/p/w500/{imageId}`
- **Description:** Retrieves the image associated with a specific movie from TMDB based on the provided movie ID.
- **Method:** `GET`
- **Parameters:**
  - `imageId`: ID of the image.
- **Response:** URL to the image.

## Component File

### Common Components

#### ContentLoader Component

- **Description:** Renders the error state, loading indicator, or content based on the props passed to it.
- **Usage:**
  ```jsx
  import ContentLoader from './path/to/ContentLoader';

  // Inside your component
  <ContentLoader isloading={isLoading} isError={hasError}>
    {/* Your content goes here */}
  </ContentLoader>

## Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

### Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

### Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

#### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

#### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Contributor

 - Shaun