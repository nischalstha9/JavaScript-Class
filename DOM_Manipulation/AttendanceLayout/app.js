const STATUS = {
  PRESENT: "present",
  ABSENT: "absent",
  LATE: "late",
  UNSET: "unset",
};
const LocalStorageFileName = "studentAttendanceData";
const studentsData =
  JSON.parse(localStorage.getItem(LocalStorageFileName)) || [];

const getRolls = () => {
  return studentsData.map((student) => {
    return student.roll;
  });
};

let rolls = [];

const refreshRolls = () => {
  rolls = getRolls();
};

refreshRolls();

// [
//   {
//     position: 2,
//     roll: 1,
//     studentName: "Nischal Shrestha",
//     status: STATUS.PRESENT,
//   },
//   {
//     position: 1,
//     roll: 2,
//     studentName: "Sugam Shrestha",
//     status: STATUS.ABSENT,
//   },
// ];

function getSortedStudentsByRoll(students) {
  return students.sort((student1, student2) => {
    return student1.roll - student2.roll;
  });
}

function getStudentHTML(student) {
  return `
    <tr>
        <td>${student.roll}</td>
        <td>${student.studentName}</td>
        <td>
            <input ${
              student.status === "present" && "checked"
            } type="radio" class="radios" data-studentRoll="${
    student.roll
  }" name="status-${
    student.roll
  }" id="present"  value="present" onclick="setStudentState(${
    student.roll
  },'present')">Present
            <input ${
              student.status === "absent" && "checked"
            } type="radio" class="radios" data-studentRoll="${
    student.roll
  }" name="status-${
    student.roll
  }" id="absent" value="absent" onclick="setStudentState(${
    student.roll
  },'absent')">Absent
            <input ${
              student.status === "late" && "checked"
            } type="radio" class="radios" data-studentRoll="${
    student.roll
  }" name="status-${
    student.roll
  }" id="late" value="late" onclick="setStudentState(${
    student.roll
  },'late')">Late
        </td>
    </tr>
    `;
}

function getStudentsHTML(students) {
  return students.map((student) => {
    return getStudentHTML(student);
  });
}

const tbody = document.querySelector("tbody");

const refreshPageData = () => {
  let html = getStudentsHTML(getSortedStudentsByRoll(studentsData)).join("");
  tbody.innerHTML = html;
};

refreshPageData();

const saveData = () => {
  localStorage.setItem(LocalStorageFileName, JSON.stringify(studentsData));
};

function setAllPresent() {
  studentsData.forEach((student) => {
    student.status = STATUS.PRESENT;
  });
  saveData();
  refreshPageData();
}

const radios = document.querySelectorAll(".radios");

function setStudentState(studentId, state) {
  let index = studentsData.findIndex((student) => {
    return parseInt(student.roll) === parseInt(studentId);
  });
  let student = studentsData[index];
  student.status = state;
  saveData();
  refreshPageData();
}

// radios.forEach((radio) => {
//   radio.addEventListener("click", (e) => {
//     let roll = e.target.dataset.studentroll;
//     let status = e.target.value;
//     let index = studentsData.findIndex((student) => {
//       return parseInt(student.roll) === parseInt(roll);
//     });
//     let student = studentsData[index];
//     student.status = status;
//     console.log(student);
//     console.log(studentsData);
//     saveData();
//     // refreshPageData();
//   });
// });

const newStudentForm = document.querySelector("#NewStudentForm");
const studentNameInp = document.querySelector("#new_student_name");
const err = document.querySelector(".error");

newStudentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(newStudentForm);
  const student_name = formData.get("student_name");
  const student_roll = formData.get("student_roll");
  let student = {
    position: studentsData.length + 1,
    status: STATUS.UNSET,
    studentName: student_name,
    roll: student_roll,
  };

  if (!rolls.includes(student_roll)) {
    studentsData.push(student);
    saveData();
    refreshPageData();
    refreshRolls();
    err.innerText = "";
  } else {
    err.innerText = "Student with given roll already exists";
  }
  newStudentForm.reset();
  studentNameInp.focus();
});
