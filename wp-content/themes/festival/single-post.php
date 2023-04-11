<?php
    /*
    Template Name: programme
    */
    ?>

<?php
    // index.php est le template par défaut => on ne devrait pas l'utiliser
    // on lui prévoit donc un comportement minimaliste
    get_header();
    ?>
<main class="main">
<section class="date">
    <div class="programme__card">
        <h1 class="programme__card__title"><?= get_the_title(); ?></h1>
        <div>
        <p class="programme__card__date">Du <?= get_post_meta(get_the_ID(), 'date_de_debut', true); ?> au <?= get_post_meta(get_the_ID(), 'date_de_fin', true); ?> 2023</p>
        <div class="programme__card__content"><?= get_the_content(); ?></div>
        <a class="programme__card__link" href="<?= get_post_meta(get_the_ID(), 'lien_google_map', true); ?>">lien vers google map !</a>
          </div>
    </div>
</section>
</main>
<?php
        get_footer();
    ?>