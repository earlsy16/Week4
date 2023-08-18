export class User {
    username:string;
    password:string;
    email:string;
    birthdate:string;
    valid:boolean;
    age:number;

    constructor(username:string='',password:string='',email:string='',birthdate:string='',age:number=0){
        this.username = username;
        this.password = password;
        this.email = email;
        this.birthdate = birthdate;
        this.valid = true;
        this.age = age;
    }
}