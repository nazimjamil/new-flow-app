import React from 'react';
import { shallow } from 'enzyme';
import DocumentTitle from 'react-document-title';

describe('Testing a react component', () => {
  it('contains the correct title', () => {
    const wrapper = shallow(<DocumentTitle title="Test" />);

    expect(wrapper.prop('title')).toEqual('Test');
  });
});
