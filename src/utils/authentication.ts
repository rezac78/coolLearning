import jwt from "jsonwebtoken";

export const decodeToken = (token) => {
    try {
        return jwt(token);
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
};

