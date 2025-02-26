// Variable globale pour stocker les données
let usageData = [];
let chart;

// Charger les données JSON
async function loadData() {
    try {
        const response = await fetch('data.json');
        console.log('Réponse reçue :', response);
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status} - ${response.statusText}`);
        }
        usageData = await response.json();
        console.log('Données chargées :', usageData);
        initializeTable();
        loadCards();
        loadCharts();
    } catch (error) {
        console.error('Erreur détaillée :', error);
        document.getElementById('cartes').innerHTML = `<p class="text-red-500">Erreur : ${error.message}</p>`;
    }
}

// Initialiser le tableau DataTables
function initializeTable() {
    $('#usageTable').DataTable({
        data: usageData,
        columns: [
            { data: 'nom' },
            { data: 'departement' },
            { data: 'signature' },
            { data: 'justification' },
            { data: 'risques' },
            { data: 'exemples' },
            { data: 'comparaison' },
            { data: 'specificites' }
        ],
        pageLength: 5,
        language: {
            search: "Rechercher :",
            lengthMenu: "Afficher _MENU_ entrées",
            info: "Affichage de _START_ à _END_ sur _TOTAL_ entrées",
            paginate: {
                first: "Premier",
                last: "Dernier",
                next: "Suivant",
                previous: "Précédent"
            }
        }
    });
}

// Générer les cartes dynamiques
function loadCards() {
    const cartesDiv = document.getElementById('cartes');
    cartesDiv.innerHTML = '';
    usageData.forEach(item => {
        cartesDiv.innerHTML += `
            <div class="bg-white p-4 rounded shadow-lg hover:shadow-xl transition duration-300">
                <h2 class="text-xl font-semibold mb-2">${item.nom}</h2>
                <p><strong>Département :</strong> ${item.departement}</p>
                <p><strong>Signature :</strong> ${item.signature}</p>
                <p><strong>Risques :</strong> ${item.risques}</p>
            </div>
        `;
    });
}

// Créer les graphiques avec Chart.js
function loadCharts() {
    const ctx = document.getElementById('chartCanvas').getContext('2d');
    const departements = usageData.reduce((acc, item) => {
        acc[item.departement] = (acc[item.departement] || 0) + 1;
        return acc;
    }, {});

    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(departements),
            datasets: [{
                label: 'Nombre de cas d’usage par département',
                data: Object.values(departements),
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Nombre de cas d’usage'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Département'
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
}

// Gérer l'affichage des vues
function showView(view) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById(view).classList.remove('hidden');
    if (view === 'graphiques' && usageData.length > 0) {
        loadCharts();
    }
}

// Charger les données au démarrage
document.addEventListener('DOMContentLoaded', loadData);
