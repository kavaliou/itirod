function _prompt(v){
    var input = prompt(v);
    if (isNaN(input)){
        throw new Error('Invalid input!');
    }
    return parseInt(input);
}

document.querySelector('.range').addEventListener('click', function () {
    function *range(start, end, step=1){  // ES6
        let result = [];
        if (step > 0){
            while(start < end){
                yield start;
                start += step;
            }
        }
        else if (step < 0){
            while(start > end){
                yield start;
                start += step;
            }
        }else{
            throw new Error('step equal 0');
        }
    }

    // var a = _prompt('First');
    var b = _prompt('Second');
    var c = _prompt('Third');

    for (let r of range(a, b, c)){
        console.log(r);
        var a =0;
    }
    
    
});

document.querySelector('.sort').addEventListener('click', function () {
    function sort(array, comparator=(a, b)=>{return a < b}){  // ES6

        for(let i = 0; i < array.length-1; i++){
            for(let j = i; j < array.length; j++){
                if (comparator(array[j], array[i])){
                    [array[i], array[j]] = [array[j], array[i]];  // ES6
                }
            }
        }
        return array;
    }

    var array = [2, 1, 3, 4];
    alert(String(sort(array)));

    var array = ['123', 'q', '2d4d21', 'ssdd'];
    alert(String(sort(array, (a, b) => a.length < b.length)));  // ES6
});

document.querySelector('.matrix').addEventListener('click', function () {
    function create_random_matrix(n, m){
        var result = [];
        for(let i = 0; i < n; i++){
            let temp = [];
            for(let j = 0; j < m; j++) {
                temp.push(Math.round(Math.random() * 100))
            }
            result.push(temp);
        }
        return result;
    }

    function print_matrix(...array){
        var result_string = '';
        for(let i = 0; i < array.length; i++) {
            result_string += String(array[i]) + '\n';
        }
        alert(result_string);
    }

    function sum(first, second){
        let check_length = (a, b) => {
            if (a.length != b.length){
                throw new Error('Wrong length');
            }
        };
        check_length(first, second);
        var result = [];
        for(let i = 0; i < first.length; i++){
            let temp = [];
            check_length(first[i], second[i]);
            for(let j = 0; j < first[i].length; j++) {
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
