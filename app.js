const dataMenu = [
    {
        id: 1,
        img: "img/item-1.jpeg",
        name: "Buttermilk Pancakes",
        price: 15.99,
        info: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        type: "breakfast",
    },
    {
        id: 2,
        img: "img/item-2.jpeg",
        name: "Diner Double",
        price: 13.99,
        info: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
        type: "lunch",
    },
    {
        id: 3,
        img: "img/item-3.jpeg",
        name: "Godzilla Milkshake",
        price: 6.99,
        info: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
        type: "shakes",
    },
    {
        id: 4,
        img: "img/item-4.jpeg",
        name: "Country Delight",
        price: 20.99,
        info: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
        type: "breakfast",
    },
    {
        id: 5,
        img: "img/item-5.jpeg",
        name: "Egg Attack",
        price: 22.99,
        info: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
        type: "lunch",
    },
    {
        id: 6,
        img: "img/item-6.jpeg",
        name: "Oreo Dream",
        price: 18.99,
        info: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
        type: "shakes",
    },
    {
        id: 7,
        img: "img/item-7.jpeg",
        name: "Bacon Overflow",
        price: 8.99,
        info: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
        type: "breakfast",
    },
    {
        id: 8,
        img: "img/item-8.jpeg",
        name: "American Classic",
        price: 12.99,
        info: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
        type: "lunch",
    },
    {
        id: 9,
        img: "img/item-9.jpeg",
        name: "Quarantine Buddy",
        price: 16.99,
        info: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        type: "shakes",
    },
    {
        id: 10,
        img: "img/item-10.jpeg",
        name: "Steak Dinner",
        price: 39.99,
        info: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        type: "dinner",
    },
];
window.addEventListener("DOMContentLoaded", function () {
    loadDisplay(dataMenu, 0);
});

const menuSection = document.querySelector(".menu-section"),
    btnFilter = document.querySelectorAll(".btn-filter");

const loadDisplay = (dataMenu, index) => {
    let displayMenu = dataMenu
        .filter((item) => {
            if (index === 0) {
                return item;
            }
            if (index === 1) {
                return item.type === "breakfast";
            }
            if (index === 2) {
                return item.type === "lunch";
            }
            if (index === 3) {
                return item.type === "shakes";
            }
            if (index === 4) {
                return item.type === "dinner";
            }
        })
        .map((item) => {
            return `
            <div class="menu-item">
                <img src=${item.img} alt="" class="photo">
                <div class="menu-item__info">
                    <div class="item__info-header">
                        <h1>${item.name}</h1>
                        <p>$<span>${item.price}</span></p>
                    </div>
                    <div class="item__info-text">
                        ${item.info}
                    </div>
                </div>
            </div>
        `;
        });
    displayMenu = displayMenu.join("");
    menuSection.innerHTML = displayMenu;
};

btnFilter.forEach((item, index) => {
    item.addEventListener("click", () => {
        loadDisplay(dataMenu, index);
    });
});
