import jwt from 'jsonwebtoken';
import config from "../JWT/config";


export default function (roles: string | any[]) {


    return function (req: any, res: any, next: any) {
        if (req.method === "OPTIONS") {
            next()
        }

        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(403).json({message: "Користувач не ввійшов у систему"})
            }
            const decodedData: any = jwt.verify(token, config.secret);

            let hasRole = roles.includes(decodedData.role);
            
            if (!hasRole) {
                return res.status(403).json({message: "У вас немає доступу."})
            }
            next();
        } catch (err) {
            console.log(err)
            return res.status(403).json({message: "Користувач не ввійшов у систему"})
        }
    }
};
