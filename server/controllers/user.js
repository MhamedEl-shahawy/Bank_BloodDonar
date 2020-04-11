const User = require('../models/user');
const { validationResult } = require('express-validator');


exports.getHome = (req, res, next) => {
    res.render('user/userHome', {
        pageTitle: 'Main Page'
    });
};

exports.getUserDonate = (req, res, next) => {
    res.render('user/userDonate', {
        pageTitle: 'Search By zip'
    });
};

exports.getUserAppointment = (req, res, next) => {
    res.render('user/userAppointment', {
        pageTitle: 'My Appointment'
    });
};

exports.getUserDonation = (req, res, next) => {
    res.render('user/userDonations', {
        pageTitle: 'My Donations'
    });
};

exports.getUserRate = (req, res, next) => {
    res.render('user/userRateOurStaff', {
        pageTitle: 'RATE OUR STAFF'
    });
};

exports.getUserStore = (req, res, next) => {
    res.render('user/userStore', {
        pageTitle: 'STORE'
    });
};



/* Account */

exports.getUserAccount = async (req, res, next) => {
    const currentUser = req.user;
    try {
        const users = await User.find();
        res.render('user/userMyAccount', {
            pageTitle: 'MY ACCOUNT',
            users,
            currentUser
        });

    } catch (err) {
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(error);
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        res.render('user/userMyAccount', {
            user: user,
            pageTitle: 'MY ACCOUNT'
        });
    } catch (err) {
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(error);
    }
}

exports.getEditInfo = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.render('user/edit-user',
            {
                user: user,
                pageTitle: 'Edit User'
            });
    } catch (err) {
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(error);
    }
}

exports.getChangePassword = async (req,res,next) => {
    try{
      const user = await User.findById(req.params.id);
      res.render('user/edit-password',{
        user:user,
        pageTitle:'UPDATE PASSWORD'
      });
    }catch(err){
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    }
  }
  
  exports.changePassword = async (req,res,next) => {
    let user;
    const errors = validationResult(req);
    try{
      if(!errors.isEmpty()){
        console.log(errors.array());
        return res.status(422).render('user/edit-password', {     
          pageTitle: 'UPDATE PASSWORD',
          errorMessage: errors.array()[0].msg,
        });
      }
      let password = await bcrypt.hash(req.body.password,12);
      user = await User.findById(req.params.id);
      user.password = password;
      await user.save();
      res.redirect('/donor/account/view');
    }catch(err){
      if(user == null) {
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(error);
      } else {
        res.render('user/edit-user',{
          user:user,
          errorMessage:errors.array()[0].msg,
          pageTitle:'Edit'
        });
      }
  
    }
  }
exports.UpdateUser = async (req, res) => {
    let user;
    try {
        user = await User.findById(req.params.id);
        user.city = req.body.city;
        user.phoneNumber = req.body.phoneNumber;
        user.bloodType = req.body.bloodType;
        await user.save();
        res.redirect('/donor/account/view');
    } catch (err) {
        if (user == null) {
            const error = new Error(err);
            error.httpStatusCode = 500;
            return next(error);
        } else {
            res.render('user/edit-user', {
                user: user,
                errorMessage: 'Error updating User',
                pageTitle: 'Edit'
            })
        }
    }
}
