function addPaper() {
    var title = document.getElementById('paper-title').value;
    var date = document.getElementById('paper-date').value;
    
    if (title && date) {
        var papersList = document.getElementById('papers-list');
        var li = document.createElement('li');
        li.textContent = title + ' - ' + date;
        papersList.appendChild(li);
    }
}
