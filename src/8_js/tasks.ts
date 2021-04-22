// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму.

export function sum(...nums: Array<any>): number {
    //...здесь пишем код.
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    // В return стоит "заглушка", чтоб typescript не ругался
    return sum
}


// 2. Функция getTriangleType принимает три параметра:

// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c && a === c) {
            return "10"
        }
        if (a === b || b === c || c === a) {
            return "01"
        }
        return "11"
    } else {
        return "00"
    }


    // В return стоит "заглушка", чтоб typescript не ругался

}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    const arr = number.toString().split('')
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += +arr[i]
    }
    // В return стоит "заглушка", чтоб typescript не ругался
    return sum
}


// 4. Функция принимает isEvenIndexSumGreater параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let evenSum = 0
    let oddSum = 0

    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || i % 2 === 0) {
            evenSum += arr[i]
        } else {
            oddSum += arr[i]
        }
    }
    if (evenSum > oddSum) {
        return true
    } else return false
    // В return стоит "заглушка", чтоб typescript не ругался
    return true
}


// 5. Функция isSquareGreater принимает два параметра: площадь круга и
// площадь квадрата. Функция должна возвращать true если круг не будет выступать за пределы
// квадрата и false в противном случае. Центры фигур совпадают.

export function isSquareGreater(areaCr: number, areaSq: number): boolean {
    //...здесь пишем код.
    if (areaSq / areaCr >= 4 / 3.14) {
        return true
    } else return false
    // В return стоит "заглушка", чтоб typescript не ругался
}


// 6. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено

export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    let counter = 0;
    const arr = []
    let amountCopy = amountOfMoney
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    while (amountCopy > 0) {
        if ((amountCopy - banknotes[counter]) >= 0) {
            amountCopy = amountCopy - banknotes[counter]
            arr.push(banknotes[counter])
        } else if (counter < banknotes.length) {
            counter++
        } else break
    }
    // В return стоит "заглушка", чтоб typescript не ругался
    return arr
}