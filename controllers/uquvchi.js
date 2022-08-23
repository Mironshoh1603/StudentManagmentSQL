const pool = require("../config/database");
const getAll = async (req, res) => {
  try {
    const data = await pool.query(
      "SELECT uquvchi.id,uquvchi.name,uquvchi.jinsi,uquvchi.tugulgan_kuni,uquvchi.telefon,sinf.name as sinf_name FROM uquvchi LEFT JOIN sinf ON uquvchi.sinf_id=sinf.id;"
    );
    res.status(200).json({
      status: "Succes",
      data: data.rows,
    });
  } catch (err) {
    res.status(404).json({
      status: "Error",
      message: err.message,
    });
  }
};
const add = async (req, res) => {
  try {
    const data = await pool.query(
      `INSERT INTO uquvchi(name,jinsi,tugulgan_kuni,telefon,sinf_id) VALUES($1,$2,$3,$4,$5) RETURNING *`,
      [
        req.body.name,
        req.body.jinsi,
        req.body.tugulgan_kuni,
        req.body.telefon,
        req.body.sinf_id,
      ]
    );
    res.status(201).json({
      status: "Succes",
      data: data.rows,
    });
  } catch (err) {
    res.status(404).json({
      status: "Error",
      message: err.message,
    });
  }
};
const getOne = async (req, res) => {
  try {
    const data = await pool.query(`SELECT * FROM uquvchi where id=$1`, [
      req.params.id,
    ]);
    res.status(201).json({
      status: "Succes",
      data: data.rows,
    });
  } catch (err) {
    res.status(404).json({
      status: "Error",
      message: err.message,
    });
  }
};
const updateOne = async (req, res) => {
  try {
    const oldData = await pool.query("SELECT * from uquvchi where id=$1", [
      req.params.id,
    ]);
    console.log(oldData.rows[0]);
    const data = await pool.query(
      `Update uquvchi set name=$1,jinsi=$2,tugulgan_kuni=$3,telefon=$4,sinf_id=$5 where id=$6 RETURNING *`,
      [
        req.body.name || oldData.rows[0].name,
        req.body.jinsi || oldData.rows[0].jinsi,
        req.body.tugulgan_kuni || oldData.rows[0].tugulgan_kuni,
        req.body.telefon || oldData.rows[0].telefon,
        req.body.sinf_id || oldData.rows[0].sinf_id,
        req.params.id,
      ]
    );
    res.status(201).json({
      status: "Succes",
      data: data.rows,
    });
  } catch (err) {
    res.status(404).json({
      status: "Error",
      message: err.message,
    });
  }
};
const deleteOne = async (req, res) => {
  try {
    const data = await pool.query(`DELETE FROM uquvchi  where id=$1 `, [
      req.params.id,
    ]);
    res.status(204).json({
      status: "Succes",
      data: data.rows,
    });
  } catch (err) {
    res.status(404).json({
      status: "Error",
      message: err.message,
    });
  }
};
module.exports = { getAll, deleteOne, add, getOne, updateOne };
