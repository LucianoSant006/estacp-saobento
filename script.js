// --- Dados do Cardápio ---
const menuData = {
    combos: [
        { name: "Red Label + 4 Red Bull", price: "R$ 345,00", vibe: "ostentacao" },
        { name: "Jack Daniel's + 4 Red Bull", price: "R$ 439,00", vibe: "ostentacao" },
        { name: "Combo Vodka Nacional", price: "R$ 239,00", vibe: "esquenta" }
    ],
    cervejas: [
        { name: "Heineken 600ml", price: "R$ 19,90", vibe: "esquenta" },
        { name: "Chopp Caneca 500ml", price: "R$ 13,90", vibe: "paquera" },
        { name: "Original 600ml", price: "R$ 18,90", vibe: "sofrencia" }
    ],
    drinks: [
        { name: "Gin Tropical", price: "R$ 41,90", vibe: "paquera" },
        { name: "Moscow Mule", price: "R$ 39,90", vibe: "paquera" },
        { name: "Caipirinha Jurupinga", price: "R$ 23,90", vibe: "sofrencia" }
    ]
};

// --- Renderizar Menu ---
function loadMenu(category) {
    const container = document.getElementById('menu-list');
    if(!container) return;
    
    container.innerHTML = "";
    const items = menuData[category] || [];
    
    items.forEach(item => {
        container.innerHTML += `
            <div class="menu-item">
                <div><h4>${item.name}</h4></div>
                <div class="price">${item.price}</div>
            </div>`;
    });
}

// --- Inovação 1: Sommelier Virtual ---
function suggestDrink(vibe) {
    const resultBox = document.getElementById('suggestion-result');
    let options = [];
    
    // Procura em todas as categorias
    Object.keys(menuData).forEach(cat => {
        const matches = menuData[cat].filter(item => item.vibe === vibe);
        options = [...options, ...matches];
    });

    if(options.length > 0) {
        const randomChoice = options[Math.floor(Math.random() * options.length)];
        resultBox.innerHTML = `🔥 Para sua vibe, recomendamos: <br> <span style="font-size:1.5rem; color:#fff">${randomChoice.name}</span> (${randomChoice.price})`;
        resultBox.style.animation = "fadeIn 0.5s";
    }
}

// --- Inovação 2: Calculadora de Rolê ---
function calculateBill() {
    const total = parseFloat(document.getElementById('totalBill').value) || 0;
    const people = parseInt(document.getElementById('totalPeople').value) || 1;
    const service = document.getElementById('serviceFee').checked;
    
    let finalTotal = service ? total * 1.1 : total;
    let perPerson = finalTotal / people;
    
    document.getElementById('calcResult').innerText = `R$ ${perPerson.toFixed(2)}`;
}