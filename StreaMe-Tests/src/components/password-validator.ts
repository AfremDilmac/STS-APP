export class PasswordValidator {
    private password: string | null = null;
    private username: string | null = null;

    public setPassword(password: string) {
        this.password = password;
    }

    public setUsername(username: string) {
        this.username = username;
    }

    public validatePassword(claimedPassword: string, claimedUsername: string) {
        return this.password === claimedPassword && this.username === claimedUsername;
    }
}