# unformat
Convert internet or pop notation such as 10K, 10M back to js numbers.

## Conversion Examples

1.5K to 1500
10K to 10000
10.5K to 10500
15K to 15000
1M to 1000000
1.2M to 1200000
1B to 1000000000

## Installation

```shell
npm i unformat
```

## Usage

```JavaScript
import unformat from 'unformat';
```

## Example

```JavaScript
import unformat from 'unformat';

let unformatted;

unformatted = unformat('1.5K'); // 1_500
unformatted = unformat('10K'); // 10_000
unformatted = unformat('10.5K'); // 10_500
unformatted = unformat('15K'); // 15_000
unformatted = unformat('1M'); // 1_000_000
unformatted = unformat('1.2M'); // 1_200_000
unformatted = unformat('1B'); // 1_000_000_000

```

## Testing

```shell

npm run test

```
