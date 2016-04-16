document.querySelector('.rect').addEventListener('click', function () {
    function get_angle_coefficient(x1, y1, x2, y2){
        var v = (y1-y2) / (x1-x2);
        if (v == '-0') v = 0;
        if (v == '-Infinity') v = 'Infinity';
        return v;
    }

    function is_rect(x1, y1, x2, y2, x3, y3, x4, y4){
        var k1 = get_angle_coefficient(x1, y1, x2, y2);
        var k2 = get_angle_coefficient(x2, y2, x3, y3);
        var k3 = get_angle_coefficient(x3, y3, x4, y4);
        var k4 = get_angle_coefficient(x4, y4, x1, y1);

        var len_diag1 = Math.sqrt(Math.pow((y1-y3), 2) + Math.pow((x1-x3), 2));
        var len_diag2 = Math.sqrt(Math.pow((y2-y4), 2) + Math.pow((x2-x4), 2));

        console.log(k1, k2, k3, k4, len_diag1, len_diag2);

        return k1 == k3 && k2 == k4 && len_diag1 > 0 && len_diag2 > 0 && len_diag1 == len_diag2;
    }

    function _prompt(v){
        var input = prompt(v);
        if (isNaN(input)){
            throw new Error('Invalid input!');
        }
        return parseInt(input);
    }

    var data = [0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < 4; i++){
        data[2*i] = _prompt('Enter x' + (i+1));
        data[2*i+1] = _prompt('Enter y' + (i+1));
    }

    var is = is_rect(
        data[0], data[1], data[2], data[3],
        data[4], data[5], data[6], data[7]
    );

    alert(is);

    var x = _prompt('Enter x');
    var y = _prompt('Enter y');

    // TODO: second task's point.

    var poly = [];
    for (var i = 0; i < 4; i++){
        poly.push({x: data[2*i], y: data[2*i+1]})
    }
    var point = {x: x, y: y};

    function isPointInPoly(poly, pt){
        for(var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
            ((poly[i].y <= pt.y && pt.y < poly[j].y) || (poly[j].y <= pt.y && pt.y < poly[i].y))
            && (pt.x < (poly[j].x - poly[i].x) * (pt.y - poly[i].y) / (poly[j].y - poly[i].y) + poly[i].x)
            && (c = !c);
        return c;
    }

    alert(isPointInPoly(poly, point));

});

document.querySelector('.decorator').addEventListener('click', function () {
    function _prompt(v){
        var input = prompt(v);
        if (isNaN(input)){
            throw new Error('Invalid input!');
        }
        return parseInt(input);
    }

    function sqr(num){
        return num * num;
    }

    function decorator_1(func){
        function f(arg){
            if (typeof(arg) === "number"){
                return func(arg);
            }else{
                throw new Error('arg must be number');
            }
        }
        return f;
    }

    sqr = decorator_1(sqr);

    alert(sqr(2));
    //alert(sqr('2'));

    //===========================================

    function decorator_2(func, type){
        function f(args){
            for(var i = 0; i < args.length; i++) {
                if (typeof(args[i]) !== type) {
                    throw new Error('arg must be ' + type);
                }
            }
            return func(args);
        }
        return f;
    }

    function sum(args){
        var result = 0;
        for(var i = 0; i < args.length; i++) {
            result += args[i];
        }
        return result;
    }

    sum = decorator_2(sum, "number");

    alert(sum([1, 2, 3, 4]));
    //alert(sum([1, 2, 3, '4']));

});
