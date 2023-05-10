const filterBox = () => {
  return `
    <div>
        <select id="FilterByDesignation" name="FilterByDesignation" onChange="SelectDesignationFunc()">
        <option value="FilterByDesignation">Filter By Designation</option>
        <option value="Employee">Employee</option>
        <option value="Student">Student</option>
        </select>
    </div>
    <div>
        <select id="SortByDays" name="SortByDays" onChange="SelectSortingFunc()">
        <option value="SortByDays">Sort By Days</option>
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
        </select>
    </div>
    <div>
        <input
        oninput="debounce(searchFunc, 2000)"
        id="SearchByName"
        type="text"
        placeholder="Search by Name"
        />
    </div>
    `;
};

export default filterBox;

const filter = document.querySelector(".filter");
filter.innerHTML = filterBox();
