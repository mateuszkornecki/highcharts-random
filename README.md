# highcharts-random

Lightweight javascript library that allow you to generate a random data series which can be used to fill your charts created with the Highcharts JS. Currently, it contains just a few basic methods, but it will be gradually developed.

## Usage

First install the package:
`npm install highcharts-random`

Then import it using the ES6 modules or CommonJS
`import random from 'highcharts-random`
`const random = require('highcharts-random)`

Alternatively, you can use unpkg to import the package using a URL:
`<script src="https://unpkg.com/highcharts-random>`

Live demo: https://jsfiddle.net/mateuszkornecki/c0pt8kse/

## Avialable methods

- `random.color()`
- `random.numberBetween(min? = 0, max? = 10)`
- `random.data(length? = 10, min?, max?)`
- `random.timeData(length? = 10, min?, max?)`
