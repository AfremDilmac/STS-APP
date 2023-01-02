export class PasswordValidator {
    
    private password: string | null = null;
    private email: string | null = null;

    public setPassword(password: string) {
        this.password = password;
    }

    public validatePassword(claimedPassword: string, claimedEmail: string) {
        return this.password === claimedPassword && this.email === claimedEmail;
    }

    setEmail(email: string) {
        this.email = email;
    }

    createAccount(email: string, password: string) {
        //create account

        this.email = email;
        this.password = password;

        //check if email and password are not null
        if(this.email != null && this.password != null){

        return true;

        }else{
            return false;
        }
        
    }
}