// Environment configuration - NO fallbacks for security
export const config = {
  gateCode: process.env.NEXT_PUBLIC_GATE_CODE || '',
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
} as const;

// Validate required environment variables
export function validateConfig() {
  const missingVars: string[] = [];
  
  if (!process.env.NEXT_PUBLIC_GATE_CODE) {
    missingVars.push('NEXT_PUBLIC_GATE_CODE');
  }
  
  if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    missingVars.push('NEXT_PUBLIC_GA_MEASUREMENT_ID');
  }
  
  if (missingVars.length > 0) {
    console.warn(`Missing environment variables: ${missingVars.join(', ')}. Please set them in your environment.`);
  }
  
  return config;
} 