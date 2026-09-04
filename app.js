// ============================================================
// CareerCompare
// Main application JavaScript
// ============================================================

const careers = [

    // =========================
    // TECHNOLOGY
    // =========================

    { name: "Software Developer", category: "Technology", salary: 148000 },
    { name: "Computer Programmer", category: "Technology", salary: 105000 },
    { name: "Web Developer", category: "Technology", salary: 99000 },
    { name: "Web & Digital Interface Designer", category: "Technology", salary: 117000 },
    { name: "Software QA Analyst", category: "Technology", salary: 111000 },
    { name: "Computer Systems Analyst", category: "Technology", salary: 107000 },
    { name: "Information Security Analyst", category: "Technology", salary: 125000 },
    { name: "Database Administrator", category: "Technology", salary: 103000 },
    { name: "Database Architect", category: "Technology", salary: 123000 },
    { name: "Network Administrator", category: "Technology", salary: 90000 },
    { name: "Network Architect", category: "Technology", salary: 130000 },
    { name: "Computer Network Support Specialist", category: "Technology", salary: 74000 },
    { name: "Computer User Support Specialist", category: "Technology", salary: 62000 },
    { name: "IT Manager", category: "Technology", salary: 175000 },
    { name: "Computer & Information Research Scientist", category: "Technology", salary: 145000 },
    { name: "Data Scientist", category: "Technology", salary: 115000 },
    { name: "Data Analyst", category: "Technology", salary: 85000 },
    { name: "AI / Machine Learning Engineer", category: "Technology", salary: 145000 },
    { name: "Cloud Engineer", category: "Technology", salary: 130000 },
    { name: "DevOps Engineer", category: "Technology", salary: 125000 },
    { name: "Game Developer", category: "Technology", salary: 105000 },
    { name: "Mobile App Developer", category: "Technology", salary: 115000 },
    { name: "Computer Hardware Engineer", category: "Technology", salary: 145000 },
    { name: "Robotics Engineer", category: "Technology", salary: 115000 },
    { name: "UX Designer", category: "Technology", salary: 105000 },

    // =========================
    // HEALTHCARE
    // =========================

    { name: "Physician", category: "Healthcare", salary: 240000 },
    { name: "Surgeon", category: "Healthcare", salary: 360000 },
    { name: "Dentist", category: "Healthcare", salary: 185000 },
    { name: "Orthodontist", category: "Healthcare", salary: 250000 },
    { name: "Pharmacist", category: "Healthcare", salary: 140000 },
    { name: "Registered Nurse", category: "Healthcare", salary: 93000 },
    { name: "Nurse Practitioner", category: "Healthcare", salary: 135000 },
    { name: "Physician Assistant", category: "Healthcare", salary: 135000 },
    { name: "Physical Therapist", category: "Healthcare", salary: 100000 },
    { name: "Occupational Therapist", category: "Healthcare", salary: 98000 },
    { name: "Respiratory Therapist", category: "Healthcare", salary: 78000 },
    { name: "Radiologic Technologist", category: "Healthcare", salary: 75000 },
    { name: "Dental Hygienist", category: "Healthcare", salary: 88000 },
    { name: "Dental Assistant", category: "Healthcare", salary: 50000 },
    { name: "Medical Assistant", category: "Healthcare", salary: 46000 },
    { name: "Phlebotomist", category: "Healthcare", salary: 46000 },
    { name: "Medical Laboratory Scientist", category: "Healthcare", salary: 62000 },
    { name: "Paramedic", category: "Healthcare", salary: 57000 },
    { name: "Emergency Medical Technician", category: "Healthcare", salary: 42000 },
    { name: "Veterinarian", category: "Healthcare", salary: 140000 },
    { name: "Veterinary Technician", category: "Healthcare", salary: 45000 },
    { name: "Chiropractor", category: "Healthcare", salary: 90000 },
    { name: "Psychologist", category: "Healthcare", salary: 95000 },
    { name: "Optometrist", category: "Healthcare", salary: 135000 },

    // =========================
    // EDUCATION
    // =========================

    { name: "Elementary School Teacher", category: "Education", salary: 73000 },
    { name: "Middle School Teacher", category: "Education", salary: 74000 },
    { name: "Secondary School Teacher", category: "Education", salary: 76000 },
    { name: "Special Education Teacher", category: "Education", salary: 75000 },
    { name: "School Counselor", category: "Education", salary: 65000 },
    { name: "School Principal", category: "Education", salary: 105000 },
    { name: "College Professor", category: "Education", salary: 90000 },
    { name: "Teaching Assistant", category: "Education", salary: 38000 },
    { name: "Instructional Coordinator", category: "Education", salary: 75000 },
    { name: "Librarian", category: "Education", salary: 68000 },
    { name: "Archivist", category: "Education", salary: 60000 },

    // =========================
    // ENGINEERING
    // =========================

    { name: "Mechanical Engineer", category: "Engineering", salary: 102000 },
    { name: "Civil Engineer", category: "Engineering", salary: 99000 },
    { name: "Electrical Engineer", category: "Engineering", salary: 115000 },
    { name: "Computer Engineer", category: "Engineering", salary: 125000 },
    { name: "Chemical Engineer", category: "Engineering", salary: 115000 },
    { name: "Aerospace Engineer", category: "Engineering", salary: 135000 },
    { name: "Biomedical Engineer", category: "Engineering", salary: 105000 },
    { name: "Environmental Engineer", category: "Engineering", salary: 105000 },
    { name: "Industrial Engineer", category: "Engineering", salary: 100000 },
    { name: "Materials Engineer", category: "Engineering", salary: 105000 },
    { name: "Nuclear Engineer", category: "Engineering", salary: 125000 },
    { name: "Petroleum Engineer", category: "Engineering", salary: 145000 },
    { name: "Architect", category: "Engineering & Design", salary: 95000 },
    { name: "Landscape Architect", category: "Engineering & Design", salary: 80000 },

    // =========================
    // BUSINESS & FINANCE
    // =========================

    { name: "Accountant", category: "Business & Finance", salary: 86000 },
    { name: "Auditor", category: "Business & Finance", salary: 85000 },
    { name: "Financial Analyst", category: "Business & Finance", salary: 105000 },
    { name: "Financial Manager", category: "Business & Finance", salary: 165000 },
    { name: "Personal Financial Advisor", category: "Business & Finance", salary: 105000 },
    { name: "Economist", category: "Business & Finance", salary: 120000 },
    { name: "Actuary", category: "Business & Finance", salary: 141000 },
    { name: "Loan Officer", category: "Business & Finance", salary: 80000 },
    { name: "Bank Teller", category: "Business & Finance", salary: 39000 },
    { name: "Investment Banker", category: "Business & Finance", salary: 150000 },
    { name: "Chief Executive", category: "Business & Finance", salary: 270000 },
    { name: "General & Operations Manager", category: "Business & Finance", salary: 135000 },
    { name: "Human Resources Manager", category: "Business & Finance", salary: 145000 },
    { name: "Management Analyst", category: "Business & Finance", salary: 105000 },
    { name: "Project Manager", category: "Business & Finance", salary: 100000 },
    { name: "Purchasing Manager", category: "Business & Finance", salary: 140000 },

    // =========================
    // LAW
    // =========================

    { name: "Lawyer", category: "Law", salary: 150000 },
    { name: "Judge", category: "Law", salary: 150000 },
    { name: "Paralegal", category: "Law", salary: 65000 },
    { name: "Legal Assistant", category: "Law", salary: 55000 },
    { name: "Court Reporter", category: "Law", salary: 65000 },
    { name: "Mediator", category: "Law", salary: 70000 },

    // =========================
    // SCIENCE
    // =========================

    { name: "Biologist", category: "Science", salary: 108000 },
    { name: "Microbiologist", category: "Science", salary: 98000 },
    { name: "Biochemist", category: "Science", salary: 130000 },
    { name: "Chemist", category: "Science", salary: 85000 },
    { name: "Physicist", category: "Science", salary: 145000 },
    { name: "Astronomer", category: "Science", salary: 130000 },
    { name: "Geologist", category: "Science", salary: 100000 },
    { name: "Meteorologist", category: "Science", salary: 95000 },
    { name: "Zoologist", category: "Science", salary: 83000 },
    { name: "Wildlife Biologist", category: "Science", salary: 83000 },
    { name: "Environmental Scientist", category: "Science", salary: 80000 },
    { name: "Food Scientist", category: "Science", salary: 95000 },
    { name: "Forensic Scientist", category: "Science", salary: 70000 },

    // =========================
    // TRADES
    // =========================

    { name: "Electrician", category: "Trades", salary: 71000 },
    { name: "Plumber", category: "Trades", salary: 70000 },
    { name: "HVAC Technician", category: "Trades", salary: 65000 },
    { name: "Carpenter", category: "Trades", salary: 60000 },
    { name: "Welder", category: "Trades", salary: 55000 },
    { name: "Machinist", category: "Trades", salary: 60000 },
    { name: "Auto Mechanic", category: "Trades", salary: 55000 },
    { name: "Diesel Mechanic", category: "Trades", salary: 60000 },
    { name: "Industrial Machinery Mechanic", category: "Trades", salary: 68000 },
    { name: "Elevator Installer & Repairer", category: "Trades", salary: 105000 },
    { name: "Construction Equipment Operator", category: "Trades", salary: 66000 },
    { name: "Construction Manager", category: "Trades & Construction", salary: 110000 },
    { name: "Construction Laborer", category: "Trades & Construction", salary: 47000 },
    { name: "Bricklayer", category: "Trades", salary: 67000 },
    { name: "Roofer", category: "Trades", salary: 50000 },

    // =========================
    // PUBLIC SERVICE
    // =========================

    { name: "Police Officer", category: "Public Service", salary: 79000 },
    { name: "Detective", category: "Public Service", salary: 90000 },
    { name: "Firefighter", category: "Public Service", salary: 60000 },
    { name: "Fire Chief", category: "Public Service", salary: 100000 },
    { name: "Corrections Officer", category: "Public Service", salary: 55000 },
    { name: "Social Worker", category: "Public Service", salary: 60000 },
    { name: "Urban Planner", category: "Public Service", salary: 85000 },
    { name: "City Manager", category: "Public Service", salary: 110000 },
    { name: "Government Program Analyst", category: "Public Service", salary: 85000 },

    // =========================
    // TRANSPORTATION
    // =========================

    { name: "Commercial Airline Pilot", category: "Transportation", salary: 230000 },
    { name: "Air Traffic Controller", category: "Transportation", salary: 145000 },
    { name: "Flight Attendant", category: "Transportation", salary: 75000 },
    { name: "Truck Driver", category: "Transportation", salary: 60000 },
    { name: "Bus Driver", category: "Transportation", salary: 50000 },
    { name: "Train Conductor", category: "Transportation", salary: 70000 },
    { name: "Railroad Engineer", category: "Transportation", salary: 80000 },
    { name: "Ship Captain", category: "Transportation", salary: 100000 },
    { name: "Automotive Service Technician", category: "Transportation", salary: 55000 },

    // =========================
    // ARTS & DESIGN
    // =========================

    { name: "Graphic Designer", category: "Arts & Design", salary: 62000 },
    { name: "Art Director", category: "Arts & Design", salary: 115000 },
    { name: "Interior Designer", category: "Arts & Design", salary: 65000 },
    { name: "Industrial Designer", category: "Arts & Design", salary: 80000 },
    { name: "Fashion Designer", category: "Arts & Design", salary: 80000 },
    { name: "Photographer", category: "Arts & Design", salary: 60000 },
    { name: "Animator", category: "Arts & Design", salary: 85000 },
    { name: "Illustrator", category: "Arts & Design", salary: 65000 },
    { name: "Art Teacher", category: "Arts & Design", salary: 70000 },

    // =========================
    // MEDIA & COMMUNICATION
    // =========================

    { name: "Journalist", category: "Media & Communication", salary: 65000 },
    { name: "News Reporter", category: "Media & Communication", salary: 60000 },
    { name: "Public Relations Specialist", category: "Media & Communication", salary: 75000 },
    { name: "Public Relations Manager", category: "Media & Communication", salary: 135000 },
    { name: "Technical Writer", category: "Media & Communication", salary: 85000 },
    { name: "Editor", category: "Media & Communication", salary: 75000 },
    { name: "Writer", category: "Media & Communication", salary: 80000 },
    { name: "Broadcast Technician", category: "Media & Communication", salary: 55000 },
    { name: "Producer", category: "Media & Communication", salary: 85000 },

    // =========================
    // MARKETING & SALES
    // =========================

    { name: "Marketing Specialist", category: "Marketing & Sales", salary: 75000 },
    { name: "Marketing Manager", category: "Marketing & Sales", salary: 155000 },
    { name: "Sales Manager", category: "Marketing & Sales", salary: 145000 },
    { name: "Advertising Manager", category: "Marketing & Sales", salary: 150000 },
    { name: "Sales Representative", category: "Marketing & Sales", salary: 70000 },
    { name: "Real Estate Agent", category: "Marketing & Sales", salary: 70000 },
    { name: "Real Estate Broker", category: "Marketing & Sales", salary: 90000 },
    { name: "Market Research Analyst", category: "Marketing & Sales", salary: 80000 },

    // =========================
    // SOCIAL & HUMAN SERVICES
    // =========================

    { name: "Psychologist", category: "Social & Human Services", salary: 95000 },
    { name: "Mental Health Counselor", category: "Social & Human Services", salary: 55000 },
    { name: "Marriage & Family Therapist", category: "Social & Human Services", salary: 60000 },
    { name: "Social Worker", category: "Social & Human Services", salary: 60000 },
    { name: "Community Health Worker", category: "Social & Human Services", salary: 48000 },
    { name: "Rehabilitation Counselor", category: "Social & Human Services", salary: 50000 },

    // =========================
    // AGRICULTURE & ENVIRONMENT
    // =========================

    { name: "Agricultural Scientist", category: "Agriculture & Environment", salary: 91000 },
    { name: "Agronomist", category: "Agriculture & Environment", salary: 85000 },
    { name: "Conservation Scientist", category: "Agriculture & Environment", salary: 78000 },
    { name: "Forester", category: "Agriculture & Environment", salary: 78000 },
    { name: "Environmental Technician", category: "Agriculture & Environment", salary: 55000 },
    { name: "Agricultural Inspector", category: "Agriculture & Environment", salary: 65000 },
    { name: "Farm Manager", category: "Agriculture & Environment", salary: 80000 },

    // =========================
    // FOOD & HOSPITALITY
    // =========================

    { name: "Chef", category: "Food & Hospitality", salary: 60000 },
    { name: "Head Chef", category: "Food & Hospitality", salary: 70000 },
    { name: "Restaurant Manager", category: "Food & Hospitality", salary: 65000 },
    { name: "Hotel Manager", category: "Food & Hospitality", salary: 80000 },
    { name: "Baker", category: "Food & Hospitality", salary: 40000 },
    { name: "Cook", category: "Food & Hospitality", salary: 35000 },
    { name: "Bartender", category: "Food & Hospitality", salary: 40000 },
    { name: "Waiter / Waitress", category: "Food & Hospitality", salary: 35000 },

    // =========================
    // SPORTS & RECREATION
    // =========================

    { name: "Athletic Trainer", category: "Sports & Recreation", salary: 60000 },
    { name: "Fitness Trainer", category: "Sports & Recreation", salary: 50000 },
    { name: "Sports Coach", category: "Sports & Recreation", salary: 55000 },
    { name: "Recreation Worker", category: "Sports & Recreation", salary: 40000 },
    { name: "Sports Official", category: "Sports & Recreation", salary: 45000 },

    // =========================
    // PERSONAL SERVICES
    // =========================

    { name: "Hairdresser", category: "Personal Services", salary: 45000 },
    { name: "Barber", category: "Personal Services", salary: 45000 },
    { name: "Esthetician", category: "Personal Services", salary: 40000 },
    { name: "Massage Therapist", category: "Personal Services", salary: 55000 },
    { name: "Personal Trainer", category: "Personal Services", salary: 50000 }
];


