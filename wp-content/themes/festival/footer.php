

<footer class="footer">
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
        </div>
    </footer>

  <?php wp_footer(); ?>
</body>

</html>