let LeaveStatus = JSON.parse(localStorage.getItem("LeaveStatus")) || [];

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
    td3.innerText = el.totalDays;
    let td4 = document.createElement("td");
    td4.innerText = el.overseer;
    let td5 = document.createElement("td");
    td5.innerText = el.status;
    td5.style.fontWeight = "500";
    td5.style.color =
      el.status === "Granted"
        ? "#198038"
        : el.status === "Rejected"
        ? "#da1e28"
        : "#ff832b";

    tr.append(td1, td2, td3, td4, td5);
    tbody.append(tr);
  });
};

showDataTable(LeaveStatus);

////////////////////////////////////////////////////
let application = [];

const SelectDesignationFunc = () => {
  document.getElementById("SearchByName").value = null;

  let designation = document.getElementById("FilterByDesignation").value;
  if (designation === "FilterByDesignation") {
    showDataTable(LeaveStatus);
  } else {
    application = LeaveStatus.filter((el) => el.designation === designation);
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
      application = LeaveStatus.sort((a, b) => a.totalDays - b.totalDays);
      showDataTable(application);
    }
  } else if ("Descending") {
    if (application.length > 0) {
      application = application.sort((a, b) => b.totalDays - a.totalDays);
      showDataTable(application);
    } else {
      application = LeaveStatus.sort((a, b) => a.totalDays - b.totalDays);
      showDataTable(application);
    }
  }
};

////////////////////////////////////////////////////

const searchFunc = () => {
  const SearchByName = document.getElementById("SearchByName").value;
  application = LeaveStatus.filter((el) => el.fullName === SearchByName);
  if (application.length === 0) {
    showDataTable(LeaveStatus);
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
