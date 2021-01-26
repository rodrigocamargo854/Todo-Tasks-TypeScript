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
                ${model.paraArray().map(negociacao => `
                        <tr>
                            <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
                            <td>${negociacao.task}</td>
                           
                        <tr>
                     `).join('')}            
            </tbody>

            <tfoot>
            </tfoot>
        </table> 
        `;
    }
}