// ============================================================
// STATE
// ============================================================

let selectedCareers = [];
let currentCareers = [...careers];


// ============================================================
// GRAPH SETTINGS
// ============================================================

const GRAPH_START_YEAR = 2026;
const GRAPH_END_YEAR = 2035;


// Approximate annual salary growth assumptions.
// These are intentionally labeled as estimates.
// Later, official historical BLS data can replace this.
const GROWTH_RATES = {
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


// ============================================================
// HELPERS
// ============================================================

function formatSalary(amount) {

    if (amount >= 1000000) {
        return "$" + (amount / 1000000).toFixed(1) + "M";
    }

    return "$" + Math.round(amount / 1000) + "K";
}


function formatFullSalary(amount) {

    return "$" + Math.round(amount).toLocaleString();
}


function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


function getGrowthRate(career) {

    return GROWTH_RATES[career.category] || 0.03;
}


function projectedSalary(career, year) {

    const yearsElapsed = year - GRAPH_START_YEAR;

    return career.salary *
        Math.pow(
            1 + getGrowthRate(career),
            yearsElapsed
        );
}


// ============================================================
// DISPLAY CAREERS
// ============================================================

function displayCareers(list) {

    const container = document.getElementById("careerList");

    if (!container) return;

    container.innerHTML = "";

    if (list.length === 0) {

        container.innerHTML = `
            <div class="career">
                <h3>No careers found</h3>
                <div class="category">
                    Try another search.
                </div>
            </div>
        `;

        return;
    }

    list.forEach(career => {

        const card = document.createElement("div");

        card.className = "career";

        const isSelected =
            selectedCareers.some(
                selected => selected.name === career.name
            );

        if (isSelected) {
            card.style.borderColor = "#6c8cff";
        }

        card.innerHTML = `

            <h3>
                ${escapeHTML(career.name)}
            </h3>

            <div class="category">
                ${escapeHTML(career.category)}
            </div>

            <div class="salary">
                ${formatSalary(career.salary)}
            </div>

            <div class="salary-label">
                Average annual salary
            </div>

            <button
                class="select-career-button"
                style="margin-top:15px;width:100%;"
            >
                ${isSelected ? "✓ Selected" : "Compare"}
            </button>
        `;

        const button =
            card.querySelector(".select-career-button");

        button.addEventListener("click", () => {
            toggleCareer(career);
        });

        container.appendChild(card);
    });
}


// ============================================================
// CAREER SELECTION
// ============================================================

function toggleCareer(career) {

    const index =
        selectedCareers.findIndex(
            selected => selected.name === career.name
        );

    if (index >= 0) {

        selectedCareers.splice(index, 1);

    } else {

        if (selectedCareers.length >= 5) {

            alert("You can compare up to 5 careers.");

            return;
        }

        selectedCareers.push(career);
    }

    displayCareers(currentCareers);

    updateComparison();

    updateGraph();
}


// ============================================================
// SEARCH
// ============================================================

function searchCareers() {

    const input =
        document.getElementById("searchInput");

    if (!input) return;

    const search =
        input.value
            .toLowerCase()
            .trim();

    currentCareers =
        careers.filter(career =>

            career.name
                .toLowerCase()
                .includes(search)

            ||

            career.category
                .toLowerCase()
                .includes(search)
        );

    displayCareers(currentCareers);
}


// ============================================================
// SORTING
// ============================================================

function sortCareers(type) {

    let sorted = [...currentCareers];

    if (type === "salary-high") {

        sorted.sort(
            (a, b) => b.salary - a.salary
        );

    } else if (type === "salary-low") {

        sorted.sort(
            (a, b) => a.salary - b.salary
        );

    } else if (type === "name") {

        sorted.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );
    }

    currentCareers = sorted;

    displayCareers(currentCareers);
}


