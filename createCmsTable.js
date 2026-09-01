import pg from 'pg';

const connectionString = "postgresql://postgres:Don@db123@123@db.gytimeacqrjafacmwtyd.supabase.co:5432/postgres";

const client = new pg.Client({
  connectionString,
});

const createTable = async () => {
  try {
    await client.connect();
    
    // Create the cms_settings table
    await client.query(`
      CREATE TABLE IF NOT EXISTS cms_settings (
        key VARCHAR(255) PRIMARY KEY,
        value JSONB NOT NULL
      );
    `);
    
    console.log("Successfully created cms_settings table!");
    
    // Check if it exists
    const { rows } = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' AND table_name = 'cms_settings'
    `);
    
    if (rows.length > 0) {
      console.log("Verification: Table 'cms_settings' exists in public schema.");
    }

  } catch (err) {
    console.error("Error creating table:", err);
  } finally {
    await client.end();
  }
};

createTable();
