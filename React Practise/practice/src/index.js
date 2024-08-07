import React from 'react';
import {createRoot} from 'react-dom/client';


 const container = document.getElementById('app')
 const root = createRoot(container)
 const myLast = <p>I am very busy studying</p>
root.render(myLast)

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

