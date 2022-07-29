
const express = require('express');
const router = express.Router();
const pool = require('../config/db.js');
const flash = require('express-flash');


router.get('/product', async (req, res) => {
    pool.getConnection( (err,conn) => {
        if (err) throw err;

        try {
            const qry = `SELECT id, title, price, image FROM products`;
            conn.query(qry, (err, result) => {
                conn.release();
                if (err) throw err;
                res.send(JSON.stringify(result));
            })

        } catch (err) {
            console.log(err);
            res.end();
        }
    });
});

router.get('/product/asc', async (req, res) => {
    pool.getConnection( (err,conn) => {
        if (err) throw err;

        try {
            const qry = `SELECT id, title, price, image FROM products ORDER BY price ASC`;
            conn.query(qry, (err, result) => {
                conn.release();
                if (err) throw err;
                res.send(JSON.stringify(result));
            })

        } catch (err) {
            console.log(err);
            res.end();
        }
    });
});

router.get('/product/desc', async (req, res) => {
    pool.getConnection( (err,conn) => {
        if (err) throw err;

        try {
            const qry = `SELECT id, title, price, image FROM products ORDER BY price DESC`;
            conn.query(qry, (err, result) => {
                conn.release();
                if (err) throw err;
                res.send(JSON.stringify(result));
            })

        } catch (err) {
            console.log(err);
            res.end();
        }
    });
     
});

router.get('/product/firstrow', async (req, res) => {
    pool.getConnection( (err,conn) => {
        if (err) throw err;

        try {
            const qry = `SELECT id, title, price, image FROM products WHERE id IN ('1', '2', '3' )`;
            conn.query(qry, (err, result) => {
                conn.release();
                if (err) throw err;
                res.send(JSON.stringify(result));
            })

        } catch (err) {
            console.log(err);
            res.end();
        }
    });
     
});

router.get('/product/secondrow', async (req, res) => {
    pool.getConnection( (err,conn) => {
        if (err) throw err;

        try {
            const qry = `SELECT id, title, price, image FROM products WHERE id IN ('4', '5', '6' )`;
            conn.query(qry, (err, result) => {
                conn.release();
                if (err) throw err;
                res.send(JSON.stringify(result));
            })

        } catch (err) {
            console.log(err);
            res.end();
        }
    });
     
});

router.get('/product/thirdrow', async (req, res) => {
    pool.getConnection( (err,conn) => {
        if (err) throw err;

        try {
            const qry = `SELECT id, title, price, image FROM products WHERE id IN ('7', '8', '9' )`;
            conn.query(qry, (err, result) => {
                conn.release();
                if (err) throw err;
                res.send(JSON.stringify(result));
            })

        } catch (err) {
            console.log(err);
            res.end();
        }
    });
     
});

router.get('/product/fourthrow', async (req, res) => {
    pool.getConnection( (err,conn) => {
        if (err) throw err;

        try {
            const qry = `SELECT id, title, price, image FROM products WHERE id IN ('10', '11', '12' )`;
            conn.query(qry, (err, result) => {
                conn.release();
                if (err) throw err;
                res.send(JSON.stringify(result));
            })

        } catch (err) {
            console.log(err);
            res.end();
        }
    });
     
});


router.post('/purchase', async (req, res) => {
    pool.getConnection( (err,conn) => {
        var title = req.body.title;
        var price = req.body.price;
        if (err) throw err;

        try {
            const qry = `INSERT INTO cart (title, price) VALUES ('${title}', '${price}')`;
            conn.query(qry, (err, result) => {
                conn.release();
                if (err) throw err;
                console.log('record inserted');
                res.redirect('http://localhost:3000/product');
            })

        } catch (err) {
            console.log(err);
            res.end();
        }
    });
     
});

router.post('/delete', async (req, res) => {
    pool.getConnection( (err,conn) => {
        if (err) throw err;

        try {
            const qry = `DELETE FROM cart`;
            conn.query(qry, (err, result) => {
                conn.release();
                if (err) throw err;
                console.log('checkout complete');
                res.redirect('http://localhost:3000/home');
            })

        } catch (err) {
            console.log(err);
            res.end();
        }
    });
     
});

router.get('/purchase', async (req, res) => {
    pool.getConnection( (err,conn) => {
        if (err) throw err;

        try {
            const qry = `SELECT title, price FROM cart`;
            conn.query(qry, (err, result) => {
                conn.release();
                if (err) throw err;
                res.send(JSON.stringify(result));
            })

        } catch (err) {
            console.log(err);
            res.end();
        }
    }); 
});


router.get('/purchasetotal', async (req, res) => {
    pool.getConnection( (err,conn) => {
        if (err) throw err;

        try {
            const qry = `SELECT SUM(price) AS Total FROM cart`;
            conn.query(qry, (err, result) => {
                conn.release();
                if (err) throw err;
                res.send(JSON.stringify(result));
            })

        } catch (err) {
            console.log(err);
            res.end();
        }
    }); 
});

module.exports = router;