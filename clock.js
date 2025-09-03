
    function updateClock() {
      let now = new Date();
      let hrs = String(now.getHours()).padStart(2, '0');
      let mins = String(now.getMinutes()).padStart(2, '0');
      let secs = String(now.getSeconds()).padStart(2, '0');

      document.getElementById("clock").textContent = `${hrs}:${mins}:${secs}`;
    }

    
    // update every second
    setInterval(updateClock, 1000);
    updateClock(); // run once instantly
 