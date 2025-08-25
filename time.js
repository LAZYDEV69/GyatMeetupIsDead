const lastGyatMeetup = new Date("2025-06-04");

function updateTime() {
  const now = new Date();
  const timeSince = now - lastGyatMeetup;

  const oneDay = 1000 * 60 * 60 * 24;
  const oneMonth = oneDay * 30;

  const months = Math.floor(timeSince / oneMonth);
  const days = Math.floor((timeSince % oneMonth) / oneDay);
  const seconds = Math.floor((timeSince / 1000) % 60);

  document.getElementById(
    "time"
  ).textContent = `Time since last Gyat meetup: ${months} months, ${days} days, and ${seconds} seconds`;
}

setInterval(updateTime, 1000);
