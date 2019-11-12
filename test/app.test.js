/* app.test.js */

const request = require("supertest");
const assert = require("assert");
const validDataURL = require("valid-data-url");
const app = require("../app");

describe("captcha", () => {
  describe("testing captcha default", () => {
    it("should respond with a valid data URL and a validation string", async () => {
      const body = await request(app)
        .get("/captcha")
        .expect(200)
        .then(res => res.body);
      assert(validDataURL(body.image));
      assert(typeof body.text === "string" && body.text.length > 0);
    });
  });

  describe("testing captcha default with custom params", () => {
    it("should respond with a valid data URL and a validation string", async () => {
      const body = await request(app)
        .get("/captcha/300/150")
        .expect(200)
        .then(res => res.body);
      assert(validDataURL(body.image));
      assert(typeof body.text === "string" && body.text.length > 0);
    });
  });
});
