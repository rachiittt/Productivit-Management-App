import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pnsoiimzznhaejdobisk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuc29paW16em5oYWVqZG9iaXNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzNDg3NTIsImV4cCI6MjA2ODkyNDc1Mn0.v87xrZBgO17CBWth9u8gAqs-RvQep0Pxij6-iXQ-0CE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
