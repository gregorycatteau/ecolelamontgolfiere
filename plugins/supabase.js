// plugins/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kdniezwsxmxvizkboxjc.supabase.coE'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkbmllendzeG14dml6a2JveGpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA3OTQxOTYsImV4cCI6MTk5NjM3MDE5Nn0.PavDGQL_IW_n8C3lWXQdoGTKZVk2O2471_FxN8x22lI'

export default (_, inject) => {
  const supabase = createClient(supabaseUrl, supabaseKey)
  inject('supabase', supabase)
}
