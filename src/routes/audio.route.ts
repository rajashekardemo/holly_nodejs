import multer from "multer";
import express from "express";
import { success, songByName, songByWord, songByNamePlay, getAllSongsPlay, artistSongs,  categorySongs} from "@/controllers/audio.controller";
import {
    randomsongs, getrecentlyplayedsongs, playSong, songByIDPlay, likesongs, fav, favPlayed, addplaylist,
    follower, getallplaylist, Trendingsongs, lyricById, searchSongs
} from "@/controllers/audio.controller";
import { audio } from "@/models/audio.model"
const router = express.Router();


const uploadaudio = multer({ storage: audio }); //db


router.post("/audioupload", [uploadaudio.fields([{ name: 'file', maxCount: 1 }, { name: 'image', maxCount: 1 }])], success);

router.get('/random', randomsongs)

router.get('/trendingsongs', Trendingsongs) //3)get completed

router.put('/like', likesongs)

router.post('/playsong', playSong)

router.get('/song/:filename', songByName)

router.get('/songword/:filename', songByWord)

router.get('/recentlyplayedsongs', getrecentlyplayedsongs)

router.get('/songByNamePlay/:filename', songByNamePlay)

router.get('/songsplay/:id', songByIDPlay)

router.get('/lyric/:id', lyricById)

router.get('/getall', getAllSongsPlay)

router.post('/fav', fav)

router.get('/favsongs/:userId', favPlayed)

router.post('/playlist', addplaylist)

router.get('/playlists/:userId', getallplaylist)

router.post('/follower', follower)

router.get('/artistname/:artist',artistSongs)


router.get('/category/:category',categorySongs)


router.get('/searchSongs/:search',searchSongs)



export default router;
