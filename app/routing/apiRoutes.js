module.exports = function(app){
app.post("/api/friends", function(req, res){
    var myfriend = req.body;
    console.log(req.body);
    res.json(req.body);
})
}