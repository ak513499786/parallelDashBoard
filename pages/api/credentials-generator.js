import pool from "./pool";

function generateRandomString(length, characters) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function generateUsername(length = 8) {
  return generateRandomString(length, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");
}

function generatePassword(length = 12) {
  return generateRandomString(length, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?");
}

async function generateUniqueCredentials() {
  let unique = false;
  let username, password;

  while (!unique) {
    username = generateUsername();
    password = generatePassword();

    const [results] = await pool.query(
      "SELECT COUNT(*) as count FROM userinfo WHERE username = ? OR password = ?",
      [username, password]
    );

    unique = results[0].count === 0;
  }

  return { username, password };
}

async function insertDataIntoTable(req, res) {
  try {
    const { phonenumber } = req.body;

    if (!phonenumber) {
      return res.status(400).send("Phone number is required");
    }

    const { username, password } = await generateUniqueCredentials();

    const query = "UPDATE userinfo SET username = ?, password = ? WHERE phonenumber = ?";
    const [results] = await pool.query(query, [username, password, phonenumber]);

    if (results.affectedRows === 0) {
      return res.status(404).send("Phone number not found");
    }

    console.log("Updated rows:", results.affectedRows);
    res.status(200).send("User credentials updated successfully");
  } catch (err) {
    console.error("Error updating user credentials:", err);
    res.status(500).send("An internal server error occurred");
  }
}

export default insertDataIntoTable;
