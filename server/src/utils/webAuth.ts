import auth0 from 'auth0-js'

const webAuth = new auth0.WebAuth({
    domain: `${process.env.AUTH0_DOMAIN}`,
    clientID: `${process.env.AUTH0_CLIENT_ID}`
})

export default webAuth