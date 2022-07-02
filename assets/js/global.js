function checkLS() {
    if (localStorage.getItem('cookies') === null) {
        localStorage.setItem('cookies', 0);
    }
}

function res() {
    // let sum = parseInt(localStorage.getItem('cookies'))

    // if (sum == 0) {
    //     window.open('https://www.effectivecpmgate.com/swqh6tcn3k?key=163b8eee7c2fbbbdae754cb90a81d9f7', '_blank');
    // } else {
    validation();
    // }
    // localStorage.setItem('cookies', 1);

}

function welcomeMsg() {
    const welcomeMsgEl = document.querySelector("#welcomeMsg");
    let array = 0;
    
    const ig = `<a href="https://www.instagram.com/king._jeff/" target="_blank">@Keepoin</a>`;
    const wa = `<a href="https://api.whatsapp.com/send?phone=6289525291880" target="_blank">089525291880</a>`;
    const web = `<a href="https://keepoin.github.io/more/" target="_blank">WEBSITE</a>`

    let arrayEl = [
        `<p class="animation mb-0 text-truncate">IG: ${ig} / WA: ${wa}</p>`,
        `<p class="animation mb-0 text-truncate">VISIT ${web} LAINNYA</p>`,

    ];
    setInterval(() => {
        welcomeMsgEl.innerHTML = arrayEl[array];

        array++;
        if (array >= arrayEl.length) {
            array = 0;
        }
    }, 5000);
}

window.dataLayer = window.dataLayer || [];

function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-206846692-3');
