// File: data/setup/setupDatabase.js

import createUserTable from "./createUserTable.js";
import seedUsers from "./seedUsers.js";

const setupDatabase = async () => {
  await createUserTable();
  await seedUsers();
};

export default setupDatabase;
