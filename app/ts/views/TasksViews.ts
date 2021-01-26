class TasksViews extends View<Tasks>{

    //herda metodo update de view 

    //metodo template recebe como parameto o model do tipo negociacoes >>> do tipo string retorna um DOM
    // nessa caso o template handeriza table no html

    template(model: Tasks): string {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>TASKS</th>
                 </tr>
            </thead>

            <tbody>
                ${model.paraArray().map(tsk =>
            `
                        <tr>
                            <td>${tsk.data.getDate()}/${tsk.data.getMonth() + 1}/${tsk.data.getFullYear()}</td>
                            <td>${tsk.task}</td>
                        <tr>
                     `
        ).join('')}            
            </tbody>

            <tfoot>
            </tfoot>
        </table> 
        `;
    }
}