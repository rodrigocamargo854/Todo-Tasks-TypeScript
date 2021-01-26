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
                ${model.paraArray().map(negociacao => 
                     `
                        <tr>
                            <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() +1}/${negociacao.data.getFullYear()}</td>
                            <td>${negociacao.task}</td>
                           
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