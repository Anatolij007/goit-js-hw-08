import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let currentTime = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    localStorage.setItem(currentTime, `${seconds}`);
  }, 1000)
);

player
  .setCurrentTime(localStorage.getItem(currentTime))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
