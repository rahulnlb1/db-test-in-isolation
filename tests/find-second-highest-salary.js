const assert = require('assert');

const testName = "Get second highest salary of employee";

/**
 * Inserting test-data to test the logic
 */
async function seed (databaseClient) {
  await databaseClient.execute('INSERT INTO Employees (ID, Name, Salary) VALUES (1, "James", 100000)');
  await databaseClient.execute('INSERT INTO Employees (ID, Name, Salary) VALUES (2, "Mary", 120000)');
  await databaseClient.execute('INSERT INTO Employees (ID, Name, Salary) VALUES (3, "Ben", 110000)');
  await databaseClient.execute('INSERT INTO Employees (ID, Name, Salary) VALUES (4, "John", 100000)');
  await databaseClient.execute('INSERT INTO Employees (ID, Name, Salary) VALUES (5, "Robert", 90000)');
  await databaseClient.execute('INSERT INTO Employees (ID, Name, Salary) VALUES (6, "Patricia", 80000)');
  await databaseClient.execute('INSERT INTO Employees (ID, Name, Salary) VALUES (7, "Jennifer", 90000)');
  await databaseClient.execute('INSERT INTO Employees (ID, Name, Salary) VALUES (8, "Michael", 120000)');
  await databaseClient.execute('INSERT INTO Employees (ID, Name, Salary) VALUES (9, "Linda", 80000)');
  await databaseClient.execute('INSERT INTO Employees (ID, Name, Salary) VALUES (10, "Elizabeth", 100000)');
}

/**
 * Testing and asserting the logic here
 */
async function test (databaseClient) {
  const [rows, fields] = await databaseClient.execute('CALL findSecondHighestSalary()');
  const result = rows[0][0];
  assert.strictEqual(result.Name, "Ben", "Expected Ben, received " + result.Name);
  assert.strictEqual(result.Salary, 110000, "Expected 110000, received " + result.Salary);
}

/**
 * Cleaning-up the database after the test
 */
async function teardown (databaseClient) {
  await databaseClient.execute('DELETE FROM Employees');
}

module.exports = {testName, seed, test, teardown}