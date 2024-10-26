# Project Setup Guide

## Description

This project is a boilerplate setup that includes Astro, TailwindCSS, Firebase, React, and several other tools to help you get started quickly. It features a basic login view with login logic, Toastify for alerts, middleware to handle errors within the login process, and checks if the user is authenticated. Additionally, it uses Astro Node for creating endpoints, making it a comprehensive starting point for your web application.

![Astro](https://img.shields.io/badge/Astro-333333?style=for-the-badge&logo=astro&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Lint](https://img.shields.io/badge/Lint-E34F26?style=for-the-badge&logo=eslint&logoColor=white)
![Toastify](https://img.shields.io/badge/Toastify-FF6F61?style=for-the-badge&logo=toastify&logoColor=white)

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
