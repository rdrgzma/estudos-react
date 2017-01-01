import ReactDom from 'react-dom';
import React from 'react';

import Titulo from './titulo/titulo';
import Navbar from './navbar/navbar';

let App = (
  <div>
    <Navbar titulo="React" cor = "orange"/>
    <div className="container">
      <Titulo />
    </div>
  </div>
);

ReactDom.render(App, document.getElementById('app'));
