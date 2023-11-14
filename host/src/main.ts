import React from 'react';
import ReactDOM from 'react-dom';
import PeopleApp from 'peopleApp/App';
import ProductApp from 'productApp/App';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Host application</h1>
  </div>
`;

const peopleRoot = ReactDOM.createRoot(document.querySelector<HTMLDivElement>('#people-app'));
peopleRoot.render(React.createElement(PeopleApp));

const productRoot = ReactDOM.createRoot(document.querySelector<HTMLDivElement>('#product-app'));
productRoot.render(React.createElement(ProductApp));
