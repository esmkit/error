# @esmkit/error

high-performance JavaScript utility library with a small bundle size and strong type annotations.

## Features

- 🚀 **High Performance**: optimized for performance.
- 📦 **Small Bundle Size**: small bundle size.
- 🎯 **Strong Type Annotations**: written in TypeScript with full types support.

## Installation

```bash
npm install @esmkit/error
# or
yarn add @esmkit/error
# or
bun add @esmkit/error
```

## Usage

```ts
import { AbortError } from '@esmkit/error';

const error1 = new AbortError("Operation aborted");
console.log(error1.message); // Operation aborted
console.log(error1.name); // AbortError
console.log(error1 instanceof Error); // true

import { TimeoutError } from '@esmkit/error';
const error2 = new TimeoutError("Operation timed out");
console.log(error2.message); // Operation timed out
console.log(error2.name); // TimeoutError
console.log(error2 instanceof Error); // true

```

## License

MIT © BILLGO. See LICENSE for details.