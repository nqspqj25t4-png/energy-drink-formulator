// Ingredient Database
const ingredients = [
    // Energy Sources
    {
        id: 'green-tea-extract',
        name: 'Green Tea Extract',
        category: 'energy',
        description: 'Natural caffeine source with L-theanine for sustained energy. Rich in EGCG antioxidants.',
        properties: {
            caffeine: 40, // mg per 100ml
            calories: 2,
            cost: 0.15, // $ per 100ml
            volume: 100, // ml
            sugar: 0,
            protein: 0,
            vitaminC: 0,
            antioxidants: 'High (EGCG)'
        }
    },
    {
        id: 'yerba-mate',
        name: 'Yerba Mate',
        category: 'energy',
        description: 'Multi-layered energy from caffeine, theobromine, and theophylline. Rich in vitamins and minerals.',
        properties: {
            caffeine: 35,
            calories: 5,
            cost: 0.12,
            volume: 100,
            sugar: 0,
            protein: 0,
            vitaminC: 0,
            antioxidants: 'High'
        }
    },
    {
        id: 'guarana',
        name: 'Guarana Extract',
        category: 'energy',
        description: 'Natural caffeine source 2-4x stronger than coffee. Provides long-lasting energy boost.',
        properties: {
            caffeine: 80,
            calories: 1,
            cost: 0.25,
            volume: 100,
            sugar: 0,
            protein: 0,
            vitaminC: 0,
            antioxidants: 'Medium'
        }
    },
    {
        id: 'ginseng',
        name: 'Ginseng Extract',
        category: 'energy',
        description: 'Adaptogenic herb that improves mental clarity and physical endurance. Helps body adapt to stress.',
        properties: {
            caffeine: 0,
            calories: 2,
            cost: 0.30,
            volume: 100,
            sugar: 0,
            protein: 0,
            vitaminC: 0,
            antioxidants: 'Medium'
        }
    },
    // Flavor Enhancers
    {
        id: 'lemon-extract',
        name: 'Lemon Extract',
        category: 'flavor',
        description: 'Natural citric acid provides refreshing taste and vitamin C boost.',
        properties: {
            caffeine: 0,
            calories: 3,
            cost: 0.08,
            volume: 100,
            sugar: 0.5,
            protein: 0,
            vitaminC: 50,
            antioxidants: 'Medium'
        }
    },
    {
        id: 'lime-extract',
        name: 'Lime Extract',
        category: 'flavor',
        description: 'Bright, energizing flavor with natural citric acid and vitamin C.',
        properties: {
            caffeine: 0,
            calories: 3,
            cost: 0.08,
            volume: 100,
            sugar: 0.5,
            protein: 0,
            vitaminC: 45,
            antioxidants: 'Medium'
        }
    },
    {
        id: 'ginger-extract',
        name: 'Ginger Extract',
        category: 'flavor',
        description: 'Warming, spicy flavor. Anti-inflammatory and aids digestion.',
        properties: {
            caffeine: 0,
            calories: 2,
            cost: 0.10,
            volume: 100,
            sugar: 0,
            protein: 0,
            vitaminC: 5,
            antioxidants: 'Low'
        }
    },
    {
        id: 'mint-extract',
        name: 'Mint Extract',
        category: 'flavor',
        description: 'Refreshing, cooling effect. Aids digestion and natural breath freshener.',
        properties: {
            caffeine: 0,
            calories: 1,
            cost: 0.09,
            volume: 100,
            sugar: 0,
            protein: 0,
            vitaminC: 0,
            antioxidants: 'Low'
        }
    },
    // Electrolytes
    {
        id: 'coconut-water',
        name: 'Coconut Water',
        category: 'electrolyte',
        description: 'Natural source of potassium, sodium, magnesium. Low in calories, high in hydration.',
        properties: {
            caffeine: 0,
            calories: 20,
            cost: 0.20,
            volume: 100,
            sugar: 4,
            protein: 0.5,
            vitaminC: 3,
            antioxidants: 'Low'
        }
    },
    {
        id: 'sea-salt',
        name: 'Sea Salt',
        category: 'electrolyte',
        description: 'Provides sodium and trace minerals. Enhances flavor and maintains electrolyte balance.',
        properties: {
            caffeine: 0,
            calories: 0,
            cost: 0.01,
            volume: 1, // grams
            sugar: 0,
            protein: 0,
            vitaminC: 0,
            antioxidants: 'None'
        }
    },
    {
        id: 'magnesium-citrate',
        name: 'Magnesium Citrate',
        category: 'electrolyte',
        description: 'Essential for energy production, muscle function, and prevents cramping.',
        properties: {
            caffeine: 0,
            calories: 0,
            cost: 0.05,
            volume: 1, // grams (150mg = 0.15g)
            sugar: 0,
            protein: 0,
            vitaminC: 0,
            antioxidants: 'None'
        }
    },
    // Natural Sweeteners
    {
        id: 'stevia',
        name: 'Stevia',
        category: 'sweetener',
        description: 'Zero calories, 200-300x sweeter than sugar, no glycemic impact, plant-based.',
        properties: {
            caffeine: 0,
            calories: 0,
            cost: 0.02,
            volume: 1, // grams
            sugar: 0,
            protein: 0,
            vitaminC: 0,
            antioxidants: 'None'
        }
    },
    {
        id: 'monk-fruit',
        name: 'Monk Fruit Extract',
        category: 'sweetener',
        description: 'Zero calories, natural, no aftertaste, contains antioxidants.',
        properties: {
            caffeine: 0,
            calories: 0,
            cost: 0.03,
            volume: 1, // grams
            sugar: 0,
            protein: 0,
            vitaminC: 0,
            antioxidants: 'Low'
        }
    },
    {
        id: 'agave-nectar',
        name: 'Agave Nectar',
        category: 'sweetener',
        description: 'Low glycemic index, natural, provides subtle sweetness and smooth texture.',
        properties: {
            caffeine: 0,
            calories: 60,
            cost: 0.12,
            volume: 100,
            sugar: 15,
            protein: 0,
            vitaminC: 0,
            antioxidants: 'Low'
        }
    },
    // Vitamins & Antioxidants
    {
        id: 'vitamin-b-complex',
        name: 'Vitamin B Complex',
        category: 'vitamin',
        description: 'Essential for energy metabolism. B12, B6, B3 convert food to energy.',
        properties: {
            caffeine: 0,
            calories: 0,
            cost: 0.08,
            volume: 1, // serving
            sugar: 0,
            protein: 0,
            vitaminC: 0,
            antioxidants: 'None'
        }
    },
    {
        id: 'vitamin-c',
        name: 'Vitamin C',
        category: 'vitamin',
        description: 'Antioxidant, supports immune system, enhances iron absorption.',
        properties: {
            caffeine: 0,
            calories: 0,
            cost: 0.05,
            volume: 1, // 100mg serving
            sugar: 0,
            protein: 0,
            vitaminC: 100,
            antioxidants: 'High'
        }
    },
    {
        id: 'coq10',
        name: 'Coenzyme Q10',
        category: 'antioxidant',
        description: 'Cellular energy production, powerful antioxidant, supports heart health.',
        properties: {
            caffeine: 0,
            calories: 0,
            cost: 0.15,
            volume: 1, // 50mg serving
            sugar: 0,
            protein: 0,
            vitaminC: 0,
            antioxidants: 'Very High'
        }
    }
];

