import Phaser from "phaser";
import './style.css'
import { scenes } from "./scenes";

new Phaser.Game({
  width: 800,
  height: 600,
  title: 'Phaser-rpg',
  scene: scenes,
  url: import.meta.env.URL || '',
  version: import.meta.env.VERSION || '0.0.1',
  backgroundColor: '000',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  pixelArt: true
})