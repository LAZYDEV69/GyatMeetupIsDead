const lastGyatMeetup = new Date("2025-11-01T17:00:00"); // 5:00 PM

function updateTime() {
  const now = new Date();
  const timeSince = now - lastGyatMeetup;

  const oneSecond = 1000;
  const oneMinute = oneSecond * 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;
  const oneMonth = oneDay * 30;

  const months = Math.floor(timeSince / oneMonth);
  const days = Math.floor((timeSince % oneMonth) / oneDay);
  const hours = Math.floor((timeSince % oneDay) / oneHour);
  const minutes = Math.floor((timeSince % oneHour) / oneMinute);
  const seconds = Math.floor((timeSince % oneMinute) / oneSecond);

  document.getElementById(
    "time"
  ).textContent = `Time since last Gyat meetup (ended 5PM): ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
}

setInterval(updateTime, 1000);
