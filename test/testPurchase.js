const Purchase = artifacts.require("Purchase");
const utils = require("./helpers/utils");

contract("Purchase", (accounts) => {
  let toPurchase;

  before(async () => {
    await toPurchase.deployed();
  });

  afterEach(async () => {
    await toPurchase.kill();
  });

  describe("adopting a dog and retrieving account addresses", async () => {
    before("adopt a dog using accounts[0]", async () => {
      await toPurchase.purchase(8, { from: accounts[0] });
      expectedPurchaser = accounts[0];
    });
   
    context("with the single-step scenario", async () => {
      it("can fetch the address of an owner by the dog id", async () => {
        const purchaser = await toPurchase.getPurchasers(8);
        assert.equal(purchaser, expectedPurchaser, "The owner of the adopted doge should be the first account.");
      })
    });

    context("with the multi-step scenario", async () => {
      it("can fetch the collection of all dog owners' addresses", async () => {
        const purchasers = await toPurchase.getPurchasers();
        assert.equal(purchasers[8], expectedPurchaser, "The owner of the adopted dog should be in the collection.");
      })
    });
    
  });
});