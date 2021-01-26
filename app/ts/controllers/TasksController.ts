class TasksController {

    //props do tipo HMTLInputELEMent
    private _inputData: JQuery;
    private _inputTask: JQuery;
    private _tasks = new Tasks();
    private _taskview = new TasksViews('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this._inputData = $('#data');
        this._inputTask = $('#quantidade');
        this._taskview.update(this._tasks);
    }

    adiciona(event: Event) {

        event.preventDefault();

        const task = new Task(
            new Date(this._inputData.val().replace(/-/g, ',')), this._inputTask.val()
            );

        this._tasks.adiciona(task);
        this._taskview.update(this._tasks);
        this._mensagemView.update('TArefa adicionada com sucesso');
    }
}


