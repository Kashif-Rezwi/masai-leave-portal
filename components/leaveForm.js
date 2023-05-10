const leaveForm = () => {
  let date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Add leading zero to month if needed
  const day = ("0" + date.getDate()).slice(-2); // Add leading zero to day if needed
  const startDate = `${year}-${month}-${day}`; // Combine year, month, and day with slashes
  const endDate = startDate;
  console.log(endDate);

  return `
        <input required name="uniqueId" type="text" placeholder="Unique ID" />
        <input required name="fullName" type="text" placeholder="Full Name" />
        <textarea
            name="reasonForLeave"
            required
            placeholder="Reason for leave"
        ></textarea>
        <div>
            <select required name="designation">
            <option value="Designation">Designation</option>
            <option value="Employee">Employee</option>
            <option value="Student">Student</option>
            </select>

            <select required name="overseer">
            <option value="Overseer">Overseer</option>
            <option value="EC">EC</option>
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
            </select>
        </div>
        <div>
            <label>
            <p>Leave Start Date</p>
            <input required name="leaveStartDate" type="date" min=${startDate} />
            </label>
            <label>
            <p>Leave End Date</p>
            <input required name="leaveEndDate" type="date" min=${endDate} />
            </label>
        </div>
        <input type="submit" value="APPLY" />
    `;
};

export default leaveForm;

const LeaveForm = document.querySelector("form");
LeaveForm.innerHTML = leaveForm();
