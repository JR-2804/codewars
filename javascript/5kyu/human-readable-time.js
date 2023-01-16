const pad = (time) => (time < 10 ? `0${time}` : time);

const calculateHours = (time) => pad(Math.floor(time / 3600));

const calculateMinutes = (time) => pad(Math.floor((time / 60) % 60));

const calculateSeconds = (time) => pad(Math.floor(time % 60));

const humanReadable = (time) =>
  `${calculateHours(time)}:${calculateMinutes(time)}:${calculateSeconds(time)}`;
