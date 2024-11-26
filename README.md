# playwright0ToHero
Udemy course  [Playwright: Web Automation Testing From Zero to Hero](https://www.udemy.com/course/playwright-from-zero-to-hero/learn/lecture/39698942#overview)

## Playwright commands

- `npx playwright test`
- `npx playwright test --project=chromium`
- `npx playwright test --ui` - run with trace viewer 
- `npx playwright test --trace on` - run with trace in report
- `npx playwright test --debug` - run in debug mode
- `npx playwright test --project=chromium --headed` - not headless
- `npx playwright test example.spec.ts --project=chromium --headed` - run particular spec file
- `npx playwright test -g "has title" --project=chromium --headed` - run particular test
- `npx playwright show-report`

- To ignore test from run put in spec `test.skip('has title'`
- To run only some test in spec `test.only('has title'`

## Test applications

There are several websites that cn be used for practice purpose:
- [https://ultimateqa.com/dummy-automation-websites/](https://ultimateqa.com/dummy-automation-websites/)
