import React from 'react';
import {createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom/client'
import Todo from './Todo';
import HeaderAndFooter from './HeaderAndFooter';


ReactDOM.createRoot(document.getElementById('app')).render(<HeaderAndFooter />)
/*
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';

// Declare new variable here:
const gooseImg = <img src={goose}/>
root.render(gooseImg)
*/

