exports.getDashBoard = (req,res,next) => {
    res.render('dashboard/dashboard',{
        pageTitle:'Dash Board',
        path:'/dashboard'
    });
}