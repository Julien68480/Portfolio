const DescriptionKageko = () => (
  <>
    <h4>Introduction</h4>
    <p className="mb-4">
      J'ai réalisé une refactorisation complète d'une application web Symfony.
      J'ai appliqué les bonnes pratiques de l'architecture MVC tout au long du
      projet.
    </p>

    <h4>Restructuration des templates et du CSS</h4>
    <p className="mb-4">
      J'ai restructuré l'ensemble des templates de l'application. J'ai également
      migré l'architecture CSS vers une solution centralisée avec Webpack. Cette
      migration améliore la maintenabilité et réduit les conflits de styles.
    </p>

    <h4>Correction du système de filtrage produits</h4>
    <p className="mb-4">
      Le système de filtrage présentait des dysfonctionnements critiques côté
      back-end. J'ai entièrement réécrit ce système. Il gère désormais les
      filtres par catégorie, vendeur, prix et région. Les résultats sont fiables
      et cohérents.
    </p>

    <h4>Pagination avec requêtes SQL optimisées</h4>
    <p className="mb-4">
      J'ai implémenté un système de pagination performant. Les requêtes SQL ont
      été optimisées pour limiter la charge en base de données. Les temps de
      réponse sont nettement améliorés.
    </p>

    <h4>Amélioration de l'expérience utilisateur</h4>
    <p className="mb-4">
      J'ai simplifié la navigation du panneau utilisateur et admin. Le nombre de
      clics pour accéder aux fonctionnalités principales a été réduit.
      L'interface est plus intuitive et plus rapide à utiliser.
    </p>

    <h4>Qualité de code et code reviews</h4>
    <p className="mb-4">
      Ce projet m'a confronté à des enjeux concrets de maintenabilité. J'ai
      participé à des code reviews régulières. Ces pratiques m'ont permis
      d'améliorer la qualité et la lisibilité du code.
    </p>
  </>
);
export default DescriptionKageko;
