'use strict';

var GIST_HEIGHT = 150;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GIST_X = 200;
var GIST_Y = 100;
var WIDTH_COLOMN = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var colorOther = function () {
  return 'rgba(0, 0, 255, ' + Math.random(250) + ')';
};

var renderGist = function (ctx, names, times) {
  var bottomGist = GIST_Y + GIST_HEIGHT;
  var offset = 20;
  var stepColomn = 50;
  var colorU = 'rgba(255, 0, 0, 1)';
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

  for (var k = 0; k < names.length; k++, GIST_X += stepColomn) {
    if (names[k] === 'Вы') {
      ctx.fillStyle = colorU;
    } else {
      ctx.fillStyle = colorOther();
    }

    ctx.fillRect(GIST_X, bottomGist, WIDTH_COLOMN, -gistHeight[k]);
    ctx.fillText(names[k], GIST_X, bottomGist + offset);
    ctx.fillText(parseInt(times[k], 10), GIST_X, bottomGist - gistHeight[k] - 5);
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'center';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  renderGist(ctx, names, times);
};
