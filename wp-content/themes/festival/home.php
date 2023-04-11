<?php get_header(); ?>

 <main class="main">
        <div class="main__description">
            <div class="main__description__infos">
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
                <section class="main__description__comp">
                    <h2>Découvrez les compagnies porteuses de ce projet</h2>
                    <div class="compagnie">
                        <a href="http://localhost/Projet-Perso/festival-itinerant/compagnies/"><img class="compagnie__img" src="<?= get_theme_file_uri() ?>/assets/compagnie/_logo belouga.svg" alt=""></a>
                        <a href="http://localhost/Projet-Perso/festival-itinerant/compagnies/"><img class="compagnie__img" src="<?= get_theme_file_uri() ?>/assets/compagnie/_logo poly'sons.svg" alt=""></a>
                        <a href="http://localhost/Projet-Perso/festival-itinerant/compagnies/"><img class="compagnie__img" src="<?= get_theme_file_uri() ?>/assets/compagnie/_logo chap rond fou.svg" alt=""></a>
                    </div>
                </section>
            </div>
            <section class="main__description__carrousel">
                <h2>Dernières photos du festival</h2>
                <div class="slider">
                    <!-- ici, on veut ajouter nos images -->
                    <button class="btn slider__btn" type="button" aria-label="Précédent">&lt;</button>
                    <button class="btn slider__btn" type="button" aria-label="Suivant">&gt;</button>
                </div>
                <a class="link" href="http://localhost/Projet-Perso/festival-itinerant/galerie/">Voir notre galerie</a>
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
                <a class="link" href="http://localhost/Projet-Perso/festival-itinerant/spectacle/">Voir tous les spectacles</a>
            </section>
            <section class="date">
                <h2>Prochaines dates</h2>
                          <?php 
                foreach(festival_get_home_postlist() as $post):
                    // l'objet $post est de type WP_Post => on peut accéder à toutes ses propriétés pour dynamiser un template
                    // on peut aussi fournir ce $post en argument des template tags pour profiter de leurs fonctionnalités
            ?>
                <div class="date__card">
                    <h3 class="date__card__item"><?= get_the_title(); ?></h3>
                    <p class="date__card__detail">Du <?= get_post_meta(get_the_ID(), 'date_de_debut', true); ?> au <?= get_post_meta(get_the_ID(), 'date_de_fin', true); ?> 2023</p>
                    <a class="link" href="<?= get_the_permalink(); ?>">Programme</a>
                    </div>
                <?php endforeach;?>  
                <a class="link" href="http://localhost/Projet-Perso/festival-itinerant/calendrier/">Voir le calendrier</a>
            </section>
        </div>
        <section>
            <h2>Avis des spectateurs</h2>
                    <p>Soyez le prémier à donner votre avis ! </p>
                    <a class="link" href="http://localhost/Projet-Perso/festival-itinerant/avisform/">N'hésiter pas à donner votre avis</a>
        </section>
    </main>

   

    <?php get_footer();?>