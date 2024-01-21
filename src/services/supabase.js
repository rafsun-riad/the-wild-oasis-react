import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://gzhmbknagqidrorggpha.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6aG1ia25hZ3FpZHJvcmdncGhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUyNTI1NjMsImV4cCI6MjAyMDgyODU2M30.8IEMPxNhEGOCfE_eyEAal2QTmQzYewLag0YIasEhwIc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
