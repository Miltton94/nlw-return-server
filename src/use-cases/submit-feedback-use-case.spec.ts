import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMail = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: async () => {} },
  { sendMail: sendMail }
);

describe("Submit feedback", () => {
  it("Should be able to a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "example feedback",
        screenshot: "data:image/png;based64.vasdfgasdgafdgava",
      })
    ).resolves.not.toThrow();
  });

  it("Should not be able to a feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "example feedback",
        screenshot: "data:image/png;based64.vasdfgasdgafdgava",
      })
    ).rejects.toThrow();
  });

  it("Should not be able to a feedback without comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;based64.vasdfgasdgafdgava",
      })
    ).rejects.toThrow();
  });

  it("Should not be able to a feedback witho invalid screenshot ", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "example feedback",
        screenshot: "image.jpg",
      })
    ).rejects.toThrow();
  });
});
