<?php


// on vérifie que la fonction n'existe pas déjà avant de la déclarer
// => on évite d'écraser du code par erreur
// on peut aussi préfixer les noms de nos fonctions et variables pour les protéger au max
if (!function_exists('festival_enqueue_scripts')) :

  /**
   * festival_enqueue_scripts
   *
   * cette fonction sera appelée par WP lorque le hook "wp_enqueue_scripts" sera déclenché.
   * @return void
   */
  function festival_enqueue_scripts()
  {
      // wp_enqueue_style() nous permet d'ajouter des styles aux styles qui seront chargés par wp_head()
      wp_enqueue_style( 'main', get_template_directory_uri() . '/dist/main.css', [], false, 'all');
      
      // wp_enqueue_script() nous permet d'ajouter des scripts aux styles qui seront chargés par wp_head() ou par wp_footer(), en fonction du dernier paramètre
      wp_enqueue_script( 'main', get_template_directory_uri() . '/dist/main.js', [], false, true);
  }
  
  add_action( 'wp_enqueue_scripts', 'festival_enqueue_scripts' );
  
  // end if exists festival_enqueue_scripts
endif;

if (!function_exists('get_the_thumbnail_or_default')) :
  /**
   * Pour un POST donné, je récupère l'image mise en avant
   * ou une image par défaut si on a pas d'image mise en avant
   *
   * @return void
   */
  function get_the_thumbnail_or_default($size = 'thumbnail') {
  
      // on donne null en premier argument pour ne pas avoir à préciser l'id du post pour lequel on veut l'image (c'est à dire qu'on veut utiliser le post courant)
      // on passe la $size en second argument
      $thumbnailUrl = get_the_post_thumbnail_url(null, $size);
      
      // si on n'a pas récupéré d'URL
      // on utilise une image par défaut
      if (!$thumbnailUrl) {
          $thumbnailUrl = "https://picsum.photos/500/400?random=" . rand(1,100);
      }
  
      return $thumbnailUrl;
  }
  // if exists get_the_thumbnail_or_default
  endif;

function register_my_menus() {
  register_nav_menus(
      [
          'header-menu' => __( 'Header Menu' ),
          'footer-menu' => __( 'Footer Menu' ),
      ]
  );
}

add_action( 'init', 'register_my_menus' );

// on déclare que le thème autorise l'utilisation d'images mises en avant
add_theme_support('post-thumbnails');

// on se crée une fonction qui nous permet de récupérer la liste des articles pour la home
if (!function_exists('festival_get_home_postlist')) :
  function festival_get_home_postlist()
  {
      // on prépare une WP_Query qui va récupérer les 3 derniers articles
      $args = [
          'post_status' => 'publish',
          'post_type' => 'post',
          'posts_per_page' => 3 // on peut utiliser une valeur fixe ou laisser WP le gérer par défaut => configuré en backoffice
      ];
      $homePostsQuery = new WP_Query($args);
  
      // on renvoie la liste d'objets WP_Post récupérée
      return $homePostsQuery->posts;
  }
  // end if exists festival_get_home_postlist
  endif;

  if (!function_exists('festival_get_postlist')) :
    function festival_get_postlist()
    {
        // on prépare une WP_Query qui va récupérer les 3 derniers articles
        $args = [
            'post_status' => 'publish',
            'post_type' => 'post',
            'order' => 'DESC',
            'order_by' => 'date'
        ];
        $PostsQuery = new WP_Query($args);
    
        // on renvoie la liste d'objets WP_Post récupérée
        return $PostsQuery->posts;
    }
    // end if exists festival_get_postlist
    endif;

    if (!function_exists('festival_get_galerielist')) :
        function festival_get_galerielist()
        {
            // on prépare une WP_Query qui va récupérer les 3 derniers articles
            $args = [
                'post_status' => 'publish',
                'post_type' => '	gt3_gallery',
                'order' => 'DESC',
                'order_by' => 'post_title'
            ];
            $GaleriesQuery = new WP_Query($args);
        
            // on renvoie la liste d'objets WP_Post récupérée
            return $GaleriesQuery->posts;
        }
        // end if exists festival_get_postlist
        endif;