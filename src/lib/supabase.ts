import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://oyjdwhcekucccroxdayc.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95amR3aGNla3VjY2Nyb3hkYXljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzMjk1NjYsImV4cCI6MjA5MDkwNTU2Nn0.4mH0ZkeSZBQxSw3etOzfJ941ehmJtQw6HMNyVZcD874";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
