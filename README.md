# jest-svg-snapshot

A [jest](https://jestjs.io) [matcher](https://jestjs.io/docs/using-matchers) to store your [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) [snapshots](https://jestjs.io/docs/en/snapshot-testing) as SVG files in order to have a nice diff on GitHub.

## How it works

Given a SVG string, the `toMatchSVGSnapshot()` matcher will create a **snapshots** directory in the directory the test is in and will store the baseline snapshot SVG there on the first run.

On subsequent test runs the matcher will compare the SVG being passed against the stored snapshot.

To update the stored image snapshot run Jest with --updateSnapshot or -u argument. All this works the same way as [Jest snapshots](https://jestjs.io/docs/en/snapshot-testing).

## Installation

```bash
npm install -save-dev jest-svg-snapshot
```

## Usage

```js
// _tests/svg.test.js

// 1. Import jest-svg-snapshot to provide the `toMatchSVGSnapshot` matcher
import "jest-svg-snapshot";

describe("Fixtures", () => {
  it("handles some simple SVG", () => {
    const svg = `<?xml version="1.0" encoding="UTF-8" ?>
      <svg width="1024" height="768" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <rect x="20" y="20" width="600" height="400" fill-opacity="0.1" stroke-width="1" stroke="black"/>
      </svg>
    `;

    // 2. Use `toMatchSVGSnapshot` in your tests!
    expect(svg).toMatchSVGSnapshot();
  });
});
```

Would make:

```bash
_tests/
├── __snapshots__
│   └── svg.test.tsx-handles-some-simple-svg-1-snap.svg
└── svg.test.tsx
```

## Removing Outdated Snapshots

Unlike jest-managed snapshots, the images created by `jest-svg-snapshot` will not be automatically removed by the `-u` flag if they are no longer needed.

## I want to work on this

OK, you need to clone this repo:

```sh
git clone https://github.com/GitbookIO/jest-svg-snapshot.git
```

If you want to work against your own projects, then you need to set it up for linking and turn on watch mode.

```sh
yarn watch # starts a server, so make a new tab for the next bits
yarn link

cd [my_project]
yarn link jest-svg-snapshot
```

Now your project is using the dev version of this.

## TODO:

- **v2:** use iTerm to show the images inline
- **v3:** get vscode-jest to preview them inline
