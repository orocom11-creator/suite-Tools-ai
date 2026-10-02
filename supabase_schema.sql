-- ============================================================
-- AI DAN SOLUTIONS — Schema de Autenticación y Autorización
-- Ejecutar en Supabase SQL Editor (Dashboard > SQL Editor > New Query)
-- ============================================================

-- 1. Crear tabla de clientes
CREATE TABLE IF NOT EXISTS public.clientes (
    email           VARCHAR(255) PRIMARY KEY,
    telefono        VARCHAR(50),
    origen          VARCHAR(50)   DEFAULT 'bundle_google_pro',
    super_vip       BOOLEAN       DEFAULT true,
    premium         BOOLEAN       DEFAULT false,
    estado          VARCHAR(20)   DEFAULT 'activo',
    fecha_activacion TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    codigo_operacion VARCHAR(100)
);

-- 2. Índice para consultas frecuentes por estado
CREATE INDEX IF NOT EXISTS idx_clientes_estado ON public.clientes(estado);

-- 3. Activar Row Level Security
ALTER TABLE public.clientes ENABLE ROW LEVEL SECURITY;

-- 4. POLÍTICA DE LECTURA: el usuario autenticado SOLO puede leer su propia fila
-- La función auth.jwt() extrae el claim 'email' del JWT emitido por Supabase Auth
-- (que a su vez fue validado criptográficamente contra Google OAuth)
CREATE POLICY "clientes_read_own"
    ON public.clientes
    FOR SELECT
    TO authenticated
    USING (
        LOWER(TRIM(email)) = LOWER(TRIM(auth.jwt() ->> 'email'))
    );

-- 5. BLOQUEAR toda escritura desde el cliente
-- Solo service_role (backend / Supabase Dashboard) puede INSERT/UPDATE/DELETE
-- Esto impide que un usuario modifique su campo premium/super_vip desde el navegador

CREATE POLICY "clientes_deny_insert"
    ON public.clientes
    FOR INSERT
    TO authenticated, anon
    WITH CHECK (false);

CREATE POLICY "clientes_deny_update"
    ON public.clientes
    FOR UPDATE
    TO authenticated, anon
    USING (false)
    WITH CHECK (false);

CREATE POLICY "clientes_deny_delete"
    ON public.clientes
    FOR DELETE
    TO authenticated, anon
    USING (false);

-- 6. Denegar acceso anónimo a lectura también
CREATE POLICY "clientes_deny_anon_read"
    ON public.clientes
    FOR SELECT
    TO anon
    USING (false);

-- ============================================================
-- DATOS DE PRUEBA (OPCIONAL — eliminar en producción)
-- Añade tu propio correo para probar
-- ============================================================
/*
INSERT INTO public.clientes (email, telefono, super_vip, premium, estado)
VALUES
    ('tu-correo@gmail.com', '+51999999999', true, true, 'activo'),
    ('cliente-svip@gmail.com', '+51888888888', true, false, 'activo'),
    ('cliente-inactivo@gmail.com', '+51777777777', true, false, 'inactivo');
*/

-- ============================================================
-- VERIFICACIÓN: Ejecuta esto para confirmar que RLS está activo
-- ============================================================
-- SELECT tablename, rowsecurity FROM pg_tables WHERE tablename = 'clientes';
-- SELECT * FROM pg_policies WHERE tablename = 'clientes';
