import {Account} from './Account';
import { render } from '@testing-library/react'
import { expect } from '@jest/globals';

it('matches snapshot', () => {
  const utils = render(<Account name="test" mbti='test1' />);
  expect(utils.container).toMatchSnapshot();
})