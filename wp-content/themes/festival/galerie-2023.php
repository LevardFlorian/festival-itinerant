<?php
    /*
    Template Name: galerieDetail2023
    */
?>

<?php get_header(); ?>

<main class="main">
<section class="galerie__card__detail">
        <h1 class="galerie__card__detail__title"><?= get_the_title(); ?></h1>  
        <div class="galerie__card__detail__content"><?= get_the_content(); ?></div>
</section>
    </main>
<?php get_footer();?>