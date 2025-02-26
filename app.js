// Données avec noms de colonnes améliorés
const useCases = [
    {
        casUsage: "Contrats de travail",
        departement: "RH",
        niveauSignature: "Qualifiée (principaux) ; Avancée (modifications mineures)",
        baseLegale: "Art. L.1221-4 Code du travail ; eIDAS Art. 25.2 (présomption de validité)",
        risques: "Nullité du contrat ; sanctions prud’homales (jusqu’à 6 mois de salaire)",
        exemples: "CDI, CDD, avenants salariaux",
        comparaisonSignatureSimple: "Signature simple : pas d’inversion de la charge de la preuve en litige",
        particularitesInternationales: "Reconnaissance SEQ dans l’UE ; hors UE, SEQ exigée pour expatriés (ex. : USA, notarisation possible)"
    },
    {
        casUsage: "Accords de confidentialité",
        departement: "Juridique",
        niveauSignature: "Avancée (standard) ; Qualifiée (secrets critiques)",
        baseLegale: "RGPD Art. 32 (sécurité) ; Directive UE 2016/943 (secrets commerciaux)",
        risques: "Amendes RGPD (4% CA annuel) ; perte de propriété intellectuelle",
        exemples: "NDA partenaires technologiques",
        comparaisonSignatureSimple: "Simple : aucune détection d’altération post-signature",
        particularitesInternationales: "SEQ pour accords avec USA (SOX Act) ou données sensibles ; avancée suffisante sinon"
    },
    {
        casUsage: "Transactions financières",
        departement: "Finance",
        niveauSignature: "Qualifiée (>50k€) ; Avancée (<50k€)",
        baseLegale: "Directive PSD2 (2015/2366) Art. 4 ; eIDAS Art. 26 (non-répudiation)",
        risques: "Irrecevabilité comptable ; rejet audits fiscaux (amendes jusqu’à 375k€)",
        exemples: "Mandats SEPA, factures électroniques",
        comparaisonSignatureSimple: "Simple : interdite pour paiements >50k€ (risque fraude)",
        particularitesInternationales: "SEQ obligatoire pour virements transfrontaliers (CBPR+) ; avancée reconnue dans l’UE"
    },
    {
        casUsage: "Contrats de sous-traitance",
        departement: "Achats",
        niveauSignature: "Qualifiée",
        baseLegale: "Loi Sapin II Art. 17 ; RGPD Art. 28 (sous-traitance données) ; Décret 2022-448",
        risques: "Responsabilité pénale dirigeants ; exclusion appels d’offres",
        exemples: "Contrats SLA, engagements de service",
        comparaisonSignatureSimple: "Simple : clauses de pénalité non opposables",
        particularitesInternationales: "Double SEQ (siège + filiale) pour groupes internationaux ; RGPD exige SEQ hors UE"
    },
    {
        casUsage: "Licences logicielles",
        departement: "R&D",
        niveauSignature: "Avancée (standard) ; Qualifiée (exclusives)",
        baseLegale: "Directive 2009/24/CE (protection logiciels) ; eIDAS Art. 25",
        risques: "Contrefaçon (amendes 300% dommages) ; perte de revenus licence",
        exemples: "EULA, accords partenariat technique",
        comparaisonSignatureSimple: "Simple : pas d’intégrité cryptographique des clauses",
        particularitesInternationales: "Horodatage qualifié pour marchés asiatiques (ex. : Japon, normes JIS)"
    },
    {
        casUsage: "Appels d’offres publics",
        departement: "Commercial",
        niveauSignature: "Qualifiée",
        baseLegale: "Code de la commande publique Art. R2191-1 ; eIDAS Art. 25",
        risques: "Déchéance offre ; exclusion temporaire marchés publics",
        exemples: "Réponses consultations, DPGF",
        comparaisonSignatureSimple: "SEA irrecevables dans 78% des appels d’offres européens",
        particularitesInternationales: "SEQ reconnue dans l’UE ; hors UE, légalisation consulaire souvent requise"
    },
    {
        casUsage: "Documents réglementaires",
        departement: "Compliance",
        niveauSignature: "Qualifiée (soumis régulateurs) ; Avancée (internes)",
        baseLegale: "Règlement DORA (2025) ; ETSI EN 319 411-1 (certificats qualifiés)",
        risques: "Amendes jusqu’à 10M€ ; suspension agrément",
        exemples: "Rapports ANSSI, audits sécurité",
        comparaisonSignatureSimple: "SEQ : non-répudiation exigée par régulateurs",
        particularitesInternationales: "Certificats SEQ alignés ETSI pour UE ; hors UE, normes locales à vérifier (ex. : NIST USA)"
    },
    {
        casUsage: "Contrats internationaux",
        departement: "Business Development",
        niveauSignature: "Qualifiée",
        baseLegale: "Convention de Vienne (1980) Art. 11 ; Règlement Rome I (2008)",
        risques: "Conflits de loi ; nullité clauses arbitrage",
        exemples: "Joint-ventures, accords distribution",
        comparaisonSignatureSimple: "SEA rarement suffisante pour tribunaux étrangers",
        particularitesInternationales: "QSCD exigé hors UE ; vérification reconnaissance (ex. : USA, notarisation)"
    },
    {
        casUsage: "Documents RH sensibles",
        departement: "RH",
        niveauSignature: "Qualifiée",
        baseLegale: "CNIL délibération 2023-098 (données salariales) ; RGPD Art. 9 (données sensibles)",
        risques: "Sanctions CNIL (jusqu’à 3M€) ; litiges employés",
        exemples: "Enquêtes internes, accords de rupture",
        comparaisonSignatureSimple: "SEQ : prévient contestation authenticité consentements",
        particularitesInternationales: "Archivage qualifié pour filiales suisses (LPD révisée) ; SEQ pour données transfrontalières"
    },
    {
        casUsage: "Actes de propriété intellectuelle",
        departement: "R&D",
        niveauSignature: "Qualifiée",
        baseLegale: "Code propriété intellectuelle Art. L113-9 ; eIDAS Art. 25",
        risques: "Perte droits d’auteur ; contestation brevets",
        exemples: "Cessions droits, dépôts INPI",
        comparaisonSignatureSimple: "SEQ + horodatage : date certaine de création fixée",
        particularitesInternationales: "Validation SEQ via WIPO Proof (193 États) ; horodatage reconnu internationalement"
    },
    {
        casUsage: "Transactions blockchain",
        departement: "Innovation",
        niveauSignature: "Avancée (standard) ; Qualifiée (actifs critiques)",
        baseLegale: "Ordonnance 2024-387 (actifs numériques) ; eIDAS Art. 25",
        risques: "Irréversibilité smart contracts défectueux ; fraude",
        exemples: "Contrats DAO, tokens sécurisés",
        comparaisonSignatureSimple: "SEA : audit trail via metadata blockchain",
        particularitesInternationales: "Interopérabilité ERC-725/1056 ; SEQ pour actifs hors UE (ex. : SEC compliance USA)"
    },
    {
        casUsage: "Souscriptions d’assurance",
        departement: "Administratif",
        niveauSignature: "Qualifiée (épargne) ; Avancée (standard)",
        baseLegale: "Code des assurances Art. L112-4 ; Directive Insurance Distribution (2016/97)",
        risques: "Résiliation rétroactive ; refus couverture",
        exemples: "Polices responsabilité civile, épargne-retraite",
        comparaisonSignatureSimple: "SEQ obligatoire pour épargne-retraite (opposabilité)",
        particularitesInternationales: "Reconnaissance limitée en Amérique latine (notarisation parallèle souvent exigée)"
    },
    {
        casUsage: "Conventions de gouvernance",
        departement: "Direction Générale",
        niveauSignature: "Qualifiée",
        baseLegale: "Loi Pacte Art. 1833 Code civil ; eIDAS Art. 25 (présomption intégrité)",
        risques: "Nullité décisions AG ; responsabilité dirigeants",
        exemples: "PV d’AG, pactes actionnaires",
        comparaisonSignatureSimple: "SEA : pas de présomption intégrité sur 10 ans",
        particularitesInternationales: "Double scellement pour filiales USA (Delaware Law) ; SEQ reconnue dans l’UE"
    },
    {
        casUsage: "Documentation projet",
        departement: "Management de projet",
        niveauSignature: "Avancée (standard) ; Qualifiée (critiques)",
        baseLegale: "Norme ISO 21502:2020 ; eIDAS Art. 26 (intégrité)",
        risques: "Litiges clients ; dépassements budgétaires non couverts",
        exemples: "Cahiers des charges, rapports avancement",
        comparaisonSignatureSimple: "SEA : journalisation via RFC 3161",
        particularitesInternationales: "Harmonisation eIDAS pour UE ; FedRAMP (USA) exige SEQ pour projets critiques"
    }
];

