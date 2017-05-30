'use strict';

import expect from 'unexpected';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Pagination from './Pagination';

const shallowRenderer = TestUtils.createRenderer();

describe('Your Component Test Case', () => {

  it('should render', () => {
    shallowRenderer.render(<Pagination />);
    expect(shallowRenderer.getRenderOutput(), 'to be defined');
  });

});
