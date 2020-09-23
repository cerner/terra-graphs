# How to release

This project is hosted on NPM.  You can find the terra packages [here][project-url].

Below is a guide for releasing packages:

1. Update the versions of the components via `npm run version`
2. Update change logs to have the current date for the release of the affected components.
3. Create a Release PR, Get approvals
4. Merge PR to `main`
5. Watch main to ensure releases get pushed to npm and tagged in github appropriately

[project-url]: https://www.npmjs.com/org/cerner
