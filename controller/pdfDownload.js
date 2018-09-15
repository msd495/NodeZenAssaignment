let  path = require('path');
let fs = require('fs');

module.exports = {
    downloadPdf: (req, res) => {
        let value = req.params.bookName;
        let books=[];
        let data = fs.readFileSync('book.json');
    	books = JSON.parse(data);


        
    if (value != null) {
        for (let i = 0; i < books.length; i++) {

            if (books[i].isbn == value) {
                //console.log(books[i]);
                value = books[i].title;
            }
            if (books[i].title == value) {
                //console.log(books[i]);
                value = books[i].title;
            }
            if (books[i].author == value) {
                //console.log(books[i]);
                value = books[i].title;
            }

        }
    }

        /*var file = path.join(__dirname, bookName+'.pdf');
    res.download(file, function(err) {
        if (err) {
            console.log("Error");
            console.log(err);
        } else {
            console.log("Success");
        }
    });*/
    console.log(value);
    var file = fs.createReadStream('./shared/' + value + '.pdf');
    // var stat = fs.statSync('./public/modules/datacollectors/output.pdf');
    // res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=' + value + '.pdf');//remove this line to show pdf.This line is to download pdf.
    file.pipe(res);

    }
}
