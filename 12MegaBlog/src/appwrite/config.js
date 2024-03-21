import { Client, ID, Databases, Storage, Query  } from "appwrite";
import conf from "../conf/conf";

export class DatabaseService {
       client = new Client();
       databases;
       bucket;   //storage

      constructor(){
         this.client
           .setEndpoint(conf.appwriteUrl)
           .setProject(conf.appwriteProjectID)

         this.databases = new Databases(this.client)
         this.bucket = new Storage(this.client)
      }

      //here slug is a unique Id of a post. We can either use ID.unique()
      async createPost({title, slug, content, featuredImage, status, userId}){
         try {
           return await this.databases.createDocument(
               conf.appwriteDataBaseID, 
               conf.appwriteCollectionID, 
               slug, 
               {
                  title, content, featuredImage, status, userId
               }
              )
         } catch (error) {
            console.log('Appwrite serive :: getCurrentUser :: error' , error);
         }
      }


      async updatePost(slug, {title, content, featuredImage,status}) {
         try {
           return await this.databases.updateDocument(
            conf.appwriteDataBaseID, 
            conf.appwriteCollectionID, 
            slug,
            {
               title, content, featuredImage, status
            }
          )
         } catch (error) {
            console.log('Appwrite serive :: getCurrentUser :: error' , error);        
         }
      }


      async deletePost(slug) {
         try {
            await this.databases.deleteDocument(
               conf.appwriteDataBaseID, 
               conf.appwriteCollectionID, 
               slug
             )
            return true
         } catch (error) {
            console.log('Appwrite serive :: getCurrentUser :: error' , error);  
            return false      
         }
      }


      async getPost(slug) {
         try {
           return await this.databases.getDocument(
            conf.appwriteDataBaseID, 
            conf.appwriteCollectionID, 
            slug
           )
         } catch (error) {
            console.log('Appwrite serive :: getCurrentUser :: error' , error);  
            return false
         }
      }

       //queries is just a variable
      async getPosts(queries = [Query.equal('status','active')]) {
          try {
            return await this.databases.listDocuments(
               conf.appwriteDataBaseID, 
               conf.appwriteProjectID, 
               [queries]
              )
          } catch (error) {
            console.log('Appwrite serive :: getCurrentUser :: error' , error); 
            return false
          }
      }




      // File upload service
      async uploadFile(file){
         try {
            return await this.bucket.createFile(
               conf.appwriteBucketID , ID.unique() , file
            )
         } 
         catch (error) {
            console.log('Appwrite serive :: getCurrentUser :: error' , error); 
            return false
         }
      }


      async deleteFile(fileId) {
         try {
            await this.bucket.deleteFile(
               conf.appwriteBucketID, fileId
             )
            return true
         } 
         catch (error) {
            console.log('Appwrite serive :: getCurrentUser :: error' , error); 
            return false
         }
      }


      getFilePreview(fileId) {
         return this.bucket.getFilePreview(
            conf.appwriteBucketID, fileId
          )
      }
}

const databaseService = new DatabaseService();

export default databaseService