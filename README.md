# Steps for google signup using OAuth20
### 1. Clone repository
### 2. Create .env file in root folder with the following key=value
    PORT: localhost port,
    MONGO_URI: "Connection string to Mongodb",
    GOOGLE_CLIENT_SECRET: secret text/characters,
    GOOGLE_CLIENT_ID:  Google Client Id. Create credentials "https://console.developers.google.com/,
    GOOGLE_REDIRECT_URI: domain url for the redirect path after signup (example: "http://localhost:1234"),
    COOKIE_SESSION_SECRET: secret text/characters,
### 3. Signup path  = "domain/auth/google" = GET Request
### 4. After signup google redirects to "/" if successful or "/login" if failed
### 5. Use is-auth middleware to check authenticated user
    
