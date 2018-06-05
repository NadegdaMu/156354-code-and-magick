'use strict';

var GIST_HEIGHT = 150;

var renderCloud1 = function (ctx) {
  var bezierCloud = [
    [80, 40, 150, -10, 250, 40],
    [250, 40, 350, -10, 450, 40],
    [450, 40, 530, -10, 600, 40],
    [600, 40, 650, 80, 600, 150],
    [600, 150, 650, 160, 600, 280],
    [600, 280, 550, 300, 450, 280],
    [450, 280, 370, 300, 300, 280],
    [300, 280, 250, 300, 100, 280],
    [100, 280, 80, 280, 100, 300],
    [100, 300, 40, 200, 80, 200],
    [80, 200, 0, 100, 80, 40]];
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.fillStyle = '#fff';
  ctx.strokeStyle = '#fff';
  ctx.beginPath();

  for (var i = 0; i < bezierCloud.length; i++) {
    var [c1, c2, c3, c4, c5, c6] = bezierCloud[i];
    ctx.bezierCurveTo(c1, c2, c3, c4, c5, c6);
  }

  ctx.closePath();
  ctx.stroke();
  ctx.fill();
};

var calculetGistHeight = function (times) {
  var maxTime = 0;
  var gistHeight = [];

  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxTime) {
      maxTime = times[i];
    }
  }

  for (var j = 0; j < times.length; j++) {
    gistHeight[j] = (times[j] * GIST_HEIGHT) / maxTime;
  }
  return gistHeight;
};

var colorOther = function () {
  return 'rgba(0, 0, 255, ' + Math.random(250) + ')';
};

var renderGist = function (ctx, names, gistdata, gistx, gisty, widthColomn) {
  var bottomGist = gisty + GIST_HEIGHT;
  var offset = 20;
  var stepColomn = 50;

  var colorU = 'rgba(255, 0, 0, 1)';

  for (var i = 0; i < names.length; i++, gistx += stepColomn) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = colorU;
    } else {
      ctx.fillStyle = colorOther();
    }

    ctx.fillRect(gistx, bottomGist, widthColomn, -gistdata[i]);
    ctx.fillText(names[i], gistx, bottomGist + offset);
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud1(ctx);

  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'center';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 80, 60);
  ctx.fillText('Список результатов:', 80, 80);

  renderGist(ctx, names, calculetGistHeight(times), 200, 100, 40);
};
