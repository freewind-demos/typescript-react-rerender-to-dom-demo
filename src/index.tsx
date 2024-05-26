import React from 'react'
import ReactDOM from 'react-dom'

import { Hello } from './Hello'

function renderToDom() {
  console.log("### renderToDom");
  ReactDOM.render(
    <Hello />,
    document.getElementById('root')
  )
}

const button = document.querySelector('#button')!;
button.addEventListener('click', () => {
  renderToDom();
});

renderToDom();

