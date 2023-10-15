

const Article = (props) => {

    return (

        <>
            {/* iconos flotantes */}
            <section className="about section-padding" />
            <div className="container">
                <div className="row">
                    <div className={props.icon}>
                        <span Style={"-i: 1"}><img src="/images/stark fondo 5.jpg" alt="" /></span>
                    </div>
                    <div className="box">
                        <span Style={"-i: 2"}><img src="/images/logo targe 2.jpg" alt="" /></span>
                    </div>
                    <div className="box">
                        <span Style={"-i: 3"}><img src="/images/logo lanis 2.jpg" alt="" /></span>
                    </div>
                    <div className="box">
                        <span Style={"-i: 4"}><img src="/images/fondo barat 2.jpg" alt="" /></span>
                    </div>
                    <div className="box">
                        <span Style={"-i: 5"}><img src="/images/fondo grayjoy.jpg" alt="" /></span>
                    </div>
                    <div className="box">
                        <span Style={"-i: 5"}><img src="/images/fondo marte.jpg" alt="" /></span>
                    </div>
                    <div className="box">
                        <span Style={"-i: 5"}><img src="/images/logo pajar  2.jpg" alt="" /></span>
                    </div>

                    <h2> Productos </h2>
                    <p>
                        En nuestro vasto reino de productos inspirados en 'Game of Thrones',
                        te invitamos a explorar una colección incomparable de artículos que capturan la esencia de este mundo épico.
                        Nuestra selección de camisetas, tazas y pósters te permitirá llevar a tus personajes favoritos y casas
                        emblemáticas contigo en tu día a día.
                        Además, no te pierdas nuestras figuras de acción meticulosamente diseñadas que dan vida a los héroes y
                        villanos de Westeros.
                        Sumérgete en el mundo de 'Game of Thrones' con productos que te transportarán a los Siete Reinos y te
                        recordarán por qué esta serie es un fenómeno cultural sin igual."
                    </p>
                  
                </div>
            </div></>
    );
}

export default Article;