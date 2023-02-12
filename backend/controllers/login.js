module.exports = {
    getLogin: (req, res) => {
        res.status(200).json({title: "Login page"});
    },
    postLogin: () => {
        //Validation And Verification Goes Here

        //Redirecting To Desired Page
        res.redirect("/dashboard");
    }
}