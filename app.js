fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => {
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        
        let tblCountries = document.getElementById("tbl");

        let tblBody = `<tr>
                        <th>Name</th>
                        <th>Flag</th>
                    </tr>`;

        data.forEach(element => {
            tblBody += `<tr onclick="displayCountryDetails('${element.name.common}')">
                        <td>${element.name.common}</td>
                        <td><img src="${element.flags.png}" alt="Flag of ${element.name.common}" width="30"></td>
                    </tr>`;
        });

        tblCountries.innerHTML = tblBody;
    });

function displayCountryDetails(countryName) {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(res => res.json())
        .then(data => {
            let country = data[0];
            
            document.getElementById("offitalName").innerText = `Official Name: ${country.name.official}`;
            document.getElementById("name").innerText = `Common Name: ${country.name.common}`;
            document.getElementById("img").innerHTML = `<img src="${country.flags.png}" alt="Flag of ${country.name.common}" width="100">`;
            document.getElementById("population").innerText = `Population: ${country.population.toLocaleString()}`;
            document.getElementById("region").innerText = `Region: ${country.region}`;
            document.getElementById("subregion").innerText = `Subregion: ${country.subregion}`;
            document.getElementById("capital").innerText = `Capital: ${country.capital}`;
            document.getElementById("mapsLink").href = country.maps.googleMaps;
        })
        .catch(error => console.error('Error:', error));
}

function serchCuntrie() {
    let searchValue = document.getElementById("txtSearchValue").value;
    displayCountryDetails(searchValue);
}