// ============================================================
// COMPARISON CARDS
// ============================================================

function updateComparison() {

    const comparison =
        document.getElementById("comparison");

    if (!comparison) return;

    if (selectedCareers.length === 0) {

        comparison.innerHTML = `
            <p>
                Select careers above to compare them.
            </p>
        `;

        updateGraph();

        return;
    }

    comparison.innerHTML = selectedCareers
        .map(career => {

            const futureSalary =
                projectedSalary(
                    career,
                    GRAPH_END_YEAR
                );

            const increase =
                futureSalary - career.salary;

            return `

                <div class="career">

                    <h3>
                        ${escapeHTML(career.name)}
                    </h3>

                    <div class="category">
                        ${escapeHTML(career.category)}
                    </div>

                    <div class="salary">
                        ${formatSalary(career.salary)}
                    </div>

                    <div class="salary-label">
                        Starting salary
                    </div>

                    <div style="
                        margin-top:14px;
                        font-size:14px;
                        opacity:.75;
                    ">
                        2035 estimate
                    </div>

                    <div style="
                        font-size:22px;
                        font-weight:800;
                        margin-top:3px;
                    ">
                        ${formatSalary(futureSalary)}
                    </div>

                    <div style="
                        margin-top:8px;
                        font-size:13px;
                        opacity:.7;
                    ">
                        +${formatSalary(increase)}
                        estimated increase
                    </div>

                </div>

            `;
        })
        .join("");

    updateGraph();
}


