// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'remoteApp/App';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Host application</h1>
  </div>
`;

const root = ReactDOM.createRoot(document.querySelector<HTMLDivElement>('#people-app'));
root.render(React.createElement(App));
// @ts-check