// Application State
let currentRecipe = [];
let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initializeTabs();
    populateIngredientSelect();
    displayIngredientDatabase();
    setupEventListeners();
    loadSavedRecipes();
});

// Tab Navigation
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Populate Ingredient Select
function populateIngredientSelect() {
    const select = document.getElementById('ingredient-select');
    ingredients.forEach(ingredient => {
        const option = document.createElement('option');
        option.value = ingredient.id;
        option.textContent = `${ingredient.name} (${ingredient.category})`;
        select.appendChild(option);
    });
}

// Display Ingredient Database
function displayIngredientDatabase(filteredIngredients = ingredients) {
    const grid = document.getElementById('ingredient-grid');
    grid.innerHTML = '';

    if (filteredIngredients.length === 0) {
        grid.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🔍</div><p>No ingredients found matching your search.</p></div>';
        return;
    }

    filteredIngredients.forEach(ingredient => {
        const card = createIngredientCard(ingredient);
        grid.appendChild(card);
    });
}

function createIngredientCard(ingredient) {
    const card = document.createElement('div');
    card.className = 'ingredient-card';
    
    const categoryLabels = {
        energy: 'Energy Sources',
        flavor: 'Flavor Enhancers',
        electrolyte: 'Electrolytes',
        antioxidant: 'Antioxidants',
        vitamin: 'Vitamins',
        sweetener: 'Natural Sweeteners'
    };

    card.innerHTML = `
        <div class="ingredient-card-header">
            <div class="ingredient-name">${ingredient.name}</div>
            <div class="ingredient-category">${categoryLabels[ingredient.category] || ingredient.category}</div>
        </div>
        <div class="ingredient-properties">
            <div class="property-row">
                <span class="property-label">Caffeine:</span>
                <span class="property-value">${ingredient.properties.caffeine} mg/100ml</span>
            </div>
            <div class="property-row">
                <span class="property-label">Calories:</span>
                <span class="property-value">${ingredient.properties.calories} kcal/100ml</span>
            </div>
            <div class="property-row">
                <span class="property-label">Cost:</span>
                <span class="property-value">$${ingredient.properties.cost.toFixed(2)}/100ml</span>
            </div>
            <div class="property-row">
                <span class="property-label">Sugar:</span>
                <span class="property-value">${ingredient.properties.sugar} g/100ml</span>
            </div>
            ${ingredient.properties.vitaminC > 0 ? `
            <div class="property-row">
                <span class="property-label">Vitamin C:</span>
                <span class="property-value">${ingredient.properties.vitaminC} mg/100ml</span>
            </div>
            ` : ''}
        </div>
        <div class="ingredient-description">${ingredient.description}</div>
    `;
    
    return card;
}

