// Load existing papers from LocalStorage when the page loads
window.onload = function() {
    var papers = JSON.parse(localStorage.getItem('papers')) || [];
    displayPapers(papers);
}

// Function to add a new paper
function addPaper() {
    var title = document.getElementById('paper-title').value;
    var date = document.getElementById('paper-date').value;
    
    if (title && date) {
        // Get existing papers from LocalStorage or initialize to an empty array if null
        var papers = JSON.parse(localStorage.getItem('papers')) || [];
        
        // Add new paper to the papers array
        papers.push({ title: title, date: date });
        
        // Save updated papers array to LocalStorage
        localStorage.setItem('papers', JSON.stringify(papers));
        
        // Update the displayed papers list
        displayPapers(papers);
    }
}

// Function to display papers
function displayPapers(papers) {
    var papersList = document.getElementById('papers-list');
    papersList.innerHTML = '';  // Clear the list
    
    papers.forEach(function(paper) {
        var li = document.createElement('li');
        li.textContent = paper.title + ' - ' + paper.date;
        papersList.appendChild(li);
    });
}
