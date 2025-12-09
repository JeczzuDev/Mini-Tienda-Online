# Security Considerations

## Firebase Configuration

⚠️ **IMPORTANT**: The Firebase API keys and configuration are currently exposed in the client-side code (`Recursos/js/Firebase.js`).

### Current State
While Firebase API keys are safe to include in client-side code according to [Firebase documentation](https://firebase.google.com/docs/projects/api-keys), they should be protected with proper security rules.

### Security Best Practices Implemented

1. **Firebase Security Rules**: Ensure your Firebase Realtime Database and Storage have proper security rules configured in the Firebase Console to restrict unauthorized access.

2. **Authentication**: The application uses Firebase Authentication to control access to the inventory management features.

3. **Input Validation**: All user inputs are validated and sanitized to prevent XSS attacks.

4. **Content Security Policy**: CSP headers are implemented to prevent injection attacks.

### Recommended Additional Security Measures

1. **Firebase Security Rules**: Configure strict read/write rules in Firebase Console:
   ```json
   {
     "rules": {
       "Products": {
         ".read": true,
         ".write": "auth != null"
       },
       "Purchases": {
         ".read": "auth != null",
         ".write": "auth != null"
       }
     }
   }
   ```

2. **App Check**: Consider implementing Firebase App Check to protect your backend resources from abuse.

3. **Rate Limiting**: Implement rate limiting for API calls to prevent abuse.

4. **Domain Restrictions**: In Firebase Console, restrict your API key to your production domain(s).

## Reporting Security Issues

If you discover a security vulnerability, please report it by creating a private security advisory in the repository.
