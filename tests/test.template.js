/**
 * Import assestion library to assert the results
 */
const assert = require('assert');

/**
 * Provide a name for your test
 */
const testName = "Sample Test";

async function seed (databaseClient) {
  /**
   * Implement this function to seed data into database before test runs
   */
}

async function test (databaseClient) {
  /**
   * Write the test logic here.
   * Also assert your results here.
   */
}


async function teardown (databaseClient) {
  /**
   * Implement this function to clean-up data after the test
   */
}

/**
 * Export testName, and the above functions for the runner to run this test
 */
module.exports = {testName, seed, test, teardown}