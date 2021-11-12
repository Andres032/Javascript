import MediaPlayer from '@andrests03/platzimediaplayer';
import AutoPlay from '@andrests03/platzimediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@andrests03/platzimediaplayer/lib/plugins/AutoPause';
import Ads from '@andrests03/platzimediaplayer/lib/plugins/Ads';

const video = document.querySelector("video")
const player = new MediaPlayer({el: video, plugins: [
    new AutoPlay(), new AutoPause(), new Ads()]});

const button : HTMLElement = document.querySelector("button")

button.onclick = () =>player.togglePlay();

const muteButton: HTMLElement = document.querySelector('#muteButton')
muteButton.onclick = () => player.toggleMute()

if('serviceWorker' in navigator){
   navigator.serviceWorker.register('/sw.js').catch(error => {
      console.log(error.message);
   })
}