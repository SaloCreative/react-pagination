'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';

import Pagination from '../src/Pagination';

class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      total: 52,
      page: 1,
      perPage: 25
    }
  }

  changePage() {
    return (e) => {
      let page = parseInt(e.target.getAttribute('data-page'));
      this.setState({page});
    };
  }

  render() {
    return (
      <Pagination
          total={ this.state.total }
          page={ this.state.page }
          perPage={ this.state.perPage }
          changePage={ (e) => this.changePage(e) }
          previous={ '<<' }
          next={ '>>' } />
    );
  }

}

render(<Demo />, document.getElementById('demo'));
