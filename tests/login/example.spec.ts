import { test, expect } from "@playwright/test";

test.beforeAll(async ({ page }) => {
  console.log("beforeeach: navigate before test");
  // Navigate to the login page before each test
  await page.goto("https://selectors-practice.onrender.com");
  await page.waitForTimeout(3000);
});

test("test 1", async () => {
  console.log("test 1: navigate to login page");
  // Perform actions on the login page
});

test("test 2", async () => {
  console.log("test 2: navigate to login page");
  // Perform actions on the login page
});

test("test 3", async () => {
  console.log("test 3: navigate to login page");
  // Perform actions on the login page
});

// BEFOREALL HOOKS RUNS ONCE BEFORE ALL TESTS IN THE FILE, AND AFTERALL HOOKS RUN ONCE AFTER ALL TESTS IN THE FILE.
