import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://gytimeacqrjafacmwtyd.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5dGltZWFjcXJqYWZhY213dHlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY0MzA3MTgsImV4cCI6MjEwMjAwNjcxOH0.xyYqx_wR8h8_fC7LDcqkPCKBjYw1mQYZRUVanwO84zQ";

const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
  const { data, error } = await supabase.from('cms_settings').select('*');
  console.log("Data:", data);
  console.log("Error:", error);
  
  const { error: upsertErr } = await supabase.from('cms_settings').upsert({ key: 'test', value: '123' });
  console.log("Upsert Error:", upsertErr);
}

test();
