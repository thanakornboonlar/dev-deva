import { Router } from "express";
import pool from "../configs/db.js";

const assetRouter = Router();

//Get by Search
assetRouter.get(`/search`, async (req, res) => {
  let typeOfAsset = req.query.typeOfAsset || "";
  const building = req.query.building || "";
  const word = req.query.word || "";
  let query = "";
  let values = [];

  if (req.query.typeOfAsset === "asset") {
    typeOfAsset = "false";
  }
  if (req.query.typeOfAsset === "packageAsset") {
    typeOfAsset = "true";
  }

  try {
    if (typeOfAsset && building && word) {
      query = `SELECT * FROM asset WHERE is_package = $1 AND building = $2 AND (serial_number ilike '%'||$3||'%' OR product_name ilike '%'||$3||'%')`;
      values = [typeOfAsset, building, word];
    } else if (typeOfAsset && building) {
      query = `SELECT * FROM asset WHERE is_package = $1 AND building = $2`;
      values = [typeOfAsset, building];
    } else if (typeOfAsset && word) {
      query = `SELECT * FROM asset WHERE is_package = $1 AND (serial_number ilike '%'||$2||'%' OR product_name ilike '%'||$2||'%')`;
      values = [typeOfAsset, word];
    } else if (building && word) {
      query = `SELECT * FROM asset WHERE building = $1 AND (serial_number ilike '%'||$2||'%' OR product_name ilike '%'||$2||'%')`;
      values = [building, word];
    } else if (typeOfAsset) {
      query = `SELECT * FROM asset WHERE is_package = $1`;
      values = [typeOfAsset];
    } else if (building) {
      query = `SELECT * FROM asset WHERE building = $1`;
      values = [building];
    } else if (word) {
      query = `SELECT * FROM asset WHERE serial_number ilike '%'||$1||'%' OR product_name ilike '%'||$1||'%'`;
      values = [word];
    }

    const results = await pool.query(query, values);
    return res.status(200).json({
      asset: results.rows,
    });
  } catch (err) {
    console.log(err);
  }
});

//Create a new asset and sub-component asset
assetRouter.post(`/create`, async (req, res) => {
  const serialNumber = req.body.serialNumber;
  const registerDate = new Date(req.body.registerDate);
  const building = req.body.building;
  const receivedDate = new Date(req.body.receivedDate);
  const productName = req.body.productName;
  const quantity = Number(req.body.quantity);
  const pics = req.body.pics || {};
  const isPackage = req.body.isPackage;

  try {
    if (Object.keys(pics).length < 6) {
      const response = await pool.query(
        `INSERT INTO asset(serial_number, building, received_date, product_name, quantity, is_package, register_date,pic1, pic2, pic3, pic4, pic5)
        VALUES ($1, $2, $3, $4, $5, $6, $7,$8, $9, $10, $11, $12) RETURNING asset_id`,
        [
          serialNumber,
          building,
          registerDate,
          productName,
          quantity,
          isPackage,
          receivedDate,
          pics.pic1,
          pics.pic2,
          pics.pic3,
          pics.pic4,
          pics.pic5,
        ]
      );
      const assetId = Number(response.rows[0].asset_id);

      await pool.query(
        `INSERT INTO sub_component_asset(asset_id, serial_number, asset_name)
          VALUES ($1, $2, $3)`,
        [assetId, serialNumber, productName]
      );

      return res.status(200).json({
        message: "Asset created successfully",
      });
    } else {
      return res.json({
        message: "Image more than 5",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

//Update a asset and sub-component asset
assetRouter.put(`/update`, async (req, res) => {
  const assetId = Number(req.body.assetId);
  const serialNumber = req.body.serialNumber;
  const registerDate = new Date(req.body.registerDate);
  const building = req.body.building;
  const receivedDate = new Date(req.body.receivedDate);
  const productName = req.body.productName;
  const quantity = Number(req.body.quantity);
  const pics = req.body.pics || {};
  const isPackage = req.body.isPackage;

  try {
    if (Object.keys(pics).length < 6) {
      await pool.query(
        `UPDATE asset SET serial_number=$1, building=$2, received_date=$3, product_name=$4, quantity=$5, is_package=$6, register_date=$7, pic1=$8, pic2=$9, pic3=$10, pic4=$11, pic5=$12
        WHERE asset_id=$13;`,
        [
          serialNumber,
          building,
          registerDate,
          productName,
          quantity,
          isPackage,
          receivedDate,
          pics.pic1,
          pics.pic2,
          pics.pic3,
          pics.pic4,
          pics.pic5,
          assetId,
        ]
      );
      await pool.query(
        `UPDATE sub_component_asset SET serial_number=$1, asset_name=$2
        WHERE asset_id=$3;`,
        [serialNumber, productName, assetId]
      );
      return res.status(200).json({
        message: "Asset updated successfully",
      });
    } else {
      return res.json({
        message: "Image more than 5",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

//Delete a asset and sub-component asset
assetRouter.delete(`/delete`, async (req, res) => {
  const assetId = Number(req.body.assetId);
  try {
    await pool.query(`DELETE FROM asset WHERE asset_id=$1`, [assetId]);
    return res.status(200).json({
      message: "Asset deleted successfully",
    });
  } catch (error) {
    console.log(error);
  }
});

export default assetRouter;
