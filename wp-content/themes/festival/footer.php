<aside class="newsletter">
        <button class="newsletter__close btn" aria-label="Fermer" type="button">&Cross;</button>
        <h2 class="newsletter__title">Suivez-nous</h2>
        <form action="" method="post">
            <input class="newsletter__field" type="email" required id="subscriber-email" placeholder="user@email.com"
                aria-label="Votre email">
            <button class="btn" type="submit">Valider</button>
        </form>
    </aside>

<footer class="footer">
        <div class="footer__network">
            <a class="footer__network__link" href="https://www.facebook.com/profile.php?id=100072422051797"><i
                    class="fa-brands fa-facebook"></i></a>
        </div>
        <div class="footer__nav">
        <ul class="footer__links">
        <?php 
        
        $menuLocations = get_nav_menu_locations();
        $footerMenuId = $menuLocations['footer-menu'];
        $menuItemList = wp_get_nav_menu_items($footerMenuId);
        foreach ($menuItemList as $menuItem) :
    ?>
        <li class="footer__links__item"><a href="<?= $menuItem->url; ?>"><?= $menuItem->title; ?></a></li>
    <?php 
        endforeach; 
    ?>
        </ul>
            <a class="footer__link" id="newsletter" href="">Suivez-nous</a>
        </div>
    </footer>
    <script src="<?= get_theme_file_uri() ?>/src/js/script.js"></script>
    <script src="<?= get_theme_file_uri() ?>/src/js/carrousel.js"></script>
    <script src="<?= get_theme_file_uri() ?>/src/js/messages.js"></script>
    <script src="<?= get_theme_file_uri() ?>/src/js/newsletter.js"></script>
    <script src="<?= get_theme_file_uri() ?>/src/js/slider.js"></script>
    <script src="<?= get_theme_file_uri() ?>/src/js/menu.js"></script>
  <?php wp_footer(); ?>
</body>

</html>