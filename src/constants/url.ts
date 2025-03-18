export const INTERNAL_API_BASE = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}/api/`
  : 'http://localhost:3000/api/';
export const IMG_URL_BASE =
  'https://ddragon.leagueoflegends.com/cdn/15.5.1/img/';
