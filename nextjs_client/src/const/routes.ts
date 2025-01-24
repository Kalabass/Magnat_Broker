export const ROUTES = {
  HOME: '/',
  PROFILE: '/profile',
  AUTH: '/auth',
  CONTRACTS: {
    BASE: '/contracts',
    VIEW: '/contracts/:id',
    EDIT: '/contracts/:id/edit',
    NEW: '/contracts/new',
  },
} as const;
