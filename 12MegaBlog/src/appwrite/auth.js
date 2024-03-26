import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

//Quality code 
export class AuthService{
   client = new Client()
   account;

   constructor(){
      this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectID);

      this.account = new Account(this.client)
   }
   
   async createAccount({email, password, name}){
      try {
        const userAccount = await this.account.create(ID.unique(), email, password, name)
            if(userAccount){
               // return userAccount call another methodl og in vala
               return this.login({email, password})
            }
            else{
               return userAccount
            }
      } catch (error) {
         throw error
      }
   }


   async login({email, password}){
     return await this.account.createSession(email, password)
   }


   async getCurrentUser(){
      try {
        return await this.account.get()
      } catch (error) {
         console.log('Appwrite serive :: getCurrentUser :: error' , error);
      }
      return null
   }


   async logout(){
      try {
         await this.account.deleteSessions()
      } catch (error) {
         console.log('Appwrite serive :: getCurrentUser :: error' , error);
      }
   }
}

const authService = new AuthService()

export default authService
//Here authService is a object as class AuthService will return an object aur isko access karte time object se access karna padega uske liye aur vaise ye better approach hai  
// thus we created authService & export it so when accessed just need to give property inside the object instead creating the object