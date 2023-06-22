<?php
    /*
    Template Name: avisForm
    */
    ?>

<?php
    // index.php est le template par défaut => on ne devrait pas l'utiliser
    // on lui prévoit donc un comportement minimaliste
    get_header();
?>
 <main class="main">
        <section class="form_avis">
            <h2>Donner votre avis</h2>
            <?php
            if (isset($_POST['submit'])) {
                $identifiant = htmlspecialchars($_POST['identifiant']);
                $content = htmlspecialchars($_POST['content']);
                $rate = $_POST['notes'];
            

            $avis_post = array (
                'post_title' => $identifiant,
                'post_content' => $content,
                'meta_input' => array(
                    'post_rate' => $rate,
                ),
                'post_status' => 'publish',
                'post_type' => 'avis'
            );

            if (wp_insert_post($avis_post)) echo 'votre avis a bien été pris en compte.';
            else echo 'Erreur d\'enregistrement de votre avis';

        } else { ?>

            
            <form class="avis-form" action="" method="post">
                <label for="identifiant">Votre pseudo :</label>
                <input class="avis-form__input" type="text" name="identifiant" id="identifiant" placeholder="votre pseudo">
                <label for="content">Votre avis</label>
                <textarea class="avis-form__input" name="content" id="content" cols="30" rows="10" placeholder="votre avis"></textarea>
                <label for="notes">Choisser une note:</label>
                <select class="avis-form__input" name="notes" id="notes">
                    <option class="avis-form__option" value="">--choisser une note de 1 à 5--</option>
                    <option class="avis-form__option" value="1">1 étoile</option>
                    <option class="avis-form__option" value="2">2 étoiles</option>
                    <option class="avis-form__option" value="3">3 étoiles</option>
                    <option class="avis-form__option" value="4">4 étoiles</option>
                    <option class="avis-form__option" value="5">5 étoiles</option>
                </select>
                <input class="avis-form__input__buton" type="submit" name="submit" value="Envoyer votre avis"></input>
            </form>
<?php } ?>
        </section>
    </main>
<?php
    get_footer();
?>