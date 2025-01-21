// @ts-nocheck
// import NextAuth from "next-auth";
// import GitHub from "next-auth/providers/github";
// import { client } from "./sanity/lib/client";
// import { AUTHOR_BY_GITHUB_ID_QUERY } from "./sanity/lib/queries";
// import { writeClient } from "./sanity/lib/write-client";


// export const { handlers, auth, signIn, signOut } = NextAuth({
//   providers: [GitHub],
//   callback: {
//     // First Callback
//     async signIn({
//       user: { name, email, image}, 
//       profile: { id, login, bio}
//     }) {
//       const existingUser = await client.withConfig({useCdn:false}).fetch(AUTHOR_BY_GITHUB_ID_QUERY,{ 
//         id,
//       });

//       if(!existingUser){
//         await writeClient.create({
//           _type: "author",
//           id,
//           name,
//           username: login,
//           email,
//           image,
//           bio: bio || "",
//         });
//       }

//       return true;
//     },


//     // Second Callback
//     async jwt({token, account, profile}){
//       if(account && profile){
//         const user = await client.withConfig({useCdn:false}).fetch(AUTHOR_BY_GITHUB_ID_QUERY,{
//           id: profile?.id,
//         });
//         token.id = user?._id;
//       }
//       return token;
//     },

//     // Third Callback
//     async session({session, token}){
//       Object.assign(session,{ id: token.id});
//       return session;
//     }


//   },
// });

import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";
import { AUTHOR_BY_GITHUB_ID_QUERY } from "@/sanity/lib/queries";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    // Callback for sign-in
    async signIn({ user: { name, email, image }, profile }) {
      // console.log("GitHub Profile:", profile);

      const { id, login, bio } = profile; // Extract GitHub user data
      // console.log("GitHub User ID:", id);

      // Check if the user exists in Sanity
      const existingUser = await client
        .withConfig({ useCdn: false })
        .fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
          id,
        });

      // If the user doesn't exist, create a new entry
      if (!existingUser) {
        await writeClient.create({
          _type: "author",
          id, // GitHub user ID
          name,
          username: login,
          email,
          image,
          bio: bio || "",
        });
      }

      return true;
    },

    // Callback for JWT
    async jwt({ token, account, profile }) {
      if (account && profile) {
        const githubId = profile.id || token.sub; // Use GitHub user ID

        // Fetch the user from Sanity
        const user = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_BY_GITHUB_ID_QUERY, { id: githubId });

        // Assign Sanity user `_id` to the token
        if (user) {
          token.id = user._id;
        }
      }

      return token;
    },

    // Callback for session
    async session({ session, token }) {
      // console.log("Session Callback: Token", token);

      // Add the Sanity `_id` to the session object
      if (token.id) {
        session.id = token.id;
      }

      // console.log("Session Callback: Session", session);
      return session;
    },
  },
});
