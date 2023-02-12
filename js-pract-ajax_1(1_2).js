//1

const parser1 = new DOMParser();

const xmlString1 = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const xmlDOM1 = parser1.parseFromString(xmlString1, "text/xml");

const listNode = xmlDOM1.querySelector("list");
const studentNode = listNode.querySelectorAll("student");

const list = listNode.querySelectorAll("student");

const allResults = [];
for (let item of list) {
  item.checked = true;
  const studentNameNode = item.querySelector("name");
  const studentFirstNameNode = studentNameNode.querySelector("first");
  const studentSecondNameNode = studentNameNode.querySelector("second");
  const studentAgeNode = item.querySelector("age");
  const studentProfNode = item.querySelector("prof");
  const langAttr = studentNameNode.getAttribute("lang");

  const result = {
    name:
      studentFirstNameNode.textContent +
      " " +
      studentSecondNameNode.textContent,
    age: Number(studentAgeNode.textContent),
    prof: studentProfNode.textContent,
    lang: langAttr,
  };

  allResults.push(result);
}

let resultObj = {
  list: allResults,
};

console.log(resultObj);

/*
{
  list: [
    { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
    { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
  ]
}*/

//2


const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`

const data = JSON.parse(jsonString);
const jsonList = data.list;

const jsonRes = [];

for (let entry of jsonList) {
  entry.checked = true;
  const jsonResult = {
  name: entry.name,
  age: Number(entry.age),
  prof: entry.prof
}
jsonRes.push(jsonResult);
};

let jsonResultObj = {
  list: jsonRes,
};

console.log(jsonResultObj);

/*
{
  list: [
    { name: 'Petr', age: 20, prof: 'mechanic' },
    { name: 'Vova', age: 60, prof: 'pilot' },
  ]
}
*/