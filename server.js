const express = require('express');
const app = express();
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const port = 3000;

const db = new sqlite3.Database('../BDFORM.db', (err) => {
    if (err)
        return console.error(err.message);
    console.log("Круто, база привязана")
});

// const db1 = new sqlite3.Database('D:/TestRouting/BDREVIEWS.db', (err) => {
//     if (err)
//         return console.error(err.message);
//     console.log("Круто, база с отзывами привязана")
// });


app.use(express.json());
app.use(cors());

db.run("DELETE FROM FORM")
db.run("DELETE FROM REVIEW")

// app.get('/api/data', (req, res) => {

// })

// let receivedData = "";
// let receivedPassword = "";
// let receivedMail = "";


// let infaMax = []


app.post('/api/data', (req, res) => {
    // let infa = {
    //     login: '',
    //     password: '',
    //     Mail: ''
    // };
    // infaMax.push(infa);

    const receivedData = req.body.data;
    // infa.login = receivedData;
    // res.setHeader('Content-Type', 'application/json')
    // res.json(receivedData);

    const receivedPassword = req.body.password;
    // infa.password = receivedPassword;

    // infa.push(receivedPassword);
    // res.setHeader('Content-Type', 'application/json')

    const receivedMail = req.body.mail;
    // infa.Mail = receivedMail;

    // infa.push(receivedMail);
    // res.setHeader('Content-Type', 'application/json')

    console.log('Полученые данные:', "login:", receivedData, "password:", receivedPassword, "Mail:", receivedMail);

    db.run(`INSERT INTO FORM (username, password, usermail) VALUES (?, ?, ?)`, [receivedData, receivedPassword, receivedMail], (err) => {
        if (err) {
            console.error('Ошибка при сохранении данных в базе данных', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
            console.log('Данные успешно дабавлены в базу')
        }
    });
 


   



});
// Идет вывод данных из базы и добовление их на сервер
app.get('/api/data', (req,res) => {
    let infaMax = []
    db.all('SELECT * FROM FORM', (err, rows) => {
        if(err) {
            console.error(err.message);
        } else {
            rows.forEach((row) => {
                infaMax.push(row)
            });
            res.json(infaMax)
        }
    });

});

// app.get('/api/data', (req, res) => {
//     res.json(infaMax);
// });

// let infaReviewMax = []
// let infaReview = {
//     login: '',
//     Review: ''
// };

app.post('/api/review', (req, res) => {
    // let infaReview = {
    //     login: '',
    //     Review: ''
    // };
    // infaReviewMax.push(infaReview);


    const receivedReview = req.body.review;
    // infaReview.Review = receivedReview;

    const receivedLogin = req.body.login;
    // infaReview.login = receivedLogin;

    // infa.push(receivedReview);
    // res.setHeader('Content-Type', 'application/json')


    console.log('Полученые данные:', "Login:", receivedLogin, "Review:", receivedReview);

    db.run(`INSERT INTO REVIEW (username, userreview) VALUES (?, ?)`, [receivedLogin, receivedReview], (err) => {
        if (err) {
            console.error('Ошибка при сохранении данных в базе данных', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
            console.log('Данные успешно дабавлены в базу')

        }

        // res.status(200).json({message: 'Данные успешно получены!',  receivedLogin, receivedReview});

    });
});
app.get('/api/review', (req,res) => {
    let infaReviewMax = []
    db.all('SELECT * FROM REVIEW', (err, rows) => {
        if(err) {
            console.error(err.message);
        } else {
            rows.forEach((row) => {
                infaReviewMax.push(row)
            });
            res.json(infaReviewMax)
        }
    });

});

// app.get('/api/review', (req, res) => {
//     res.json(infaReviewMax);
// });



// let infa = [`Полученые данные:, login:, ${receivedData}, password:, ${receivedPassword}, Mail:, ${receivedMail}`];



//     const receivedReview = req.body.review;
//     console.log('Полученые данные:', "Review:", receivedReview);
//     infa.push(receivedReview);
//     db1.run(`INSERT INTO REVIEWS (userreviews) VALUES (?)`, [receivedReview], (err) => {
//         if (err) {
//             console.error('Ошибка при сохранении данных в базе данных', err);
//             res.sendStatus(500);
//         } else {
//             res.sendStatus(200);
//             console.log('Данные успешно дабавлены в базу')

//         }

//         // return res.json({message: 'Данные успешно получены!',  receivedData, receivedPassword, receivedMail});

//     });
// });



// здесь связано с отзывами

// app.post('/api/data', (req, res) => {

// })





app.listen(port, (error) => {
    error ? console.log(error) : console.log(`Сервер запущен на порту http://localhost:${port}`);
});


// app.listen(port, (error) => {
//     error ? console.log(error) : console.log(`Сервер запущен на порту http://localhost:${port}/api/review`);
// });















