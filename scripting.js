const apiKey = "hRu1iDxZ8UiHwKYZi2jotjKL0a17Aidynftkr6Ad";

function searchNutrients() {
    const foodInput = document.getElementById('foodInput').value.trim();

    if (foodInput === '') {
        alert('Please enter a food item.');
        return;
    }

    fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${foodInput}&api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const firstResult = data.foods[0];
            if (firstResult) {
                displayNutrients(firstResult);
            } else {
                document.getElementById('nutrientResult').innerHTML = 'Nutrient information not found in database.';
            }
        })
        .catch(error => console.error('Error:', error));
}

function displayNutrients(food) {
    const nutrientResult = document.getElementById('nutrientResult');
    nutrientResult.innerHTML = `
        <h2>${food.description}</h2>
        <div style="text-align:center;">
        <table>
            <tr>
                <th>Nutrient</th>
                <th>Value</th>
                <th>Unit</th>
            </tr>
            <tr>
                <td>Water</td>
                <td>${getNutrientValue(food, 'Water')}</td>
                <td>g</td>
            </tr>
            <tr>
                <td>Energy</td>
                <td>${getNutrientValue(food, 'Energy')}</td>
                <td>kcal</td>
            </tr>
            <tr>
                <td>Nitrogen</td>
                <td>${getNutrientValue(food, 'Nitrogen')}</td>
                <td>g</td>
            </tr>
            <tr>
                <td>Protein</td>
                <td>${getNutrientValue(food, 'Protein')}</td>
                <td>g</td>
            </tr>
            <tr>
                <td>Total lipid (fat)</td>
                <td>${getNutrientValue(food, 'Total lipid (fat)')}</td>
                <td>g</td>
            </tr>
            <tr>
                <td>Ash</td>
                <td>${getNutrientValue(food, 'Ash')}</td>
                <td>g</td>
            </tr>
            <tr>
                <td>Carbohydrate</td>
                <td>${getNutrientValue(food, 'Carbohydrate')}</td>
                <td>g</td>
            </tr>
            <tr>
                <td>Fiber, total dietary</td>
                <td>${getNutrientValue(food, 'Fiber, total dietary')}</td>
                <td>g</td>
            </tr>
            <tr>
                <td>Citric acid</td>
                <td>${getNutrientValue(food, 'Citric acid')}</td>
                <td>g</td>
            </tr>
            <tr>
                <td>Malic acid</td>
                <td>${getNutrientValue(food, 'Malic acid')}</td>
                <td>g</td>
            </tr>
            <tr>
                <td>Vitamin C</td>
                <td>${getNutrientValue(food, 'Vitamin C')}</td>
                <td>mg</td>
            </tr>
            <tr>
                <td>Thiamin</td>
                <td>${getNutrientValue(food, 'Thiamin')}</td>
                <td>mg</td>
            </tr>
            <tr>
                <td>Riboflavin</td>
                <td>${getNutrientValue(food, 'Riboflavin')}</td>
                <td>mg</td>
            </tr>
            <tr>
                <td>Niacin</td>
                <td>${getNutrientValue(food, 'Niacin')}</td>
                <td>mg</td>
            </tr>
            <tr>
                <td>Carotene, alpha</td>
                <td>${getNutrientValue(food, 'Carotene, alpha')}</td>
                <td>µg</td>
            </tr>
            <tr>
                <td>Cryptoxanthin, beta</td>
                <td>${getNutrientValue(food, 'Cryptoxanthin, beta')}</td>
                <td>µg</td>
            </tr>
            <tr>
                <td>Cryptoxanthin, alpha</td>
                <td>${getNutrientValue(food, 'Cryptoxanthin, alpha')}</td>
                <td>µg</td>
            </tr>
            <tr>
                <td>cis-Lycopene</td>
                <td>${getNutrientValue(food, 'cis-Lycopene')}</td>
                <td>µg</td>
            </tr>
            <tr>
                <td>trans-Lycopene</td>
                <td>${getNutrientValue(food, 'trans-Lycopene')}</td>
                <td>µg</td>
            </tr>
            <tr>
                <td>cis-Lutein/Zeaxanthin</td>
                <td>${getNutrientValue(food, 'cis-Lutein/Zeaxanthin')}</td>
                <td>µg</td>
            </tr>
            <tr>
                <td>Vitamin K (phylloquinone)</td>
                <td>${getNutrientValue(food, 'Vitamin K (phylloquinone)')}</td>
                <td>µg</td>
            </tr>
            <tr>
                <td>Vitamin K (Dihydrophylloquinone)</td>
                <td>${getNutrientValue(food, 'Vitamin K (Dihydrophylloquinone)')}</td>
                <td>µg</td>
            </tr>
            <tr>
                <td>Vitamin K (Menaquinone-4)</td>
                <td>${getNutrientValue(food, 'Vitamin K (Menaquinone-4)')}</td>
                <td>µg</td>
            </tr>
            ${food.foodNutrients.map(nutrient => `
                <tr>
                    <td>${nutrient.nutrientName}</td>
                    <td>${nutrient.value}</td>
                    <td>${nutrient.unitName}</td>
                </tr>
            `).join('')}
        </table>
        </div>
    `;
}

function getNutrientValue(food, nutrientName) {
    const nutrient = food.foodNutrients.find(nutrient => nutrient.nutrientName === nutrientName);
    return nutrient ? nutrient.value : '-';
}
