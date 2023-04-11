<?php
    /*
    Template Name: galerie
    */
?>

<?php get_header(); ?>

<main class="main">
        <h2>Liste des fichiers photos</h2>
        <div class="galerie">
            <a class="galerie__card" href="http://localhost/Projet-Perso/festival-itinerant/2021-2/">
                <img src="<?= get_theme_file_uri() ?>/assets/image5.webp" alt="">
                <p>2021</p>
            </a>
            <a class="galerie__card" href="http://localhost/Projet-Perso/festival-itinerant/2022-2/">
                <img src="<?= get_theme_file_uri() ?>/assets/image8.webp" alt="">
                <p>2022</p>
            </a>
            <a class="galerie__card" href="http://localhost/Projet-Perso/festival-itinerant/2023-2/">
                <img src="<?= get_theme_file_uri() ?>/assets/image7.webp" alt="">
                <p>2023</p>
            </a>
        </div>
    </main>

<?php get_footer();?>