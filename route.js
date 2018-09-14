let express = require('express');
let router = express.Router();
let ctrl = require('./controller/pdfDownload.js');



router.get('/getPdf/:bookName',ctrl.downloadPdf);


module.exports=router;