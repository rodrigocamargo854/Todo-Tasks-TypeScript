class Tasks {
    constructor() {
        this._tasks = [];
    }
    adiciona(task) {
        this._tasks.push(task);
    }
    paraArray() {
        return [].concat(this._tasks);
    }
}
