// Event Handling
document.getElementById("magicButton").addEventListener("click", () => {
    alert("Button clicked!");
    document.getElementById("magicButton").textContent = "Clicked!";
  });
  
  document.getElementById("hoverBox").addEventListener("mouseover", () => {
    document.getElementById("hoverBox").style.backgroundColor = "lightgreen";
  });
  
  document.getElementById("hoverBox").addEventListener("mouseout", () => {
    document.getElementById("hoverBox").style.backgroundColor = "lightblue";
  });
  
  document.getElementById("keyInput").addEventListener("keypress", (event) => {
    console.log("Key pressed:", event.key);
  });
  
  document.getElementById("magicButton").addEventListener("dblclick", () => {
    alert("Double click secret unlocked! ");
  });
  
  // Tabs
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-content").forEach(c => c.style.display = "none");
      document.getElementById("tab-" + btn.dataset.tab).style.display = "block";
    });
  });
  
  // Form Validation
  document.getElementById("signupForm").addEventListener("submit", function(event) {
    const password = document.getElementById("password").value;
    const feedback = document.getElementById("feedback");
  
    if (password.length < 8) {
      feedback.textContent = "Password must be at least 8 characters long.";
      event.preventDefault();
    } else {
      feedback.textContent = "";
    }
  });
  
  document.getElementById("password").addEventListener("input", function() {
    const feedback = document.getElementById("feedback");
    if (this.value.length < 8) {
      feedback.textContent = "Password too short.";
    } else {
      feedback.textContent = "";
    }
  });
  