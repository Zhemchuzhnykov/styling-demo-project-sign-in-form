# Sign-In Form

A standard log-in form with the fields "username" and "password". This project is dedicated to styling a React application: it does not represent any meaningful functinality development.

## Important note

In this project, I apply different approaches to styling React applications. I decided to organize them to separate branches. For example, the code representing the approach of styling with Styled Components is hosted in the branch "styled-components". Please check all the branches to find different versions of the project. All the versions represent the same storefront display and behavior and differ only with the code.

## Branches

1. vanilla-css: represents the approach of styling a React application with Vanilla CSS while all the styles are in one file, for example, index.css, that covers the whole application.
2. vanilla-css-modules: represents the approach of styling a React application with Vanilla CSS while the styles are separated and held in different modules next to the components where these styles are applied, for example, the CSS module Header.css is allocated in one folder with the JSX module Header.jsx.
3. inline-styles: represents the approach of styling a React application with CSS rules defined inside a JSX component in the attribute "style", including setting styles dynamically.
4. dynamic-styling-with-classes: this approach repeats the approach presented in the branch "vanilla-css" but with additional logic of setting styles dynamically through dynamic usage of classes for the label element. The idea of this branch is to emphasize the usage of classes for setting styles dynamically.

## Concepts Learned During This Project

- Styling a React app with vanilla CSS
- Using the approach of grouping CSS files next to JSX files of their components
- Understanding the scope problem with styling React apps with vanilla CSS
- Setting up styles dynamically with classes
- Styling a React app with inline styles
- Setting up styles dynamically with inline styles
- CSS modules, scoping CSS rules
- Styling with Styled Components package
- Setting styles dynamically through component props with the Styled Components approach
