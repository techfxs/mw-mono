import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect h1 to contain "Cart App"
  await expect(page.locator("h1")).toContainText("Cart App");
});
