import jwt from "jsonwebtoken";
import config from "../JWT/config";

class TokenService {
    tokenDAO: any;
    constructor(tokenDAO: any) {
        this.tokenDAO = tokenDAO;
    }

    generateAccessToken(id: string, role: string) {
        const payload = {
            id,
            role
        };
        return jwt.sign(payload, config.secret, { expiresIn: "30m" });
    }
    generateRefreshToken() {
        const payload = {};
        return jwt.sign(payload, config.secret, { expiresIn: "30m" });
    }
    saveRefreshToken(teacher_id: string, refreshToken: string) {
        return this.tokenDAO.createRefreshToken(teacher_id, refreshToken);
    }

    updateRefreshToken(teacher_id: string, refreshToken: string) {
        return this.tokenDAO.updateRefreshToken(teacher_id, refreshToken);
    }
    checkToken(refreshToken: string) {
        const currentDate = Math.floor(Date.now() / 1000);
        const decodedRefresh: any = jwt.decode(refreshToken);

        return decodedRefresh.exp > currentDate;
    }
}
export { TokenService };
