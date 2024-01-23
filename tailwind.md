Install tailwindcss via npm, and create your tailwind.config.js file.
##### npm install -D tailwindcss
##### npx tailwindcss 

Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.

```
tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.


```
src/index.css

@tailwind base;
@tailwind components;
@tailwind utilities;
```

Start the Tailwind CLI build process
Run the CLI tool to scan your template files for classes and build your CSS.

##### npx tailwindcss -i ./src/index.css -o ./src/tailwind.css --watch

Start using Tailwind in your HTML
Add your compiled CSS file to the <head> and start using Tailwind’s utility classes to style your content.

```
src/index.html

<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./tailwind.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

import tailwind.css in index.js file.

```
src/index.js
...
import './tailwind.css';
...
```