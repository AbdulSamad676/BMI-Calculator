const form = document.querySelector('form');
const result = document.querySelector('.result');
form.addEventListener('submit', function (e) {
	e.preventDefault();
	const height = parseInt(document.querySelector('#height').value);
	const weight = parseInt(document.querySelector('#weight').value);
	// console.log(`height is : ${height} and wight is : ${weight}`);
	if (height === '' || height < 0 || isNaN(height)) {
		result.innerHTML = `Please enter a valid Height ${height}`;
	} else if (weight === '' || weight < 0 || isNaN(weight)) {
		result.innerHTML = `Please enter a valid weight ${weight}`;
	} else {
		const bmi = (weight / ((height * height) / 10000)).toFixed(2);
		result.innerHTML = `<span> Your BMI is: ${bmi}</span>`;
		result.style.border = '1px solid black';
		if (bmi <= 18.06) {
			document.querySelector('.underWeight').style.color = 'red';
			document.querySelector('.underWeight').style.backgroundColor =
				'yellow';
		} else if (bmi >= 18.06 && bmi <= 24.9) {
			document.querySelector('.normalWeight').style.color = 'red';
			document.querySelector('.normalWeight').style.backgroundColor =
				'yellow';
		} else if (bmi > 24.9) {
			document.querySelector('.overWeight').style.color = 'red';
			document.querySelector('.overWeight').style.backgroundColor =
				'yellow';
		}
	}
});
