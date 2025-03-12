/**
 * This script helps you locate the React source files in your node_modules directory
 * Run with: node find-react-source.js
 */

const fs = require('fs');
const path = require('path');

// Function to recursively find files
function findFiles(dir, pattern, maxDepth = 5, currentDepth = 0) {
  if (currentDepth > maxDepth) return [];
  
  let results = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        results = results.concat(
          findFiles(itemPath, pattern, maxDepth, currentDepth + 1)
        );
      } else if (pattern.test(item)) {
        results.push(itemPath);
      }
    }
  } catch (err) {
    // Ignore permission errors
  }
  
  return results;
}

// Main function to find React source files
function findReactSourceFiles() {
  const nodeModulesPath = path.resolve('./node_modules');
  
  console.log('Searching for React source files...');
  
  // Look for React development files
  const reactDevFiles = findFiles(
    path.join(nodeModulesPath, 'react'),
    /\.development\.js$/
  );
  
  console.log('\nReact Development Files:');
  if (reactDevFiles.length === 0) {
    console.log('  No React development files found');
  } else {
    reactDevFiles.forEach(file => {
      console.log(`  ${file.replace(nodeModulesPath, 'node_modules')}`);
    });
  }
  
  // Look for React DOM development files
  const reactDomDevFiles = findFiles(
    path.join(nodeModulesPath, 'react-dom'),
    /\.development\.js$/
  );
  
  console.log('\nReact DOM Development Files:');
  if (reactDomDevFiles.length === 0) {
    console.log('  No React DOM development files found');
  } else {
    reactDomDevFiles.forEach(file => {
      console.log(`  ${file.replace(nodeModulesPath, 'node_modules')}`);
    });
  }
  
  console.log('\nTo analyze React internals:');
  console.log('1. Start your development server: npm start');
  console.log('2. Open Chrome DevTools (F12 or Cmd+Option+I on Mac)');
  console.log('3. Go to the Sources tab');
  console.log('4. Navigate to the webpack:// section');
  console.log('5. Find the node_modules/react directory');
  console.log('6. Look for the development.js files listed above');
  console.log('7. Set breakpoints in these files to analyze React\'s internal workings');
}

// Run the function
findReactSourceFiles(); 