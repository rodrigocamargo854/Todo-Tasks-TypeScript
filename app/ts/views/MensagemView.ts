class MensagemView extends View<string>{

    //incluindo em outra classe para ter herança

    //herda metodo update de view 
   // nessa caso o template handeriza uma msg no html
    template(model: string): string {

        return `<p class="alert alert-info">${model}</p>`;
    }
}