let jsonFile = {
	"chap": [
		{
            "division": [
                {
                    "label": "Фамилия",
                    "inputs": [{"type": "text"}, {"type": "checkbox", "label": "ранее менялась"}]
                },
                {
                    "label": "Имя",
                    "inputs": [{"type": "text"}]
                },
                {
                    "label": "Отчество",
                    "inputs": [{"type": "text"}]
                },
            ]
		},
        {
			"division": [
                {
                    "label": "Фамилия латиницей",
                    "inputs": [{"type": "text"}]
                },
                {
                    "label": "Имя латиницей",
                    "inputs": [{"type": "text"}]
                }
			]	
		},
        {
			"division": [
                {
                    "label": "Дата рождения",
                    "inputs": [
                        {"type": "select", "options": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]}, 
                        {"type": "select", "options": ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']}, 
                        {"type": "select", "options": [1970, 1999, 2000, 2001, 2002, 2003, 2004, 2005]}
                    ]
                },
                {
                    "label": "Семейное положение",
                    "inputs": [{"type": "select", "options": ["Не женат", "Встречаюсь", "Помолвен", "Женат", 'В гражданском браке', 'Влюблён', 'Все сложно', 'В активном поиске']}]
                },
                {
                    "label": "Образование",
                    "inputs": [{"type": "select", "options": ["Высшее", "Среднее", "Нет"]}]
                }
			]	
		},
		{
			"title": "Контактная информация",
			"division": [
                {
                    "label": "Моб. телефон",
                    "inputs": [{"type": "text"}]
                },
                {
                    "label": "Электронная почта",
                    "inputs": [{"type": "text"}]
                }
			]	
		},
        {
            "division": [
                {
                    "inputs": [{"type": "button", "text": "Полететь на Марс"}]
                }
            ]
        }
	]
}

  const header = document.querySelector('header');
  const form = document.querySelector('form');

  function parseJson2(jsonObj) {
    let infoFields = jsonObj['chap'];
    
   for (let i = 0; i < infoFields.length; i++) {
       let wrapperMain = document.createElement('section');
       wrapperMain.className = 'section';
       for(let j in infoFields[i].division) {
        let infoLabel = document.createElement('label');
        infoLabel.textContent = infoFields[i].division[j].label;
        if(infoFields[i].division[j].label == 'Дата рождения' || infoFields[i].division[j].label == 'Семейное положение' || infoFields[i].division[j].label == 'Образование') {
            infoLabel.className = 'dates';
        }
        else {
            infoLabel.className = "infoClass";
        }       
        wrapperMain.appendChild(infoLabel);
        form.appendChild(wrapperMain);
        for(let ij in infoFields[i].division[j].inputs) {
            switch(infoFields[i].division[j].inputs[ij].type) {
                case 'text':
                     let divbox = document.createElement('div');
                     divbox.className = "type-text";
                     let infoInput = document.createElement('input');
                     infoInput.type = 'text';
                     wrapperMain.appendChild(infoInput);
                     wrapperMain.appendChild(divbox);
                     divbox.appendChild(infoInput);
                     divbox.appendChild(infoLabel);
                     continue;                  
                case 'checkbox':
                     let divbox2 = document.createElement('div');
                     divbox2.className = "type-checkbox";
                     let infoCheck = document.createElement('input');
                     let infoLable2 = document.createElement('label');                    
                     infoLable2.textContent = infoFields[i].division[j].inputs[ij].label;
                     infoCheck.type = 'checkbox';
                     wrapperMain.appendChild(infoLable2);
                     infoLable2.appendChild(infoCheck);
                     wrapperMain.appendChild(divbox2);
                     divbox2.appendChild(infoCheck);
                     divbox2.appendChild(infoLable2);                    
                     continue;                        
                case 'select': 
                    let selectInp = document.createElement('select');             
                    for(let x = 0; x < infoFields[i].division[j].inputs[ij].options.length; x++) {
                        let optionInp = document.createElement('option');
                        optionInp.textContent = infoFields[i].division[j].inputs[ij].options[x];
                        optionInp.value = infoFields[i].division[j].inputs[ij].options[x];
                        selectInp.appendChild(optionInp);       
                    }
                    wrapperMain.appendChild(selectInp);                    
                    continue;                   
                case 'button':
                    let buttonCheck = document.createElement('button');
                    console.log(infoFields[i].division[j].inputs[ij].text);
                    buttonCheck.textContent = infoFields[i].division[j].inputs[ij].text;
                    wrapperMain.appendChild(buttonCheck);                   
            }
        }
       }
   }       
}

 parseJson2(jsonFile);




  
 