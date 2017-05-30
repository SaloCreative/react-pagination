'use strict';

import React, { Component, PropTypes } from 'react';

class PaginationNext extends Component {
  render() {
    const { page, pages } = this.props;
    if (pages > 1) {
      if (page < pages) {
        return (
            <li className="pagination__next"><a data-page={ page + 1 } onClick={ this.props.itemClicked() } >Next</a></li>
        );
      }
      return (
          <li className="pagination__next disabled"><a>Next</a></li>
      );
    }
    return null;
  }
}

PaginationNext.propTypes = {
  page: PropTypes.number,
  pages: PropTypes.number,
  itemClicked: PropTypes.func.isRequired
};

class PaginationPrevious extends Component {
  render() {
    const { page, pages } = this.props;
    if (pages > 1) {
      if (page > 1) {
        return (
            <li className="pagination__previous"><a data-page={ page - 1 } onClick={ this.props.itemClicked() } >Previous</a></li>
        );
      }
      return (
          <li className="pagination__previous disabled"><a>Previous</a></li>
      );
    }
    return null;
  }
}

PaginationPrevious.propTypes = {
  page: PropTypes.number,
  pages: PropTypes.number,
  itemClicked: PropTypes.func.isRequired
};

export default class Pagination extends Component {

  render() {
    const { perPage, total, page } = this.props;
    let pages = Math.ceil((total / perPage));
    let pageItems = [];
    if (pages > 1) {
      for (let i = 1; i <= pages; i++) {
        pageItems.push(<li className="active">
          <a data-page={ i } onClick={ this.props.changePage() }>{ i }</a>
        </li>);
      }
    }
    return (
      <ul className="pagination">
        <PaginationPrevious
            page={ page }
            pages={ pages }
            itemClicked={ (e) => this.props.changePage(e) }/>

        { pageItems }

        <PaginationNext
            page={ page }
            pages={ pages }
            itemClicked={ (e) => this.props.changePage(e) }/>
      </ul>
    );
  }

}

Pagination.defaultProps = {
  perPage: 25,
  page: 1
};

Pagination.propTypes = {
  perPage: PropTypes.number,
  total: PropTypes.number.isRequired,
  page: PropTypes.number,
  changePage: PropTypes.func.isRequired
};
