/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@mui/x-charts'],
  env:{
    ACCESS_TOKEN_SECRET_KEY:"devtest",
    REFRESH_TOKEN_SECRET_KEY:"devtest",
    ACCESS_TOKEN_EXPIRES_IN:"1m",
    REFRESH_TOKEN_EXPIRES_IN:"365d",
    MONGODB_HOST:"ecomwebsite.9pukske.mongodb.net",
    DATABASE_NAME:"Ecomwebsite"
  }
};

export default nextConfig;
