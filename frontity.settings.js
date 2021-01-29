const settings = {
  "name": "dutchgamestudio",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "",
      "description": ""
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "game",
              "/game/"
            ],
            [
              "web",
              "/web/"
            ],
            [
              "app",
              "/app/"
            ],
            [
              "video",
              "/video/"
            ],
            [
              "contact",
              "contact"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://test.frontity.org/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
