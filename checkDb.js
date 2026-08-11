import pg from 'pg';

const connectionString = "postgresql://postgres:Don@db123@123@db.gytimeacqrjafacmwtyd.supabase.co:5432/postgres";

const client = new pg.Client({
  connectionString,
});

const checkDatabase = async () => {
  try {
    await client.connect();
    
    const { rows } = await client.query('SELECT COUNT(*) FROM products');
    console.log("Total products in database:", rows[0].count);
    
    const { rows: allProds } = await client.query('SELECT id, title FROM products LIMIT 5');
    console.log("Sample products:", allProds);

  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.end();
  }
};

checkDatabase();
