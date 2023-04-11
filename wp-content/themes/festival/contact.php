<?php
    /*
    Template Name: contact
    */
    ?>

<?php get_header(); ?>


  <main class="main">
    <section class="contact_form">
      <h2>Contacter nous</h2>
      <form class="contact-form">
        <fieldset class="contact-form__field">
          <legend class="contact-form__title">Identité</legend>
          <div class="contact-form-row">
            <label class="contact-form__label" for="prenom">Mon prénom est </label>
            <input class="contact-form__input" type="text" id="prenom" placeholder="Prénom" name="prenom">
          </div>
          <div class="contact-form-row">
            <label class="contact-form__label" for="nom">Et mon nom, </label>
            <input class="contact-form__input" type="text" id="nom" placeholder="Nom" name="nom">
          </div>
          <div class="contact-form-row">
            <label class="contact-form__label" for="source">J'ai connu ce site grâce à </label>
            <select class="contact-form__input" id="source" name="source">
              <option class="contact-form__label" value="">choisir</option>
              <option class="contact-form__label" value="fb">Facebook</option>
              <option class="contact-form__label" value="twitter">Twitter</option>
              <option class="contact-form__label" value="google">Google</option>
              <option class="contact-form__label" value="bouche-a-oreilles">Bouche à oreilles</option>
              <option class="contact-form__label" value="jpp">JT de 13h de Jean-Pierre Pernault</option>
              <option class="contact-form__label" value="autre">Autre</option>
            </select>
          </div>
        </fieldset>
        <fieldset class="contact-form__field">
          <legend class="contact-form__title">Message</legend>
          <div class="contact-form-row">
            <label class="contact-form__label" for="email">Répondez-moi via</label>
            <input class="contact-form__input" type="email" id="email" placeholder="Adresse e-mail" name="email" required>
          </div>
          <div class="contact-form-row">
            <label class="contact-form__label" for="message">Je voulais vous dire que</label>
            <textarea class="contact-form__input" id="message" placeholder="Votre message" name="message"></textarea>
          </div>
        </fieldset>
        <button class="contact-form__button" role="submit">Envoyer</button>
      </form>
    </section>
  </main>

  <?php get_footer();?>