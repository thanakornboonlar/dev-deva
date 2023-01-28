import * as pg from "pg";
const { Pool } = pg.default;
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  connectionString: `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`,
});

export default pool;
