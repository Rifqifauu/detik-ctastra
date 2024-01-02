document.addEventListener("DOMContentLoaded", function() {
    const data = [{
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
        foto: 'img/profile/profile1.svg',
        nama: 'John Doe',
        posisi: 'CEO of Company A',
    }, {
        review: 'Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien.',
        foto: 'img/profile/profile2.svg',
        nama: 'Jane Smith',
        posisi: 'CTO of Company B',
    }, {
        review: 'Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa.',
        foto: 'img/profile/profile3.svg',
        nama: 'Alex Johnson',
        posisi: 'COO of Company C',
    }, {
        review: 'Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque.',
        foto: 'img/profile/profile4.svg',
        nama: 'Emily Brown',
        posisi: 'CFO of Company D',
    }, {
        review: 'Fusce fermentum odio nec arcu. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui.',
        foto: 'img/profile/profile5.svg',
        nama: 'Michael Wilson',
        posisi: 'CMO of Company E',
    }];

    const contentContainer = document.querySelector('.review-container');

    for (let i = 0; i < data.length; i++) {
        const objek = data[i];

        const bintang = document.createElement('img');
        bintang.src = 'img/bintang.png';

        const reviewCard = document.createElement('div');
        reviewCard.classList.add('review-card');

        const reviewParagraph = document.createElement('p');
        reviewParagraph.textContent = objek.review;

        const profileContainer = document.createElement('div');
        profileContainer.classList.add('profile');

        const profileImage = document.createElement('img');
        profileImage.src = objek.foto;
        profileImage.alt = '';

        const dataContainer = document.createElement('div');
        dataContainer.classList.add('data', 'ms-2');

        const namaContainer = document.createElement('div');
        namaContainer.classList.add('nama');
        namaContainer.textContent = objek.nama;

        const posisiContainer = document.createElement('div');
        posisiContainer.classList.add('posisi');
        posisiContainer.textContent = objek.posisi;

        // Menggabungkan elemen-elemen
        dataContainer.appendChild(namaContainer);
        dataContainer.appendChild(posisiContainer);

        profileContainer.appendChild(profileImage);
        profileContainer.appendChild(dataContainer);

        reviewCard.appendChild(bintang);
        reviewCard.appendChild(reviewParagraph);
        reviewCard.appendChild(profileContainer);

        contentContainer.appendChild(reviewCard); // Menambahkan reviewCard ke dalam container
    }

    const container = document.querySelector(".review-container");

    window.left = function() {
        container.scrollBy({
            left: -300,
            behavior: "smooth"
        });
    }
    window.right = function() {
        container.scrollBy({
            left: 300,
            behavior: "smooth"
        });
    }
});