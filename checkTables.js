import pg from 'pg';

const connectionString = "postgresql://postgres:Don@db123@123@db.gytimeacqrjafacmwtyd.supabase.co:5432/postgres";

const client = new pg.Client({
  connectionString,
});

const checkDatabase = async () => {
  try {
    await client.connect();
    
    const { rows } = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `);
    console.log("Tables in database:");
    rows.forEach(r => console.log(r.table_name));

  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.end();
  }
};

checkDatabase();
