/* =========================================================
   CAREERCOMPARE
   Main application
   ========================================================= */


/* =========================================================
   CAREER DATABASE
   ========================================================= */

const careers = [

    /* TECHNOLOGY */
    { name: "Software Developer", salary: 148000, category: "Technology" },
    { name: "Computer Programmer", salary: 105000, category: "Technology" },
    { name: "Web Developer", salary: 99000, category: "Technology" },
    { name: "Web & Digital Interface Designer", salary: 117000, category: "Technology" },
    { name: "Software QA Analyst", salary: 111000, category: "Technology" },
    { name: "Computer Systems Analyst", salary: 107000, category: "Technology" },
    { name: "Information Security Analyst", salary: 125000, category: "Technology" },
    { name: "Database Administrator", salary: 103000, category: "Technology" },
    { name: "Database Architect", salary: 123000, category: "Technology" },
    { name: "Network Administrator", salary: 90000, category: "Technology" },
    { name: "Network Architect", salary: 130000, category: "Technology" },
    { name: "Computer Network Support Specialist", salary: 74000, category: "Technology" },
    { name: "Computer User Support Specialist", salary: 62000, category: "Technology" },
    { name: "IT Manager", salary: 175000, category: "Technology" },
    { name: "Computer & Information Research Scientist", salary: 145000, category: "Technology" },
    { name: "Data Scientist", salary: 115000, category: "Technology" },
    { name: "Data Analyst", salary: 85000, category: "Technology" },
    { name: "AI / Machine Learning Engineer", salary: 145000, category: "Technology" },
    { name: "Cloud Engineer", salary: 130000, category: "Technology" },
    { name: "DevOps Engineer", salary: 125000, category: "Technology" },
    { name: "Game Developer", salary: 105000, category: "Technology" },
    { name: "Mobile App Developer", salary: 115000, category: "Technology" },
    { name: "Computer Hardware Engineer", salary: 145000, category: "Technology" },
    { name: "Robotics Engineer", salary: 115000, category: "Technology" },
    { name: "UX Designer", salary: 105000, category: "Technology" },

    /* HEALTHCARE */
    { name: "Physician", salary: 240000, category: "Healthcare" },
    { name: "Surgeon", salary: 360000, category: "Healthcare" },
    { name: "Dentist", salary: 185000, category: "Healthcare" },
    { name: "Orthodontist", salary: 250000, category: "Healthcare" },
    { name: "Pharmacist", salary: 140000, category: "Healthcare" },
    { name: "Registered Nurse", salary: 93000, category: "Healthcare" },
    { name: "Nurse Practitioner", salary: 135000, category: "Healthcare" },
    { name: "Physician Assistant", salary: 135000, category: "Healthcare" },
    { name: "Physical Therapist", salary: 100000, category: "Healthcare" },
    { name: "Occupational Therapist", salary: 98000, category: "Healthcare" },
    { name: "Respiratory Therapist", salary: 78000, category: "Healthcare" },
    { name: "Radiologic Technologist", salary: 75000, category: "Healthcare" },
    { name: "Dental Hygienist", salary: 88000, category: "Healthcare" },
    { name: "Dental Assistant", salary: 50000, category: "Healthcare" },
    { name: "Medical Assistant", salary: 46000, category: "Healthcare" },
    { name: "Phlebotomist", salary: 46000, category: "Healthcare" },
    { name: "Medical Laboratory Scientist", salary: 62000, category: "Healthcare" },
    { name: "Paramedic", salary: 57000, category: "Healthcare" },
    { name: "Emergency Medical Technician", salary: 42000, category: "Healthcare" },
    { name: "Veterinarian", salary: 140000, category: "Healthcare" },
    { name: "Veterinary Technician", salary: 45000, category: "Healthcare" },
    { name: "Chiropractor", salary: 90000, category: "Healthcare" },
    { name: "Psychologist", salary: 95000, category: "Healthcare" },
    { name: "Optometrist", salary: 135000, category: "Healthcare" },

    /* EDUCATION */
    { name: "Elementary School Teacher", salary: 73000, category: "Education" },
    { name: "Middle School Teacher", salary: 74000, category: "Education" },
    { name: "Secondary School Teacher", salary: 76000, category: "Education" },
    { name: "Special Education Teacher", salary: 75000, category: "Education" },
    { name: "School Counselor", salary: 65000, category: "Education" },
    { name: "School Principal", salary: 105000, category: "Education" },
    { name: "College Professor", salary: 90000, category: "Education" },
    { name: "Teaching Assistant", salary: 38000, category: "Education" },
    { name: "Instructional Coordinator", salary: 75000, category: "Education" },
    { name: "Librarian", salary: 68000, category: "Education" },
    { name: "Archivist", salary: 60000, category: "Education" },

    /* ENGINEERING */
    { name: "Mechanical Engineer", salary: 102000, category: "Engineering" },
    { name: "Civil Engineer", salary: 99000, category: "Engineering" },
    { name: "Electrical Engineer", salary: 115000, category: "Engineering" },
    { name: "Computer Engineer", salary: 125000, category: "Engineering" },
    { name: "Chemical Engineer", salary: 115000, category: "Engineering" },
    { name: "Aerospace Engineer", salary: 135000, category: "Engineering" },
    { name: "Biomedical Engineer", salary: 105000, category: "Engineering" },
    { name: "Environmental Engineer", salary: 105000, category: "Engineering" },
    { name: "Industrial Engineer", salary: 100000, category: "Engineering" },
    { name: "Materials Engineer", salary: 105000, category: "Engineering" },
    { name: "Nuclear Engineer", salary: 125000, category: "Engineering" },
    { name: "Petroleum Engineer", salary: 145000, category: "Engineering" },
    { name: "Architect", salary: 95000, category: "Engineering & Design" },
    { name: "Landscape Architect", salary: 80000, category: "Engineering & Design" },

    /* BUSINESS & FINANCE */
    { name: "Accountant", salary: 86000, category: "Business & Finance" },
    { name: "Auditor", salary: 85000, category: "Business & Finance" },
    { name: "Financial Analyst", salary: 105000, category: "Business & Finance" },
    { name: "Financial Manager", salary: 165000, category: "Business & Finance" },
    { name: "Personal Financial Advisor", salary: 105000, category: "Business & Finance" },
    { name: "Economist", salary: 120000, category: "Business & Finance" },
    { name: "Actuary", salary: 141000, category: "Business & Finance" },
    { name: "Loan Officer", salary: 80000, category: "Business & Finance" },
    { name: "Bank Teller", salary: 39000, category: "Business & Finance" },
    { name: "Investment Banker", salary: 150000, category: "Business & Finance" },
    { name: "Chief Executive", salary: 270000, category: "Business & Finance" },
    { name: "General & Operations Manager", salary: 135000, category: "Business & Finance" },
    { name: "Human Resources Manager", salary: 145000, category: "Business & Finance" },
    { name: "Management Analyst", salary: 105000, category: "Business & Finance" },
    { name: "Project Manager", salary: 100000, category: "Business & Finance" },
    { name: "Purchasing Manager", salary: 140000, category: "Business & Finance" },

    /* LAW */
    { name: "Lawyer", salary: 150000, category: "Law" },
    { name: "Judge", salary: 150000, category: "Law" },
    { name: "Paralegal", salary: 65000, category: "Law" },
    { name: "Legal Assistant", salary: 55000, category: "Law" },
    { name: "Court Reporter", salary: 65000, category: "Law" },
    { name: "Mediator", salary: 70000, category: "Law" },

    /* SCIENCE */
    { name: "Biologist", salary: 108000, category: "Science" },
    { name: "Microbiologist", salary: 98000, category: "Science" },
    { name: "Biochemist", salary: 130000, category: "Science" },
    { name: "Chemist", salary: 85000, category: "Science" },
    { name: "Physicist", salary: 145000, category: "Science" },
    { name: "Astronomer", salary: 130000, category: "Science" },
    { name: "Geologist", salary: 100000, category: "Science" },
    { name: "Meteorologist", salary: 95000, category: "Science" },
    { name: "Zoologist", salary: 83000, category: "Science" },
    { name: "Wildlife Biologist", salary: 83000, category: "Science" },
    { name: "Environmental Scientist", salary: 80000, category: "Science" },
    { name: "Food Scientist", salary: 95000, category: "Science" },
    { name: "Forensic Scientist", salary: 70000, category: "Science" },

    /* TRADES */
    { name: "Electrician", salary: 71000, category: "Trades" },
    { name: "Plumber", salary: 70000, category: "Trades" },
    { name: "HVAC Technician", salary: 65000, category: "Trades" },
    { name: "Carpenter", salary: 60000, category: "Trades" },
    { name: "Welder", salary: 55000, category: "Trades" },
    { name: "Machinist", salary: 60000, category: "Trades" },
    { name: "Auto Mechanic", salary: 55000, category: "Trades" },
    { name: "Diesel Mechanic", salary: 60000, category: "Trades" },
    { name: "Industrial Machinery Mechanic", salary: 68000, category: "Trades" },
    { name: "Elevator Installer & Repairer", salary: 105000, category: "Trades" },
    { name: "Construction Equipment Operator", salary: 66000, category: "Trades" },
    { name: "Construction Manager", salary: 110000, category: "Trades & Construction" },
    { name: "Construction Laborer", salary: 47000, category: "Trades & Construction" },
    { name: "Bricklayer", salary: 67000, category: "Trades" },
    { name: "Roofer", salary: 50000, category: "Trades" },

    /* PUBLIC SERVICE */
    { name: "Police Officer", salary: 79000, category: "Public Service" },
    { name: "Detective", salary: 90000, category: "Public Service" },
    { name: "Firefighter", salary: 60000, category: "Public Service" },
    { name: "Fire Chief", salary: 100000, category: "Public Service" },
    { name: "Corrections Officer", salary: 55000, category: "Public Service" },
    { name: "Social Worker", salary: 60000, category: "Public Service" },
    { name: "Urban Planner", salary: 85000, category: "Public Service" },
    { name: "City Manager", salary: 110000, category: "Public Service" },
    { name: "Government Program Analyst", salary: 85000, category: "Public Service" },

    /* TRANSPORTATION */
    { name: "Commercial Airline Pilot", salary: 230000, category: "Transportation" },
    { name: "Air Traffic Controller", salary: 145000, category: "Transportation" },
    { name: "Flight Attendant", salary: 75000, category: "Transportation" },
    { name: "Truck Driver", salary: 60000, category: "Transportation" },
    { name: "Bus Driver", salary: 50000, category: "Transportation" },
    { name: "Train Conductor", salary: 70000, category: "Transportation" },
    { name: "Railroad Engineer", salary: 80000, category: "Transportation" },
    { name: "Ship Captain", salary: 100000, category: "Transportation" },
    { name: "Automotive Service Technician", salary: 55000, category: "Transportation" },

    /* ARTS & DESIGN */
    { name: "Graphic Designer", salary: 62000, category: "Arts & Design" },
    { name: "Art Director", salary: 115000, category: "Arts & Design" },
    { name: "Interior Designer", salary: 65000, category: "Arts & Design" },
    { name: "Industrial Designer", salary: 80000, category: "Arts & Design" },
    { name: "Fashion Designer", salary: 80000, category: "Arts & Design" },
    { name: "Photographer", salary: 60000, category: "Arts & Design" },
    { name: "Animator", salary: 85000, category: "Arts & Design" },
    { name: "Illustrator", salary: 65000, category: "Arts & Design" },
    { name: "Art Teacher", salary: 70000, category: "Arts & Design" },

    /* MEDIA */
    { name: "Journalist", salary: 65000, category: "Media & Communication" },
    { name: "News Reporter", salary: 60000, category: "Media & Communication" },
    { name: "Public Relations Specialist", salary: 75000, category: "Media & Communication" },
    { name: "Public Relations Manager", salary: 135000, category: "Media & Communication" },
    { name: "Technical Writer", salary: 85000, category: "Media & Communication" },
    { name: "Editor", salary: 75000, category: "Media & Communication" },
    { name: "Writer", salary: 80000, category: "Media & Communication" },
    { name: "Broadcast Technician", salary: 55000, category: "Media & Communication" },
    { name: "Producer", salary: 85000, category: "Media & Communication" },

    /* MARKETING & SALES */
    { name: "Marketing Specialist", salary: 75000, category: "Marketing & Sales" },
    { name: "Marketing Manager", salary: 155000, category: "Marketing & Sales" },
    { name: "Sales Manager", salary: 145000, category: "Marketing & Sales" },
    { name: "Advertising Manager", salary: 150000, category: "Marketing & Sales" },
    { name: "Sales Representative", salary: 70000, category: "Marketing & Sales" },
    { name: "Real Estate Agent", salary: 70000, category: "Marketing & Sales" },
    { name: "Real Estate Broker", salary: 90000, category: "Marketing & Sales" },
    { name: "Market Research Analyst", salary: 80000, category: "Marketing & Sales" },

    /* SOCIAL & HUMAN SERVICES */
    { name: "Mental Health Counselor", salary: 55000, category: "Social & Human Services" },
    { name: "Marriage & Family Therapist", salary: 60000, category: "Social & Human Services" },
    { name: "Community Health Worker", salary: 48000, category: "Social & Human Services" },
    { name: "Rehabilitation Counselor", salary: 50000, category: "Social & Human Services" },

    /* AGRICULTURE */
    { name: "Agricultural Scientist", salary: 91000, category: "Agriculture & Environment" },
    { name: "Agronomist", salary: 85000, category: "Agriculture & Environment" },
    { name: "Conservation Scientist", salary: 78000, category: "Agriculture & Environment" },
    { name: "Forester", salary: 78000, category: "Agriculture & Environment" },
    { name: "Environmental Technician", salary: 55000, category: "Agriculture & Environment" },
    { name: "Agricultural Inspector", salary: 65000, category: "Agriculture & Environment" },
    { name: "Farm Manager", salary: 80000, category: "Agriculture & Environment" },

    /* FOOD & HOSPITALITY */
    { name: "Chef", salary: 60000, category: "Food & Hospitality" },
    { name: "Head Chef", salary: 70000, category: "Food & Hospitality" },
    { name: "Restaurant Manager", salary: 65000, category: "Food & Hospitality" },
    { name: "Hotel Manager", salary: 80000, category: "Food & Hospitality" },
    { name: "Baker", salary: 40000, category: "Food & Hospitality" },
    { name: "Cook", salary: 35000, category: "Food & Hospitality" },
    { name: "Bartender", salary: 40000, category: "Food & Hospitality" },
    { name: "Waiter / Waitress", salary: 35000, category: "Food & Hospitality" },

    /* SPORTS */
    { name: "Athletic Trainer", salary: 60000, category: "Sports & Recreation" },
    { name: "Fitness Trainer", salary: 50000, category: "Sports & Recreation" },
    { name: "Sports Coach", salary: 55000, category: "Sports & Recreation" },
    { name: "Recreation Worker", salary: 40000, category: "Sports & Recreation" },
    { name: "Sports Official", salary: 45000, category: "Sports & Recreation" },

    /* PERSONAL SERVICES */
    { name: "Hairdresser", salary: 45000, category: "Personal Services" },
    { name: "Barber", salary: 45000, category: "Personal Services" },
    { name: "Esthetician", salary: 40000, category: "Personal Services" },
    { name: "Massage Therapist", salary: 55000, category: "Personal Services" },
    { name: "Personal Trainer", salary: 50000, category: "Personal Services" }
];


