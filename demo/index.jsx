'use strict';

import React from 'react';
import { render } from 'react-dom';

import Pagination from '../src/Pagination';

class Demo extends React.Component {

  render() {
    return (
      <Pagination />
    );
  }

}

render(<Demo />, document.getElementById('demo'));
