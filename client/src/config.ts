// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'kvz6tqunm9'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-2.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-vbycqvu7.us.auth0.com',            // Auth0 domain
  clientId: 'oKB0WzmpW5KBOxChvFz33Uh8jiR2AAWt',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
