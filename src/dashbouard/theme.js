const themeMap = {
  dark: 'light',
  light: 'solar',
  solar: 'dark'
};
let welcomeEle = document.getElementById('welcomeEle');
const theme = localStorage.getItem('theme');
const bodyClass = document.body.classList;
theme && bodyClass.add(theme) || (bodyClass.add("dark"), localStorage.setItem('theme', "dark"));

function toggleTheme() {
  const current = localStorage.getItem('theme');
  const next = themeMap[current];
  bodyClass.replace(current, next);
  localStorage.setItem('theme', next);
}
document.getElementById('themeButton').onclick = toggleTheme;
/*Selected Tab*/
function selectTab(tabIndex) {
  //Hide All Tabs
  document.getElementById('tab1Content').style.display="none";
  document.getElementById('tab2Content').style.display="none";
  document.getElementById('tab3Content').style.display="none";



  //Show the Selected Tab
  document.getElementById('tab' + tabIndex + 'Content').style.display="block";  
}
/* remove show class*/
setTimeout(function() { welcomeEle.classList.remove('show'); }, 4000);

/* start chart */
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["O-", "O+", "A-", "A+", "AB-","AB+","B-","B+"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#e74c3c","#e67e22","#27ae60"],
          data: [2478,5267,734,784,433,700,100,200]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Statictics in Pie Chart'
      }
    }
});