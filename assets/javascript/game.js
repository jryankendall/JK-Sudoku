$('document').ready( function() {
    populateContainer();
})

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

function checkBox(boxNumber) {
    for (var i = 1; i <= 9; i++ ){
        function outer(i, boxNumber) {
            boxTotal += $("#n-" + boxNumber + "-numbox-" + i).val();
        }
    }

    return checkTotals(boxNumber);
}


function checkTotal(goal, input) {
    return (input === goal);
}

function checkTotals(input) {
    function inner(value) {
        
    }
}