import { 
    Account, 
    Avatars,
    Databases,
    Client as AppwriteClient,
 } from "appwrite";

const appwriteClient = new AppwriteClient();

appwriteClient
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "");

const appwriteAccount = new Account(appwriteClient);

const appwriteAvatar = new Avatars(appwriteClient);

const database = new Databases(appwriteClient)

export { ID } from "appwrite" 
export {
    appwriteAccount,
    appwriteClient,
    appwriteAvatar,
    database,
}