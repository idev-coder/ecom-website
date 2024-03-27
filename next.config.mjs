/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@mui/x-charts"],
  env: {
    ACCESS_TOKEN_SECRET_KEY: "devtest",
    REFRESH_TOKEN_SECRET_KEY: "devtest",
    ACCESS_TOKEN_EXPIRES_IN: "1m",
    REFRESH_TOKEN_EXPIRES_IN: "365d",
    MONGODB_HOST: "ecomwebsite.9pukske.mongodb.net",
    DATABASE_NAME: "Ecomwebsite",

    APIKEY: "AIzaSyAakL5EbkpqQwK4ix_piXp-7yzeXgq3mJs",
    AUTHDOMAIN: "ecommerce-website-2e610.firebaseapp.com",
    PROJECTID: "ecommerce-website-2e610",
    STORAGEBUCKET: "ecommerce-website-2e610.appspot.com",
    MESSAGINGSENDERID: "991644235748",
    APPID: "1:991644235748:web:30d1a9ff84374921ccf9f1",
    MEASUREMENTID: "G-2G3RPX0E9W",
  },
};

export default nextConfig;
