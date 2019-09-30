import  { BuildAll } from "./build_scene"

let clickables: number = 0
BuildAll(clickables)

const music_player = new Entity()
const transform = new Transform({ position: new Vector3(20.5, 50, 30) })
music_player.addComponentOrReplace(transform)
const clip = new AudioClip('audio/Oceans_Apart.mp3')
const source = new AudioSource(clip)
source.playing = true
source.loop = true
music_player.addComponent(source)
engine.addEntity(music_player)
