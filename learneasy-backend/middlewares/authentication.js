function authenticate(model){
    return function(req, res, next){
        model.findById(req.params.id)
        .then(
            function (student){
                if(student)
                {
                    next(); 
                }
                else{
                    res.json('User not auth'); 
                }
            } 
        ) 
        .catch(err => res.status(400).json('Error: ' + err));
    }
} 
 
module.exports = {
    authenticate
}  