// Event Listeners
function setupEventListeners() {
    // Add ingredient to recipe
    document.getElementById('add-ingredient-btn').addEventListener('click', addIngredientToRecipe);
    
    // Clear recipe
    document.getElementById('clear-recipe-btn').addEventListener('click', clearRecipe);
    
    // Save recipe
    document.getElementById('save-recipe-btn').addEventListener('click', saveRecipe);
    
    // Search ingredients
    document.getElementById('ingredient-search').addEventListener('input', filterIngredients);
    
    // Filter by category
    document.getElementById('category-filter').addEventListener('change', filterIngredients);
    
    // Nutrition analyzer
    document.getElementById('analyze-btn').addEventListener('click', analyzeNutrition);
}

// Recipe Functions
function addIngredientToRecipe() {
    const select = document.getElementById('ingredient-select');
    const amountInput = document.getElementById('ingredient-amount');
    
    const ingredientId = select.value;
    const amount = parseFloat(amountInput.value);
    
    if (!ingredientId || !amount || amount <= 0) {
        alert('Please select an ingredient and enter a valid amount.');
        return;
    }
    
    const ingredient = ingredients.find(ing => ing.id === ingredientId);
    if (!ingredient) return;
    
    currentRecipe.push({
        ingredient: ingredient,
        amount: amount
    });
    
    updateRecipeDisplay();
    amountInput.value = '';
    select.value = '';
}

function removeIngredientFromRecipe(index) {
    currentRecipe.splice(index, 1);
    updateRecipeDisplay();
}

function clearRecipe() {
    if (confirm('Are you sure you want to clear the recipe?')) {
        currentRecipe = [];
        updateRecipeDisplay();
    }
}

