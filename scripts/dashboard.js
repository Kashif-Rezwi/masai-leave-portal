let LeaveRecords = JSON.parse(localStorage.getItem("LeaveRecords")) || [];

let LeaveStatus = JSON.parse(localStorage.getItem("LeaveStatus")) || [];

//////////////////////////////////////////////////

const showDataTable = (DATA) => {
  const tbody = document.querySelector("tbody");

  tbody.innerHTML = null;
  DATA.forEach((el) => {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = el.uniqueId;
    let td2 = document.createElement("td");
    td2.innerText = el.fullName;
    let td3 = document.createElement("td");
    td3.innerText = el.reasonForLeave;
    let td4 = document.createElement("td");
    td4.innerText = el.designation;
    let td5 = document.createElement("td");
    td5.innerText = el.leaveStartDate;
    let td6 = document.createElement("td");
    td6.innerText = el.leaveEndDate;
    let td7 = document.createElement("td");
    td7.innerText = el.overseer;
    let td8 = document.createElement("td");
    td8.innerText = el.otp;
    let td9 = document.createElement("td");

    let acceptButton = document.createElement("button");
    acceptButton.innerText = "Grant Leave";
    acceptButton.className = "acceptButton";
    acceptButton.addEventListener("click", () => {
      handleAccecptRequest(el.uniqueId);
    });

    let rejectButton = document.createElement("button");
    rejectButton.innerText = "Reject Leave";
    rejectButton.className = "rejectButton";
    rejectButton.addEventListener("click", () => {
      handleRejectRequest(el.uniqueId);
    });

    td9.append(acceptButton, rejectButton);

    tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);
    tbody.append(tr);
  });
};

showDataTable(LeaveRecords);

//////////////////////////////////////////////////

const handleRejectRequest = (ID) => {
  LeaveRecords = LeaveRecords.filter((el) => el.uniqueId !== ID);
  localStorage.setItem("LeaveRecords", JSON.stringify(LeaveRecords));
  showDataTable(LeaveRecords);

  LeaveStatus = LeaveStatus.map((el) => {
    if (el.uniqueId === ID) {
      return { ...el, status: "Rejected" };
    }
    return el;
  });

  localStorage.setItem("LeaveStatus", JSON.stringify(LeaveStatus));
};

//////////////////////////////////////////////////

const handleAccecptRequest = (ID) => {
  let modal = document.querySelector(".modal");
  modal.style.display = "flex";

  let application = LeaveRecords.filter((el) => el.uniqueId === ID);
  application = application[0];

  let applicant = document.querySelector(".applicant");
  applicant.innerText = application.fullName;

  let overseer = document.querySelector(".overseer");
  overseer.innerText = application.overseer;

  let from = document.querySelector(".from");
  from.innerText = application.leaveStartDate;

  let to = document.querySelector(".to");
  to.innerText = application.leaveEndDate;

  let totalDays = document.querySelector(".totalDays");
  totalDays.innerText =
    application.totalDays <= 1
      ? application.totalDays + " Day"
      : application.totalDays + " Days";

  const inputData = document.querySelector("form");
  inputData.addEventListener("submit", (e) => {
    handleVarifyOtp(e, ID);
  });
};

////////////////////////////////////////////////////

const handleVarifyOtp = (e, ID) => {
  e.preventDefault();

  let application = LeaveRecords.filter((el) => el.uniqueId === ID);

  const inputForm = document.querySelector("form");
  let input = "";
  let N = inputForm.elements.length;
  for (let i = 0; i <= N - 1; i++) {
    let inputValue = inputForm[i].value;
    if (inputValue !== "") {
      input += inputValue;
    }
  }

  input = +input;
  let otp = application[0].otp;

  if (input === otp) {
    LeaveRecords = LeaveRecords.filter((el) => el.uniqueId !== ID);
    localStorage.setItem("LeaveRecords", JSON.stringify(LeaveRecords));

    LeaveStatus = LeaveStatus.map((el) => {
      if (el.uniqueId === ID) {
        return {
          ...el,
          status: "Granted",
        };
      }
      return el;
    });

    localStorage.setItem("LeaveStatus", JSON.stringify(LeaveStatus));

    showDataTable(LeaveRecords);
    inputForm.reset();
    closeModalFunc();
    alert("Your leave application is granted.");
  } else {
    alert("Invalid OTP! Please try again.");
    inputForm.reset();
    closeModalFunc();
    location.reload();
  }
};

////////////////////////////////////////////////////

const closeModal = document.querySelector(".closeModal");
closeModal.addEventListener("click", () => {
  closeModalFunc();
});

const closeModalFunc = () => {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
  const inputForm = document.querySelector("form");
  inputForm.reset();
};

////////////////////////////////////////////////////
let application = [];

const SelectDesignationFunc = () => {
  document.getElementById("SearchByName").value = null;

  let designation = document.getElementById("FilterByDesignation").value;
  if (designation === "FilterByDesignation") {
    showDataTable(LeaveRecords);
  } else {
    application = LeaveRecords.filter((el) => el.designation === designation);
    showDataTable(application);
    document.getElementById("SortByDays").value = "SortByDays";
  }
};

////////////////////////////////////////////////////

const SelectSortingFunc = () => {
  document.getElementById("SearchByName").value = null;
  let sorting = document.getElementById("SortByDays").value;
  if (sorting === "Ascending") {
    if (application.length > 0) {
      application = application.sort((a, b) => a.totalDays - b.totalDays);
      showDataTable(application);
    } else {
      application = LeaveRecords.sort((a, b) => a.totalDays - b.totalDays);
      showDataTable(application);
    }
  } else if ("Descending") {
    if (application.length > 0) {
      application = application.sort((a, b) => b.totalDays - a.totalDays);
      showDataTable(application);
    } else {
      application = LeaveRecords.sort((a, b) => a.totalDays - b.totalDays);
      showDataTable(application);
    }
  } else {
    showDataTable(LeaveRecords);
  }
};

////////////////////////////////////////////////////

const searchFunc = () => {
  const SearchByName = document.getElementById("SearchByName").value;
  console.log(SearchByName);
  application = LeaveRecords.filter((el) => el.fullName === SearchByName);
  if (application.length === 0) {
    showDataTable(LeaveRecords);
  } else {
    showDataTable(application);
  }

  document.getElementById("FilterByDesignation").value = "FilterByDesignation";
  document.getElementById("SortByDays").value = "SortByDays";
};

let id;
function debounce(func, delay) {
  if (id) {
    clearTimeout(id);
  }

  id = setTimeout(function () {
    func();
  }, delay);
}
