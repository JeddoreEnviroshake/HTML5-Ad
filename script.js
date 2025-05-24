document.addEventListener('DOMContentLoaded', function () {
    const scenes = document.querySelectorAll('.scene');
    let index = 0;

    function showScene(i) {
        scenes.forEach((s, idx) => {
            if (idx === i) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
    }

    function nextScene() {
        index++;
        if (index < scenes.length) {
            showScene(index);
            setTimeout(nextScene, 3000);
        }
    }

    // Start animation chain
    showScene(0);
    setTimeout(nextScene, 3000);
});
