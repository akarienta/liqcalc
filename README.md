# LiqCalc
LiqCalc is a simple mobile application to calculate bases and flavour ratios when mixing liquid (e-juice) for e-cigarette. 

![Screenhot 1](https://github.com/akarienta/liqcalc/blob/master/screenshot_1.png) ![Screenshot 2 ](https://github.com/akarienta/liqcalc/blob/master/screenshot_2.png)

## About
Will be wrapped by Cordova published on Google Play soon, maybe also on Apple Store.

#### You can use LiqCalc when:
 - you need to thin down nicotine base by no-nicotine base
 - you don't know what amount of bases and flavour add to your bottle
 - you need to know precise values of amount, drops and ratio of your ingredients when mixing liquids
 - you would like to have a tool like this everywhere with you, included when you are offline

#### LiqCalc can't do (yet):
- calculate ratios when mixing pure PG with pure VG and nicotine
- save your options and favourite recipes
- speak English (localization will be added in the next version)

## Development 
To run project localy just run these commands and add file watchers on SCSS files:
```bash
git clone https://github.com/akarienta/liqcalc
cd liqcalc
npm i && npm run start
```

Open your browser and go to [http://localhost:3000](http://localhost:3000).

Build is done by:
```bash
npm run build
```

#### Used Libraries
- React (https://facebook.github.io/react)
- Classnames (http://jedwatson.github.io/classnames)
- Numeral.js (http://numeraljs.com)
- Lodash (https://lodash.com)
- CRA (https://github.com/facebookincubator/create-react-app)

## Change Log
[CHANGELOG.md](https://github.com/akarienta/liqcalc/blob/master/CHANGELOG.md)

## License
[LICENSE.md](https://github.com/akarienta/liqcalc/blob/master/LICENSE.md) (The MIT License)