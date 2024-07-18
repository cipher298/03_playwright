import { test, expect } from "@playwright/test";

test.describe("Home Page Test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  test("should have elements", async ({ page }) => {
    await expect(page).toHaveTitle("Demo Playwright");

    await expect(
      page.getByRole("heading", {
        name: "Home Page",
      })
    ).toBeVisible();

    await expect(
      page.getByRole("link", {
        name: "Form",
      })
    ).toBeVisible();
  });

  test("should redirect to Form Page when click", async ({ page }) => {
    await page.getByRole("link", { name: "Form" }).click();

    await expect(page).toHaveTitle("Form");
  });
});
