# Sign-In Form

A standard log-in form with the fields "username" and "password". This project is dedicated to styling a React application: it does not represent any meaningful functinality development.

## Important note

In this project, I apply different approaches to styling React applications. I decided to organize them to separate branches. For example, the code representing the approach of styling with Styled Components is hosted in the branch "styled-components". Please check all the branches to find different versions of the project. All the versions represent the same storefront display and behavior and differ only with the code.

## Branches

1. vanilla-css: represents the approach of styling a React application with Vanilla CSS while all the styles are in one file, for example, index.css, that covers the whole application.
2. vanilla-css-modules: represents the approach of styling a React application with Vanilla CSS while the styles are separated and held in different modules next to the components where these styles are applied, for example, the CSS module Header.css is allocated in one folder with the JSX module Header.jsx.
3. inline-styles: represents the approach of styling a React application with CSS rules defined inside a JSX component in the attribute "style", including setting styles dynamically.
4. dynamic-styling-with-classes: represents the approach that repeats the approach presented in the branch "vanilla-css" but with additional logic of setting styles dynamically through dynamic usage of classes for the label element. The idea of this branch is to emphasize the usage of classes for setting styles dynamically.
5. css-modules: represents the approach of styling a React application with CSS modules.
6. styled-components: represents the approach of styling a React application with the help of the package Styled Components, including setting up styles dynamically through the props.
7. styled-components-modules: represents the same approach as the branch "styled-components" but the components that are normally re-used in different parts of an application are placed in their separate modules. The current app does not re-use these components, so this module approach is only for demo purposes to simulate the most possible situation for a real app.
8. tailwind-css: represents the approach of styling a React application with the framework Tailwind CSS.

## Concepts Learned During This Project

- Styling a React app with vanilla CSS
- Using the approach of grouping CSS files next to JSX files of their components
- Understanding the scope problem with styling React apps with vanilla CSS
- Setting up styles dynamically with classes
- Styling a React app with inline styles
- Setting up styles dynamically with inline styles
- CSS modules, scoping CSS rules
- Installing the package Styled Components
- Styling with Styled Components package, including pseudo selectors and media points
- Setting styles dynamically through component props with the Styled Components approach
- Reasons to locate a styled component in the file where it is used
- Reasons to locate a styled component in a separate file
- Installing the framework Tailwind CSS
- Styling with Tailwind CSS, including pseudo selectors and media points
