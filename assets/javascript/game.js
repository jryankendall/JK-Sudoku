$(document).ready( function() {
    populateContainer();
    makeButtons();
})

function sumArray(total, value) {
    return total + value;
}

var goalSum = 45;

var populateContainer = function() {
    for (var j = 1; j <= 9; j++) {
        var newRow = $("<div>");
        newRow.addClass("row");
        for (var i = 1; i <= 9; i++) {
            var numboxDiv = $("<div>");
            numboxDiv.addClass("num-box col s4")
                .attr("id", "n-" + j + "-numbox-" + i)
                .val(i)
                .append("<p>V: " + i + "</p>");
            newRow.append(numboxDiv);
        }
        $("#ninth-" + j).append(newRow);
    }

}

function makeButtons() {
    $(document).on("click", ".num-box", function(event) {
        console.log(event);
        clickBox(event);
    })
}

function clickBox(eventid) {

}


function addBoxes(ninthNumber) {
    var puzzleSection = new Ninthbox(ninthNumber);
    var boxTotal = puzzleSection.box.reduce(sumArray);
    return boxTotal;
}

function addRow(rowNumber) {
    var puzzleRow = new Row(rowNumber);
    var boxTotal = puzzleRow.row.reduce(sumArray);
    return boxTotal;
}

function checkSection(ninthNumber, goalNum) {
    return addBoxes(ninthNumber) === goalNum;
}

function checkRow(rowNumber, goalNum) {
    return addRow(rowNumber) === goalNum;
}

function checkColumn(colNumber, goalNum){
    return addColumn(colNumber) === goalNum;
}

function checkDiag(diagNum, goalNum) {
    return addDiag(diagNum) === goalNum;
}