import { Pool } from "pg";

export class Database {
  connect(): Pool {
    return new Pool({
      max: 20,
      connectionString: "postgres://user:password@hostname:port/dbname",
      idleTimeoutMillis: 30000,
    });
  }
}