// ============================================================
// GRAPH
// ============================================================

function updateGraph() {

    const graph =
        document.getElementById("salaryGraph");

    if (!graph) return;

    if (selectedCareers.length === 0) {

        graph.innerHTML = `
            <div class="graph-empty">
                <div style="font-size:42px;">📈</div>

                <h3>No careers selected</h3>

                <p>
                    Select two or more careers above
                    to see their salary trends.
                </p>
            </div>
        `;

        return;
    }

    const width = 1000;
    const height = 500;

    const paddingLeft = 75;
    const paddingRight = 30;
    const paddingTop = 35;
    const paddingBottom = 65;

    const chartWidth =
        width - paddingLeft - paddingRight;

    const chartHeight =
        height - paddingTop - paddingBottom;


    // --------------------------------------------
    // Find maximum salary
    // --------------------------------------------

    let maxSalary = 0;

    selectedCareers.forEach(career => {

        const future =
            projectedSalary(
                career,
                GRAPH_END_YEAR
            );

        maxSalary =
            Math.max(
                maxSalary,
                future
            );
    });


    // Give graph some breathing room
    maxSalary *= 1.1;


    // --------------------------------------------
    // SVG coordinates
    // --------------------------------------------

    function xForYear(year) {

        const position =
            (year - GRAPH_START_YEAR) /
            (GRAPH_END_YEAR - GRAPH_START_YEAR);

        return paddingLeft +
            position * chartWidth;
    }


    function yForSalary(salary) {

        return paddingTop +
            chartHeight -
            (salary / maxSalary) *
            chartHeight;
    }


    // --------------------------------------------
    // Build SVG
    // --------------------------------------------

    let svg = `

        <svg
            viewBox="0 0 ${width} ${height}"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            style="
                overflow:visible;
                font-family:inherit;
            "
        >

            <!-- Background -->

            <rect
                x="0"
                y="0"
                width="${width}"
                height="${height}"
                rx="18"
                fill="transparent"
            />

    `;


    // --------------------------------------------
    // Horizontal grid lines
    // --------------------------------------------

    const gridLines = 5;

    for (let i = 0; i <= gridLines; i++) {

        const salary =
            (maxSalary / gridLines) * i;

        const y =
            yForSalary(salary);

        svg += `

            <line
                x1="${paddingLeft}"
                y1="${y}"
                x2="${width - paddingRight}"
                y2="${y}"
                stroke="currentColor"
                opacity="0.10"
                stroke-width="1"
            />

            <text
                x="${paddingLeft - 12}"
                y="${y + 5}"
                text-anchor="end"
                font-size="12"
                fill="currentColor"
                opacity="0.55"
            >
                ${formatSalary(salary)}
            </text>

        `;
    }


    // --------------------------------------------
    // Years
    // --------------------------------------------

    for (
        let year = GRAPH_START_YEAR;
        year <= GRAPH_END_YEAR;
        year++
    ) {

        const x =
            xForYear(year);

        svg += `

            <line
                x1="${x}"
                y1="${paddingTop}"
                x2="${x}"
                y2="${height - paddingBottom}"
                stroke="currentColor"
                opacity="0.05"
                stroke-width="1"
            />

            <text
                x="${x}"
                y="${height - 28}"
                text-anchor="middle"
                font-size="12"
                fill="currentColor"
                opacity="0.60"
            >
                ${year}
            </text>

        `;
    }


    // --------------------------------------------
    // Career lines
    // --------------------------------------------

    selectedCareers.forEach((career, careerIndex) => {

        const growth =
            getGrowthRate(career);

        const points = [];

        for (
            let year = GRAPH_START_YEAR;
            year <= GRAPH_END_YEAR;
            year++
        ) {

            const salary =
                projectedSalary(
                    career,
                    year
                );

            points.push({

                year,

                salary,

                x: xForYear(year),

                y: yForSalary(salary)

            });
        }


        const path =
            points
                .map(
                    (point, index) =>
                        `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`
                )
                .join(" ");


        // SVG has no guaranteed CSS palette from our stylesheet,
        // so use a rotating set of classes and let CSS handle them.

        const lineClass =
            `career-line-${careerIndex + 1}`;


        svg += `

            <path
                d="${path}"
                fill="none"
                class="${lineClass}"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
            />

        `;


        // Points

        points.forEach(point => {

            svg += `

                <circle
                    cx="${point.x}"
                    cy="${point.y}"
                    r="5"
                    class="${lineClass}"
                    stroke-width="2"
                    tabindex="0"
                >

                    <title>
                        ${escapeHTML(career.name)}
                        — ${point.year}
                        — ${formatFullSalary(point.salary)}
                    </title>

                </circle>

            `;
        });


        // Current salary label

        const firstPoint = points[0];

        svg += `

            <text
                x="${firstPoint.x + 8}"
                y="${firstPoint.y - 10}"
                font-size="12"
                font-weight="700"
                fill="currentColor"
                opacity="0.85"
            >
                ${escapeHTML(career.name)}
            </text>

        `;


        // Keep growth variable used intentionally
        void growth;
    });


    svg += `</svg>`;


    // --------------------------------------------
    // Legend
    // --------------------------------------------

    const legend =
        selectedCareers
            .map(
                (career, index) => `

                    <div
                        class="graph-legend-item"
                        style="
                            display:flex;
                            align-items:center;
                            gap:8px;
                        "
                    >

                        <span
                            class="legend-dot career-line-${index + 1}"
                            style="
                                width:10px;
                                height:10px;
                                border-radius:50%;
                                display:inline-block;
                            "
                        ></span>

                        <span>
                            ${escapeHTML(career.name)}
                        </span>

                    </div>

                `
            )
            .join("");


    graph.innerHTML = `

        <div
            style="
                width:100%;
                overflow:hidden;
            "
        >

            <div
                style="
                    min-width:650px;
                    height:500px;
                "
            >
                ${svg}
            </div>

            <div
                class="graph-legend"
                style="
                    display:flex;
                    flex-wrap:wrap;
                    gap:18px;
                    padding:15px 10px 5px;
                    font-size:13px;
                    opacity:.85;
                "
            >
                ${legend}
            </div>

            <div
                style="
                    margin-top:12px;
                    font-size:12px;
                    opacity:.55;
                    padding:0 10px 10px;
                "
            >
                Estimated salary trend based on built-in salary
                data and category-level growth assumptions.
            </div>

        </div>
    `;
}


