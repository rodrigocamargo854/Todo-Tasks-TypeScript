const controller = new TasksController();

$('.form').submit(controller.adiciona.bind(controller));
    