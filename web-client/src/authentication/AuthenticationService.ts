import axios from 'axios';

export const AuthenticationService = {

    authenticate: async (user: string, password: string): Promise<boolean> => {
        return await axios.post("/auth").then(() => true).catch(_ => true);
    }
}