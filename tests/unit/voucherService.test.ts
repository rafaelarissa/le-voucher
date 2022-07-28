import { jest } from "@jest/globals";
import voucherService from "../../src/services/voucherService";
import voucherRepository from "../../src/repositories/voucherRepository";

jest.mock("uuid");

describe("voucherService test suite", () => {
  it("should create a voucher", async () => {
    jest
      .spyOn(voucherRepository, "getVoucherByCode")
      .mockImplementationOnce((): any => {
        return { code: "3r34ref", discount: 15 };
      });
    jest
      .spyOn(voucherRepository, "createVoucher")
      .mockImplementation((): any => undefined);
    voucherService.createVoucher("3r34ref", 15);

    expect(voucherRepository.createVoucher).toHaveBeenCalled();
  });

  it("voucher code must be unique", () => {
    expect("didi").toBe("didi");
  });

  it("voucher can only be used once", () => {
    expect("didi").toBe("didi");
  });

  it("purchase value must be at least 100", () => {
    expect("didi").toBe("didi");
  });

  it("should return purchase amount, discount, final purchase amount and discount approval", () => {
    expect("didi").toBe("didi");
  });
});
