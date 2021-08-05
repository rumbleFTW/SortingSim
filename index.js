function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function shuffle() {
  for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1))

    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  for (let i = 0; i < divs.length; i++) {
    update(divs[i], array[i])
  }
}

function load() {
  for (let i = 0; i < divs.length; i++) {
    update(divs[i], array[i])
  }
}

function update(item, hei) {
  item.style.height = eval(hei * 0.99).toString() + '%'
}

function highlight(item, color) {
  item.style.background = color
}

function vis() {
  var val = document.getElementById('algo').value
  console.log(val)
  switch (val) {
    case 'bubble':
      bubbleSort()
      break
    case 'insertion':
      insertionSort()
      break
    case 'selection':
      selectionSort()
      break
  }
}

var array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100,
]
var btn1 = document.getElementById('vis')
var div1 = document.getElementById('1')
var div2 = document.getElementById('2')
var div3 = document.getElementById('3')
var div4 = document.getElementById('4')
var div5 = document.getElementById('5')
var div6 = document.getElementById('6')
var div7 = document.getElementById('7')
var div8 = document.getElementById('8')
var div9 = document.getElementById('9')
var div10 = document.getElementById('10')
var div11 = document.getElementById('11')
var div12 = document.getElementById('12')
var div13 = document.getElementById('13')
var div14 = document.getElementById('14')
var div15 = document.getElementById('15')
var div16 = document.getElementById('16')
var div17 = document.getElementById('17')
var div18 = document.getElementById('18')
var div19 = document.getElementById('19')
var div20 = document.getElementById('20')
var div21 = document.getElementById('21')
var div22 = document.getElementById('22')
var div23 = document.getElementById('23')
var div24 = document.getElementById('24')
var div25 = document.getElementById('25')
var div26 = document.getElementById('26')
var div27 = document.getElementById('27')
var div28 = document.getElementById('28')
var div29 = document.getElementById('29')
var div30 = document.getElementById('30')
var div31 = document.getElementById('31')
var div32 = document.getElementById('32')
var div33 = document.getElementById('33')
var div34 = document.getElementById('34')
var div35 = document.getElementById('35')
var div36 = document.getElementById('36')
var div37 = document.getElementById('37')
var div38 = document.getElementById('38')
var div39 = document.getElementById('39')
var div40 = document.getElementById('40')
var div41 = document.getElementById('41')
var div42 = document.getElementById('42')
var div43 = document.getElementById('43')
var div44 = document.getElementById('44')
var div45 = document.getElementById('45')
var div46 = document.getElementById('46')
var div47 = document.getElementById('47')
var div48 = document.getElementById('48')
var div49 = document.getElementById('49')
var div50 = document.getElementById('50')
var div51 = document.getElementById('51')
var div52 = document.getElementById('52')
var div53 = document.getElementById('53')
var div54 = document.getElementById('54')
var div55 = document.getElementById('55')
var div56 = document.getElementById('56')
var div57 = document.getElementById('57')
var div58 = document.getElementById('58')
var div59 = document.getElementById('59')
var div60 = document.getElementById('60')
var div61 = document.getElementById('61')
var div62 = document.getElementById('62')
var div63 = document.getElementById('63')
var div64 = document.getElementById('64')
var div65 = document.getElementById('65')
var div66 = document.getElementById('66')
var div67 = document.getElementById('67')
var div68 = document.getElementById('68')
var div69 = document.getElementById('69')
var div70 = document.getElementById('70')
var div71 = document.getElementById('71')
var div72 = document.getElementById('72')
var div73 = document.getElementById('73')
var div74 = document.getElementById('74')
var div75 = document.getElementById('75')
var div76 = document.getElementById('76')
var div77 = document.getElementById('77')
var div78 = document.getElementById('78')
var div79 = document.getElementById('79')
var div80 = document.getElementById('80')
var div81 = document.getElementById('81')
var div82 = document.getElementById('82')
var div83 = document.getElementById('83')
var div84 = document.getElementById('84')
var div85 = document.getElementById('85')
var div86 = document.getElementById('86')
var div87 = document.getElementById('87')
var div88 = document.getElementById('88')
var div89 = document.getElementById('89')
var div90 = document.getElementById('90')
var div91 = document.getElementById('91')
var div92 = document.getElementById('92')
var div93 = document.getElementById('93')
var div94 = document.getElementById('94')
var div95 = document.getElementById('95')
var div96 = document.getElementById('96')
var div97 = document.getElementById('97')
var div98 = document.getElementById('98')
var div99 = document.getElementById('99')
var div100 = document.getElementById('100')
divs = [
  div1,
  div2,
  div3,
  div4,
  div5,
  div6,
  div7,
  div8,
  div9,
  div10,
  div11,
  div12,
  div13,
  div14,
  div15,
  div16,
  div17,
  div18,
  div19,
  div20,
  div21,
  div22,
  div23,
  div24,
  div25,
  div26,
  div27,
  div28,
  div29,
  div30,
  div31,
  div32,
  div33,
  div34,
  div35,
  div36,
  div37,
  div38,
  div39,
  div40,
  div41,
  div42,
  div43,
  div44,
  div45,
  div46,
  div47,
  div48,
  div49,
  div50,
  div51,
  div52,
  div53,
  div54,
  div55,
  div56,
  div57,
  div58,
  div59,
  div60,
  div61,
  div62,
  div63,
  div64,
  div65,
  div66,
  div67,
  div68,
  div69,
  div70,
  div71,
  div72,
  div73,
  div74,
  div75,
  div76,
  div77,
  div78,
  div79,
  div80,
  div81,
  div82,
  div83,
  div84,
  div85,
  div86,
  div87,
  div88,
  div89,
  div90,
  div91,
  div92,
  div93,
  div94,
  div95,
  div96,
  div97,
  div98,
  div99,
  div100,
]

