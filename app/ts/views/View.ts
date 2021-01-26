//classe do tipo generics types

abstract class View<T> {

    //prop privado elemento do tipo Element
    protected _elemento: JQuery;

    // o construtor recebe um parametro seletor do tipo string
    constructor(seletor: string) {

        //esse elemento  por meio da querySelector pega o seletor(#id no index)
        //$jquery selector substituindo o querySelector
        this._elemento = $(seletor);
    }
    //model do tipo T (generics types) ou seja , o tpo q a classe filha necessitar
    update(model: T) {

        this._elemento.html(this.template(model));
    }
        //model do tipo T (generics types) ou seja , o tpo q a classe filha necessitar

        abstract template(model: T): string ;
}