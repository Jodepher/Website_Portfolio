

    fetch('portfolio.json')
        .then(res => res.json())
        .then(data => {

          const portfolioInfo = document.querySelector('#portfolio-json')

            data.portfolio.forEach((portfolio) => {
            portfolioInfo.innerHTML += `
                <div class="portfolio-info">
                <h2>${portfolio.title}</h2>
                <img src="${portfolio.img}" alt="" />
                <p>${portfolio.desc}</p>
                <a href="${portfolio.github}" target="blank"><i class="fa-brands fa-github"></i></a>
                <a href="${portfolio.live}" target="blank">
                <i class="fa-solid fa-link"></i>
                </a>
                </div>
                `
        })
        })



