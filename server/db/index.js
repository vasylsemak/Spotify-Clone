const db = require('./db')
const Album = require('./album')
const Artist = require('./artist')
const Song = require('./song')

Album.belongsTo(Artist)
Artist.hasMany(Album)

Song.belongsTo(Artist)
Artist.hasMany(Song)

Song.belongsTo(Album)
Album.hasMany(Song)

module.exports = { db, Album, Artist, Song }
