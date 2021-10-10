const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator-keys');
const display = document.querySelector('.calculator-display');
const createResultString = (key, displayedNum, state) => {
    const modValue = state.modValue;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const operator = state.operator;
    const firstValue = state.firstValue;
    const previousKeyType = state.previousKeyType;
}
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;
    const createResultString = (key, displayedNum, state) => {
        const keyContent = key.textContent;
        const{ action } = key.dataset;
        const {
            firstValue,
            modValue,
            operator,
            previousKeyType
        } = state;
    }
    const getKeyType = (key) => {
        const { action } = key.dataset;
        if (!action) return 'number';
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) return 'operator';
        
        return action;
    }
    const createResultString = () => {
        if (keyType === 'number') {
            return displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate'
            ?keyContent
            :displayedNum + keyContent;
            //calculator.dataset.previousKeyType = 'number';
            }
        if (keyType === 'decimal') {
            if (!displayedNum.includes('.')) return displayedNum + '.';
            if (previousKeyType === 'operator'|| previousKeyType === 'calculate') return '0.';
            //calculator.dataset.previousKeyType = 'decimal';
            return displayedNum;
            }
        }
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;

            return firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate'
                ? calculate(firstValue, operator, displayedNum)
                : displayedNum;
            
            /*key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = 'operator';
            //calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action; */
        }
        if (keyType === 'calculate') {
            const calculate = (n1, operator, n2) => {
                const firstNum = parseFloat(n1);
                const secondNum = parseFloat(n2)
                if (operator === 'add')  return firstNum + secondNum;
                if (operator === 'subtract') return firstNum - secondNum;
                if (operator === 'multiply') return firstNum * secondNum;
                if (operator === 'divide') return firstNum / secondNum;
            }
            return firstValue
                ? previousKeyType === 'calculate'
                   ? calculate(firstValue,operator, modValue)
                   : calculate(firstValue, operator, displayedNum)
                : displayedNum
          /*  calculator.dataset.modValue = secondValue;
            calculator.dataset.previousKeyType = 'calculate'; */
        }
        if (keyType === 'clear') {
            if (key.textContent === 'AC') {
                calculator.dataset.firstValue = '';
                calculator.dataset.modValue = '';
                calculator.dataset.operator = '';
                calculator.dataset.previousKeyType = '';
            }
            else {
                key.textContent = 'AC';
            }
            display.textContent = 0;

            calculator.dataset.previousKeyType = 'clear';
        }
        if (keyType !== 'clear') {
            const clearButton = calculator.querySelector('[data-action=clear]');
            clearButton.textContent = 'CE';
        }
        Array.from(key.parentNode.children).forEach(k => k.classList.remove('in-depressed'));

    }
});