fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital')
.then(response => response.json())
.then(data => {
    const countriesDiv = document.getElementById('countries');
    data.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        countryDiv.innerHTML = `
        <div>
        <strong>${country.name.common}</strong><br>
        Capital: ${country.capital ? country.capital[0] : 'N/A'}
        </div>
        <img src="${country.flags.png}" alt="Bandeira de ${country.name.common}">
        `;
        countriesDiv.appendChild(countryDiv);
    });
})
.catch(error => {
    console.error('Erro ao buscar os dados dos países:', error);
});



const lista = document.createElement('#lista-paises')


lista.innerHTML += `
<div class="lista-paises">
<div class="pais">
    <div class="pais-texto">
     <div class="nome-pais"></div>
     <div class="capital-pais"></div>
    </div>
    <div class="flag">
     <img src="" alt="">
    </div>
</div>
</div>
`