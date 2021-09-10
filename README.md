# Next Firebase App

A blank Next.js application hooked up with Firebase, allowing authentication with Twitter accounts.

## Authentication

A `users` database exists, with documents named with a user's `uid`. The documents have the fields `uid` and `screenName`, both unchanging in Twitter.

In the authentication flow, users will first query the database to see if a user with the same `uid` exists or not (read). If the user already exists, it signs up by storing the `uid` and `screenName` as a React context, globally accessible throughout the application. If the user does not already exist, the user will add their `uid` and `screenName` to the Users database (write).

Firestore rules:
1. Users can only read if they are registering or if they have already registered.
2. Users can only write to the database when registering

## Login Methods

The `User` component contains the `SignIn` and `SignOut` components, accessing the User Context to decide which to display when logged in or not logged in.

The `SignIn` component has the `login` function that accepts a given provider, such as Twitter, and any other providers that can easily be added later.