// ============================================================
// CLEAR COMPARISON
// ============================================================

function clearComparison() {

    selectedCareers = [];

    displayCareers(currentCareers);

    updateComparison();

    updateGraph();
}


// ============================================================
// QUICK SEARCH
// ============================================================

function quickSearch(term) {

    const input =
        document.getElementById("searchInput");

    if (!input) return;

    input.value = term;

    searchCareers();

    const database =
        document.getElementById("careerDatabase");

    if (database) {

        database.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// ============================================================
// CATEGORY FILTER
// ============================================================

function applyCategoryFilter(category) {

    if (!category || category === "All Careers") {

        currentCareers = [...careers];

    } else {

        currentCareers =
            careers.filter(
                career =>
                    career.category === category
            );
    }

    displayCareers(currentCareers);
}


// ============================================================
// CATEGORY BUILDER
// ============================================================

function buildCategoryFilter() {

    const select =
        document.getElementById("categoryFilter");

    if (!select) return;

    const categories =
        [...new Set(
            careers.map(
                career => career.category
            )
        )].sort();


    select.innerHTML = `
        <option value="All Careers">
            All Careers
        </option>
    `;


    categories.forEach(category => {

        const option =
            document.createElement("option");

        option.value = category;

        option.textContent = category;

        select.appendChild(option);
    });
}


// ============================================================
// CAREER COUNT
// ============================================================

function updateCareerCount() {

    const count =
        document.getElementById("careerCount");

    if (!count) return;

    count.textContent =
        `${currentCareers.length} careers`;
}


// ============================================================
// INITIALIZATION
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const searchInput =
            document.getElementById("searchInput");

        if (searchInput) {

            searchInput.addEventListener(
                "input",
                searchCareers
            );

            searchInput.addEventListener(
                "keydown",
                event => {

                    if (event.key === "Enter") {
                        searchCareers();
                    }

                }
            );
        }


        const categoryFilter =
            document.getElementById("categoryFilter");

        if (categoryFilter) {

            buildCategoryFilter();

            categoryFilter.addEventListener(
                "change",
                () => {

                    applyCategoryFilter(
                        categoryFilter.value
                    );

                    updateCareerCount();
                }
            );
        }


        const sortFilter =
            document.getElementById("sortFilter");

        if (sortFilter) {

            sortFilter.addEventListener(
                "change",
                () => {

                    sortCareers(
                        sortFilter.value
                    );

                    updateCareerCount();
                }
            );
        }


        const clearButton =
            document.getElementById("clearComparison");

        if (clearButton) {

            clearButton.addEventListener(
                "click",
                clearComparison
            );
        }


        // Initial display

        displayCareers(careers);

        updateComparison();

        updateGraph();

        buildCategoryFilter();

        updateCareerCount();

    }
);
