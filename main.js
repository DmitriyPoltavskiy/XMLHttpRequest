function loadPhones() {

	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'phones.json', true);

	var button = document.getElementById('button');
	var status = document.getElementById('status');

	xhr.onreadystatechange = function() {
		if (xhr.readyState != 4) return;

		// button.parentNode.removeChild(button);
		status.innerHTML = 'Готово';

		button.disabled = false;

		if (xhr.status != 200) {
			// обработать ошибку
			alert(xhr.status + ': ' + xhr.statusText);
		} else {
			try {
				var phones = JSON.parse(xhr.responseText);
			} catch (e) {
				alert("Некорректный ответ " + e.message);
			}
			showPhones(phones);
		}
	}

	xhr.send();

	status.innerHTML = 'Загружаю...';

	// button.innerHTML = 'Загружаю...';
	button.disabled = true;
}

function showPhones(phones) {

	phones.forEach(function(phone) {
		var li = list.appendChild(document.createElement('li'));
		li.innerHTML = phone.name;
		// console.log(phone);
	});

}