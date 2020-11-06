const logSymbols = require('log-symbols');
const databaseClient = require('./common/initialize-database');

/**
 * Getting all the tests here.
 * This can be extended to use glob, which could help us import with file patterns.
 * Ex: *.test.js
 * Moreover, this could also help run tests in parallel and sequetially based on the filename
 * Ex: *.parallel.test.js and *.series.test.js
 */
const findSecondHighestSalary = require('./tests/find-second-highest-salary');

/**
 * This function is the main test-runner.
 * It runs the test based on the format defined for the test files. 
 */
async function run() {

  const testCases = [findSecondHighestSalary];

  for (const testCase of testCases) {
    try{
      await seed(testCase);
      await test(testCase);
      await teardown(testCase);
    } catch(err) {
      /**
       * Generating failure message if the test fails.
       */
      console.log(logSymbols.error, testCase.testName);
      console.log('Failed to execute test with error: ' + err);
      continue;
    }
    /**
     * If the test ran successfully, generating a success message.
     */
    console.log(logSymbols.success, testCase.testName);
  }

  /**
   * After successfully running all the tests, 
   * closing the connection to the database.
   */
  databaseClient.end();
}

/**
 * Run the seed section of the test, if exists.
 */
async function seed(testCase) {
  console.log('Started seeding the database.');
  if(typeof testCase.seed === "function") {
    await testCase.seed(databaseClient);
  }
  console.log('Successfully completed the seed.');
}

/**
 * Run the test.
 */
async function test(testCase) {
  console.log('Started testing the case');
  await testCase.test(databaseClient);
  console.log('Successfully completed the test');
}

/**
 * Run the teardown section of the test, if exists.
 */
async function teardown(testCase) {
  console.log('Started teardown phase.');
  if(typeof testCase.teardown === "function") {
    await testCase.teardown(databaseClient);
  }
  console.log('Successfully completed the teardown.');
}

run();