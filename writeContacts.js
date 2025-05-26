const fs = require('fs/promises');
const { PATH_DB } = require('../constants/contacts');

async function writeContacts(data) {
  await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2));
}

module.exports = { writeContacts };
