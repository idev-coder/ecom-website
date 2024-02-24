import jwt from 'jsonwebtoken';

export default async function signAndSaveTokens({ username, password, role }: any) {
    const ACCESS_TOKEN_SECRET_KEY: any = process.env.ACCESS_TOKEN_SECRET_KEY;
    const ACCESS_TOKEN_EXPIRES_IN: any = process.env.ACCESS_TOKEN_EXPIRES_IN;
    const REFRESH_TOKEN_SECRET_KEY: any = process.env.REFRESH_TOKEN_SECRET_KEY;
    const REFRESH_TOKEN_EXPIRES_IN: any = process.env.REFRESH_TOKEN_EXPIRES_IN
    const accessToken = jwt.sign(
        { username: username, password: password, role: role ? role : "user" },
        ACCESS_TOKEN_SECRET_KEY,
        { expiresIn: ACCESS_TOKEN_EXPIRES_IN }
    );
    const refreshToken = jwt.sign(
        { username: username, password: password, role: role ? role : "user" },
        REFRESH_TOKEN_SECRET_KEY,
        { expiresIn: REFRESH_TOKEN_EXPIRES_IN }
    );


    return { accessToken, refreshToken };
}