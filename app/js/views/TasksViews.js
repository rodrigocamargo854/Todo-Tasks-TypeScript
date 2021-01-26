class TasksViews extends View {
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>TASKS</th>
                 </tr>
            </thead>

            <tbody>
                ${model.paraArray().map(tsk => `
                        <tr>
                            <td>${tsk.data.getDate()}/${tsk.data.getMonth() + 1}/${tsk.data.getFullYear()}</td>
                            <td>${tsk.task}</td>
                        <tr>
                     `).join('')}            
            </tbody>

            <tfoot>
            </tfoot>
        </table> 
        `;
    }
}
