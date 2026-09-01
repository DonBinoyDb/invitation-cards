import pg from 'pg';

const connectionString = "postgresql://postgres:Don@db123@123@db.gytimeacqrjafacmwtyd.supabase.co:5432/postgres";

const client = new pg.Client({
  connectionString,
});

const fixRLS = async () => {
  try {
    await client.connect();
    
    // Disable RLS for cms_settings
    await client.query(`
      ALTER TABLE cms_settings DISABLE ROW LEVEL SECURITY;
    `);
    
    console.log("Successfully disabled RLS for cms_settings table!");

  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.end();
  }
};

fixRLS();
