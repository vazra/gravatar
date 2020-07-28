# Gravatar

> Typescript friendly Gravatar library to generate gravatar image links from email.

> Minimal Dependency: No `node` or `browser` dependency, so will work seamlessly in `node`, `browser` or `electron` .

## Installation

`yarn add @gravatar/js`

or

`npm i @gravatar/js --save`

## Parameters

| Param        | Type              | Default | Description                                                                               |
| ------------ | ----------------- | ------- | ----------------------------------------------------------------------------------------- |
| email        | `string`          | none    | Email address of the user to generate gravatar                                            |
| md5Hash      | `string`          |         | Optional: MD5 hash of the email, either email or MD5 hash is required                     |
| size         | `number`          | 80      | Optional: The size of the image to be displayed. Should be from 1 to 2048                 |
| defaultImage |                   |         | any of '404', 'mp', 'identicon' , 'monsterid' , 'wavatar' , 'retro', 'robohash', 'blank'; |
| protocol     | `http` or `https` | `http`  | Protocol for the gravatar image url.                                                      |

## Usage

**Import**

import the library

ES5

```js
const Gravatar = require('@gravatar/js')
```

ES6

```js
import JsGravatar from '@gravatar/js'
```

Call the method with its options.

```js
const userProfilePic = Gravatar({ email: 'example@example.com' })

const userProfilePic = Gravatar({ email: 'example@example.com', size: 10, protocol: 'https' })
```

## License

Copyright © 2020 Vazra, MIT License
