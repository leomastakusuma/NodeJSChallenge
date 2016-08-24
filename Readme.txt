'/profile'
'/profileFind' : {action :'profilecontroller#FindProfiles', method :'get'},
'/profileDelete/:id' : {action :'profilecontroller#deleteProfile', method :'get'},
'/profileUpdate/:id' : {action :'profilecontroller#updateProfile', method :'post'},


Authorization dengan basicAuth
-------------------------------
Username : ommasta,
Password : dragonfm12


URL Request
----------------------------------------------------------------------------
1.Untuk Insert Profile
  Url             : http://localhost:8080/profile
  method          : POST
  Parameter Body  :
                     {
                        "name": "Leo Masta Kusuma",
                        "title": "Leo",
                        "email": "leomastakusuma@gmail.com",
                        "phone": "085768079129",
                        "address": "Jl Radio 1 No 21 Kebayoran Baru Jakarta Selatan",
                        "company": "PT Codigo Cyberlin Metadata"
                     }


2.Untuk Find Semua Profile
  Url             : http://localhost:8080/profileFind
  Method          : GET
  
3.Untuk Find Profile Berdasarkan ID
  Url             : http://localhost:8080/profileFind/:IdProfile
  Method          : GET

4.Untuk Delete Profile
  Url             : http://localhost:8080/profileDelete/:idProfile
  Method          : GET

5.Untuk Update Profile
  Url             : http://localhost:8080/profile/:idProfile
  method          : POST
  Parameter Body  :
                     {
                        "name": "Leo Update",
                        "title": "Update",
                        "email": "leoupdatea@gmail.com",
                        "phone": "085768012123123",
                        "address": "Jl Kebayoran Baru no 10",
                        "company": "PT Myindo "
                     }
