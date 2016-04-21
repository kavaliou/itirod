document.querySelector('.compare').addEventListener('click', function () {
    function is_number(value){
        value = parseInt(value);
        return !isNaN(value);
    }

    while(true){
        var first = prompt('Enter first number');
        var second = prompt('Enter second number');

        if (is_number(first) && is_number(second)){
            if(first>second){
                alert('First');
            }else{
                if (first<second){
                    alert('Second');
                }else{
                    alert('Equal');
                }
            }

        }else{
            if(!is_number(first) && !is_number(second)){
                alert('First and Second are not numbers');
            }else{
                if(!is_number(first)){
                    alert('First is not number');
                }else{
                    alert('Second is not number');
                }
            }
            return;
        }
    }
});

document.querySelector('.flat').addEventListener('click', function () {
    function _prompt(v){
        var input = prompt(v);
        if (isNaN(input) || input <= 0){
            throw new Error('Invalid input!');
        }
        return parseInt(input);
    }

    var floors = _prompt('Enter floors');
    var porches = _prompt('Enter porches');
    var flats_on_floor = _prompt('Enter flats on floor');
    var flat = _prompt("Enter flat's number");

    if (flat > floors * porches * flats_on_floor){
        throw new Error('Flat number is bigger than count of flats!');
    }

    var flat_on_porch = (flat % (flats_on_floor * floors));
    if (flat_on_porch == 0) flat_on_porch = flats_on_floor * floors;
    var floor = flat_on_porch / flats_on_floor;
    alert(Math.ceil(floor));
});

document.querySelector('.fib').addEventListener('click', function () {
    function _prompt(v){
        var input = prompt(v);
        if (isNaN(input) || input <= 0){
            throw new Error('Invalid input!');
        }
        return parseInt(input);
    }

    var num = _prompt("Enter number");
    var a = 1;
    var b = 1;

    while (num > 0){
        var z = b;
        b = a + b;
        a = z;
        num--;
    }

    alert(a);
});

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
