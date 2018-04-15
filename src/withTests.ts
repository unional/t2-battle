import { withTests as withTestsOrig } from '@storybook/addon-jest';

const results = require('../.jest-test-results.json')

export const withTests = withTestsOrig({ results, filesExt: '((\\.spec)|(\\.test))\\.tsx?$' })
