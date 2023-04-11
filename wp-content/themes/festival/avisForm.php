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
            <form class="avis-form" action="" method="post">
                <label for="identifiant">Votre pseudo :</label>
                <input class="avis-form__input" type="text" name="identifiant" id="identifiant" placeholder="votre pseudo">
                <label for="content">Votre avis</label>
                <textarea class="avis-form__input" name="content" id="content" cols="30" rows="10" placeholder="votre avis"></textarea>
                <label for="notes">Choisser une note:</label>
                <select class="avis-form__input" name="notes" id="notes">
                    <option value="">--choisser une note de 1 à 5--</option>
                    <option value="1">1 étoile</option>
                    <option value="2">2 étoiles</option>
                    <option value="3">3 étoiles</option>
                    <option value="4">4 étoiles</option>
                    <option value="5">5 étoiles</option>
                </select>
                <button class="avis-form__button">Validé</button>
            </form>
        </section>
    </main>
<?php
    get_footer();
?>