// Remplir le filtre des départements
const departments = [...new Set(useCases.map(uc => uc.departement))];
const departmentFilter = document.getElementById('department-filter');
departments.forEach(dept => {
    const option = document.createElement('option');
    option.value = dept;
    option.textContent = dept;
    departmentFilter.appendChild(option);
});

// Gestion de l'état
let currentView = 'table';

// Filtrer les cas d'usage
function getFilteredUseCases() {
    let filtered = useCases;
    const department = document.getElementById('department-filter').value;
    const signature = document.getElementById('signature-filter').value;
    const search = document.getElementById('search-input').value.toLowerCase();

    if (department) filtered = filtered.filter(uc => uc.departement === department);
    if (signature) filtered = filtered.filter(uc => uc.niveauSignature.includes(signature));
    if (search) filtered = filtered.filter(uc => Object.values(uc).some(val => val.toLowerCase().includes(search)));
    
    return filtered;
}

// Rendu vue tableau
function renderTable(filteredUseCases) {
    const container = document.getElementById('main-content');
    container.innerHTML = '';

    if (filteredUseCases.length === 0) {
        container.innerHTML = '<p>Aucun cas d\'usage trouvé.</p>';
        return;
    }

    const table = document.createElement('table');
    table.className = 'table table-striped table-responsive';

    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>Cas d'Usage</th>
            <th>Département</th>
            <th>Niveau de Signature</th>
            <th>Base Légale</th>
            <th>Risques</th>
            <th>Exemples</th>
            <th>Comparaison Signature Simple</th>
            <th>Particularités Internationales</th>
        </tr>
    `;
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    filteredUseCases.forEach(uc => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${uc.casUsage}</td>
            <td>${uc.departement}</td>
            <td>${uc.niveauSignature}</td>
            <td>${uc.baseLegale}</td>
            <td>${uc.risques}</td>
            <td>${uc.exemples}</td>
            <td>${uc.comparaisonSignatureSimple}</td>
            <td>${uc.particularitesInternationales}</td>
        `;
        tr.addEventListener('click', () => showModal(uc));
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    container.appendChild(table);
}

