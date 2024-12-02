<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galerie de Photos</title>
    <style>
        /* CSS intégré */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: #f0f0f0;
        }

        .gallery {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            padding: 10px;
            justify-content: center;
        }

        .gallery img {
            width: 200px;
            height: 150px;
            object-fit: cover;
            cursor: pointer;
            border-radius: 5px;
            transition: transform 0.2s;
        }

        .gallery img:hover {
            transform: scale(1.05);
        }

        .lightbox {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }

        .lightbox img {
            max-width: 80%;
            max-height: 80%;
            border-radius: 10px;
            transition: transform 0.3s ease-in-out;
        }

        .lightbox .close {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 30px;
            color: white;
            cursor: pointer;
        }

        .lightbox button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 20px;
            background: transparent;
            color: white;
            border: none;
            cursor: pointer;
            padding: 10px;
            z-index: 1001;
        }

        .lightbox .prev {
            left: 10px;
        }

        .lightbox .next {
            right: 10px;
        }

        .lightbox button:hover {
            background: rgba(255, 255, 255, 0.3);
        }
    </style>
</head>
<body>
    <div class="gallery">
        <img src="image1.jpg" alt="Photo 1">
        <img src="image2.jpg" alt="Photo 2">
        <img src="image3.jpg" alt="Photo 3">
        <img src="image4.jpg" alt="Photo 4">
        <img src="image5.jpg" alt="Photo 5">
    </div>
    
    <div class="lightbox" id="lightbox">
        <span class="close">&times;</span>
        <img class="lightbox-image" src="" alt="Image en grand">
        <button class="prev">❮</button>
        <button class="next">❯</button>
    </div>

    <script>
        // JavaScript intégré

        // Sélection des éléments HTML
        const galleryImages = document.querySelectorAll('.gallery img');
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.querySelector('.lightbox-image');
        const closeButton = document.querySelector('.lightbox .close');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');

        let currentIndex = 0;

        // Fonction pour ouvrir la lightbox avec une image
        galleryImages.forEach((img, index) => {
            img.addEventListener('click', () => {
                currentIndex = index;
                updateLightbox();
                lightbox.style.display = 'flex';
            });
        });

        // Fonction pour fermer la lightbox
        closeButton.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });

        // Fonction pour passer à l'image précédente
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
            updateLightbox();
        });

        // Fonction pour passer à l'image suivante
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % galleryImages.length;
            updateLightbox();
        });

        // Met à jour l'image dans la lightbox
        function updateLightbox() {
            lightboxImage.src = galleryImages[currentIndex].src;
            lightboxImage.alt = galleryImages[currentIndex].alt;
        }

        // Fermer la lightbox avec la touche "Escape"
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                lightbox.style.display = 'none';
            } else if (e.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
                updateLightbox();
            } else if (e.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % galleryImages.length;
                updateLightbox();
            }
        });
    </script>
</body>
</html>