const { Customer, validate } = require("../models/customer");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const customers = await Customer.find().sort("name");
  res.send(customers);
});

router.get("/:id", async (req, res) => {
  if (req.params.id.length != 24)
    return res.status(404).send("Customer with the given ID not found");
  const customer = await Customer.findById(req.params.id);
  if (!customer)
    return res.status(404).send("Genre with the given ID not found");
  res.send(customer);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const customer = new Customer({
    name: req.body.name,
    phone: req.body.phone,
    isGold: req.body.isgold,
  });
  await customer.save();
  res.send(customer);
});

router.put("/:id", async (req, res) => {
  if (req.params.id.length != 24)
    return res.status(404).send("Customer with the given ID not found");
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const customer = await Customer.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name, phone: req.body.phone, isGold: req.body.isGold },
    { returnDocument: "after" },
  );

  if (!customer)
    return res.status(404).send("Genre with the given ID not found");

  res.send(customer);
});

router.delete("/:id", async (req, res) => {
  if (req.params.id.length != 24)
    return res.status(404).send("Customer with the given ID not found");
  const customer = await Customer.findByIdAndDelete(req.params.id);
  if (!customer)
    return res.status(404).send("Genre with the given ID not found");
  res.send(customer);
});

module.exports = router;
