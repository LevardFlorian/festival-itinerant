<?php
    /*
    Template Name: calendrier
    */
    ?>

<?php
    // index.php est le template par défaut => on ne devrait pas l'utiliser
    // on lui prévoit donc un comportement minimaliste
    get_header();
?>
<main class="main">
        <h2>Calendrier de la tournée 2023</h2>
        <section class="date">
        <?php 
                foreach(festival_get_postlist() as $post):
                    // l'objet $post est de type WP_Post => on peut accéder à toutes ses propriétés pour dynamiser un template
                    // on peut aussi fournir ce $post en argument des template tags pour profiter de leurs fonctionnalités
            ?>
                <div class="date__card">
                    <h3 class="date__card__item"><?= get_the_title(); ?></h3>
                    <p class="date__card__item">Du <?= get_post_meta(get_the_ID(), 'date_de_debut', true); ?> au <?= get_post_meta(get_the_ID(), 'date_de_fin', true); ?> 2023</p>
                    <a class="date__card__item" href="<?= get_the_permalink(); ?>">
                    <p>Programme</p>
                    </a>
                   </div>
                <?php endforeach;?> 
        </section>
    </main>
<?php
    get_footer();
?>