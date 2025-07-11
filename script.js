const subjectData = {
  CSE: [
    { code: "MA3451", name: "Discrete Mathematics", credits: 4 },
    { code: "CS3401", name: "Operating Systems", credits: 3 },
    { code: "CS3402", name: "Design and Analysis of Algorithms", credits: 3 },
    { code: "CS3451", name: "Computer Organization and Architecture", credits: 3 },
    { code: "GE3451", name: "Environmental Science", credits: 2 },
    { code: "CS3481", name: "OS Lab", credits: 1.5 },
    { code: "CS3482", name: "Advanced Programming Lab", credits: 1.5 },
  ],
  ECE: [
    { code: "MA3451", name: "Discrete Mathematics", credits: 4 },
    { code: "EC3401", name: "Communication Theory", credits: 3 },
    { code: "EC3402", name: "Electronic Circuits", credits: 3 },
    { code: "EC3451", name: "EM Fields", credits: 3 },
    { code: "GE3451", name: "Environmental Science", credits: 2 },
    { code: "EC3481", name: "Electronic Circuits Lab", credits: 1.5 },
    { code: "EC3482", name: "Communication Lab", credits: 1.5 },
  ],
  // ... Add all other branches (EEE, MECH, CIVIL, AI&DS, CSBS, IT) similarly
};

const gradeMap = {
  "O": 10,
  "A+": 9,
  "A": 8,
  "B+": 7,
  "B": 6,
  "RA": 0,
  "SA": 0,
  "W": 0
};

function loadSubjects() {
  const branch = document.getElementById("branch").value;
  const form = document.getElementById("subject-form");
  form.innerHTML = ""; // Clear previous

  if (!subjectData[branch]) return;

  subjectData[branch].forEach((sub, index) => {
    const label = document.createElement("label");
    label.innerText = `${sub.name} (${sub.credits} credits)`;

    const select = document.createElement("select");
    select.name = `grade${index}`;
    select.dataset.credits = sub.credits;

    Object.keys(gradeMap).forEach(grade => {
      const option = document.createElement("option");
      option.value = grade;
      option.text = grade;
      select.appendChild(option);
    });

    form.appendChild(label);
    form.appendChild(select);
  });
}

function calculateCGPA() {
  const form = document.getElementById("subject-form");
  const selects = form.querySelectorAll("select");

  let totalCredits = 0;
  let totalPoints = 0;

  selects.forEach(select => {
    const grade = select.value;
    const credits = parseFloat(select.dataset.credits);
    const points = gradeMap[grade];

    if (points > 0) {
      totalCredits += credits;
      totalPoints += points * credits;
    }
  });

  const cgpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  document.getElementById("result").innerText = `Your CGPA is: ${cgpa}`;
}

