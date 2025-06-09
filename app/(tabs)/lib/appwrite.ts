import { Client } from 'react-native-appwrite';

const APPWRITE_PROJECT_ID = "6846ad2f0012c98fb518";

const client = new Client().setEndpoint('https://fra.cloud.appwrite.io/v1').setProject('6846ad2f0012c98fb518').setPlatform('myhabittracker.com')