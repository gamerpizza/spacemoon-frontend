import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

export default NextAuth({
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID ?? "",
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET ?? "",
      authorization: process.env.KEYCLOAK_AUTHORIZATION ?? "",
      issuer: process.env.KEYCLOAK_ISSUER ?? "",
      wellKnown: process.env.KEYCLOAK_WELLKNOWN ?? "",
    }),
  ],
  callbacks: {
    jwt: async ({ account, token }) => {
      return { account, token };
    },
    session: (session: any) => {
      return session;
    },
  },
});
