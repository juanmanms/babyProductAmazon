export const analyticsConfig = {
  googleTagManager: {
    id: import.meta.env.GTM_ID, // Reemplaza con tu ID de GTM
    enabled: import.meta.env.PROD, // Solo habilitado en producción
  },
};
