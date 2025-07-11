const subjectData = {
  CSE: [
    { name: "Probability and Statistics", credit: 4 },
    { name: "Operating Systems", credit: 3 },
    { name: "Database Management Systems", credit: 3 },
    { name: "Design and Analysis of Algorithms", credit: 4 },
    { name: "Software Engineering", credit: 3 },
    { name: "Operating Systems Laboratory", credit: 2 },
    { name: "Database Management Systems Laboratory", credit: 2 },
    { name: "Advanced Reading and Writing", credit: 1 }
  ],
  IT: [
    { name: "Discrete Mathematics and Graph Theory", credit: 4 },
    { name: "Operating Systems", credit: 3 },
    { name: "Database Management Systems", credit: 3 },
    { name: "Computer Networks", credit: 3 },
    { name: "Software Engineering", credit: 3 },
    { name: "Operating Systems Laboratory", credit: 2 },
    { name: "Database Management Systems Laboratory", credit: 2 },
    { name: "Advanced Reading and Writing", credit: 1 }
  ],
  ECE: [
    { name: "Probability and Random Processes", credit: 4 },
    { name: "Electronic Circuits II", credit: 3 },
    { name: "Communication Theory", credit: 4 },
    { name: "Linear Integrated Circuits", credit: 3 },
    { name: "Control Systems Engineering", credit: 3 },
    { name: "Electronic Circuits Laboratory", credit: 2 },
    { name: "Linear Integrated Circuits Laboratory", credit: 2 },
    { name: "Professional Communication", credit: 1 }
  ],
  EEE: [
    { name: "Electrical Machines II", credit: 4 },
    { name: "Transmission and Distribution", credit: 3 },
    { name: "Power Electronics", credit: 3 },
    { name: "Measurements and Instrumentation", credit: 3 },
    { name: "Control Systems", credit: 3 },
    { name: "Power Electronics Laboratory", credit: 2 },
    { name: "Control Systems Laboratory", credit: 2 },
    { name: "Advanced Reading and Writing", credit: 1 }
  ],
  MECH: [
    { name: "Engineering Metallurgy", credit: 3 },
    { name: "Kinematics of Machinery", credit: 4 },
    { name: "Thermal Engineering I", credit: 4 },
    { name: "Metrology and Measurements", credit: 3 },
    { name: "Manufacturing Technology II", credit: 3 },
    { name: "Metrology and Measurements Laboratory", credit: 2 },
    { name: "Manufacturing Technology Laboratory II", credit: 2 },
    { name: "Professional Communication", credit: 1 }
  ],
  CIVIL: [
    { name: "Construction Materials", credit: 3 },
    { name: "Strength of Materials II", credit: 4 },
    { name: "Fluid Mechanics", credit: 4 },
    { name: "Surveying", credit: 3 },
    { name: "Environmental Engineering I", credit: 3 },
    { name: "Surveying Laboratory", credit: 2 },
    { name: "Strength of Materials Laboratory", credit: 2 },
    { name: "Advanced Reading and Writing", credit: 1 }
  ],
  "AI&DS": [
    { name: "Probability and Statistics", credit: 4 },
    { name: "Data Warehousing and Data Mining", credit: 3 },
    { name: "Design and Analysis of Algorithms", credit: 4 },
    { name: "Computer Networks", credit: 3 },
    { name: "Software Engineering", credit: 3 },
    { name: "Mini Project", credit: 2 },
    { name: "Design and Analysis of Algorithms Laboratory", credit: 2 },
    { name: "Professional English", credit: 1 }
  ],
  CSBS: [
    { name: "Discrete Mathematics and Graph Theory", credit: 4 },
    { name: "Design and Analysis of Algorithms", credit: 4 },
    { name: "Computer Networks", credit: 3 },
    { name: "Operating Systems", credit: 3 },
    { name: "Software Engineering", credit: 3 },
    { name: "Operating Systems Laboratory", credit: 2 },
    { name: "DAA Laboratory", credit: 2 },
    { name: "Advanced Reading and Writing", credit: 1 }
  ]
};

function loadSubjects() {
  const branch = document.getElementById("branch").value;
  const form = document.getElementById("subject-form");
  form.innerHTML = "";

  if (!branch || !subjectData[branch]) return;

  subjectData[branch].forEach((subject, index) => {
    const div = document.createElement("div");
    div.className = "form-group";
    div.innerHTML = `
      <label>${subject.name} (Credit: ${subject.credit})</label>
      <select id="grade${index}">
        <option value="10">O</option>
        <option value="9">A+</option>
        <option value="8">A</option>
        <option value="7">B+</option>
        <option value="6">B</option>
        <option value="5">C</option>
        <option value="0">RA</option>
      </select>
    `;
    form.appendChild(div);
  });
}

function calculateCGPA() {
  const branch = document.getElementById("branch").value;
  const resultBox = document.getElementById("result");
  
  if (!branch || !subjectData[branch]) {
    resultBox.innerText = "Please select a valid department first";
    resultBox.style.display = "block";
    return;
  }

  let totalCredits = 0;
  let totalPoints = 0;

  subjectData[branch].forEach((subject, index) => {
    const gradeSelect = document.getElementById(`grade${index}`);
    if (!gradeSelect) return;
    
    const grade = parseInt(gradeSelect.value);
    totalCredits += subject.credit;
    totalPoints += grade * subject.credit;
  });

  if (totalCredits === 0) {
    resultBox.innerText = "Please select grades for all subjects";
    resultBox.style.display = "block";
    return;
  }

  const cgpa = (totalPoints / totalCredits).toFixed(2);
  resultBox.innerHTML = `<h3>Your CGPA for 4th Semester is: ${cgpa}</h3>`;
  resultBox.style.display = "block";
}
