class TasksController {
    constructor() {
        this._tasks = new Tasks();
        this._taskview = new TasksViews('#negociacoesView');
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputData = $('#data');
        this._inputTask = $('#quantidade');
        this._taskview.update(this._tasks);
    }
    adiciona(event) {
        event.preventDefault();
        const task = new Task(new Date(this._inputData.val().replace(/-/g, ',')), this._inputTask.val());
        this._tasks.adiciona(task);
        this._taskview.update(this._tasks);
        this._mensagemView.update('TArefa adicionada com sucesso');
    }
}