function updateRecipeDisplay() {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';
    
    if (currentRecipe.length === 0) {
        recipeList.innerHTML = '<div class="empty-state"><p>No ingredients added yet. Start building your recipe!</p></div>';
        updateRecipeStats();
        return;
    }
    
    currentRecipe.forEach((item, index) => {
        const recipeItem = document.createElement('div');
        recipeItem.className = 'recipe-item';
        
        const props = item.ingredient.properties;
        const ratio = item.amount / 100; // Convert to ratio
        
        recipeItem.innerHTML = `
            <div class="recipe-item-info">
                <div class="recipe-item-name">${item.ingredient.name}</div>
                <div class="recipe-item-details">
                    ${item.amount} ${item.ingredient.properties.volume === 1 ? 'g' : 'ml'} | 
                    Caffeine: ${(props.caffeine * ratio).toFixed(1)}mg | 
                    Cost: $${(props.cost * ratio).toFixed(2)}
                </div>
            </div>
            <button class="btn btn-danger" onclick="removeIngredientFromRecipe(${index})">Remove</button>
        `;
        
        recipeList.appendChild(recipeItem);
    });
    
    updateRecipeStats();
}

function updateRecipeStats() {
    let totalVolume = 0;
    let totalCost = 0;
    let totalCalories = 0;
    let totalCaffeine = 0;
    let totalSugar = 0;
    let totalProtein = 0;
    let totalVitaminC = 0;
    
    currentRecipe.forEach(item => {
        const props = item.ingredient.properties;
        const ratio = item.amount / 100;
        
        totalVolume += item.amount;
        totalCost += props.cost * ratio;
        totalCalories += props.calories * ratio;
        totalCaffeine += props.caffeine * ratio;
        totalSugar += props.sugar * ratio;
        totalProtein += props.protein * ratio;
        totalVitaminC += props.vitaminC * ratio;
    });
    
    document.getElementById('total-volume').textContent = `${totalVolume.toFixed(1)} ml`;
    document.getElementById('total-cost').textContent = `$${totalCost.toFixed(2)}`;
    document.getElementById('total-calories').textContent = `${totalCalories.toFixed(1)} kcal`;
    document.getElementById('total-caffeine').textContent = `${totalCaffeine.toFixed(1)} mg`;
    
    // Update nutrition preview
    const preview = document.getElementById('nutrition-preview-content');
    preview.innerHTML = `
        <div class="nutrition-item">
            <div class="nutrition-item-label">Sugar</div>
            <div class="nutrition-item-value">${totalSugar.toFixed(1)}g</div>
        </div>
        <div class="nutrition-item">
            <div class="nutrition-item-label">Protein</div>
            <div class="nutrition-item-value">${totalProtein.toFixed(1)}g</div>
        </div>
        <div class="nutrition-item">
            <div class="nutrition-item-label">Vitamin C</div>
            <div class="nutrition-item-value">${totalVitaminC.toFixed(0)}mg</div>
        </div>
    `;
}

function saveRecipe() {
    if (currentRecipe.length === 0) {
        alert('Please add ingredients to your recipe before saving.');
        return;
    }
    
    const recipeName = prompt('Enter a name for this recipe:');
    if (!recipeName) return;
    
    const recipe = {
        name: recipeName,
        ingredients: currentRecipe.map(item => ({
            ingredientId: item.ingredient.id,
            amount: item.amount
        })),
        date: new Date().toISOString()
    };
    
    savedRecipes.push(recipe);
    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
    
    alert(`Recipe "${recipeName}" saved successfully!`);
}

function loadSavedRecipes() {
    // This could be expanded to show saved recipes in a separate section
    console.log('Loaded recipes:', savedRecipes);
}

// Filter Ingredients
function filterIngredients() {
    const searchTerm = document.getElementById('ingredient-search').value.toLowerCase();
    const categoryFilter = document.getElementById('category-filter').value;
    
    let filtered = ingredients;
    
    if (categoryFilter) {
        filtered = filtered.filter(ing => ing.category === categoryFilter);
    }
    
    if (searchTerm) {
        filtered = filtered.filter(ing => 
            ing.name.toLowerCase().includes(searchTerm) ||
            ing.description.toLowerCase().includes(searchTerm)
        );
    }
    
    displayIngredientDatabase(filtered);
}

