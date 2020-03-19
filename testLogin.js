import 'react-native';
import React from 'react';
import testHome from '../test_screens/testLogin';
import renderer from 'react-test-renderer';

test ('testLogin snapshot', () => {
    const snap = renderer.create(
        <testLogin/>
    ).toJSON();
expect(snap).toMatchSnapshot();
});