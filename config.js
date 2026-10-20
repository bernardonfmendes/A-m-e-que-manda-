/* Configuração da ligação ao Supabase. A chave "anon" é pública por desenho:
   a segurança está nas regras (RLS) da base de dados, definidas em supabase-schema.sql. */
window.BC_CONFIG = {
  SUPABASE_URL: 'COLOCA_AQUI_O_URL_DO_PROJETO',
  SUPABASE_ANON_KEY: 'COLOCA_AQUI_A_CHAVE_ANON'
};