// Nutrition Analyzer
function analyzeNutrition() {
    const volume = parseFloat(document.getElementById('analyzer-volume').value || 0);
    const calories = parseFloat(document.getElementById('analyzer-calories').value || 0);
    const caffeine = parseFloat(document.getElementById('analyzer-caffeine').value || 0);
    const sugar = parseFloat(document.getElementById('analyzer-sugar').value || 0);
    const protein = parseFloat(document.getElementById('analyzer-protein').value || 0);
    
    if (volume === 0) {
        alert('Please enter a volume for analysis.');
        return;
    }
    
    const analysisDiv = document.getElementById('nutrition-analysis');
    
    // Calculate per 100ml values
    const per100ml = {
        calories: (calories / volume) * 100,
        caffeine: (caffeine / volume) * 100,
        sugar: (sugar / volume) * 100,
        protein: (protein / volume) * 100
    };
    
    // Health assessments
    const assessments = [];
    
    // Caffeine assessment
    if (caffeine >= 80 && caffeine <= 150) {
        assessments.push({
            type: 'success',
            message: `Caffeine level (${caffeine}mg) is optimal for sustained energy without crash.`
        });
    } else if (caffeine > 150) {
        assessments.push({
            type: 'warning',
            message: `Caffeine level (${caffeine}mg) is high. Consider reducing for sustained energy.`
        });
    } else if (caffeine < 80) {
        assessments.push({
            type: 'info',
            message: `Caffeine level (${caffeine}mg) is moderate. May want to increase for stronger energy boost.`
        });
    }
    
    // Sugar assessment
    if (sugar <= 5) {
        assessments.push({
            type: 'success',
            message: `Sugar content (${sugar}g) is excellent - low sugar for optimal health.`
        });
    } else if (sugar <= 10) {
        assessments.push({
            type: 'warning',
            message: `Sugar content (${sugar}g) is moderate. Consider reducing for better health profile.`
        });
    } else {
        assessments.push({
            type: 'warning',
            message: `Sugar content (${sugar}g) is high. Strongly consider reducing.`
        });
    }
    
    // Calories assessment
    if (calories <= 30) {
        assessments.push({
            type: 'success',
            message: `Calorie count (${calories}kcal) is excellent for a low-calorie energy drink.`
        });
    } else if (calories <= 50) {
        assessments.push({
            type: 'info',
            message: `Calorie count (${calories}kcal) is moderate.`
        });
    } else {
        assessments.push({
            type: 'warning',
            message: `Calorie count (${calories}kcal) is high for an energy drink.`
        });
    }
    
    // Build analysis HTML
    let html = `
        <div class="analysis-item">
            <div class="analysis-item-label">Volume</div>
            <div class="analysis-item-value">${volume} ml</div>
        </div>
        <div class="analysis-item">
            <div class="analysis-item-label">Total Calories</div>
            <div class="analysis-item-value">${calories} kcal (${per100ml.calories.toFixed(1)} per 100ml)</div>
        </div>
        <div class="analysis-item">
            <div class="analysis-item-label">Total Caffeine</div>
            <div class="analysis-item-value">${caffeine} mg (${per100ml.caffeine.toFixed(1)} per 100ml)</div>
        </div>
        <div class="analysis-item">
            <div class="analysis-item-label">Total Sugar</div>
            <div class="analysis-item-value">${sugar} g (${per100ml.sugar.toFixed(1)} per 100ml)</div>
        </div>
        <div class="analysis-item">
            <div class="analysis-item-label">Total Protein</div>
            <div class="analysis-item-value">${protein} g (${per100ml.protein.toFixed(1)} per 100ml)</div>
        </div>
    `;
    
    // Add assessments
    assessments.forEach(assessment => {
        const className = assessment.type === 'success' ? 'analysis-recommendation' : 
                         assessment.type === 'warning' ? 'analysis-warning' : 'analysis-item';
        html += `
            <div class="${className}">
                <div class="analysis-item-label">${assessment.type === 'success' ? '✓' : assessment.type === 'warning' ? '⚠' : 'ℹ'}</div>
                <div class="analysis-item-value">${assessment.message}</div>
            </div>
        `;
    });
    
    analysisDiv.innerHTML = html;
}

// Make removeIngredientFromRecipe available globally
window.removeIngredientFromRecipe = removeIngredientFromRecipe;

