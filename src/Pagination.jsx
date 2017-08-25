'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaginationNext extends Component {
  render() {
    const { page, pages } = this.props;
    if (pages > 1) {
      if (page < pages) {
        return (
            <li className={`pagination__next`}>
              <a onClick={ this.props.itemClicked(page + 1) } >{ this.props.next }</a>
            </li>
        );
      }
      return (
          <li className={`pagination__next disabled`}>
            <a>{ this.props.next }</a>
          </li>
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
            <li className={`pagination__previous`}>
              <a onClick={ this.props.itemClicked(page - 1) } >{ this.props.previous }</a>
            </li>
        );
      }
      return (
          <li className={`pagination__previous disabled`}>
            <a>{ this.props.previous }</a>
          </li>
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

class Pagination extends Component {

  renderPageItems(pages) {
    const { page, pagesToShow } = this.props;
    let pageItems = [];
    const pagesCount = Math.floor(parseInt(pagesToShow)/2);
    // Check there ius more than one page of results
    if (pages > 1) {

      // Check if limit is set on pages to render
      if (pagesCount && (pagesToShow < (pages - 1))) {

        // Add first page and ellipsis
        if ((pagesCount - (page - 1)) < 0) {
          pageItems.push(
            <li key={ 0 } className={ `pagination__item ${ page == 1 ? 'active' : '' }` } >
              <a onClick={ this.props.changePage(1) }>{ 1 }</a>
            </li>
          );
          pageItems.push(
            <li key='ellip_first' className={ `pagination__ellipsis` }>…</li>
          );
        }

        // Build out the middle list
        let start = page - pagesCount;
        let end = page + pagesCount;
        if (start < 1) {
          start = 1;
          end = ((pagesCount * 2));
        }

        if (end > pages) {
          end = pages;
          start = pages - (pagesCount * 2);
        }

        for (let i = start; i <= end; i++) {
          pageItems.push(<li key={ i } className={ `pagination__item ${ i == page ? 'active' : '' }` } >
            <a onClick={ this.props.changePage(i) }>{ i }</a>
          </li>);
        }

        // Add last page and ellipsis
        if ((pagesCount + page) < pages) {
          pageItems.push(
            <li key='ellip_last' className={ `pagination__ellipsis` }>…</li>
          );
          pageItems.push(
            <li key={ 9999 } className={ `pagination__item ${ page == pages ? 'active' : '' }` } >
              <a onClick={ this.props.changePage(pages) }>{ pages }</a>
            </li>
          );
        }
      }

        // Otherwise render them all
      else {
        for (let i = 1; i <= pages; i++) {
          pageItems.push(
            <li key={ i } className={ `pagination__item ${ i == page ? 'active' : '' }` } >
              <a onClick={ this.props.changePage(i) }>{ i }</a>
            </li>
          );
        }
      }
    }
    return pageItems;
  }

  render() {
    const { perPage, total, page } = this.props;
    let pages = Math.ceil((total / perPage));
    return (
      <ul className={`pagination`}>
        <PaginationPrevious
            page={ page }
            pages={ pages }
            itemClicked={ (num) => this.props.changePage(num) }
            previous={ this.props.previous } />

        { this.renderPageItems(pages) }

        <PaginationNext
            page={ page }
            pages={ pages }
            itemClicked={ (num) => this.props.changePage(num) }
            next={ this.props.next } />
      </ul>
    );
  }

}

Pagination.defaultProps = {
  perPage: 25,
  page: 1,
  styles: {
    colour: '#000',
    activeColour: '#FFF',
    background: '#FFF',
    highlightBackground: '#CECECE',
    activeBackground: '#000'
  },
  previous: '<<',
  next: '>>',
  pagesToShow: 0
};

Pagination.propTypes = {
  perPage: PropTypes.number,
  total: PropTypes.number.isRequired,
  page: PropTypes.number,
  changePage: PropTypes.func.isRequired,
  styles: PropTypes.object,
  previous: PropTypes.string,
  next: PropTypes.string,
  pagesToShow: PropTypes.number
};


export default Pagination;