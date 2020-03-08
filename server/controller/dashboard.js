exports.getDashBoard = (req,res,next) => {

    if(req.session.user.role !== 'superuser') {
        return res.redirect('/');
    }
    res.render('dashboard/dashboard',{
        pageTitle:'Dash Board',
        path:'/dashboard'
    });
}