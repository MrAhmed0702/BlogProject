import conf from '../conf/conf.js'
import { Client, Account, ID } from 'appwrite'

export class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                // use another method
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error
        }
    }

    async login({ email, password }) {
        try {
            const userSession = await this.account.createEmailPasswordSession(email, password)
            if (userSession) {
                return userSession
            }
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            return null;
        }
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.warn("Logout failed or no active session:", error.message);
            return null;
        }
    }

}

const authService = new AuthService()

export default authService