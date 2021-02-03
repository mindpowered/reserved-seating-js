
reservedseating
===============
Reserved/Allocated/Assigned Seating for Venues and Events

![Build Status](https://mindpowered.dev/assets/images/github-badges/build-passing.svg)

Contents
========

* [Source Code and Documentation](#source-code-and-documentation)
* [About](#about)
* [Requirements](#requirements)
* [Installation](#installation)
* [Usage](#usage)
* [Support](#support)
* [Licensing](#licensing)

# Source Code and Documentation
- Source Code: [https://github.com/mindpowered/reserved-seating-js](https://github.com/mindpowered/reserved-seating-js)
- Documentation: [https://mindpowered.github.io/reserved-seating-js](https://mindpowered.github.io/reserved-seating-js)

# About
Reserved seating is when each event ticket has a specific seat. That is, attendees will know where they will sit ahead of time. Seats are usually identified by row and seat using numbers or letters.

Venues may be set up for different types of events. In this case, the seating configuration, and seats available, will change.

Buying tickets for a reserved seating event can end in disappointment. Unless a system is in place that can hold a seat, they may sell out during the sale process. The system must also have a time limit on holds to make sure enough seats are available to buy. Holds should only last until the sale process is complete or expired. Expired holds should release the seats for sale again. Holds should only last long enough to complete the sale process.

This package aims to reserve seats for a venue and event and allow booking with holds that expire.

# Requirements
- ES6
- npm


Third-party dependencies may have additional requirements.

# Installation
## npm

You can retrieve the reservedseating package using npm https://www.npmjs.com/. After initializing your packages.json file in your project’s directory with `npm init`, you can install the reservedseating package with
```
npm i @mindpowered/reservedseating --save
```
hint: the `--save` option will add the newly installed dependency in your packages.json file.

## package.json

You can also add the package directly to your packages.json file.

...


# Usage
```javascript

let mpcrs = require('@mindpowered/reservedseating');
const {ReservedSeating} = mpcrs;

let rs = new ReservedSeating();
rs.CreateVenue("123", "Venue 1", "250");

```


# Support
We are here to support using this package. If it doesn't do what you're looking for, isn't working, or you just need help, please [Contact us][contact].

There is also a public [Issue Tracker][bugs] available for this package.

# Licensing
This package is released under the MIT License.



[bugs]: https://github.com/mindpowered/reserved-seating-js/issues
[contact]: https://mindpowered.dev/support/?ref=reserved-seating-js/
[docs]: https://mindpowered.github.io/reserved-seating-js/
[licensing]: https://mindpowered.dev/?ref=reserved-seating-js
[purchase]: https://mindpowered.dev/purchase/
