<?php
    /*
    Template Name: pro
    */
    ?>

<?php
    // index.php est le template par défaut => on ne devrait pas l'utiliser
    // on lui prévoit donc un comportement minimaliste
    get_header();
?>
<main>
  <h1><?= get_the_title(); ?></h1>
  <div><?= get_the_content(); ?></div>
</main>
<?php
    get_footer();
?>