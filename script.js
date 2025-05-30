"use strict";

//slogans change everytime you refresh the page 

document.addEventListener("DOMContentLoaded", () => {
    const slogans = [
      "Empowering Innovators, Shaping the Digital Future!",
      "From Data to Decisions: Lead with Technology!",
      "Your Code, Your Impact—Transform the World!",
      "Innovate, Implement, Inspire—The Future is Yours!",
      "Unlocking Possibilities, One System at a Time!",
      "Building Smart Solutions for a Smarter Tomorrow!",
      "Where IT Meets Innovation—Your Journey Begins Here!",
      "Think Big, Code Smart, Change the World!",
      "Master Technology, Lead the Digital Revolution!",
      "From Classroom to Career—Excel in Information Systems!"
    ];
  
    const sloganElement = document.getElementById("slogan");
    const randomIndex = Math.floor(Math.random() * slogans.length);
    sloganElement.textContent = slogans[randomIndex];
  }
  );
// toggle bios

  const toggleHeads = document.querySelectorAll(".toggle-bio");
  toggleHeads.forEach(head => {
    head.addEventListener("click", () => {
      const bio = head.parentElement.querySelector(".bio");
      if (bio) bio.classList.toggle("hidden");
    });
  });

  
// for contact form
window.addEventListener("load", function() {
  const form=this.document.getElementById("contactForm");
  form.addEventListener("submit", function(e){
    const name=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const message=document.getElementById("message").value.trim();

    if (name===""||email===""||message===""){
      alert("Fill in all required fields.");
      e.preventDefault();
    }
    else if (!email.includes("@")||!email.includes(".")) {
      alert("Please enter a valid email address.");
      e.preventDefault();
    }
  });
});

// allows search bar to redirect to find pages

document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");

  const pages = {
      "home": "index.html",
      "degree": "degree-programs.html",
      "program": "degree-programs.html",
      "course": "courses.html",
      "faculty": "faculty.html",
      "admission": "admissions.html",
      "contact": "contact.html"
  };

  searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const query = searchInput.value.trim().toLowerCase();

      for (const keyword in pages) {
          if (query.includes(keyword)) {
              window.location.href = pages[keyword];
              return;
          }
      }

      alert("Page not found!"); // as a pop up
  });
});
