document.getElementById('container').oninput = function() {
    var bill = Number(document.getElementById('billTotal').value);
    var tipPercent = document.getElementById('tipInput').value;
    var split = document.getElementById('splitInput').value;
    var tipValue = bill * (tipPercent / 100);
    var newBillEach = bill / split;
    var tipEach = tipValue / split;
    var totalEach = (bill + tipValue) / split;

    document.getElementById('tipOutput').innerHTML = tipPercent + "%";
    document.getElementById('splitOutput').innerHTML = split;
    document.getElementById('newBill').innerHTML = " £" + newBillEach.toFixed(2);
    document.getElementById('tipEach').innerHTML = " £" + tipEach.toFixed(2);
    document.getElementById('totalEach').innerHTML = " £" + totalEach.toFixed(2);


}