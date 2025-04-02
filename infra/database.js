import pg from "pg";

const { Client } = pg;
const client = new Client({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
});

async function query(queryObj) {
  await client.connect();
  const res = await client.query(queryObj);
  await client.end();

  return res;
}

export default {
  query: query,
};
