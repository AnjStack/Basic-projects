function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');


  //Format time string
  const timeString =` ${hours}:${minutes}:${seconds}`;

  //update the clock display

  document.getElementById('clock').textContent = timeString;

  //update the date display
  const options = { weekday:'long', year: 'numeric', month:'long', day: 'numeric'};
  const dateString = now.toLocaleDateString('en-US',options);

  document.getElementById('date').textContent = dateString;
}

//update the clock every second

setInterval(updateClock, 1000);

//Initialize the clock immediately
updateClock();

