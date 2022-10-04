const router = require("express").Router();
const addProductSchema = require("../model/hmsmodel");

//this router for getting all the product stored in database

router.get("/getallproduct", async (req, res) => {
  try {
    const getallproduct = await addProductSchema.find();
    res.status(200).json(getallproduct);
  } catch (error) {
    console.log(erroe);
  }
});

//this router for addiing the product
router.post("/addproduct", async (req, res) => {
  try {
    const addproduct = await addProductSchema({
      PackageUOM: req.body.PackageUOM,
      UnitUOM: req.body.UnitUOM,
      PkgUOM: req.body.PkgUOM,
      IntegrationId: req.body.IntegrationId,
    });
    const saveaddproduct = await addproduct.save();
    res.status(200).json("successfully product added");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
