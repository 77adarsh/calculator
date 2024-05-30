document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('calc-input');

const appendValue = (value) => {
    input.value += value;
}

const clear = (entry) => {
    input.value = input.value.slice(0, -1);
}

const clearAll = () => {
    input.value = '';
}

const percentageButton = document.getElementById('pecentage');

const calculate = () => {
    try {
        if (input.value.includes('%')) {
            const number = parseFloat(input.value.split('%')[0]);
            const percentageValue = number / 100;
            input.value = percentageValue;
        }
        else {
            input.value = eval(input.value);
        }
    }
    catch {
        input.value = 'Error';
    }
}

const buttons = document.querySelectorAll('.btn, .btn-extra, .sgn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        switch (value) {
            case 'C':
                clear();
                break;
            case 'AC':
                clearAll();
                break;
            case '%':
                appendValue('%')
                break;
            case '=':
                calculate();
                break;
            case '÷':
                appendValue('/');
                break;
            case 'x':
                appendValue('*');
                break;
            default:
                appendValue(value);
                break;
        }
    });
});
});