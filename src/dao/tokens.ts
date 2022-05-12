import { Tokens } from "../db/models/tokens";

class TokenDAO {
    createRefreshToken(teacher_id: string, refreshToken: string) {
        return new Tokens({
            teacher_id,
            refreshToken,
        }).save();
    }
    async updateRefreshToken(teacher_id: string, refreshToken: string) {
        const result = await Tokens.deleteMany({ teacher_id, refreshToken }).exec();
        return result.deletedCount;
    }
}

const tokenDAO = new TokenDAO();

export { tokenDAO };
