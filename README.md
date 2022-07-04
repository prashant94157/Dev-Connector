
# Dev Connector

It is a small social network app that includes authentication, 
profiles and forum posts.

[Application](https://quiet-everglades-40708.herokuapp.com/)
## Installation

Add a default.json file in config folder with the following


```bash
  {
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "githubToken": "<yoursecrectaccesstoken>"
  }

```

Install server dependencies

```bash
npm install
```

Install client dependencies
```bash
cd client
npm install
```
Run both Express and React from root
```bash
npm run dev
```
