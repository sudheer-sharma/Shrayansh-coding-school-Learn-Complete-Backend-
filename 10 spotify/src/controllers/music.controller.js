const musicModel = require("../models/music.module");
const albumModel = require("../models/album.module");
const { uploadFile } = require("../services/storage.service");

const jwt = require("jsonwebtoken");



async function createMucic(req, res) {

  const { title } = req.body;
  let file = req.file;

  const result = await uploadFile(file.buffer.toString("base64"));

  const music = await musicModel.create({
    uri: result.url,
    title,
    artist: req.user.id,
  })

  res.status(201).json({
    message: "music create successfuly",
    music: {
      id: music._id,
      uri: music.uri,
      title: music.title,
      artist: music.artist,
    }
  })
}


async function createAlbum(req, res) {

  let { title, musics } = req.body;

  const album = await albumModel.create({
    title,
    artist: req.user.id,
    musics: musics
  })

  res.status(201).json({
    message: "alnum create successfuly",
    ailbum: {
      id: album.id,
      title: album.title,
      artist: album.artist,
      musics: album.musics
    }
  })
}


async function getAllMusics(req, res) {

  const musics = await musicModel.find().populate("artist", "username email");

  res.status(200).json({
    message: "Music fatch successfuly",
    musics: musics
  })
}


async function getAllAlbums(req, res) {
  const albums = await albumModel.find().select("title artist").populate("artist", "username email");

  res.status(200).json({
    message: "album fetch successfuly",
    albums: albums
  })

}


async function getAlbumsById(req, res) {
  const { albumId } = req.params.albumId;

  const album = await albumModel.findOne(albumId).populate("artist", "username email").populate("musics");

  return res.status(200).json({
    message: "",
    albums: album
  })

}

module.exports = { createMucic, createAlbum, getAllMusics, getAllAlbums, getAlbumsById };