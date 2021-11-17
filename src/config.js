var path = require('path');
var root = path.join(__dirname);

export default {
  config: {
    rootDir: root,

    // HTML Layout ====================================================
    srcHtmlLayout:          path.join(root, 'app', 'index.html'),

    // Site Config ====================================================
    siteTitle:              'PEREDVIЖ',
    siteDescription:        'Проект путешествующей поэзии',
    siteCanonicalUrl:       'https://peredvizh.org',
    siteKeywords:           'peredvizh poetry slam poets поэзия стихи poetry clash panda platforma berlin',
    scssIncludes:           [],
    locale:                 'ru' ,
},
  auth: {
    email: 'info@panda-platforma-berlin',
    password: ''
  },
  api: {
    baseUrl: "https://pnd-peredvizh-api.herokuapp.com"
  } 
};
