const careers = [
    {
        name: "Software Developer",
        category: "Technology",
        salary: 133000
    },
    {
        name: "Registered Nurse",
        category: "Healthcare",
        salary: 93000
    },
    {
        name: "Elementary School Teacher",
        category: "Education",
        salary: 73000
    },
    {
        name: "Secondary School Teacher",
        category: "Education",
        salary: 76000
    },
    {
        name: "Electrician",
        category: "Trades",
        salary: 68000
    },
    {
        name: "Accountant",
        category: "Business",
        salary: 86000
    },
    {
        name: "Physician",
        category: "Healthcare",
        salary: 240000
    },
    {
        name: "Mechanical Engineer",
        category: "Engineering",
        salary: 102000
    },
    {
        name: "Civil Engineer",
        category: "Engineering",
        salary: 99000
    },
    {
        name: "Graphic Designer",
        category: "Arts & Design",
        salary: 62000
    }
];

function formatSalary(amount) {
    return "$" + Math.round(amount / 1000) + "K";
}

function displayCareers(list) {
    const container = document.getElementById("careerList");

    if (!container) return;

    container.innerHTML = "";

    if (list.length === 0) {
        container.innerHTML = "<p>No careers found.</p>";
        return;
    }

    list.forEach(career => {
        const card = document.createElement("div");

        card.className = "career";

        card.innerHTML = `
            <h3>${career.name}</h3>

            <div class="category">
                ${career.category}
            </div>

            <div class="salary">
                ${formatSalary(career.salary)}
            </div>

            <div class="salary-label">
                Average annual salary
            </div>
        `;

        container.appendChild(card);
    });
}

function searchCareers() {
    const input = document.getElementById("searchInput");

    if (!input) return;

    const search = input.value.toLowerCase().trim();

    const filtered = careers.filter(career =>
        career.name.toLowerCase().includes(search) ||
        career.category.toLowerCase().includes(search)
    );

    displayCareers(filtered);
}

document.addEventListener("DOMContentLoaded", () => {

    const searchInput =
        document.getElementById("searchInput");

    if (searchInput) {
        searchInput.addEventListener("keydown", event => {
            if (event.key === "Enter") {
                searchCareers();
            }
        });
    }

    displayCareers(careers);
});
