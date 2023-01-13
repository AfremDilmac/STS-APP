export class GroupValidator {
    
    private username: string | null = null;
    
    public AddUser(username: string){
        this.username = username;
    }

    public SearchUser(username: string){
        this.username = username;
    }

    public ShowUser(username: string){
        this.username = username;
    }
   
}