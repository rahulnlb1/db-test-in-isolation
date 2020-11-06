# db-test-in-isolation

This is a simple example where we use Node.js to test our database logic in isolation.

## Example story

We are trying to test a database procedure that finds the employee with second highest salary.

Procedure `findSecondHighestSalary` finds the second highest salary in the employee database.

## Folder Structure

| folder/file  |  content |
|---|---|
|  common |  Contains the common object that can be shared like database connection |
| tests  |  Contains all the tests |
| test-runner.js |  Main file that runs the tests |

## Test Structure

Test has a very simple structure.
```js
// Assertion library
const assert = require('assert');

//Test name
const testName = "Sample Test";

//Function to seed data
async function seed (databaseClient) {
}

//Actual test
async function test (databaseClient) {
}

// Function to teardown data after test
async function teardown (databaseClient) {
}


module.exports = {testName, seed, test, tearDown}
```

We have a [test template](./test/test.template.js) that can be direclty copied as a boiler-plate for the test.

## Areas of improvement
1. Most of JS test frameworks work with `glob`. They identify the test files using patterns like `*.test.js`. This sample can be extended to support such globs.
2. The sample implementation is done only for MySQL. This could be extended to support other databases as well.
3. Currently the sample has `seed` and `teardown` before each test, we could also extend these functions to support `seedBeforeAll` and `teardownAfterAll`.
4. The `INSERT` statements are redundant. We could extend the implentation to accept values and we can generate the `INSERT` statement for it.
