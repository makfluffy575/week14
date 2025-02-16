const list = document.getElementById("list");

//создаем пустой массив
const grades = new Array(12);

//заполняем его рандомными значениями от 1 до 100
for (let i = 0; i < grades.length; i++) {
  grades[i] = 1 + Math.floor(Math.random() * 100);
}

console.log(grades);

const listItem = document.createElement("li");
list.append(listItem);
listItem.innerText = `Оценки: ${grades}`;
listItem.innerText = listItem.innerText.replaceAll(`,`, `, `);


//рассчитываем средний балл
const getAverageGrade = () => {
  let sum = 0;
  grades.forEach((item) => (sum += item));
  console.log(sum);
  const averageGrade = Math.round(sum / grades.length);
  console.log(averageGrade);

  const listItem = document.createElement("li");
  list.append(listItem);
  listItem.innerText = `Cредний балл: ${averageGrade}`;
};
getAverageGrade();

//находим максимальное значение
const getMaxGrade = () => {
  const maxGradesRange = grades.map((item) => item).sort((a, b) => a - b);
  console.log(maxGradesRange);
  const maxGrade = maxGradesRange.pop();
  console.log(maxGrade);

  const listItem = document.createElement("li");
  list.append(listItem);
  listItem.innerText = `Максимальный балл: ${maxGrade}`;
};
getMaxGrade();

//находим минимальное значение 1й способ
const getMinGrade = () => {
  const minGradesRange = grades.map((item) => item).sort((a, b) => b - a);
  console.log(minGradesRange);
  const minGrade = minGradesRange.pop();
  console.log(minGrade);
};
getMinGrade();

//находим минимальное значение 2й способ
const getMinGrade2 = () => {
  const minGradesRange = grades.map((item) => item).sort((a, b) => a - b);
  console.log(minGradesRange);
  const minGrade = minGradesRange.shift();
  console.log(minGrade);

  const listItem = document.createElement("li");
  list.append(listItem);
  listItem.innerText = `Минимальный балл: ${minGrade}`;
};
getMinGrade2();

//60 баллов и выше
const countSuccessGrades = () => {
  const successGrades = grades
    .map((item) => item)
    .filter((item) => item >= 60);
  console.log(successGrades.length);

  //менее 60 баллов
  // console.log(grades.length - successGrades.length);

  const listItem = document.createElement("li");
  list.append(listItem);
  listItem.innerText = `Количество студентов с положительными оценками: ${successGrades.length}`;
};

countSuccessGrades();

//менее 60 баллов
const countFailGrades = () => {
  const failGrades = grades
    .map((item) => item)
    .filter((item) => item < 60);
  console.log(failGrades.length);

  const listItem = document.createElement("li");
  list.append(listItem);
  listItem.innerText = `Количество студентов с отрицательными оценками: ${failGrades.length}`;
};

countFailGrades();

//оценки-буквы
const getLetterGrades = () => {
  const gradesLetter = grades.map((item) => item);
  for (let i = 0; i < gradesLetter.length; i++) {
    if (gradesLetter[i] >= 80) {
      gradesLetter[i] = "A";
    } else if (gradesLetter[i] <= 79 && gradesLetter[i] >= 60) {
      gradesLetter[i] = "B";
    } else if (gradesLetter[i] <= 59 && gradesLetter[i] >= 40) {
      gradesLetter[i] = "C";
    } else if (gradesLetter[i] <= 39 && gradesLetter[i] >= 20) {
      gradesLetter[i] = "D";
    } else {
      gradesLetter[i] = "E";
    }
  }
  console.log(gradesLetter);

  const listItem = document.createElement("li");
  list.append(listItem);
  listItem.innerText = `Буквенные оценки: ${gradesLetter}`;
  listItem.innerText = listItem.innerText.replaceAll(`,`, `, `);
};

getLetterGrades();
