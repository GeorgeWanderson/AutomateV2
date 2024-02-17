let totalCalories = 0;

const foodDatabase = [
    { name: "Maçã", calories: 52 },
    { name: "Banana", calories: 89 },
    { name: "Laranja", calories: 62 },
    { name: "Pão", calories: 74 },
    { name: "Arroz", calories: 130 },
    { name: "Feijão", calories: 227 },
    { name: "Carne", calories: 250 },
    { name: "Frango", calories: 165 },
    { name: "Peixe", calories: 206 },
    { name: "Leite", calories: 103 }
];

function addFood() {
    const foodInput = document.getElementById('foodInput');
    const caloriesInput = document.getElementById('caloriesInput');

    const foodName = foodInput.value.toLowerCase(); // Convertendo para minúsculas para comparação
    let calories = parseInt(caloriesInput.value);

    const matchingFood = foodDatabase.find(food => food.name.toLowerCase() === foodName);

    if (matchingFood) {
        // Se a quantidade de calorias não foi especificada manualmente, use a quantidade padrão do alimento
        if (isNaN(calories)) {
            calories = matchingFood.calories;
        }

        const foodList = document.getElementById('foodList');
        const li = document.createElement('li');
        li.innerText = `${matchingFood.name}: ${calories} cal`;
        foodList.appendChild(li);

        totalCalories += calories;
        updateTotalCalories();

        // Limpar os campos de entrada após adicionar
        foodInput.value = '';
        caloriesInput.value = '';
    }
}

function updateTotalCalories() {
    const totalCaloriesElement = document.getElementById('totalCalories');
    totalCaloriesElement.innerText = `Total de calorias: ${totalCalories}`;
}

// Implementando sugestão de autocomplete e preenchimento automático de calorias
function autoComplete() {
    const foodInput = document.getElementById('foodInput');
    const inputText = foodInput.value.toLowerCase();
    const suggestions = foodDatabase.filter(food => food.name.toLowerCase().startsWith(inputText));
    const datalist = document.getElementById('foodSuggestions');

    datalist.innerHTML = '';
    suggestions.forEach(suggestion => {
        const option = document.createElement('option');
        option.value = suggestion.name;
        datalist.appendChild(option);
    });

    // Preenchimento automático de calorias ao selecionar uma sugestão
    const matchingFood = foodDatabase.find(food => food.name.toLowerCase() === inputText);
    if (matchingFood) {
        const caloriesInput = document.getElementById('caloriesInput');
        caloriesInput.value = matchingFood.calories;
    }
}
