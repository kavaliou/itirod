function _prompt(v){
    var input = prompt(v);
    if (isNaN(input)){
        throw new Error('Invalid input!');
    }
    return parseInt(input);
}

document.querySelector('.range').addEventListener('click', function () {
    function range(start, end, step){
        if (step == undefined){
            step = 1;
        }

        var result = [];
        if (step > 0){
            while(start < end){
                result.push(start);
                start += step;
            }
        }
        else if (step < 0){
            while(start > end){
                result.push(start);
                start += step;
            }
        }else{
            throw new Error('step equal 0');
        }

        return result;

    }

    var a = _prompt('First');
    var b = _prompt('Second');
    var c = _prompt('Third');
    var mass = null;
    if (c == 0){
        mass = range(a, b);
    }else{
        mass = range(a, b, c);
    }

    alert(String(mass))
});

document.querySelector('.sort').addEventListener('click', function () {
    function sort(array, comparator){
        if (comparator == undefined){
            comparator = function(a, b){
                return a < b;
            };
        }

        for(var i = 0; i < array.length-1; i++){
            for(var j = i; j < array.length; j++){
                if (comparator(array[j], array[i])){
                    var z = array[i];
                    array[i] = array[j];
                    array[j] = z;
                }
            }
        }
        return array;
    }

    //var array = [2, 1, 3, 4];
    //alert(String(sort(array)));

    var array = ['123', 'q', '2d4d21', 'ssdd'];
    alert(String(sort(array, function(a, b){return a.length < b.length})));
});

document.querySelector('.matrix').addEventListener('click', function () {
    function create_random_matrix(n, m){
        var result = [];
        for(var i = 0; i < n; i++){
            var temp = [];
            for(var j = 0; j < m; j++) {
                temp.push(Math.round(Math.random() * 100))
            }
            result.push(temp);
        }
        return result;
    }

    function print_matrix(array){
        var result_string = '';
        for(var i = 0; i < array.length; i++) {
            result_string += String(array[i]) + '\n';
        }
        alert(result_string);
    }

    function sum(first, second){
        function check_length(a, b){
            if (a.length != b.length){
                throw new Error('Wrong length');
            }
        }
        check_length(first, second);
        var result = [];
        for(var i = 0; i < first.length; i++){
            var temp = [];
            check_length(first[i], second[i]);
            for(var j = 0; j < first[i].length; j++) {
                temp.push(first[i][j] + second[i][j]);
            }
            result.push(temp);
        }
        return result;
    }

    var n = 2, m = 4;
    var result1 = create_random_matrix(n, m);
    print_matrix(result1);
    var result2 = create_random_matrix(n, m);
    print_matrix(result2);
    var s = sum(result1, result2);
    print_matrix(s);
});
