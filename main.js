"use strict";
let word = {
	 1: { 
        description: "Не забывай, еще пару вдохов и настанет новый день!"
     }, 
     2: { 
        description: "Начни свой день с улыбки и все будет хорошо. Отличного дня!"
     }, 
     3: { 
        description: "Желаю тебе прекрасно провести время, отличного дня!"
     }, 
     4: { 
        description: "Получи максимум от нового дня, потому что ты никогда не знаешь, что тебя ждет дальше."
     }, 
     5: { 
        description: "Ты можешь прожить каждый день только один раз. Сделай его лучшим!"
     }, 
     6: { 
        description: "Любой день – хороший и каждый день может научить нас новому. Приятного дня!"
     }, 
     7: { 
        description: "Не забывай, еще пару вдохов и настанет новый день!"
     }, 
     8: { 
        description: "Забудь о вчерашнем дне. Сегодня новый пришел. Желаю тебе отлично его провести!"
     }, 
     9: { 
        description: "Надеюсь, сегодня ты будешь сиять ярче, чем вчера. Хорошего дня!"
     }, 
     10: { 
        description: "Пусть этот новый день принесёт тебе только улыбки и удачу!"
     } 
}

var randText = word[Object.keys(word)[Math.floor(Math.random() * Object.keys(word).length)]]
console.log(randText);

let mainText = document.getElementById('main-text');

let divText = document.createElement('div');
mainText.appendChild(divText);
divText.setAttribute('id','divText');
divText.classList.add('divText');

let hText = document.createElement('h2');
let h2Text = document.createTextNode(randText.description);
hText.appendChild(h2Text);
document.getElementById("divText").append(hText);