// Afficher les détails dans la modale
function showModal(uc) {
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <p><strong>Cas d'Usage :</strong> ${uc.casUsage}</p>
        <p><strong>Département :</strong> ${uc.departement}</p>
        <p><strong>Niveau de Signature :</strong> ${uc.niveauSignature}</p>
        <p><strong>Base Légale :</strong> ${uc.baseLegale}</p>
        <p><strong>Risques :</strong> ${uc.risques}</p>
        <p><strong>Exemples :</strong> ${uc.exemples}</p>
        <p><strong>Comparaison Signature Simple :</strong> ${uc.comparaisonSignatureSimple}</p>
        <p><strong>Particularités Internationales :</strong> ${uc.particularitesInternationales}</p>
    `;
    $('#useCaseModal').modal('show');
}

// Rendu vue cartes
function renderCards(filteredUseCases) {
    const container = document.getElementById('main-content');
    container.innerHTML = '';

    if (filteredUseCases.length === 0) {
        container.innerHTML = '<p>Aucun cas d\'usage trouvé.</p>';
        return;
    }

    const row = document.createElement('div');
    row.className = 'row';
    filteredUseCases.forEach(uc => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-3';
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${uc.casUsage}</h5>
                    <p><strong>Département :</strong> ${uc.departement}</p>
                    <p><strong>Niveau de Signature :</strong> ${uc.niveauSignature}</p>
                    <p><strong>Base Légale :</strong> ${uc.baseLegale}</p>
                    <p><strong>Risques :</strong> ${uc.risques}</p>
                    <p><strong>Exemples :</strong> ${uc.exemples}</p>
                    <p><strong>Comparaison Signature Simple :</strong> ${uc.comparaisonSignatureSimple}</p>
                    <p><strong>Particularités Internationales :</strong> ${uc.particularitesInternationales}</p>
                </div>
            </div>
        `;
        row.appendChild(card);
    });
    container.appendChild(row);
}

// Mise à jour de la vue
function renderCurrentView() {
    const filteredUseCases = getFilteredUseCases();
    if (currentView === 'table') {
        renderTable(filteredUseCases);
    } else {
        renderCards(filteredUseCases);
    }
}

// Écouteurs d'événements
document.getElementById('table-view-btn').addEventListener('click', () => {
    currentView = 'table';
    renderCurrentView();
});

document.getElementById('card-view-btn').addEventListener('click', () => {
    currentView = 'card';
    renderCurrentView();
});

document.getElementById('department-filter').addEventListener('change', renderCurrentView);
document.getElementById('signature-filter').addEventListener('change', renderCurrentView);
document.getElementById('search-input').addEventListener('input', renderCurrentView);

// Rendu initial
renderCurrentView();