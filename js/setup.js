'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var forename = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

// функция, собирающия объекты магов из отдельных массивов со свойствами name, coatColor, eyesColor
var creatingWizards = function (appellation, family, coat, eyes) {
  var wizards = [];
  // функция возвращающая случайный индекс массива
  var getRandomNumberArray = function (length) {
    return Math.floor(Math.random() * length);
  };
  // цикл собирающий массив 4 объектов
  for (var i = 0; i <= 3; i++) {
    wizards[i] = {};
    wizards[i].name = appellation[getRandomNumberArray(appellation.length)] + ' ' + family[getRandomNumberArray(family.length)];
    wizards[i].coatColor = coat[getRandomNumberArray(coat.length)];
    wizards[i].eyesColor = eyes[getRandomNumberArray(eyes.length)];
  }
  return wizards;
};

document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizards = creatingWizards(forename, surname, coatColor, eyesColor);

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
