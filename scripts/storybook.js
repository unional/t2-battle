const cp = require('child_process')
const fs = require('fs')

if (!fs.existsSync('.jest-test-results.json')) {
  const jest = require('jest');
  jest.run(['--json', '--outputFile=.jest-test-results.json'])
}

cp.spawn('start-storybook', ['-p', '6006'], { stdio: 'inherit', shell: true })
