<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://kit.fontawesome.com/8a7426147f.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Qwitcher+Grypen&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="<?= get_theme_file_uri() ?>/assets/logo-festival.webp" type="image/x-icon">
  <title>Festival-itinérant</title>
  <link rel="stylesheet" href="<?= get_theme_file_uri() ?>/src/scss/main.scss" />
  <?php wp_head(); ?>
</head>

    <body>
    <nav class="main-menu">
        <div class="close-button"><i class="fas fa-times"></i></div>
        <ul>
        <?php 
        
            $menuLocations = get_nav_menu_locations();
            $headerMenuId = $menuLocations['header-menu'];
            $menuItemList = wp_get_nav_menu_items($headerMenuId);
            foreach ($menuItemList as $menuItem) :
        ?>
            <li class="main-menu__item"><a href="<?= $menuItem->url; ?>"><?= $menuItem->title; ?></a></li>
        <?php 
            endforeach; 
        ?>
            
        </ul>
    </nav>
    <header class="header">
        <div class="top-bar">
            <a class="header__nav__logo" href="<?= home_url() ?>"><img src="<?= get_theme_file_uri() ?>/assets/logo-festival.webp" alt=""></a>
            <div class="top-bar__actions">
            <p class="header__slogan">C'est chez vous qu'il passe !</p>
            </div>
            <div class="top-bar__burger-button">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </header>