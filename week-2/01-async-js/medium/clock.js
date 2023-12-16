function clock() {
  let date = new Date();
  let hours = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
  let mins =
    date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
  let seconds =
    date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();

  console.log(hours + ":" + mins + ":" + seconds);
}

setInterval(clock, 1000);
