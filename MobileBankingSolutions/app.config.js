// NOTE object below must be a valid JSON
window.MobileBankingSolutions = $.extend(true, window.MobileBankingSolutions, {
  "config": {
    "endpoints": {
      "db": {
        "local": "http://localhost:36927/DataService.svc/",
        "production": "http://localhost:36927/DataService.svc/"
      }
    },
    "services": {
      "db": {
        "entities": {
          "Books": {
            "key": "Id",
            "keyType": "Int32"
          },
          "rTask": {
            "key": "rTaskID",
            "keyType": "Int32"
          }
        }
      }
    },
    "layoutSet": "navbar",
    "navigation": [
      {
        "title": "Home",
        "onExecute": "#home",
        "icon": "home"
      },
      {
        "title": "About",
        "onExecute": "#about",
        "icon": "info"
      },
      {
        "title": "Calculator",
        "onExecute": "#TipCalculator",
        "icon": "product"
      }
      //,
      //{
      //  "title": "books",
      //  "onExecute": "#books",
      //  "icon": "books"
      //},
      //{
      //  "title": "Register",
      //  "onExecute": "#Register",
      //  "icon": "register"
      //},
      //{
      //  "title": "MenuEagerView",
      //  "onExecute": "#MenuEagerView",
      //  "icon": "menueagerview"
      //}
    ]
  }
});