async function insertionSort() {
  btn1.textContent = 'Visualizing...'
  for (let i = 0; i < array.length; i++) {
    highlight(divs[i], 'red')
    for (let j = 0; j < i; j++) {
      highlight(divs[j], 'red')
      await sleep(0.01)
      if (array[j] > array[i]) {
        highlight(divs[i], 'red')
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
        load()
      }
      highlight(divs[j], 'white')
    }
    highlight(divs[i], 'white')
  }
  btn1.textContent = 'Visualise!'
  for (let i = 0; i < divs.length; i++) {
    highlight(divs[i], 'lightgreen')
    await sleep(0.1)
  }
  await sleep(500)
  for (let i = 0; i < divs.length; i++) {
    highlight(divs[i], 'white')
  }
}

async function bubbleSort() {
  btn1.textContent = 'Visualizing...'
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      highlight(divs[j], 'red')
      await sleep(0.01)
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1]
        array[j + 1] = array[j]
        array[j] = temp
        load()
      }
      highlight(divs[j], 'white')
    }
  }
  btn1.textContent = 'Visualise!'
  for (let i = 0; i < divs.length; i++) {
    highlight(divs[i], 'lightgreen')
    await sleep(0.1)
  }
  await sleep(500)
  for (let i = 0; i < divs.length; i++) {
    highlight(divs[i], 'white')
  }
}

async function selectionSort() {
  btn1.textContent = 'Visualizing...'
  for (let i = 0; i < array.length; i++) {
    highlight(divs[i], 'red')
    for (let j = i + 1; j < array.length; j++) {
      highlight(divs[j], 'red')
      await sleep(0.01)
      if (array[j] < array[i]) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
        load()
      }
      highlight(divs[j], 'white')
    }
    highlight(divs[i], 'white')
  }
  btn1.textContent = 'Visualise!'
  for (let i = 0; i < divs.length; i++) {
    highlight(divs[i], 'lightgreen')
    await sleep(0.1)
  }
  await sleep(500)
  for (let i = 0; i < divs.length; i++) {
    highlight(divs[i], 'white')
  }
}
