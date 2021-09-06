const genderFemale = document.querySelector('#gender-female');

const genderMale = document.querySelector('#gender-male');

const caloriesNorm = document.querySelector('#calories-norm');

const caloriesMinimal = document.querySelector('#calories-minimal');

const caloriesMaximal = document.querySelector('#calories-maximal');

const buttonClear = document.querySelector('.form__reset-button');

const buttonCalculate = document.querySelector('.form__submit-button');

const inps = document.querySelectorAll('.input__wrapper input');

const boxResult = document.querySelector('.counter__result');

const checkBoxes = document.querySelectorAll('.radio .radio__wrapper input');

const activateButton = function () {
    for (let inp of inps) {
        inp.addEventListener('input', function (evt) {
            evt.preventDefault();
            buttonClear.disabled = false;

            if (inps[0].value.length > 1 && inps[1].value.length > 1 && inps[2].value.length > 1) {
                buttonCalculate.disabled = false;
            }
        });
    }
};

const disableButton = function () {
    buttonClear.addEventListener('click', function (evt) {
        evt.preventDefault();

        for (let inp of inps) {
            inp.value = '';
        }

        checkBoxes[0].checked = true;

        buttonClear.disabled = true;
        buttonCalculate.disabled = true;
        boxResult.classList.add('counter__result--hidden');

        if (genderFemale.checked == true) {
            genderMale.checked = true;
            genderFemale.checked = false;
        }
    });

};

const counterResult = function () {
    buttonCalculate.addEventListener('click', function (evt) {
        evt.preventDefault();
        boxResult.classList.remove('counter__result--hidden');
    });
};

const clearMalePlases = function () {
    genderMale.addEventListener('click', function () {
        console.log('qwer');
        for (let inp of inps) {
            inp.value = '';
        }
        checkBoxes[0].checked = true;
        buttonClear.disabled = true;
        buttonCalculate.disabled = true;
        boxResult.classList.add('counter__result--hidden');

    });
};

const calculateMale = function () {
    buttonCalculate.addEventListener('click', function () {
        let ages = Number(5) * Number(inps[0].value);
        let height = Number(6.25) * Number(inps[1].value);
        let weight = Number(10) * Number(inps[2].value);
        let N = weight + height - ages + 5;

        if (checkBoxes[0].checked) {
            caloriesNorm.innerHTML = N * 1.2;
            caloriesMinimal.innerHTML = (N * 1.2) - ((N * 1.2) / 100) * 15;
            caloriesMaximal.innerHTML = (N * 1.2) + ((N * 1.2) / 100) * 15;
        } else if (checkBoxes[1].checked) {
            caloriesNorm.innerHTML = N * 1.375;
            caloriesMinimal.innerHTML = (N * 1.375) - ((N * 1.2) / 100) * 15;
            caloriesMaximal.innerHTML = (N * 1.375) + ((N * 1.2) / 100) * 15;
        } else if (checkBoxes[2].checked) {
            caloriesNorm.innerHTML = N * 1.55;
            caloriesMinimal.innerHTML = (N * 1.55) - ((N * 1.2) / 100) * 15;
            caloriesMaximal.innerHTML = (N * 1.55) + ((N * 1.2) / 100) * 15;
        } else if (checkBoxes[3].checked) {
            caloriesNorm.innerHTML = N * 1.725;
            caloriesMinimal.innerHTML = (N * 1.725) - ((N * 1.2) / 100) * 15;
            caloriesMaximal.innerHTML = (N * 1.725) + ((N * 1.2) / 100) * 15;
        } else if (checkBoxes[4].checked) {
            caloriesNorm.innerHTML = N * 1.9;
            caloriesMinimal.innerHTML = (N * 1.9) - ((N * 1.2) / 100) * 15;
            caloriesMaximal.innerHTML = (N * 1.9) + ((N * 1.2) / 100) * 15;
        }
    });
};

const clearFemalePlases = function () {
    genderFemale.addEventListener('click', function () {
        console.log('qwer');
        for (let inp of inps) {
            inp.value = '';
        }
        checkBoxes[0].checked = true;
        buttonClear.disabled = true;
        buttonCalculate.disabled = true;
        boxResult.classList.add('counter__result--hidden');

    });
};

const calculateFemale = function () {
    buttonCalculate.addEventListener('click', function () {
        let ages = Number(5) * Number(inps[0].value);
        let height = Number(6.25) * Number(inps[1].value);
        let weight = Number(10) * Number(inps[2].value);
        let N = weight + height - ages - 161;

        if (checkBoxes[0].checked) {
            caloriesNorm.innerHTML = N * 1.2;
            caloriesMinimal.innerHTML = (N * 1.2) - ((N * 1.2) / 100) * 15;
            caloriesMaximal.innerHTML = (N * 1.2) + ((N * 1.2) / 100) * 15;
        } else if (checkBoxes[1].checked) {
            caloriesNorm.innerHTML = N * 1.375;
            caloriesMinimal.innerHTML = (N * 1.375) - ((N * 1.2) / 100) * 15;
            caloriesMaximal.innerHTML = (N * 1.375) + ((N * 1.2) / 100) * 15;
        } else if (checkBoxes[2].checked) {
            caloriesNorm.innerHTML = N * 1.55;
            caloriesMinimal.innerHTML = (N * 1.55) - ((N * 1.2) / 100) * 15;
            caloriesMaximal.innerHTML = (N * 1.55) + ((N * 1.2) / 100) * 15;
        } else if (checkBoxes[3].checked) {
            caloriesNorm.innerHTML = N * 1.725;
            caloriesMinimal.innerHTML = (N * 1.725) - ((N * 1.2) / 100) * 15;
            caloriesMaximal.innerHTML = (N * 1.725) + ((N * 1.2) / 100) * 15;
        } else if (checkBoxes[4].checked) {
            caloriesNorm.innerHTML = N * 1.9;
            caloriesMinimal.innerHTML = (N * 1.9) - ((N * 1.2) / 100) * 15;
            caloriesMaximal.innerHTML = (N * 1.9) + ((N * 1.2) / 100) * 15;
        }
    });
};


activateButton();
counterResult();
disableButton();
clearFemalePlases();
calculateFemale();
clearMalePlases();
calculateMale();