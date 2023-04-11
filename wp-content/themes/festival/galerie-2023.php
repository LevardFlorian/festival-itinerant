<?php
    /*
    Template Name: galerieDetail
    */
?>

<?php get_header(); ?>

<main class="main">
<section class="galerie">
    <div class="galerie__card">
        <h1 class="galerie__card__detail"><?= get_the_title(); ?></h1>  
        <div class="galerie__card__detail"><?= get_the_content(); ?></div>
    </div>
</section>
    </main>

<?php get_footer();?>