import { Account, Client as AppwriteClient } from "appwrite";


export const appwriteClient = new AppwriteClient();

appwriteClient
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('66c2a77400168af6da11');

export const appwriteAccount = new Account(appwriteClient);

export { ID } from "appwrite" 