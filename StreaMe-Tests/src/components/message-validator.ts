export class MessageValidator {
    
    private username: string | null = null;
    private message: string | null = null;

    public searchUser(username: string){
        this.username = username
        if (this.username == "") {
            return false;
        }
        else true
    }

    public userProfile(username: string){
        this.username = username;
        return this.username;
    }

    public userChat(){
        return;
    }

    public sendChat(message: string){
        this.message = message
        return this.message;
    }

    public userChats(){
        let messages: string[] = [];
        messages.push('message 1')
        messages.push("message 2")
        messages.push("message 3")
        console.log(messages)
        
    }
   
}