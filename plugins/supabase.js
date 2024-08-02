import { createClient } from "@supabase/supabase-js";

export default defineNuxtPlugin((nuxtApp) => {
  const supabaseUrl = "https://aoahujvikhlqfycoifrk.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvYWh1anZpa2hscWZ5Y29pZnJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3ODc2NTcsImV4cCI6MjAzNzM2MzY1N30.nd9LlUEbc2xHk2CDV7_ui47Qn8kAZoOIQOScf3uaf0c";
  const supabase = createClient(supabaseUrl, supabaseKey);

  nuxtApp.provide("supabase", supabase);
});
