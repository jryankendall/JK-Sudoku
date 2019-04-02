var populateContainer = function() {
    for (var j = 1; j <= 9; j++) {
        var thisNinth = j;
        for (var i = 1; i <= 9; i++) {
            var newNumbox = new NumberBox(thisNinth, i, i);
            var numboxDiv = $("<div>");
            numboxDiv.class("num-box")
                .attr("id", "n-" + newNumbox.id + "-numbox-" + newNumbox.numBoxId)
                .append("<p>" + newNumbox.value + "</p>");
            $("#ninth-" + newNumbox.id).append(numboxDiv);
        }
    }

}

function NumberBox(ninthId, numBoxId, val) {
    this.id = ninthId;
    this.boxId = numBoxId;
    this.value = val;
}
