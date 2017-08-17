'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';

import Pagination from '../src/Pagination';

class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      total: 700,
      page: 1,
      perPage: 25
    }
  }

  changePage(page) {
    return () => {
      this.setState({page: parseInt(page)});
    };
  }

  render() {
    return (
      <Pagination
          total={ this.state.total }
          page={ this.state.page }
          perPage={ this.state.perPage }
          changePage={ (page) => this.changePage(page) }
          previous={ '<<' }
          next={ '>>' }
          pagesToShow={ 8 }
      />
    );
  }

}

render(<Demo />, document.getElementById('demo'));
