// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.

const getDATA = (e) => {
  e.preventDefault();
  const code = emp.options[emp.selectedIndex].value;

  fetch("Employees.json")
    .then((res) => res.json())
    .then((data) => {
      const res = data.Employees.filter((data) => data.employeeCode === code);
      //console.log(res);
      employeeEmail.innerHTML = res[0].emailAddress;
      // data.Employees.forEach((element, idx) => {
      //   if (data.Employees[idx].employeeCode === code) {
      //     employeeEmail.innerHTML = data.Employees[idx].emailAddress;
      //   }
      // });
    });
};

const btn = document.querySelector("#buttonSubmit");
const emp = document.querySelector("#selectEmployeeCode");
const employeeEmail = document.querySelector("#employeeEmail");

btn.addEventListener("click", getDATA);
