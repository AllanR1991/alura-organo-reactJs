import './Banner.css'

export const Banner = () => {
    // O parenteses serve para termos um retorno de multiplas linhas.
    return(
        //  Isso é o que chamamos de JSX, esta é a forma como o React trabalha com a parte visual. Então isso parece um HTML, mas não é. O que o React vai fazer por debaixo nos panos é entender o que é isso e fazer o apende no DOM. É como se no modo clássico nós fizessos um document.createElement e criássemos o img e definíssemos o atributo src e o atributo alt. Então, o JSX é como o React lê isso e transforma em elementos no DOM. Ele parece HTML, mas não é, ele é JSX. Entraremos mais a fundo nisso conforme formos evoluindo.
        /*
        <div>
            <header className="banner">
                <img src="./imagens/banner.png" alt="Banner principal da pagina do Organo."/>
            </header>
            <h1>Teste</h1>
        </div>
        */
        
        /*
        <Fragment>
            <header className="banner">
                <img src="./imagens/banner.png" alt="Banner principal da pagina do Organo."/>
            </header>
            <h1>Teste</h1>
        </Fragment>

        a baixo tem o uso do fragment de forma simplificada.
        */
        <>
            <header className="banner">
                <img src="./imagens/banner.png" alt="Banner principal da pagina do Organo."/>
            </header>
            <h1>Teste</h1>
        </>
    )
}