import { inject } from '@vercel/analytics';

// Initialize Vercel Web Analytics
// This will automatically detect the environment (production/development)
// and only send analytics events in production when deployed to Vercel
inject();
