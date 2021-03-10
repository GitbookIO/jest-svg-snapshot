import "../index";

it("handles some simple SVG", () => {
  const svg = `<?xml version="1.0" encoding="UTF-8" ?>
<svg width="1024" height="768" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect x="20" y="20" width="600" height="400" fill-opacity="0.1" stroke-width="1" stroke="black"/>
</svg>
`;

  expect(svg).toMatchSVGSnapshot();
});

it("handles 2 assertions in the same test", () => {
  const svg = `<?xml version="1.0" encoding="UTF-8" ?>
<svg width="1024" height="768" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect x="20" y="20" width="600" height="400" fill-opacity="0.1" stroke-width="1" stroke="black"/>
</svg>
`;
  const svg2 = `<?xml version="1.0" encoding="UTF-8" ?>
<svg width="1024" height="768" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect x="20" y="200" width="600" height="400" fill-opacity="0.1" stroke-width="1" stroke="black"/>
</svg>
`;

  expect(svg).toMatchSVGSnapshot();
  expect(svg2).toMatchSVGSnapshot();
});
