// Get elements
const triggerReason = document.getElementById('triggerReason');
const dropdownContent = document.getElementById('dropdownContent');
const dropdownIcon = document.getElementById('dropdownIcon');



document.addEventListener('DOMContentLoaded', function() {
    const triggerReason = document.getElementById('triggerReason');
    const dropdownContent = document.getElementById('dropdownContent');
    let isDropdownOpen = false;

    triggerReason.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents the click event from propagating to document

        if (!isDropdownOpen) {
            dropdownContent.style.display = 'block';
            isDropdownOpen = true;
        } else {
            dropdownContent.style.display = 'none';
            isDropdownOpen = false;
        }
    });

    document.addEventListener('click', function(event) {
        const container = document.getElementById('container');
        if (!container.contains(event.target) && isDropdownOpen) {
            dropdownContent.style.display = 'none';
            isDropdownOpen = false;
        }
    });
    
    // Hide dropdown by default
    dropdownContent.style.display = 'none';
});


function toggleArrow() {
    const downArrow = document.getElementById('downArrow');
    const upArrow = document.getElementById('upArrow');
    
    // Toggle display for down arrow
    downArrow.style.display = downArrow.style.display === 'none' ? '' : 'none';
    
    // Toggle display for up arrow
    upArrow.style.display = upArrow.style.display === 'none' ? '' : 'none';
}




// document.addEventListener('DOMContentLoaded', function() {
//     const triggerReason = document.getElementById('triggerReason');
//     const dropdownContent = document.getElementById('dropdownContent');
//     let isDropdownOpen = false;

//     triggerReason.addEventListener('click', function(event) {
//         event.stopPropagation(); // Prevents the click event from propagating to document

//         if (!isDropdownOpen) {
//             dropdownContent.style.display = 'block';
//             isDropdownOpen = true;
//         } else {
//             dropdownContent.style.display = 'none';
//             isDropdownOpen = false;
//         }
//     });

//     document.addEventListener('click', function(event) {
//         if (!triggerReason.contains(event.target) && !dropdownContent.contains(event.target)) {
//             dropdownContent.style.display = 'none';
//             isDropdownOpen = false;
//         }
//     });
    
//     // Hide dropdown by default
//     dropdownContent.style.display = 'none';
// });




// // Set initial state to closed
// let isDropdownOpen = false;

// // Toggle dropdown content and change icon
// triggerReason.addEventListener('click', function() {
//     if (!isDropdownOpen) {
//         dropdownContent.style.display = 'inline-flex';
//         dropdownIcon.innerHTML = `
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
//                 <path fill-rule="evenodd" d="M1.646 11.354a.5.5 0 0 1 .708 0L8 5.707l5.646 5.647a.5.5 0 0 1-.708.708L8 6.707 2.354 12.354a.5.5 0 0 1-.708-.708z"/>
//             </svg>
//         `;
//     } else {
//         dropdownContent.style.display = 'none';
//         dropdownIcon.innerHTML = `
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
//                 <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
//             </svg>
//         `;
//     }
//     isDropdownOpen = !isDropdownOpen;
// });

// // Close dropdown when clicking outside
// document.addEventListener('click', function(event) {
//     if (!triggerReason.contains(event.target) && !dropdownContent.contains(event.target)) {
//         dropdownContent.style.display = 'none';
//         dropdownIcon.innerHTML = `
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
//                 <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
//             </svg>
//         `;
//         isDropdownOpen = false;
//     }
// });



// completed js
document.getElementById("clickableDiv").addEventListener("click", function() {
    window.location.href = 'completedpage.html'; // Replace with your destination URL
  });
  

  document.getElementById("clickDiv").addEventListener("click", function() {
    window.location.href = 'index.html'; // Replace with your destination URL
  });
  