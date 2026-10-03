-- ============================================================
-- AI DAN SOLUTIONS — Asignar Rol Administrador y Permisos RLS
-- Usuario: integracionesacs@gmail.com
-- Ejecutar en Supabase: Dashboard > SQL Editor > New Query > Run
-- ============================================================

-- 1. Asignar rol de "admin" en el sistema de autenticación de Supabase (auth.users)
UPDATE auth.users
SET 
    raw_app_meta_data = COALESCE(raw_app_meta_data, '{}'::jsonb) || '{"role": "admin"}'::jsonb,
    raw_user_meta_data = COALESCE(raw_user_meta_data, '{}'::jsonb) || '{"role": "admin"}'::jsonb
WHERE LOWER(TRIM(email)) = 'integracionesacs@gmail.com';

-- 2. Asegurar que el correo figure como cliente SuperVIP y Premium Activo
INSERT INTO public.clientes (email, super_vip, premium, estado, origen)
VALUES ('integracionesacs@gmail.com', true, true, 'activo', 'ADMIN')
ON CONFLICT (email) DO UPDATE 
SET 
    super_vip = true,
    premium = true,
    estado = 'activo';

-- 3. Eliminar políticas antiguas que bloqueaban inserciones o modificaciones
DROP POLICY IF EXISTS "clientes_deny_insert" ON public.clientes;
DROP POLICY IF EXISTS "clientes_deny_update" ON public.clientes;
DROP POLICY IF EXISTS "clientes_deny_delete" ON public.clientes;
DROP POLICY IF EXISTS "clientes_deny_anon_read" ON public.clientes;
DROP POLICY IF EXISTS "clientes_read_own" ON public.clientes;
DROP POLICY IF EXISTS "clientes_admin_manage" ON public.clientes;
DROP POLICY IF EXISTS "clientes_admin_full_access" ON public.clientes;
DROP POLICY IF EXISTS "clientes_alumnos_read_own" ON public.clientes;

-- 4. POLÍTICA DE ADMINISTRADOR:
-- Otorga permisos totales (SELECT, INSERT, UPDATE, DELETE) a integracionesacs@gmail.com
CREATE POLICY "clientes_admin_full_access"
ON public.clientes
FOR ALL
TO authenticated
USING (
    LOWER(TRIM(auth.jwt() ->> 'email')) = 'integracionesacs@gmail.com'
    OR (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
    OR (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
)
WITH CHECK (
    LOWER(TRIM(auth.jwt() ->> 'email')) = 'integracionesacs@gmail.com'
    OR (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
    OR (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
);

-- 5. POLÍTICA PARA ALUMNOS REGULARES:
-- Los alumnos normales solo pueden consultar su propia membresía
CREATE POLICY "clientes_alumnos_read_own"
ON public.clientes
FOR SELECT
TO authenticated
USING (
    LOWER(TRIM(auth.jwt() ->> 'email')) = 'integracionesacs@gmail.com'
    OR (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
    OR LOWER(TRIM(email)) = LOWER(TRIM(auth.jwt() ->> 'email'))
);

-- ============================================================
-- VERIFICACIÓN: Comprueba que el rol se asignó correctamente
-- ============================================================
SELECT id, email, raw_app_meta_data, raw_user_meta_data 
FROM auth.users 
WHERE LOWER(TRIM(email)) = 'integracionesacs@gmail.com';
