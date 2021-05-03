const router = require('express').Router()
const listrik = require('../controller/listrik')

router.post('/insert', (req, res) => {
    listrik.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getall', (req, res) => {
    listrik.showALLData()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
router.get('/getbyid/:id', (req, res) => {
    listrik.showALLDataById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/update/:id', (req, res) => {
    listrik.update(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.delete('/delete/:id', (req, res) => {
    listrik.delete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
module.exports = router