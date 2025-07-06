// index.ts
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

async function testConnection() {
  try {
    const { error } = await supabase.from('submissions').select('*').limit(1);
    if (error) throw error;
    console.log('✅ Conexión con Supabase desde Vercel OK');
  } catch (err) {
    console.error('❌ Error al conectar con Supabase:', err.message || err);
  }
}

testConnection();