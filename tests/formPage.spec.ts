import { test, expect } from "@playwright/test";

test.describe("Form Page Test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/form");
  });

  test("should have elements", async ({ page }) => {
    await expect(page).toHaveTitle("Form");

    await expect(
      page.getByRole("heading", {
        name: "Form",
      })
    ).toBeVisible();

    await expect(page.getByPlaceholder("Enter item")).toBeVisible();

    await expect(
      page.getByRole("button", {
        name: "Add",
      })
    ).toBeVisible();
  });

  test("should have empty items list on start", async ({ page }) => {
    const itemsList = page.getByTestId("items-list");

    await expect(itemsList).toBeEmpty();
  });

  test("should add item to list", async ({ page }) => {
    const input = page.getByPlaceholder("Enter Item");

    await input.fill("Item 1");

    await page.getByRole("button", { name: "Add" }).click();

    const item = page.getByTestId("item").nth(0);

    await expect(item).toHaveText("Item 1");
    await expect(input).toBeEmpty();
  });
});
