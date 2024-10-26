# Project Setup Guide

Welcome to this astro boilerplate setup guide! Follow the steps below to configure your environment and get started.

## 1. Environment Variables

Create a `.env` file in the root directory of your project and add the following environment variables. Replace the placeholder values with your actual Firebase configuration details.

You can find these values in your Firebase project settings.

Firebase link: https://console.firebase.google.com/

```plaintext
FIREBASE_PRIVATE_KEY_ID=your-private-key-id
FIREBASE_PRIVATE_KEY=your-private-key
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-client-email
FIREBASE_CLIENT_ID=your-client-id
FIREBASE_AUTH_URI=your-auth-uri
FIREBASE_TOKEN_URI=your-token-uri
FIREBASE_AUTH_CERT_URL=your-auth-cert-url
FIREBASE_CLIENT_CERT_URL=your-client-cert-url
```

## 2. Update Configuration Files

Configure the following files with your Firebase project details:

- `.firebaserc`
  The following file will be used to deploy the project to Firebase Hosting:
- `.github/workflows/firebase-hosting-merge.yml`
- `src/firebase/client.ts`
- Don't forget to change your favicon!

## 3. Firebase Configuration

Ensure that your Firebase project is properly configured. You can find the necessary details in your Firebase console under Project Settings.
Firebase link: https://console.firebase.google.com/

## 4. Running the Project

After setting up the environment variables and updating the configuration files, you can run the project using the following commands:

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

## 5. Deployment

To deploy the project to Firebase Hosting, use the following command:

```bash
firebase deploy
```

## Additional Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Astro Documentation](https://docs.astro.build/)

---

Happy coding! 🚀
