const express = require('express');
const { applyStyleProp } = require('fullcalendar');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080')
});


app.get('/pet', function(req, res) {
    res.send('펫쇼핑몰 입니다.')
})

app.get('/beauty', function(req, res) {
    res.send('뷰티용품 사세요')
})