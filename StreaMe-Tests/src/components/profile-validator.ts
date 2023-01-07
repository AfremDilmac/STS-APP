export class ProfileValidator {
    
    private username: string | null = null;
    private message: string | null = null;
    private gender: string | null = null;
    private image: string | null = null;
    private preferences: number | null = null;

    public UpdateImage(image: string){
        this.image = image;
    }

    public ShowProfile(username: string){
        this.username = username;
    }

    public ChangeUsername(username: string){
        this.username = username;
    }
    /*
    0 = only friends
    1 = same studies
    2 = everybody
    */ 
    public UpdatePreferences(preferences: number){
        this.preferences = preferences;
    }

    public UpdateGender(gender: string){
        this.gender = gender;
    }

    
   
}