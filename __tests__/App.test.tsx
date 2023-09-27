/**
 * @format
 */

import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// Note: import explicitly to use the types shiped with jest.
import { it } from '@jest/globals';

import 'react-native';

import App from '../App';

it('renders correctly', () => {
  renderer.create(<App />);
});
