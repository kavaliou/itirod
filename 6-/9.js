document.querySelector('.vector').addEventListener('click', function () {
    class Vector {
        constructor(x, y, z){
            this.x = x;
            this.y = y;
            this.z = z;
        }

        get length() {
            return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z);
        }

        plus (vector) {
            var x = this.x + vector.x;
            var y = this.y + vector.y;
            var z = this.z + vector.z;
            return new Vector(x, y, z);
        };

        scalar (vector) {
            var x = this.x * vector.x;
            var y = this.y * vector.y;
            var z = this.z * vector.z;
            return x + y + z;
        };

        toString (){
            return '(' + this.x + ';' + this.y + ';' + this.z + ')';
        };

        valueOf () {
            return this.toString();
        };
    }


    var vector1 = new Vector(1, 2, 3);
    var vector2 = new Vector(2, 2, 2);
    alert(vector1.length);
    alert(vector1.plus(vector2));
    alert(vector1.scalar(vector2));
    alert(vector1);
    alert(vector1.valueOf());

});

document.querySelector('.tasks').addEventListener('click', function () {
    class Task {
        constructor(name, describing, start_date, end_date, sub_tasks) {
            this.name = name;
            this.describing = describing;
            this.start_date = start_date;
            this.end_date = end_date;
            if (sub_tasks === undefined){
                sub_tasks = [];
            }
            this.sub_tasks = sub_tasks;
        };

        add_task (task) {
            this.sub_tasks.push(task);
        };

        toString () {
                return this.name + '(' + this.start_date + '-' + this.end_date + '): ' + this.describing;
        };

        valueOf () {
            return this.name;
        };
    }

    var task = new Task('name', 'describe', new Date(2016, 1, 28), new Date(2016, 2, 28));
    var task1 = new Task('1', 'des111e', new Date(2016, 2, 28), new Date(2016, 3, 28));
    var task2 = new Task('2', 'des222222cribe', new Date(2016, 3, 28), new Date(2016, 4, 28));

    task.add_task(task1);
    task.add_task(task2);
    alert(task.sub_tasks);


    class PerformTask extends Task{
        constructor(name, description, dateStart, dateEnd) {
            super(name, description, dateStart, dateEnd);
            this.progress = -1;
		    this.completed = false;
        }
        isCompleted(){
            return this.completed;
        };

        do_progress(){
            if (!this.isCompleted())
                this.progress += 10;
                if (this.progress == 100)
                    this.completed = true;
            return this.isCompleted();
        };

        toString() {
                return Task.prototype.toString.call(this) + " (" + this.progress + "%)";
        };
    }

    task = new PerformTask('name', 'describe', new Date(2016, 1, 28), new Date(2016, 2, 28));
    task1 = new PerformTask('1', 'des111e', new Date(2016, 2, 28), new Date(2016, 3, 28));
    task2 = new PerformTask('2', 'des222222cribe', new Date(2016, 3, 28), new Date(2016, 4, 28));

    task.add_task(task1);
    task.add_task(task2);
    task.do_progress();
    task1.do_progress();
    alert(task);
    alert(task.valueOf());
    alert(task.sub_tasks);

});