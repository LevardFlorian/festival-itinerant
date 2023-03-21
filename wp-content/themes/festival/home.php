<?php get_header(); ?>

 <main class="main">
        <div class="main__description">
            <section class="main__description__content">
                <h2>Qui sommes nous?</h2>
                <p>Un chapiteau sillonne les routes de nos campagnes et fait plusieurs escales dans différentes
                    communes. A chaque escale, une semaine de spectacles, d'initiations artistiques, de rencontres,
                    d’échanges et de valorisation des talents locaux. Venez-voir les comédiens, les magiciens qui
                    arrivent… <br>
                    L’idée est donc de proposer un projet culturel aux communes rurales qui n’ont ni les moyens ni les
                    structures pour programmer des spectacles de proximité. La philosophie du projet consiste aussi à
                    impliquer les habitants dans son organisation et sa programmation.
                </p>
            </section>
            <section class="main__description__carrousel">
                <h2>Dernières photos du festival</h2>
                <div class="slider">
                    <!-- ici, on veut ajouter nos images -->
                    <button class="btn slider__btn" type="button" aria-label="Précédent">&lt;</button>
                    <button class="btn slider__btn" type="button" aria-label="Suivant">&gt;</button>
                </div>
                <a class="link" href="<?= get_permalink() ?>">Voir notre galerie</a>
            </section>
            <section class="main__description__comp">
                <h2>Découvrez les compagnies porteuses de ce projet</h2>
                <div class="compagnie">
                    <a href="./compagnie.html"><img class="compagnie__img" src="<?= get_theme_file_uri() ?>/assets/compagnie/_logo belouga.svg" alt=""></a>
                    <a href="./compagnie.html"><img class="compagnie__img" src="<?= get_theme_file_uri() ?>/assets/compagnie/_logo poly'sons.svg" alt=""></a>
                    <a href="./compagnie.html"><img class="compagnie__img" src="<?= get_theme_file_uri() ?>/assets/compagnie/_logo chap rond fou.svg" alt=""></a>
                </div>
            </section>
        </div>
        <div class="prochain">
            <section class="carrou">
                <h2>Spectacles de la tournée 2023</h2>
                <div class="carrousel">
                    <!-- ici, on veut ajouter nos images -->
                    <button class="btn carrousel__btn" type="button" aria-label="Précédent">&lt;</button>
                    <button class="btn carrousel__btn" type="button" aria-label="Suivant">&gt;</button>
                </div>
                <a class="link" href="./spectacle.html">Voir tous les spectacles</a>
            </section>
            <section class="date">
                <h2>Prochaines dates</h2>
                <div class="date__card">
                    <p>Ville : <br>
                        du 01/01/2023 au 10/01/2023</p>
                    <a class="link" href="./programme.html">Programme</a>
                </div>
                <div class="date__card">
                    <p>Ville : <br>
                        du 01/01/2023 au 10/01/2023</p>
                    <a class="link" href="./programme.html">Programme</a>
                </div>
                <div class="date__card">
                    <p>Ville : <br>
                        du 01/01/2023 au 10/01/2023</p>
                    <a class="link" href="./programme.html">Programme</a>
                </div>
                <a class="link" href="./calendrier.html">Voir le calendrier</a>
            </section>
        </div>
        <section>
            <h2>Avis des spectateurs</h2>
            <div class="avis">
                <div class="avis__card">
                    <div class="avis__card__infos">
                        <div>
                            <p>Auteur</p>
                            <p>Le : 01/01/2023</p>
                        </div>
                        <div>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum veritatis doloremque
                        praesentium
                        quam
                        quasi incidunt illum harum, quia quos velit, ullam debitis itaque. Cupiditate repellat,
                        reprehenderit
                        ducimus, molestiae, aspernatur corporis minima necessitatibus quasi dolore dolorem nulla error!
                        Commodi
                        ad
                        similique excepturi accusantium repellat, odit quibusdam earum nemo odio asperiores minus!</p>
                </div>
                <div class="avis__card">
                    <div class="avis__card__infos">
                        <div>
                            <p>Auteur</p>
                            <p>Le : 01/01/2023</p>
                        </div>
                        <div>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum veritatis doloremque
                        praesentium
                        quam
                        quasi incidunt illum harum, quia quos velit, ullam debitis itaque. Cupiditate repellat,
                        reprehenderit
                        ducimus, molestiae, aspernatur corporis minima necessitatibus quasi dolore dolorem nulla error!
                        Commodi
                        ad
                        similique excepturi accusantium repellat, odit quibusdam earum nemo odio asperiores minus!</p>
                </div>
                <div class="avis__card">
                    <div class="avis__card__infos">
                        <div>
                            <p>Auteur</p>
                            <p>Le : 01/01/2023</p>
                        </div>
                        <div>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum veritatis doloremque
                        praesentium
                        quam
                        quasi incidunt illum harum, quia quos velit, ullam debitis itaque. Cupiditate repellat,
                        reprehenderit
                        ducimus, molestiae, aspernatur corporis minima necessitatibus quasi dolore dolorem nulla error!
                        Commodi
                        ad
                        similique excepturi accusantium repellat, odit quibusdam earum nemo odio asperiores minus!</p>
                </div>
            </div>
            <a class="link" href="./avis.html">Voir tous les avis</a>
        </section>
    </main>

   

    <?php get_footer();?>