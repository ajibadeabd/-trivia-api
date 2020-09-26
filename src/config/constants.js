const dotEnv = require('dotenv')
const dotEnvFound = dotEnv.config();

if(!dotEnvFound) throw new Error("Could not find dotEnv file")

module.exports = {
    port: process.env.PORT,
    localdatabaseURI :process.env.localDATABASE_URI,
    atlasdatabaseURI :process.env.atlasDATABASE_URI,
    JwtStrategy: process.env.jwtSecret, 
    refreshToken_expiresIn: process.env.refreshToken_expiresIn,
    accessTokenexpires_expiresIn: process.env.accessTokenexpires_expiresIn,
    
}