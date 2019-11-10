/* app.test.js */

const request = require("supertest");
const assert = require("assert");
const validDataURL = require("valid-data-url");
const app = require("../app");

describe("captcha", () => {
  describe("testing captcha default", () => {
    it("should respond with a valid data URL", async () => {
      const image = await request(app)
        .get("/captcha")
        .expect(200)
        .then(res => res.body.image);
      assert(validDataURL(image));
    });
  });

  describe("testing captcha default with custom params", () => {
    it("should respond with a valid data URL", async () => {
      const image = await request(app)
        .get("/captcha/300/150")
        .expect(200)
        .then(res => res.body.image);
      assert(validDataURL(image));
    });
  });
});
