import React from 'react';
import ReactDOM from 'react-dom/client'; //used to interact with document object model
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
//creates a root DOM element where the entire React Application will be rendered.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*Document Object Model-It is the programming interface 
for Web Development.It represents the page so that programs
 can change the document structure,style,and content.*/
