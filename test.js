#!/usr/bin/env node

import {equal, deepEqual} from 'assert';
import unformat from './index.js';

{
  const expected = 1_500;
  const actual = unformat('1.5K');
  equal(actual, expected);
}
{
  const expected = 10_000;
  const actual = unformat('10K');
  equal(actual, expected);
}
{
  const expected = 10_500;
  const actual = unformat('10.5K');
  equal(actual, expected);
}
{
  const expected = 15_000;
  const actual = unformat('15K');
  equal(actual, expected);
}
{
  const expected = 1_000_000;
  const actual = unformat('1M');
  equal(actual, expected);
}
{
  const expected = 1_200_000;
  const actual = unformat('1.2M');
  equal(actual, expected);
}
{
  const expected = 1_000_000_000;
  const actual = unformat('1B');
  equal(actual, expected);
}
