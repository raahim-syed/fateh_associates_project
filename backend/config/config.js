const crypto = require("crypto");

const genSecret = () => {
    console.log("yeet")
    // Generate a random value
    const random_value = crypto.randomBytes(32).toString("hex");

    // Apply SHA-256 hash to the value
    const hash = crypto.createHash("sha256").update(random_value).digest("hex");

    //Assigning that value to the secret
    const secret = hash;

    return secret;
}
module.exports = {
    SECRET: genSecret()
}