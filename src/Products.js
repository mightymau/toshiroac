import React from 'react';
import Products1 from './components/Products1'
import Products2 from './components/Products2'
import Products3 from './components/Products3'

import {Link} from 'react-router-dom'


import {BrowserRouter as Router, Route} from 'react-router-dom';

function Products() {
  return (
<div className="container products">
<h1 className="mt-4 mb-3">Products</h1>
<Products1 />
<Products2 />
<Products3 />


</div>
  );
}

export default Products;
