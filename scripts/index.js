let LeaveRecords = JSON.parse(localStorage.getItem("LeaveRecords")) || [];
let LeaveStatus = JSON.parse(localStorage.getItem("LeaveStatus")) || [];

const LeaveForm = document.querySelector("form");
LeaveForm.addEventListener("submit", LeaveRequest);

function LeaveRequest(e) {
  e.preventDefault();
  let formData = {};
  let N = LeaveForm.elements.length;
  for (let i = 0; i <= N - 1; i++) {
    let key = LeaveForm.elements[i].name;
    let value = LeaveForm.elements[i].value;
    if (key !== "") {
      if (key === "leaveStartDate" || key === "leaveEndDate") {
        value = value.split("-").reverse().join("/");
      }
      formData[key] = value;
    }
  }
  let otp = Math.floor(Math.random() * (9999 - 1000) + 1000);
  formData["otp"] = otp;
  formData["status"] = "Pending";
  let totalDays = findDaysDIff(formData.leaveStartDate, formData.leaveEndDate);
  formData["totalDays"] = totalDays;

  isDuplicateID = LeaveStatus.filter((el) => el.uniqueId === formData.uniqueId);

  if (isDuplicateID.length === 0) {
    alert("Your Leave Application Submitted Successfully.");
    LeaveRecords.push(formData);
    localStorage.setItem("LeaveRecords", JSON.stringify(LeaveRecords));
    LeaveStatus.push(formData);
    localStorage.setItem("LeaveStatus", JSON.stringify(LeaveStatus));
    LeaveForm.reset();
  } else {
    alert("Duplicate Unique ID Detected! Please Enter Different Unique ID.");
  }
}

const findDaysDIff = (start, end) => {
  start = start.split("/");
  start = [start[1], start[0], start[2]].join("/");
  start = new Date(start);

  end = end.split("/");
  end = [end[1], end[0], end[2]].join("/");
  end = new Date(end);

  let difference = end.getTime() - start.getTime();
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return TotalDays + 1;
};
