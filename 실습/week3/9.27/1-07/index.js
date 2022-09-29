var persons = [
    { firstname: "Malcom", lastname: "Reynolds" },
    { firstname: "Kaylee", lastname: "Frye" },
    { firstname: "Jayne", lastname: "Cobb" },
];

document.write("일반함수<br/>");
function getFullName(item) {
    var fullname = item.firstname + " " + item.lastname;
    return fullname;
}
document.write(persons.map(getFullName));

// document.write("<br>");
// var numbers = [4, 9, 16, 25];
// var x = numbers.map(Math.sqrt);
// document.write(x);

document.write("<br/><br/>화살표함수<br/>");

//화살표 함수 이용
document.write(
    persons.map((item, idx) => {
        console.log(`item : ${item.firstname}, ${item.lastname}, idx : ${idx}`);
        var fullname = item.firstname + " " + item.lastname;
        return fullname;
    })
);

document.write("<br>");
var numbers = [4, 9, 16, 25];
var x = numbers.map((item) => Math.sqrt(item));
document.write(x);