/* =========================================================
   STATE
   ========================================================= */

let selectedCareers = [];
let currentCareers = [...careers];

const graphYears = [];

for (let year = 2026; year <= 2035; year++) {
    graphYears.push(year);
}


/* =========================================================
   ESTIMATED GROWTH RATES
   ========================================================= */

const growthRates = {
    "Technology": 0.035,
    "Healthcare": 0.030,
    "Education": 0.030,
    "Engineering": 0.032,
    "Engineering & Design": 0.030,
    "Business & Finance": 0.032,
    "Law": 0.030,
    "Science": 0.030,
    "Trades": 0.030,
    "Trades & Construction": 0.030,
    "Public Service": 0.030,
    "Transportation": 0.030,
    "Arts & Design": 0.028,
    "Media & Communication": 0.028,
    "Marketing & Sales": 0.032,
    "Social & Human Services": 0.030,
    "Agriculture & Environment": 0.030,
    "Food & Hospitality": 0.028,
    "Sports & Recreation": 0.028,
    "Personal Services": 0.028
};


/* =========================================================
   HELPERS
   ========================================================= */

function formatSalary(value) {
    return "$" + Math.round(Number(value) || 0).toLocaleString();
}


function getGrowthRate(career) {
    return growthRates[career.category] || 0.030;
}


