import React from 'react';

import './index.css';

const DataList = (props) => (
  <section className="cards"> 
    {props.children}
  </section>
);

export default DataList;
