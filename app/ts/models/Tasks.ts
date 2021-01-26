class Tasks {

    private _tasks: Task[] = [];

    adiciona(task: Task): void {

        this._tasks.push(task);
    }

    paraArray(): Task[] {

        return [].concat(this._tasks);
    }
}
