function calculateBMI() {
  var height = document.getElementById('height').value;
  var weight = document.getElementById('weight').value;

  if (height === '' || weight === '') {
    alert('Please enter both height and weight.');
    return;
  }

  var bmi = weight / ((height / 100) * (height / 100));
  bmi = bmi.toFixed(0);

  var result = 'Your BMI is ' + bmi + ' ';

  if (bmi < 18.5) {
    result += 'You are underweight.';
  } else if (bmi <= 18.5 bmi&&bmi < 25) {
    result += 'You have a normal weight.';
  } else if (bmi <= 25 bmi&&bmi < 30) {
    result += 'You are overweight.';
  } else {
    result += 'You are obese.';
  }

  document.getElementById('result').innerHTML = result;
}