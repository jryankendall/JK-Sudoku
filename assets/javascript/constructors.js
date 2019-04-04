function Ninthbox(ninthNum) {
    this.position = ninthNum;
    this.box = [];
    for (var i = 0; i < 9; i++) {
        var boxValue = parseInt($("#n-" + ninthNum + "-numbox-" + (i+1)).val());
        this.box[i] = boxValue;
        console.log(this.box[i]);
    }
}

function Row(rowNum) {
    this.number = rowNum;
    this.row = [];
    this.section = 1;
    if (this.number > 3) {
        if (this.number > 6) {
            this.section = 7;
        } else
        {
            this.section = 4;
        }
    }
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            var rowCoeff = 1;
            if (this.number == 2 || this.number == 5 || this.number == 8) {
                rowCoeff = 4;
            }
            if (this.number == 3 || this.number == 6 || this.number == 9) {
                rowCoeff = 7;
            }
            var boxValue = parseInt($("#n-" + (this.section) + "-numbox-" + (rowCoeff+j)).val());
            this.row.push(boxValue);
        }
        this.section++;
    }
}