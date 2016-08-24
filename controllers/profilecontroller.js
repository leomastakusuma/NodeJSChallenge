/*Example Menggunakan Controller expres main js ada di app.js*/
var ProfileSchema = require('../models/profile');
module.exports = {
    FindProfiles: function(req, res) {
        ProfileSchema.find(function(err, Profile) {
            if (err)
                res.send(err);
            res.json({
                Message       :'Success',
                StatusCode    : 200,
                Collection    :{
                                ProfileData:Profile
                               }
            });
        });
    },
    deleteProfile :function(req,res){
            ProfileSchema.remove({_id: req.params.id},function(err,profile){
                if(err)
                   res.send(err);
                 res.json({
                     Message       :'Success Delete Profile = ' +req.params.id,
                     StatusCode    : 200,
                     Collection    :{
                                     ProfileData:profile
                                    }
                 });
            });
    },
    FindSomeProfile :function(req,res){
            ProfileSchema.findById(req.params.id,function(err,profile){
                if(err)
                   res.send(err);
                 res.json({
                     Message       :'Profile Detail With ID = ' +req.params.id,
                     StatusCode    : 200,
                     Collection    :{
                                     ProfileData:profile
                                    }
                 });
            });
    },
    saveProfiles: function(req, res) {
        var profile         = new ProfileSchema();      // create a new instance of the Bear model
        profile.name        = req.body.name;
        profile.title       = req.body.title;
        profile.email       = req.body.email;
        profile.phone       = req.body.phone;
        profile.address     = req.body.address;
        profile.company     = req.body.company;

        profile.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'Profile created!',data : profile });
        });
    },
    updateProfile : function(req,res){
      ProfileSchema.findById(req.params.id, function(err,profile){
           if(err)
              res.send(err);
              profile.name        = req.body.name;
              profile.title       = req.body.title;
              profile.email       = req.body.email;
              profile.phone       = req.body.phone;
              profile.address     = req.body.address;
              profile.company     = req.body.company;
              profile.save(function(err){
               if(err)
                  res.send(err);
                  res.json({
                      Message       :'Success Update  Profile = ' +req.params.id,
                      StatusCode    : 200,
                      Collection    :{
                                      ProfileData:profile
                                     }
                  });
            });

       });

    }

};
