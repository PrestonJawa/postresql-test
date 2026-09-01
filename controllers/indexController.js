exports.homeGet = (req, res) => {
    console.log("usernames will be logged here - wip")
}

exports.newGet = (req, res) => {
    const user = 'tomtom'
    res.render('new', {user: user})
}

exports.newPost = (req, res) => {
    console.log("username to be saved: ", req.body.username)
}