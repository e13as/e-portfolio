# Environment Variables

This project requires the following environment variables to be set:

## Required Variables

### `NEXT_PUBLIC_GATE_CODE`
The access code for the gate section of the portfolio.
- **Type:** String
- **Example:** `YOUR_GATE_CODE_HERE`

## Optional Variables

### `NEXT_PUBLIC_GA_MEASUREMENT_ID`
Google Analytics 4 Measurement ID for tracking.
- **Type:** String
- **Example:** `G-YOUR_MEASUREMENT_ID_HERE`

## Setup Instructions

### Local Development
1. Create a `.env.local` file in the project root
2. Add your environment variables:
   ```
   NEXT_PUBLIC_GATE_CODE=YOUR_GATE_CODE_HERE
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YOUR_MEASUREMENT_ID_HERE
   ```

### Production (Vercel)
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add the required variables with their values

## Security Notes
- Never commit `.env.local` to version control
- The `.env.local` file is already in `.gitignore`
- Environment variables prefixed with `NEXT_PUBLIC_` are exposed to the client 