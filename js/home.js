document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {

        // PCサイズ
        const mediaQuery0 = window.matchMedia('(min-width:1280.1px)');
        // タブレットサイズ
        const mediaQuery1 = window.matchMedia('(min-width:820.1px) and (max-width:1280px)');
        // iPad Airサイズ
        const mediaQuery2 = window.matchMedia('(min-width:768.1px) and (max-width:820px)');
        // iPad Miniサイズ
        const mediaQuery3 = window.matchMedia('(min-width:705.1px) and (max-width:768px)');
        // スマホサイズ
        const mediaQuery4 = window.matchMedia('(min-width:400.1px) and (max-width:705px)');
        // iPhone SEサイズ
        const mediaQuery5 = window.matchMedia('(max-width:400px)');


        if (mediaQuery0.matches) {

            // スクロール量を取得
            var scrollPosition = window.scrollY;

            // スクロールが680px以下の場合にスライドさせる
            if (scrollPosition <= 1250) {
                // robo_imageを下にスライド
                var roboImage = document.querySelector('.robo_image');
                roboImage.style.top = 150 + scrollPosition * 1 + 'px';
                roboImage.style.left = 15 - scrollPosition * 0.01 + 'vw';

                // human_imageを下にスライド
                var humanImage = document.querySelector('.human_image');
                humanImage.style.top = 150 + scrollPosition * 1 + 'px';
                humanImage.style.right = 15 - scrollPosition * 0.01 + 'vw';
            }
        }

        if (mediaQuery1.matches) {

            // スクロール量を取得
            var scrollPosition = window.scrollY;

            // スクロールが680px以下の場合にスライドさせる
            if (scrollPosition <= 900) {
                // robo_imageを下にスライド
                var roboImage = document.querySelector('.robo_image');
                roboImage.style.top = 150 + scrollPosition * 1 + 'px';
                roboImage.style.left = 15 - scrollPosition * 0.01 + 'vw';

                // human_imageを下にスライド
                var humanImage = document.querySelector('.human_image');
                humanImage.style.top = 150 + scrollPosition * 1 + 'px';
                humanImage.style.right = 15 - scrollPosition * 0.01 + 'vw';
            }
        }

        if (mediaQuery2.matches) {

            // スクロール量を取得
            var scrollPosition = window.scrollY;

            // スクロールが680px以下の場合にスライドさせる
            if (scrollPosition <= 750) {
                // robo_imageを下にスライド
                var roboImage = document.querySelector('.robo_image');
                roboImage.style.top = 150 + scrollPosition * 1 + 'px';
                roboImage.style.left = 15 - scrollPosition * 0.01 + 'vw';

                // human_imageを下にスライド
                var humanImage = document.querySelector('.human_image');
                humanImage.style.top = 150 + scrollPosition * 1 + 'px';
                humanImage.style.right = 15 - scrollPosition * 0.01 + 'vw';
            }
        }

        if (mediaQuery3.matches) {

            // スクロール量を取得
            var scrollPosition = window.scrollY;

            // スクロールが680px以下の場合にスライドさせる
            if (scrollPosition <= 720) {
                // robo_imageを下にスライド
                var roboImage = document.querySelector('.robo_image');
                roboImage.style.top = 150 + scrollPosition * 1 + 'px';
                roboImage.style.left = 15 - scrollPosition * 0.01 + 'vw';

                // human_imageを下にスライド
                var humanImage = document.querySelector('.human_image');
                humanImage.style.top = 150 + scrollPosition * 1 + 'px';
                humanImage.style.right = 15 - scrollPosition * 0.01 + 'vw';
            }
        }

        if (mediaQuery4.matches) {

            // スクロール量を取得
            var scrollPosition = window.scrollY;

            // スクロールが680px以下の場合にスライドさせる
            if (scrollPosition <= 420) {
                // robo_imageを下にスライド
                var roboImage = document.querySelector('.robo_image');
                roboImage.style.top = 150 + scrollPosition * 1 + 'px';
                roboImage.style.left = 15 - scrollPosition * 0.03 + 'vw';

                // human_imageを下にスライド
                var humanImage = document.querySelector('.human_image');
                humanImage.style.top = 150 + scrollPosition * 1 + 'px';
                humanImage.style.right = 15 - scrollPosition * 0.03 + 'vw';
            }
        }

        if (mediaQuery5.matches) {

            // スクロール量を取得
            var scrollPosition = window.scrollY;

            // スクロールが680px以下の場合にスライドさせる
            if (scrollPosition <= 350) {
                // robo_imageを下にスライド
                var roboImage = document.querySelector('.robo_image');
                roboImage.style.top = 150 + scrollPosition * 1 + 'px';
                roboImage.style.left = 15 - scrollPosition * 0.03 + 'vw';

                // human_imageを下にスライド
                var humanImage = document.querySelector('.human_image');
                humanImage.style.top = 150 + scrollPosition * 1 + 'px';
                humanImage.style.right = 15 - scrollPosition * 0.03 + 'vw';
            }
        }

    });
});