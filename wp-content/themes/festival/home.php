<?php get_header(); ?>

<main class="main">
    <div class="main__description">
        <div class="main__description__infos">
        <section class="main__description__content">
                <h2>Qui sommes nous?</h2>
                <p>Des passionnés des <strong>arts vivants</strong> !<br>
<strong>Pascal Vidaillac</strong>, <strong>chanteur</strong>, <strong>comédien</strong>, <strong>auteur</strong>, imagine un chapiteau qui sillonne les routes de campagnes et va à la rencontre des habitants, des familles et des associations locales.<br>
Il en parle à <strong>Taïra Borée</strong>, <strong>comédienne</strong>, <strong>autrice</strong>, <strong>metteuse en scène</strong>. Tous les deux s'emballent et décident de mettre leurs compétences artistiques au bénéfice du projet.<br>
Ils impliquent le collectif du <strong>Chap'Rond Fou</strong> et le <strong>FESTIVAL ITINÉRANT</strong> est né !<br>
Au final, l'opération permet de proposer à chaque escale une semaine de <strong>spectacles</strong>, d'<strong>initiations artistiques</strong>, de <strong>rencontres</strong>, <strong>d’échanges</strong> et de <strong>valorisation des talents locaux</strong>.<br>
Viens voir les <strong>comédiens</strong>, les <strong>magiciens</strong>, les <strong>musiciens</strong> qui arrivent…<br>
Il s'agit donc d'un projet culturel inclusif pour les territoires qui désirent programmer un évènement de proximité, où tout le monde apporte sa contribution à son organisation et à sa programmation.
                </p>
            </section>
            <section class="main__description__comp">
                <h2>Découvrez les compagnies porteuses de ce projet</h2>
                <div class="compagnie">
                    <a href="<?= home_url() ?>/compagnies/"><img class="compagnie__img" src="<?= get_theme_file_uri() ?>/assets/compagnie/logo_belouga.webp" alt=""></a>
                    <a href="<?= home_url() ?>/compagnies/"><img class="compagnie__img" src="<?= get_theme_file_uri() ?>/assets/compagnie/logo_poly'sons.webp" alt=""></a>
                    <a href="<?= home_url() ?>/compagnies/"><img class="compagnie__img" src="<?= get_theme_file_uri() ?>/assets/compagnie/logo_chap_rond_fou.webp" alt=""></a>
                </div>
            </section>
        </div>
        <section class="slide">
            <h2>Photos du festival</h2>
            <div class="slider">
                <img class="slider__item" src="<?= get_theme_file_uri() ?>/assets/image5.webp" alt="">
                <img class="slider__item" src="<?= get_theme_file_uri() ?>/assets/image8.webp" alt="">
                <img class="slider__item" src="<?= get_theme_file_uri() ?>/assets/image16.webp" alt="">
                <img class="slider__item" src="<?= get_theme_file_uri() ?>/assets/image19.webp" alt="">
                <img class="slider__item" src="<?= get_theme_file_uri() ?>/assets/image23.webp" alt="">
                <img class="slider__item" src="<?= get_theme_file_uri() ?>/assets/image27.webp" alt="">
                <img class="slider__item" src="<?= get_theme_file_uri() ?>/assets/Festival itinérant –théâtre – Concert - 2021 – Eure – Hondouville  -02.webp" alt="">
                <img class="slider__item" src="<?= get_theme_file_uri() ?>/assets/Festival itinérant –théâtre – Concert - 2021 – Eure – Rugles  -01.webp" alt="">
                <img class="slider__item" src="<?= get_theme_file_uri() ?>/assets/Festival itinérant –théâtre – Concert - 2022 – Eure – Rugles -La mère noël - 11.webp" alt="">
            </div>
            <div class="slider__nav"></div>
            <a class="link" href="<?= home_url() ?>/galerie/">Voir notre galerie</a>
        </section>
    </div>
    <div class="prochain">
        <section class="carrou">
            <h2>Spectacles de la tournée 2023</h2>
            <div class="carousel">
                <img class="carousel__item" src="<?= get_theme_file_uri() ?>/assets/spectacle/AFFICHE_MECHANTE.jpg" alt="">
                <img class="carousel__item" src="<?= get_theme_file_uri() ?>/assets/spectacle/Affiche_Ragdalam.png" alt="">
                <img class="carousel__item" src="<?= get_theme_file_uri() ?>/assets/spectacle/affiche-moliere.jpg" alt="">
                <img class="carousel__item" src="<?= get_theme_file_uri() ?>/assets/spectacle/Affiche Soeurs Normandie.jpg" alt="">
                <img class="carousel__item" src="<?= get_theme_file_uri() ?>/assets/spectacle/New_affiche_Nougaro.png" alt="">
                <img class="carousel__item" src="<?= get_theme_file_uri() ?>/assets/spectacle/affiche_Paris_Cigale.jpg" alt="">
                <img class="carousel__item" src="<?= get_theme_file_uri() ?>/assets/spectacle/vierge defi.jpg" alt="">
                <img class="carousel__item" src="<?= get_theme_file_uri() ?>/assets/spectacle/affiche_Tour_d'horizon.jpg" alt="">
                <img class="carousel__item" src="<?= get_theme_file_uri() ?>/assets/spectacle/fréhel la diva des faubourgs.png" alt="">
            </div>
            <div class="carousel__nav"></div>
            <a class="link" href="<?= home_url() ?>/spectacles/">Voir tous les spectacles!</a>
        </section>
        <section class="date">
            <h2>Prochaines dates</h2>
            <?php
            foreach (festival_get_home_postlist() as $post) :
                // l'objet $post est de type WP_Post => on peut accéder à toutes ses propriétés pour dynamiser un template
                // on peut aussi fournir ce $post en argument des template tags pour profiter de leurs fonctionnalités
            ?>
                <div class="date__card">
                    <div class="date__card__items">
                        <h3 class="date__card__item"><?= get_the_title(); ?></h3>
                        <p class="date__card__item">Du <?= get_post_meta(get_the_ID(), 'date_de_debut', true); ?> au <?= get_post_meta(get_the_ID(), 'date_de_fin', true); ?> 2023</p>
                    </div>
                    <a class="link" href="<?= get_the_permalink(); ?>">Programme</a>
                </div>
            <?php endforeach; ?>
            <a class="link" href="<?= home_url() ?>/calendrier/">Voir le calendrier</a>
        </section>
    </div>
    <section>
        <h2>Avis des spectateurs</h2>
        <div class="avis">
        <?php
        foreach (festival_get_home_avislist() as $post) :
                // l'objet $post est de type WP_Post => on peut accéder à toutes ses propriétés pour dynamiser un template
                // on peut aussi fournir ce $post en argument des template tags pour profiter de leurs fonctionnalités
            ?>
            <div class="avis__card">
                <div class="avis__card__infos">
                    <div>
                        <p><?= get_the_author(); ?></p>
                        <p>Le : <?= get_the_date(); ?></p>
                    </div>
                    <div>
                        <p><?= get_post_meta(get_the_ID(), 'rate', true); ?> / 5</p>
                    </div>
                </div>
                <p><?= get_the_content(); ?></p>
            </div>
            <?php endforeach; ?>
            </div>
        <a class="link" href="<?= home_url() ?>/avis/">Voir tous les avis</a>
    </section>
</main>



<?php get_footer(); ?>