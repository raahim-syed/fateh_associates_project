const crypto = require("crypto");

const genSecret = () => {   
    let secret;

    if(process.env.NODE_ENV !== "production") return secret = "raahim";
    

    // Generate a random value
    const random_value = crypto.randomBytes(32).toString("hex");

    // Apply SHA-256 hash to the value
    const hash = crypto.createHash("sha256").update(random_value).digest("hex");

    //Assigning that value to the secret
    secret = hash;

    return secret;
}
module.exports = {
    SECRET: genSecret()
}