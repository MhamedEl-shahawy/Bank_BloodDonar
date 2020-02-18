exports.getIndex = (req, res, next) => {
    res.render('home/index', {
        pageTitle: 'Home Page',
        path: '/'
    });
};

exports.getBlood = (req, res, next) => {
    res.render('home/bloodNeeds', {
        pageTitle: 'Blood Needs',
        path: '/bloodNeeds'
    });
};

exports.getHow = (req, res, next) => {
    res.render('home/howToDonate', {
        pageTitle: 'How To Donate',
        path: '/howToDonate'
    });
};

exports.getPrivacy = (req, res, next) => {
    res.render('home/privacy', {
        pageTitle: 'Privacy',
        path: '/privacy'
    });
};

exports.getTarget = (req, res, next) => {
    res.render('home/target', {
        pageTitle: 'Target',
        path: '/target'
    });
};