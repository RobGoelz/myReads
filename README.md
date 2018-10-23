# FEND MyReads Project (Project 6)
===============================
## Table of Contents

* [Running](#running)
* [Contribute!](#contributing)
* [Attributions](#attributions)
* [Contents](#contents)
* [Backend](#backend)
* [Important](#important)

### Running

Running this project locally requires NPM be installed on your machine. More details on how to install NPM can be found on the [Official NPM Website](https://docs.npmjs.com/getting-started/installing-node)

To get started, git clone or download and extract the zipped repo folder [from here](https://github.com/RobGoelz/myReads). 

Once you are the project folder, and have NPM installed, you can:

* install all project dependencies with `npm install`
* start the development server with `npm start`

This will open a local server with a message like the following:

```
Compiled successfully!
The app is running at:
  http://localhost:3000/
```
Navigating to the localhost URL will allow you to view and interact with the website.

## Contributing

This repository is a fork of the the starter template for the final assessment project for Udacity's React Fundamentals course. Students were provided a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. This code is used by _all_ Udacity students

You are free to start this project from scratch if you wish! Just be sure to use [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project. The original Udacity starter code for this project without my changes can also be [found here](https://github.com/udacity/reactnd-project-myreads-starter)

I have heavily modified the App.js file, separating out components into individual .JS files for modularity and compartmentalization of components. This is per the recommendations of Doug Brown's walthrough for this project, which is in the attributions section below.

I welcome constructive criticism or help to make this program better! For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## Attributions
* [TylerMcGinnis React BootCamp- April 2018](https://www.youtube.com/playlist?list=PLr-qxVPM5Sc6xYYjPskP5Bn_TIuvFrkeS)
* [Doug Brown's YouTube Walkthrough](https://www.youtube.com/watch?v=OcL7-7cRpkQ&feature=youtu.be)

### Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contents
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of the app.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── BooksUtils.js # A JavaScript file containing additional sort functionality, provided by [Doug Brown](https://github.com/thefinitemonkey/udacity-myreads/blob/master/src/BookUtils.js)
    └── components # Separate folder for React component separation
    │   ├── Book.js # Component containing all books for app and associated rendering
    │   ├── BookCase.js # Component containing all bookshelves for app and associated rendering
    │   ├── BookShelf.js # Component containing all books in indvidual states (Read, Unread, etc) for app and associated rendering
    │   ├── Changer.js # Component containing functionality to change books states (Read, Unread, etc) and associated rendering
    │   ├── Search.js # Component for search functionality of app
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You may change if you wish.
    └── index.js # You should not need to modify this file; it is used for DOM rendering only.
```

## Backend

To simplify our development process, Udacity provided a backend server for to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
