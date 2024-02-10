# Projects Related to JS | DOM

## Projects link 
[Click this Link](https://stackblitz.com/edit/web-platform-praifu?file=index.html)

## Solution Codes
### Project 1 (Colors Changer)
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  document.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        break;
    }
  });
});
```
### Project 2 (BMI Calculator)
```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let message = '';

    if (bmi < 18.6) {
      message = 'Underweight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message = 'Normal weight';
    } else {
      message = 'Overweight';
    }

    // Show the result along with the message
    results.innerHTML = `<span>Your BMI: ${bmi}</span><br><span>${message}</span>`;
  }
});

```

