import pool from "./pool";

const insertDataIntoTable = () => async (req, res) => {
  try {
    const { phonenumber } = req.body;
    const data = {
      phonenumber,
    };

    pool.query("INSERT INTO userinfo set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err); 
      } else {
        console.log(rows);
        res.send("added");
      }
    });
    pool.query("INSERT INTO experience set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
    pool.query("INSERT INTO user_profile set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};

export default insertDataIntoTable();
