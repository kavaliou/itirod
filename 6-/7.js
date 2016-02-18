
document.querySelector('.calendar').addEventListener('click', function () {
    function _prompt(v, max){
        var input = prompt(v);
        if (isNaN(input) || input <= 0 || input > max){
            throw new Error('Invalid input!');
        }
        return parseInt(input);
    }

    var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var days_of_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var month = _prompt("Enter number of month", 12);
    var day = _prompt("Enter number of day", days[month-1]);

    for(var i = 0; i < month-1; i++){
        day += days[i];
    }
    day = (day + 2) % 7;

    alert(days_of_week[day]);
});
