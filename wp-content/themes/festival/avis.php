<?php
    /*
    Template Name: avis
    */
    ?>

<?php
    // index.php est le template par défaut => on ne devrait pas l'utiliser
    // on lui prévoit donc un comportement minimaliste
    get_header();
?>
<main class="main">
        <h2>Avis des spectateurs</h2>
        <section>
        <div class="avis">
        <?php
        foreach (festival_get_avislist() as $post) :
                // l'objet $post est de type WP_Post => on peut accéder à toutes ses propriétés pour dynamiser un template
                // on peut aussi fournir ce $post en argument des template tags pour profiter de leurs fonctionnalités
            ?>
            <div class="avis__card">
                <div class="avis__card__infos">
                    <div>
                        <p>Le : <?= get_the_date('d-m-Y'); ?> par <?= get_the_title(); ?></p>
                    </div>
                    <div>
                        <p>note : <?= get_post_meta(get_the_ID(), 'post_rate', true); ?> / 5</p>
                    </div>
                </div>
                <p><?= get_the_content(); ?></p>
            </div>
            <?php endforeach; ?>
            </div>
            <a class="link" href="https://festival-itinerant.fr/avisform/">Laissez votre avis</a>
        </section>
    </main>
<?php
    get_footer();
?>