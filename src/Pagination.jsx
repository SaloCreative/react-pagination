'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  pagination: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    padding: '0',
    listStyle: 'none',
    justifyContent: 'center'
  },
  pagination__item: {
    height: '40px',
    width: '40px',
    margin: '0 5px',
    transition: 'all 0.3s ease-in-out',
    background: props => props.styles.background,
    '&:hover': {
      background: props => props.styles.highlightBackground,
      color: props => props.styles.activeColour
    },
    '&.disabled': {
      background: props => props.styles.background,
      opacity: '0.4'
    },
    '&.active': {
      background: props => props.styles.activeBackground,
      color: props => props.styles.activeColour
    }
  },
  a: {
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    cursor: 'pointer',
    '.disabled &': {
      cursor: 'default',
      color: '#000'
    }
  }
};

class PaginationNext extends Component {
  render() {
    const { page, pages, classes } = this.props;
    if (pages > 1) {
      if (page < pages) {
        return (
            <li className={`pagination__next ${ classes.pagination__item }`}>
              <a className={ classes.a } data-page={ page + 1 } onClick={ this.props.itemClicked() } >{ this.props.next }</a>
            </li>
        );
      }
      return (
          <li className={`pagination__next ${ classes.pagination__item } disabled`}>
            <a className={ classes.a } >{ this.props.next }</a>
          </li>
      );
    }
    return null;
  }
}

PaginationNext.propTypes = {
  page: PropTypes.number,
  pages: PropTypes.number,
  itemClicked: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

class PaginationPrevious extends Component {
  render() {
    const { page, pages, classes } = this.props;
    if (pages > 1) {
      if (page > 1) {
        return (
            <li className={`pagination__previous ${ classes.pagination__item }`}>
              <a className={ classes.a } data-page={ page - 1 } onClick={ this.props.itemClicked() } >{ this.props.previous }</a>
            </li>
        );
      }
      return (
          <li className={`pagination__previous ${ classes.pagination__item } disabled`}>
            <a className={ classes.a } >{ this.props.previous }</a>
          </li>
      );
    }
    return null;
  }
}

PaginationPrevious.propTypes = {
  page: PropTypes.number,
  pages: PropTypes.number,
  itemClicked: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

class Pagination extends Component {

  render() {
    const { perPage, total, page, classes } = this.props;
    let pages = Math.ceil((total / perPage));
    let pageItems = [];
    if (pages > 1) {
      for (let i = 1; i <= pages; i++) {
        pageItems.push(<li key={ i } className={ `pagination__item ${ classes.pagination__item } ${ i == page ? 'active' : '' }` } >
          <a className={ classes.a } data-page={ i } onClick={ this.props.changePage() }>{ i }</a>
        </li>);
      }
    }
    return (
      <ul className={`pagination ${ classes.pagination }`}>
        <PaginationPrevious
            page={ page }
            pages={ pages }
            itemClicked={ (e) => this.props.changePage(e) }
            classes={ classes }
            previous={ this.props.previous } />

        { pageItems }

        <PaginationNext
            page={ page }
            pages={ pages }
            itemClicked={ (e) => this.props.changePage(e) }
            classes={ classes }
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
  next: '>>'
};

Pagination.propTypes = {
  perPage: PropTypes.number,
  total: PropTypes.number.isRequired,
  page: PropTypes.number,
  changePage: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  styles: PropTypes.object,
  previous: PropTypes.string,
  next: PropTypes.string
};


export default injectSheet(styles)(Pagination)