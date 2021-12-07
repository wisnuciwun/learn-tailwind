npx as usually
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
npm install @craco/craco for postcss
change package.json to craco start, build and test
add craco.package.js
npx tailwindcss-cli@latest init
purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
add in index.css :
@tailwind base;
@tailwind components;
@tailwind utilities;
