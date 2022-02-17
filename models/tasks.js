import db from '../db/connection.js';

export async function getShortTasks() {
  const result = await db.query(`SELECT * FROM short;`);
  return result.rows;
}
export async function getMediumTasks() {
  const result = await db.query(`SELECT * FROM medium;`);
  return result.rows;
}
export async function getLongTasks() {
  const result = await db.query(`SELECT * FROM long;`);
  return result.rows;
}
