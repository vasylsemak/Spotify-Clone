const router = require('express').Router()
const { Album, Artist, Song } = require('../db')

router.get('/', async(req, res, next) => {
  try {
    const albums = await Album.findAll()
    res.status(200).json(albums)
  } catch(error) { next(error) }
})

router.get('/:id', async(req, res, next) => {
  try {
    const album = await Album.findByPk(req.params.id, {
      include: [
        Artist,
        { model: Song, include: [ Artist ] }
      ]
    })

    res.status(200).json(album)
  } catch(error) { next(error) }
})


module.exports = router
