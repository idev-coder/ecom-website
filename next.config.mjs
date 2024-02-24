/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    ACCESS_TOKEN_SECRET_KEY:"devtest",
    REFRESH_TOKEN_SECRET_KEY:"devtest",
    ACCESS_TOKEN_EXPIRES_IN:"365d",
    REFRESH_TOKEN_EXPIRES_IN:"365d",
    MONGODB_HOST:"",
    DATABASE_NAME:""
  }
};

export default nextConfig;
