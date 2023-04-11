<?php
    /*
    Template Name: spectacle
    */
    ?>
    
    <?php
    // index.php est le template par défaut => on ne devrait pas l'utiliser
    // on lui prévoit donc un comportement minimaliste
    get_header();
    ?>
    <main class="main">
        <h2>Spectacles de la tournée 2023</h2>
        <section class="spectacle">
            <div class="spectacle__card">
                <div class="spectacle__card__infos">
                    <img class="spectacle__card__infos__img" src="<?= get_theme_file_uri() ?>/assets/Affiche_Ragdalam.png" alt="">
                    <div class="spectacle__card__infos__info">
                        <p>RAGDALAM CIRCUS</p>
                    </div>
                </div>
                <p> Une dramédie musicale en 4 actes, un tohu-bohu mélodique, un tapage de mots, un piano volant, tout
                    un barnum en mouvement... pour un seul but : vivre, vivre, Vivre !
                    De poésie et d’humour.</p>
                    <a class="link" href="https://www.google.com/search?q=ragdalam+circus&rlz=1C1CHZN_frFR1033FR1033&oq=ragdalam+&aqs=chrome.1.69i57j0i546l4.2884j0j15&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:0eb4e1be,vid:2V2Ng1bOMfM">Vidéo du spéctacle</a>
                    <a class="link" href="https://actu.fr/normandie/les-andelys_27016/les-andelys-l-ocla-lance-sa-saison-avec-un-spectacle-musical_48964764.html">Avis de presse</a>
                </div>
                <div class="spectacle__card">
                    <div class="spectacle__card__infos">
                        <img class="spectacle__card__infos__img" src="<?= get_theme_file_uri() ?>/assets/les soeurs normandie.png" alt="">
                        <div class="spectacle__card__infos__info">
                            <p>LES SŒURS NORMANDIE</p>
                        </div>
                    </div>
                    <p> Deux commères passionnées de sport mais sédentaires incurables, elles font de leur attachement à
                        leur région natale, une compétition impitoyable. Elles chantent, elles dansent, elles mangent, elles
                        boivent et se disputent au son d’un accordéon bienveillant. Jamais vainqueurs, jamais vaincus, c’est
                        seulement au détriment du public qu’elles arriveront à s’entendre. Un hymne régionaliste,
                        gastronomique, humoristique et presque historique !</p>
                        <a class="link" href="https://vimeo.com/54514836">Vidéo du spéctacle</a>
                    </div>
                    <div class="spectacle__card">
                        <div class="spectacle__card__infos">
                            <img class="spectacle__card__infos__img" src="<?= get_theme_file_uri() ?>/assets/AFFICHE_MECHANTE.jpg" alt="">
                            <div class="spectacle__card__infos__info">
                                <p>MECHANTE !</p>
                            </div>
                        </div>
                        <p>Un spectacle qui parle d’amour et de la difficulté de grandir, quand on a été beaucoup aimé ou pas du
                            tout.
                            Violette et Mr Plume sont voisins, elle est méchante, lui aime et chante.
                            Entre eux c’est l’ascenseur émotionnel.</p>
                            <a class="link" href="https://www.youtube.com/watch?v=EhLaaFhKiLk">Vidéo du spéctacle</a>
                    <a class="link" href="https://www.infolocale.fr/evenements/evenement-aclou-spectacle-mechante-706562955">Avis de presse</a>
                        </div>
                    <div class="spectacle__card">
                        <div class="spectacle__card__infos">
                            <img class="spectacle__card__infos__img" src="<?= get_theme_file_uri() ?>/assets/New_affiche_Nougaro.png" alt="">
                            <div class="spectacle__card__infos__info">
                                <p> NOUGARO, L'HIRONDELLE ET NOUS</p>
                            </div>
                        </div>
                        <p>Les 2 Pascal invitent à revisiter quelques grands standards du poète occitan tout en découvrant de
                            véritables perles. Une mise en scène tantôt humoristique tantôt poignante, pour un envol des mots et
                            des notes, aussi haut que l'hirondelle.</p>
                        <p> "Leurs talents sont multiples : ils arrangent, ils chantent et racontent...c'est un spectacle très
                            vivant, en tous points, que je recommande à ceux qui veulent faire connaître Claude". <br>
                            Hélène Nougaro
                        </p>
                        <a class="link" href="https://www.google.com/search?q=Nougaro+l%27hrindelle+et+nous&rlz=1C1CHZN_frFR1033FR1033&oq=Nougaro+l%27hrindelle+et+nous+&aqs=chrome..69i57.6999j0j15&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:ba87f8ce,vid:8ZSaa2b4tjQ">Vidéo du spéctacle</a>
                    <a class="link" href="https://www.ladepeche.fr/article/2014/08/18/1935704-les-deux-pascal-rendent-hommage-a-nougaro.html">Avis de presse</a>
                    </div>
                    <div class="spectacle__card">
                        <div class="spectacle__card__infos">
                            <img class="spectacle__card__infos__img" src="<?= get_theme_file_uri() ?>/assets/défis d'impros.png" alt="">
                            <div class="spectacle__card__infos__info">
                                <p>DÉFIS D'IMPROS</p>
                            </div>
                        </div>
                        <p> Un moment unique et éphémère, que personne d’autre ne verra jamais, grâce à la magie de l’impro !
                            Sur scène : des comédiens issus de la Ligue d’Improvisation Française, CHAMPIONS DU MONDE. Le
                            public offre des mots et des styles de jeu et se trouve embarquer dans leur délire.
                            Ils ne peuvent rien refuser !!!</p>
                            <a class="link" href="https://www.ouest-france.fr/normandie/saint-germain-la-campagne-27230/les-pros-de-l-impro-de-retour-aux-mares-plates-5514316">Avis de presse</a>
                        </div>
            <div class="spectacle__card">
                <div class="spectacle__card__infos">
                    <img class="spectacle__card__infos__img" src="<?= get_theme_file_uri() ?>/assets/fréhel la diva des faubourgs.png" alt="">
                    <div class="spectacle__card__infos__info">
                        <p>FRÉHEL, LA DIVA DES FAUBOURGS</p>
                    </div>
                </div>
                <p>Assise à une table de bistro, LA grande chanteuse réaliste du début du XXe siècle fait défiler sa vie
                    sous l’œil goguenard de son accordéoniste. Ses passions, son rire, son amour de la scène et du
                    public, en un mot : la complainte de sa vie, pleine, exceptionnelle.</p>
                    <a class="link" href="https://www.youtube.com/watch?v=Hc6pmPnfloo">Vidéo du spéctacle</a>
                    <a class="link" href="https://www.lepetitsolognot.fr/nouan-le-fuzelier-frehel-la-diva-des-faubourgs/">Avis de presse</a>
                </div>
                <div class="spectacle__card">
                <div class="spectacle__card__infos">
                    <img class="spectacle__card__infos__img" src="<?= get_theme_file_uri() ?>/assets/affiche_paris-cigale.jpg" alt="">
                    <div class="spectacle__card__infos__info">
                        <p>PARIS CIGALE</p>
                    </div>
                </div>
                <p>Un voyage dans le temps avec les grands interprètes de la chanson française des années 1910-1960
                Fréhel – Piaf – Fernandel – Salvador – Amont...
                Un voyage dans l’espace avec des allers-retours entre Paname et Méditerranée, entre faubourgs et calanques
                Et un accordéon pour faire le trait d’union...</p>
                </div>
                <div class="spectacle__card">
                <div class="spectacle__card__infos">
                    <img class="spectacle__card__infos__img" src="<?= get_theme_file_uri() ?>/assets/affiche-moliere.jpg" alt="">
                    <div class="spectacle__card__infos__info">
                        <p>Molière Place des disputes</p>
                    </div>
                </div>
                <p>Entre le vaudeville et la farce !!
                Molière Place des disputes est un montage inédit autour des scènes de disputes, dans les grandes comédies de Molière. Nous connaissons tous l’incroyable actualité de Molière : son intelligence du quotidien, sa capacité d’analyse de l’âme humaine, et ce sens inné de la comédie qui, grâce au rire nous permet de nous interroger sur nous- mêmes. Voisins, parents, amis, et collègues, (Scapin, Toinette, Harpagon, Marianne, Valère, le couple Jourdain..) traversent cette place comme nous traversons la vie, avec nos qualités, nos travers, nos petits arrangements, et nos....disputes</p>
                <a class="link" href="https://vimeo.com/218129920">Vidéo du spéctacle</a>
                </div>
                <div class="spectacle__card">
                <div class="spectacle__card__infos">
                    <img class="spectacle__card__infos__img" src="<?= get_theme_file_uri() ?>/assets/affiche_tour_d-horizon.png" alt="">
                    <div class="spectacle__card__infos__info">
                        <p>TOUR D’HORIZON</p>
                    </div>
                </div>
                <p>20 ans que les 2 compères sillonnent ensemble les rues, les routes, les champs, les bistrots, les théâtres et le monde.
                Il fallait bien fêter ça !
                20 morceaux choisis, en chanson, en musique, en dialogue... toutes les ambiances de leur répertoire et toujours autant d’émotion, de complicité et de partage avec le public.</p>
                </div>
                    </section>
                </main>
<?php
        get_footer();
    ?>