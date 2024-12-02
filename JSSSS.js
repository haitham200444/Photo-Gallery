<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ma Galerie de Photos Accessible</title>
    <style>
        /* Style général */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }

        /* Header */
        header {
            text-align: center;
            background-color: #333;
            color: #fff;
            padding: 20px 0;
        }

        header h1 {
            margin: 0;
        }

        header p {
            margin: 10px 0;
        }

        /* Galerie de photos */
        .photo-gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            padding: 20px;
        }

        .photo-card {
            border: 2px solid #ddd;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .photo-card img {
            width: 100%;
            height: auto;
            display: block;
        }

        /* Footer */
        footer {
            text-align: center;
            padding: 10px 0;
            background-color: #333;
            color: #fff;
            margin-top: 20px;
        }

        /* Accessibilité */
        :focus {
            outline: 3px solid #ff6347;
        }

    </style>
</head>

<body>

    <header>
        <h1>Bienvenue dans ma Galerie de Photos</h1>
        <p>Explorez mes photos favorites!</p>
    </header>

    <div class="photo-gallery" role="region" aria-label="Galerie de photos">
        <div class="photo-card">
            <img src="image1.jpg" alt="Une plage au coucher du soleil" loading="lazy" tabindex="0">
        </div>
        <div class="photo-card">
            <img src="image2.jpg" alt="Un coucher de soleil en montagne" loading="lazy" tabindex="0">
        </div>
        <div class="photo-card">
            <img src="image3.jpg" alt="Forêt dense au printemps" loading="lazy" tabindex="0">
        </div>
        <!-- Ajoutez plus de photos ici -->
    </div>

    <footer>
        <p>&copy; 2024 Ma Galerie de Photos. Tous droits réservés.</p>
    </footer>

    <script>
        // Script pour la navigation au clavier sur les images
        document.addEventListener('keydown', function (event) {
            const focusableElements = document.querySelectorAll('.photo-card img');
            const index = Array.from(focusableElements).indexOf(document.activeElement);

            if (event.key === 'ArrowRight') {
                // Aller à la prochaine image
                if (index < focusableElements.length - 1) {
                    focusableElements[index + 1].focus();
                }
            } else if (event.key === 'ArrowLeft') {
                // Aller à l'image précédente
                if (index > 0) {
                    focusableElements[index - 1].focus();
                }
            }
        });
    </script>

</body>

</html>