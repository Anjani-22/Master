import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://jpflexmtwlgfmkzsshmy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwZmxleG10d2xnZm1renNzaG15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM1OTM2NDUsImV4cCI6MjAxOTE2OTY0NX0.yXWeAuj9-fSC6CjirbufiX4u2RPmS2U6eHU_1h1WcFE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