function projectedSalary(career, year) {
    const yearsFrom2026 = year - 2026;
    const rate = getGrowthRate(career);

    return Number(career.salary) * Math.pow(1 + rate, yearsFrom2026);
}


function escapeHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   DISPLAY CAREERS
   ========================================================= */

function displayCareers(list = currentCareers) {

    const container = document.getElementById("careerList");

    if (!container) {
        console.warn("careerList was not found.");
        return;
    }

    if (!list.length) {
        container.innerHTML = `
            <div class="empty-state">
                <h3>No careers found</h3>
                <p>Try a different search or category.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = list.map((career, index) => {

        const isSelected = selectedCareers.some(
            selected => selected.name === career.name
        );

        return `
            <div class="career-card ${isSelected ? "selected" : ""}">

                <h3>${escapeHTML(career.name)}</h3>

                <span class="career-category">
                    ${escapeHTML(career.category)}
                </span>

                <div class="salary">
                    ${formatSalary(career.salary)}
                </div>

                <div class="salary-label">
                    Estimated annual salary
                </div>

                <button
                    class="compare-button"
                    onclick="toggleCareer(${index})"
                >
                    ${isSelected ? "✓ Added to comparison" : "+ Compare"}
                </button>

            </div>
        `;

    }).join("");
}


/* =========================================================
   CAREER SELECTION
   ========================================================= */

function toggleCareer(index) {

    const career = currentCareers[index];

    if (!career) {
        return;
    }

    const existingIndex = selectedCareers.findIndex(
        selected => selected.name === career.name
    );

    if (existingIndex !== -1) {

        selectedCareers.splice(existingIndex, 1);

    } else {

        if (selectedCareers.length >= 5) {

            alert("You can compare up to 5 careers at a time.");

            return;
        }

        selectedCareers.push(career);
    }

    displayCareers(currentCareers);
    updateComparison();
    updateGraph();
}


/* =========================================================
   SEARCH
   ========================================================= */

function searchCareers() {
    applyActiveCategoryAndSort();
    updateCareerCount();
}


/* =========================================================
   CATEGORY FILTER
   ========================================================= */

function buildCategoryFilter() {

    const filter = document.getElementById("categoryFilter");

    if (!filter) {
        return;
    }

    const categories = [
        ...new Set(
            careers.map(career => career.category)
        )
    ].sort();

    filter.innerHTML = `
        <option value="all">All Categories</option>

        ${categories.map(category => `
            <option value="${escapeHTML(category)}">
                ${escapeHTML(category)}
            </option>
        `).join("")}
    `;
}


function applyCategoryFilter() {
    applyActiveCategoryAndSort();
    updateCareerCount();
}


function applyActiveCategoryAndSort() {

    const searchInput =
        document.getElementById("careerSearch");

    const categoryFilter =
        document.getElementById("categoryFilter");

    const sortFilter =
        document.getElementById("sortFilter");

    const query =
        searchInput
            ? searchInput.value.trim().toLowerCase()
            : "";

    const category =
        categoryFilter
            ? categoryFilter.value
            : "all";

    let filtered = careers.filter(career => {

        const matchesSearch =
            !query ||
            career.name.toLowerCase().includes(query) ||
            career.category.toLowerCase().includes(query);

        const matchesCategory =
            category === "all" ||
            career.category === category;

        return matchesSearch && matchesCategory;
    });

    if (sortFilter) {

        const sort = sortFilter.value;

        if (sort === "salary-high") {

            filtered.sort(
                (a, b) => b.salary - a.salary
            );

        } else if (sort === "salary-low") {

            filtered.sort(
                (a, b) => a.salary - b.salary
            );

        } else {

            filtered.sort(
                (a, b) =>
                    a.name.localeCompare(b.name)
            );
        }
    }

    currentCareers = filtered;

    displayCareers(currentCareers);
}


function sortCareers() {
    applyActiveCategoryAndSort();
    updateCareerCount();
}


/* =========================================================
   CAREER COUNT
   ========================================================= */

function updateCareerCount() {

    const count =
        document.getElementById("careerCount");

    if (!count) {
        return;
    }

    count.textContent =
        `${currentCareers.length} career${
            currentCareers.length === 1 ? "" : "s"
        }`;
}


/* =========================================================
   COMPARISON
   ========================================================= */

function updateComparison() {

    /*
       IMPORTANT:

       #comparison in your index.html is the ENTIRE
       comparison section.

       We must NOT replace its innerHTML.

       The actual comparison content belongs inside
       #selectedCareers.
    */

    const container =
        document.getElementById("selectedCareers");

    const stats =
        document.getElementById("comparisonStats");

    if (!container) {
        console.warn("selectedCareers was not found.");
        return;
    }

    if (selectedCareers.length === 0) {

        container.innerHTML = `
            <div class="empty-state">

                <div class="empty-icon">⚖️</div>

                <h3>No careers selected</h3>

                <p>
                    Choose careers from the database above
                    to start comparing.
                </p>

            </div>
        `;

        if (stats) {
            stats.innerHTML = "";
        }

        return;
    }


    /* =====================================================
       COMPARISON CARDS
       ===================================================== */

    container.innerHTML = `
        <div class="comparison-grid">

            ${selectedCareers.map(career => {

                const futureSalary =
                    projectedSalary(career, 2035);

                const increase =
                    futureSalary - Number(career.salary);

                const growthPercent =
                    Number(career.salary) > 0
                        ? (increase / Number(career.salary)) * 100
                        : 0;

                return `
                    <article class="comparison-card">

                        <div class="comparison-card-header">

                            <div>
                                <span class="career-category">
                                    ${escapeHTML(career.category)}
                                </span>

                                <h3>
                                    ${escapeHTML(career.name)}
                                </h3>
                            </div>

                            <div class="comparison-card-icon">
                                $
                            </div>

                        </div>


                        <div class="comparison-stat">

                            <div class="comparison-stat-label">
                                Starting salary
                            </div>

                            <div class="comparison-stat-value">
                                ${formatSalary(career.salary)}
                            </div>

                        </div>


                        <div class="comparison-stat">

                            <div class="comparison-stat-label">
                                2035 estimate
                            </div>

                            <div class="comparison-stat-value">
                                ${formatSalary(futureSalary)}
                            </div>

                        </div>


                        <div class="comparison-stat">

                            <div class="comparison-stat-label">
                                Estimated increase
                            </div>

                            <div class="comparison-stat-value positive">
                                +${formatSalary(increase)}
                            </div>

                        </div>


                        <div class="comparison-growth">

                            <span>
                                Estimated growth
                            </span>

                            <strong>
                                +${growthPercent.toFixed(1)}%
                            </strong>

                        </div>

                    </article>
                `;

            }).join("")}

        </div>
    `;


    /* =====================================================
       COMPARISON STATS
       ===================================================== */

    if (stats) {

        const salaries =
            selectedCareers.map(
                career => Number(career.salary)
            );

        const highest =
            Math.max(...salaries);

        const lowest =
            Math.min(...salaries);

        const average =
            salaries.reduce(
                (sum, value) => sum + value,
                0
            ) / salaries.length;

        const highestCareer =
            selectedCareers.find(
                career =>
                    Number(career.salary) === highest
            );

        const lowestCareer =
            selectedCareers.find(
                career =>
                    Number(career.salary) === lowest
            );

        stats.innerHTML = `
            <div class="stat-box">
                <span>Highest starting salary</span>
                <strong>${formatSalary(highest)}</strong>
                <small>
                    ${escapeHTML(highestCareer.name)}
                </small>
            </div>

            <div class="stat-box">
                <span>Lowest starting salary</span>
                <strong>${formatSalary(lowest)}</strong>
                <small>
                    ${escapeHTML(lowestCareer.name)}
                </small>
            </div>

            <div class="stat-box">
                <span>Average starting salary</span>
                <strong>${formatSalary(average)}</strong>
                <small>
                    Across ${selectedCareers.length} selected career${
                        selectedCareers.length === 1 ? "" : "s"
                    }
                </small>
            </div>
        `;
    }
}


/* =========================================================
   GRAPH
   ========================================================= */

function updateGraph() {

    const graphContainer =
        document.getElementById("salaryGraph");

    if (!graphContainer) {
        console.warn("salaryGraph element was not found.");
        return;
    }

    if (selectedCareers.length === 0) {

        graphContainer.innerHTML = `
            <div class="graph-empty">

                <div>
                    <h3>
                        Select careers to see the salary graph
                    </h3>

                    <p>
                        Choose up to 5 careers
                        from the database above.
                    </p>
                </div>

            </div>
        `;

        return;
    }

    const width = 1000;
    const height = 430;

    const margin = {
        top: 30,
        right: 30,
        bottom: 65,
        left: 90
    };

    const chartWidth =
        width - margin.left - margin.right;

    const chartHeight =
        height - margin.top - margin.bottom;

    const colors = [
        "#8b5cf6",
        "#3b82f6",
        "#22c55e",
        "#f59e0b",
        "#ef4444"
    ];

    const values = [];

    selectedCareers.forEach(career => {

        graphYears.forEach(year => {

            values.push(
                projectedSalary(career, year)
            );

        });

    });

    let minValue = Math.min(...values);
    let maxValue = Math.max(...values);

    if (
        !Number.isFinite(minValue) ||
        !Number.isFinite(maxValue)
    ) {

        graphContainer.innerHTML = `
            <div class="graph-empty">

                <div>
                    <h3>Unable to draw graph</h3>

                    <p>
                        One of the selected careers
                        has invalid salary data.
                    </p>
                </div>

            </div>
        `;

        return;
    }

    if (minValue === maxValue) {
        minValue -= 10000;
        maxValue += 10000;
    }

    const range =
        maxValue - minValue;

    const padding =
        range * 0.12;

    minValue -= padding;
    maxValue += padding;


    function xPosition(index) {

        if (graphYears.length <= 1) {

            return (
                margin.left +
                chartWidth / 2
            );
        }

        return (
            margin.left +
            (index / (graphYears.length - 1)) *
            chartWidth
        );
    }


    function yPosition(value) {

        return (
            margin.top +
            chartHeight -
            (
                (value - minValue) /
                (maxValue - minValue)
            ) *
            chartHeight
        );
    }


    /* GRID */

    let gridLines = "";

    const gridCount = 5;

    for (let i = 0; i <= gridCount; i++) {

        const value =
            minValue +
            (
                (maxValue - minValue) *
                i /
                gridCount
            );

        const y =
            yPosition(value);

        gridLines += `
            <line
                x1="${margin.left}"
                y1="${y}"
                x2="${width - margin.right}"
                y2="${y}"
                stroke="rgba(255,255,255,0.10)"
                stroke-width="1"
            />

            <text
                x="${margin.left - 12}"
                y="${y + 4}"
                text-anchor="end"
                fill="#9ba6b8"
                font-size="12"
            >
                ${formatSalary(value)}
            </text>
        `;
    }


    /* YEARS */

    let yearLabels = "";

    graphYears.forEach((year, index) => {

        const x =
            xPosition(index);

        yearLabels += `
            <text
                x="${x}"
                y="${height - 25}"
                text-anchor="middle"
                fill="#9ba6b8"
                font-size="12"
            >
                ${year}
            </text>
        `;
    });


    /* AXES */

    const axes = `
        <line
            x1="${margin.left}"
            y1="${margin.top}"
            x2="${margin.left}"
            y2="${margin.top + chartHeight}"
            stroke="rgba(255,255,255,0.20)"
            stroke-width="1"
        />

        <line
            x1="${margin.left}"
            y1="${margin.top + chartHeight}"
            x2="${width - margin.right}"
            y2="${margin.top + chartHeight}"
            stroke="rgba(255,255,255,0.20)"
            stroke-width="1"
        />
    `;


    /* LINES */

    let paths = "";
    let points = "";
    let legend = "";

    selectedCareers.forEach((career, careerIndex) => {

        const color =
            colors[
                careerIndex % colors.length
            ];

        const coordinates =
            graphYears.map((year, yearIndex) => {

                return {
                    x: xPosition(yearIndex),

                    y: yPosition(
                        projectedSalary(
                            career,
                            year
                        )
                    )
                };

            });


        const pathData =
            coordinates
                .map(
                    (point, index) =>
                        `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`
                )
                .join(" ");


        paths += `
            <path
                d="${pathData}"
                fill="none"
                stroke="${color}"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        `;


        coordinates.forEach((point, yearIndex) => {

            const salary =
                projectedSalary(
                    career,
                    graphYears[yearIndex]
                );

            points += `
                <circle
                    cx="${point.x}"
                    cy="${point.y}"
                    r="5"
                    fill="${color}"
                    stroke="#080b12"
                    stroke-width="2"
                >
                    <title>
                        ${escapeHTML(career.name)}
                        — ${graphYears[yearIndex]}:
                        ${formatSalary(salary)}
                    </title>
                </circle>
            `;
        });


        legend += `
            <div class="graph-legend-item">

                <span
                    class="graph-legend-dot"
                    style="background:${color};"
                ></span>

                <span>
                    ${escapeHTML(career.name)}
                </span>

            </div>
        `;
    });


    /* FINAL SVG */

    graphContainer.innerHTML = `

        <svg
            viewBox="0 0 ${width} ${height}"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Estimated salary comparison graph"
        >

            ${gridLines}

            ${axes}

            ${yearLabels}

            ${paths}

            ${points}

        </svg>

        <div class="graph-legend">
            ${legend}
        </div>

        <p class="graph-note">
            Estimated salary trend based on built-in salary data
            and category-level growth assumptions.
        </p>
    `;
}


/* =========================================================
   CLEAR COMPARISON
   ========================================================= */

function clearComparison() {

    selectedCareers = [];

    displayCareers(currentCareers);
    updateComparison();
    updateGraph();
}


/* =========================================================
   QUICK SEARCH
   ========================================================= */

function quickSearch(query) {

    const input =
        document.getElementById("careerSearch");

    if (!input) {
        return;
    }

    input.value = query;

    searchCareers();

    const database =
        document.getElementById("careerDatabase");

    if (database) {

        database.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


/* =========================================================
   AI CAREER ADVISOR
   ========================================================= */

let aiConversation = [];


function addAIMessage(type, message) {

    const aiMessages =
        document.getElementById("aiMessages");

    if (!aiMessages) {
        return null;
    }

    const wrapper =
        document.createElement("div");

    wrapper.className =
        type === "user"
            ? "ai-message ai-message-user"
            : "ai-message ai-message-bot";


    const avatar =
        document.createElement("div");

    avatar.className =
        "ai-avatar";

    avatar.textContent =
        type === "user"
            ? "YOU"
            : "AI";


    const bubble =
        document.createElement("div");

    bubble.className =
        "ai-bubble";


    const name =
        document.createElement("strong");

    name.textContent =
        type === "user"
            ? "You"
            : "CareerCompare AI";


    const text =
        document.createElement("p");

    text.textContent =
        message;


    bubble.appendChild(name);
    bubble.appendChild(text);

    wrapper.appendChild(avatar);
    wrapper.appendChild(bubble);

    aiMessages.appendChild(wrapper);

    aiMessages.scrollTop =
        aiMessages.scrollHeight;

    return wrapper;
}


function addAIThinking() {

    const aiMessages =
        document.getElementById("aiMessages");

    if (!aiMessages) {
        return null;
    }

    const wrapper =
        document.createElement("div");

    wrapper.className =
        "ai-message ai-message-bot";

    wrapper.id =
        "aiThinkingMessage";

    wrapper.innerHTML = `
        <div class="ai-avatar">
            AI
        </div>

        <div class="ai-bubble">

            <strong>
                CareerCompare AI
            </strong>

            <div class="ai-thinking">
                <span></span>
                <span></span>
                <span></span>
            </div>

        </div>
    `;

    aiMessages.appendChild(wrapper);

    aiMessages.scrollTop =
        aiMessages.scrollHeight;

    return wrapper;
}


/* =========================================================
   SEND QUESTION TO BACKEND
   ========================================================= */

async function askAI(question) {

    question =
        String(question || "").trim();

    if (!question) {
        return;
    }

    const aiInput =
        document.getElementById("aiInput");

    const aiSendButton =
        document.getElementById("aiSendButton");

    const aiStatus =
        document.getElementById("aiStatus");


    addAIMessage(
        "user",
        question
    );


    aiConversation.push({
        role: "user",
        content: question
    });


    if (aiInput) {
        aiInput.value = "";
    }


    if (aiSendButton) {
        aiSendButton.disabled = true;
    }


    if (aiStatus) {
        aiStatus.textContent =
            "● Thinking...";
    }


    const thinking =
        addAIThinking();


    try {

        const response =
            await fetch(
                "https://career-compare-sooty.vercel.app/api/ai",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        message:
                            question,

                        conversation:
                            aiConversation.slice(-10),

                        selectedCareers:
                            selectedCareers.map(
                                career => ({
                                    name:
                                        career.name,

                                    category:
                                        career.category,

                                    salary:
                                        career.salary
                                })
                            )
                    })
                }
            );


        if (!response.ok) {

            let errorMessage =
                `Server error (${response.status})`;

            try {

                const errorData =
                    await response.json();

                if (errorData.error) {
                    errorMessage =
                        errorData.error;
                }

            } catch {
                // Ignore malformed error response
            }

            throw new Error(errorMessage);
        }


        const data =
            await response.json();


        if (!data.reply) {

            throw new Error(
                "The AI server returned no reply."
            );
        }


        if (thinking) {
            thinking.remove();
        }


        addAIMessage(
            "assistant",
            data.reply
        );


        aiConversation.push({
            role: "assistant",
            content: data.reply
        });


        if (aiStatus) {
            aiStatus.textContent =
                "● Connected";
        }


    } catch (error) {

        console.error(
            "CareerCompare AI error:",
            error
        );


        if (thinking) {
            thinking.remove();
        }


        addAIMessage(
            "assistant",
            "I couldn't connect to the AI server right now. Your CareerCompare database is still working normally."
        );


        if (aiStatus) {
            aiStatus.textContent =
                "● Offline";
        }


    } finally {

        if (aiSendButton) {
            aiSendButton.disabled = false;
        }

        if (aiInput) {
            aiInput.focus();
        }
    }
}


/* =========================================================
   AI FORM
   ========================================================= */

function initializeAI() {

    const aiForm =
        document.getElementById("aiForm");

    const aiInput =
        document.getElementById("aiInput");

    if (!aiForm || !aiInput) {
        return;
    }

    aiForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const question =
                aiInput.value.trim();

            if (!question) {
                return;
            }

            askAI(question);
        }
    );
}


/* =========================================================
   OFFICIAL DATA UPDATE
   ========================================================= */

const API_BASE =
    "https://career-compare-sooty.vercel.app";


async function updateOfficialData() {

    const button =
        document.getElementById(
            "officialUpdateButton"
        );

    const status =
        document.getElementById(
            "officialDataStatus"
        );


    if (!button) {

        console.warn(
            "officialUpdateButton was not found."
        );

        return;
    }


    const originalText =
        button.textContent;


    button.disabled = true;

    button.textContent =
        "Updating...";


    if (status) {

        status.textContent =
            "Connecting to official BLS data...";
    }


    try {

        const response =
            await fetch(
                `${API_BASE}/api/update-data`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        careers:
                            careers.map(
                                career => ({
                                    name:
                                        career.name,

                                    category:
                                        career.category,

                                    salary:
                                        career.salary
                                })
                            )
                    })
                }
            );


        if (!response.ok) {

            let errorMessage =
                `Server error (${response.status})`;

            try {

                const errorData =
                    await response.json();

                if (errorData.error) {
                    errorMessage =
                        errorData.error;
                }

            } catch {
                // Ignore malformed response
            }

            throw new Error(errorMessage);
        }


        const data =
            await response.json();


        if (!data.success) {

            throw new Error(
                data.error ||
                "The official data update failed."
            );
        }


        let updatedCount = 0;


        if (Array.isArray(data.updated)) {

            data.updated.forEach(update => {

                const career =
                    careers.find(
                        item =>
                            item.name === update.name
                    );

                if (
                    career &&
                    Number.isFinite(
                        Number(update.salary)
                    )
                ) {

                    career.salary =
                        Number(update.salary);

                    updatedCount++;
                }
            });
        }


        currentCareers = [...careers];

        applyActiveCategoryAndSort();
        updateCareerCount();
        updateComparison();
        updateGraph();


        if (status) {

            status.textContent =
                `✓ Official BLS data updated — ${updatedCount} career${
                    updatedCount === 1 ? "" : "s"
                } refreshed.`;
        }


    } catch (error) {

        console.error(
            "Official data update error:",
            error
        );


        if (status) {

            status.textContent =
                `Update failed: ${error.message}`;
        }


        alert(
            "The official salary update could not be completed.\n\n" +
            error.message +
            "\n\n" +
            "Your built-in salary data is still being used."
        );


    } finally {

        button.disabled = false;

        button.textContent =
            originalText;
    }
}


/* =========================================================
   GLOBAL FUNCTIONS
   ========================================================= */

window.askAI =
    askAI;

window.quickSearch =
    quickSearch;

window.toggleCareer =
    toggleCareer;

window.clearComparison =
    clearComparison;

window.updateOfficialData =
    updateOfficialData;


/* =========================================================
   INITIALIZE EVERYTHING
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        buildCategoryFilter();

        displayCareers();

        updateCareerCount();

        updateComparison();

        updateGraph();

        initializeAI();


        const searchInput =
            document.getElementById(
                "careerSearch"
            );

        if (searchInput) {

            searchInput.addEventListener(
                "input",
                searchCareers
            );
        }


        const categoryFilter =
            document.getElementById(
                "categoryFilter"
            );

        if (categoryFilter) {

            categoryFilter.addEventListener(
                "change",
                applyCategoryFilter
            );
        }


        const sortFilter =
            document.getElementById(
                "sortFilter"
            );

        if (sortFilter) {

            sortFilter.addEventListener(
                "change",
                sortCareers
            );
        }


        const clearButton =
            document.getElementById(
                "clearComparison"
            );

        if (clearButton) {

            clearButton.addEventListener(
                "click",
                clearComparison
            );
        }


        const officialUpdateButton =
            document.getElementById(
                "officialUpdateButton"
            );

        if (officialUpdateButton) {

            officialUpdateButton.addEventListener(
                "click",
                updateOfficialData
            );
        }


        console.log(
            "CareerCompare initialized successfully."
        );

    }
);
