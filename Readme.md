### Link

```
npm link ./zip-utility
```

### Usage

```
const path = require('path');
const url = 'https://file-examples.com/wp-content/uploads/2017/02/zip_9MB.zip?aa=1&b=2';
const target = path.join(__dirname, 'data');

const action = require('zip-utility')
action(url, target);
```