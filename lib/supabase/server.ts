import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import type { SupabaseClient } from '@supabase/supabase-js';

// These environment variables are already set in your project
const supabaseUrl = 'https://qpkaklmbiwitlroykjim.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwa2FrbG1iaXdpdGxyb3lramltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4MTM4NjIsImV4cCI6MjA1MjM4OTg2Mn0.4y_ogmlsnMMXCaISQeVo-oS6zDJnyAVEeAo6p7Ms97U";

export function createServerClient(): SupabaseClient {
  return createSupabaseClient(supabaseUrl, supabaseKey, {
    global: {
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      },
    },
  });
}

export const createClient = (): SupabaseClient => {
  return createServerClient();
};
