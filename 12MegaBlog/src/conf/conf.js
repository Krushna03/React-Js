const conf = {
   appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
   appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
   appwriteDataBaseID: String(import.meta.env.APPWRITE_DATABASE_ID),
   appwriteCollectionID: String(import.meta.env.APPWRITE_COLLECTION_ID),
   appwriteBucketID: String(import.meta.env.APPWRITE_BUCKET_ID),
}
export default conf;