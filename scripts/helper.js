  class Helper {

    playPauseAndUpdate(song) {

      player.playPause(song);
      const totalTime = player.prettyTime(player.getDuration(song));
      $('#time-control .total-time').text(totalTime);

    }

  }
  const helper = new Helper();
