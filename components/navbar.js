const navbar = () => {
  return `
      <div>
         <a href="/">Leave Request</a>
      </div>
      <div>
         <a href="dashboard.html">Dashboard</a>
         <a href="status.html">Status</a>
      </div>
    `;
};

export default navbar;

const navSection = document.querySelector("nav");
navSection.innerHTML = navbar();
