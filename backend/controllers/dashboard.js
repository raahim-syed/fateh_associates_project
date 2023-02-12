module.exports = {
    loadDashboard: (req, res) => {
        res.status(200).json({page: "Dashboard"})
    }
}