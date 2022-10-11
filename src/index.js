import _, { differenceWith, result } from 'lodash';
import moment, { duration } from 'moment';

const dateInput1 = document.getElementById('dateInput1')

dateInput1.addEventListener('change', function() {
    moment.locale('pt-br')
    const ex_1a = moment(dateInput1.value).subtract(15, 'days').format('dddd')
    const ex_1b = moment(dateInput1.value).subtract(60, 'days').format('MMMM') 
    const ex_1c = moment(dateInput1.value).month(11).date(25).format('dddd')

    const result1a = document.getElementById('result1a')
    result1a.innerHTML = `15 dias atrás foi: ${ex_1a}`

    const result1b = document.getElementById('result1b')
    result1b.innerHTML = `60 dias atrás foi: ${ex_1b}`

    const result1c = document.getElementById('result1c')
    result1c.innerHTML = `Nesse ano, o Natal é: ${ex_1c}`
    
})

const showFormatButton = document.getElementById('showFormatButton')

showFormatButton.addEventListener('click', function() {
    const dateInput2 = document.getElementById('dateInput2')
    const format = moment(dateInput2.value).format('DD/MM/yyyy')

    const result2 = document.getElementById('result2')
    result2.innerHTML = `Em formato brasileiro: ${format}`
})

const daysDifferenceButton = document.getElementById('daysDifferenceButton')

daysDifferenceButton.addEventListener('click', function() {
    const dateInput3a = document.getElementById('dateInput3a')
    const dateInput3b = document.getElementById('dateInput3b')

    let differenceDays = moment(dateInput3a.value).diff(moment(dateInput3b.value), 'days')

    differenceDays < 0 ? differenceDays *= -1 : differenceDays

    const result3 = document.getElementById('result3')
    result3.innerHTML = `A diferença entre as datas é de ${differenceDays} dias.`
})

const hourDifferenceButton = document.getElementById('hourDifferenceButton')

hourDifferenceButton.addEventListener('click', function() {
    const dateInput4a = document.getElementById('dateInput4a')
    const dateInput4b = document.getElementById('dateInput4b')

    let differenceHour = moment(dateInput4a.value).diff(moment(dateInput4b.value), 'hours')

    differenceHour < 0 ? differenceHour *= -1 : differenceHour

    const result4 = document.getElementById('result4')
    result4.innerHTML = `A diferença entre as datas é de ${differenceHour} horas.`
})