function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';

    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 3 + 2;

    star.style.left = `${startX}px`;
    star.style.animationDuration = `${duration}s`;

    document.body.appendChild(star);
    star.addEventListener('animationiteration', () => {
        star.remove();
    });
}

setInterval(createShootingStar, 3000);

const iconContainers = document.querySelectorAll('.icon-container');

iconContainers.forEach((container) => {
  const icon = container.querySelector('img');
  const infoBox = container.querySelector('.info-box');

  icon.addEventListener('click', () => {
    
    infoBox.style.display = infoBox.style.display === 'none' ? 'block' : 'none';
  });
});

/*document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const searchTerm = document.getElementById('search-input').value;
    alert('You searched for: ' + searchTerm);
});*/

/*function showDefaultResult() {
    document.getElementById("result").style.display = "block";
}*/