function addStudent() {
    alert("Add Student feature coming soon!");
}

function updateAttendance() {
    const total = 1;
    const present = 1;
    const absent = total - present;

    document.getElementById("totalStudents").textContent = total;
    document.getElementById("presentStudents").textContent = present;
    document.getElementById("absentStudents").textContent = absent;

    const percentage = (present / total) * 100;
    document.getElementById("attendancePercentage").textContent =
        percentage.toFixed(0) + "%";
}

updateAttendance();