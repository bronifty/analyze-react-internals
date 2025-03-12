# React Internals Analysis

This project is set up to help you analyze React internals using source maps in Chrome's developer tools.

## Important Note for React 19

React 19 has a different file structure compared to previous versions. The UMD builds (under `/umd/` directory) are no longer available in the same way. Instead, React 19 uses the CommonJS (cjs) format for development builds.

## Setup

1. Clone this repository
2. Install dependencies: `npm install`
3. Run `node find-react-source.js` to locate the React source files in your node_modules
4. Start the development server: `npm start`

## Analyzing React Internals

### Using Chrome DevTools

1. Open Chrome DevTools (F12 or Cmd+Option+I on Mac)
2. Go to the Sources tab
3. Navigate to the webpack:// section in the file explorer
4. Find the node_modules/react directory
5. Look for files with `.development.js` extension

For the standalone HTML version:
1. Open index.html directly in Chrome or via the server (`node server.js`)
2. Open DevTools and look for files under the unpkg.com domain
3. Find `react@19/cjs/react.development.js` and `react-dom@19/cjs/react-dom.development.js`

### Key Files to Analyze in React 19

- `node_modules/react/cjs/react.development.js` - Core React API
- `node_modules/react-dom/cjs/react-dom.development.js` - DOM-specific methods

### Debugging Hooks

To analyze how hooks work:
1. Set a breakpoint in the App component where a hook is called
2. Step into the function call (F11 or right-click > Step into)
3. You'll enter React's internal implementation

### Debugging Rendering

To analyze the rendering process:
1. Set a breakpoint in the `root.render()` call in index.js
2. Step into the function to see how React processes the component tree

### Debugging State Updates

To analyze state updates:
1. Set a breakpoint in the `handleClick` function in App.js
2. Click the Increment button
3. Step through to see how React schedules and processes updates

## Tips

- Use the "Call Stack" panel to understand the execution flow
- Use "Watch" to monitor specific variables
- The "Scope" panel shows local and closure variables
- Use "Blackbox Script" on libraries you're not interested in analyzing
- Enable "Async Stack Traces" in DevTools settings for better async debugging

## Troubleshooting

If you're having trouble finding the React source files:
1. Make sure you're using the development build of React
2. Run `node find-react-source.js` to locate the React source files
3. Try the standalone HTML version which uses unpkg.com CDN 