exports.getHome = (req,res,next) => {
    res.render('user/userHome',{
        pageTitle:'Main Page'
    });
};

exports.getUserDonate = (req,res,next) => {
    res.render('user/userDonate',{
        pageTitle:'Search By zip'
    });
};

exports.getUserAppointment = (req,res,next) => {
    res.render('user/userAppointment',{
        pageTitle:'My Appointment'
    });
};

exports.getUserDonation = (req,res,next) => {
    res.render('user/userDonations',{
        pageTitle:'My Donations'
    });
};

exports.getUserRate = (req,res,next) => {
    res.render('user/userRateOurStaff',{
        pageTitle:'RATE OUR STAFF'
    });
};

exports.getUserStore = (req,res,next) => {
    res.render('user/userStore',{
        pageTitle:'STORE'
    });
};


exports.getUserAccount = (req,res,next) => {
    res.render('user/userMyAccount',{
        pageTitle:'MY ACCOUNT'
    });
};