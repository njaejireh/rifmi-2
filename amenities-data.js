// amenities-data.js

const AMENITIES_DATA = {
  // Top 6 Highlighted (Index page + Featured summary)
  featured: [
    {
      title: "Private pool",
      description: "A private pool for slow afternoons and quiet swims.",
      icon: "waves",
      color: "text-brand-terracotta"
    },
    {
      title: "Outdoor kitchen",
      description: "Cook and gather in an open-air kitchen setup.",
      icon: "utensils",
      color: "text-brand-burntOrange"
    },
    {
      title: "Beach access",
      description: "A private path leading straight to the shore.",
      icon: "parasol",
      color: "text-brand-olive"
    },
    {
      title: "Fast Wi-Fi",
      description: "Reliable connection throughout the entire villa.",
      icon: "wifi",
      color: "text-brand-slateBlue"
    },
    {
      title: "Outdoor shower",
      description: "A refreshing rinse beneath the open sky.",
      icon: "shower-head",
      color: "text-brand-terracotta"
    },
    {
      title: "Dedicated workspace",
      description: "A quiet, comfortable place designed to focus.",
      icon: "laptop",
      color: "text-brand-burntOrange"
    }
  ],

  // Complete Categorized Modal List
  categories: [
    {
      category: "Bathroom",
      items: [
        { name: "Hair dryer", icon: "wind" },
        { name: "Cleaning products", icon: "sparkles" },
        { name: "Shampoo", icon: "soap-dispenser-droplet" },
        { name: "Conditioner", icon: "soap-dispenser-droplet" },
        { name: "Body soap", icon: "soap-dispenser-droplet" },
        { name: "Bidet", icon: "bath" },
        { name: "Outdoor shower", icon: "shower-head" },
        { name: "Hot water", icon: "flame" },
        { name: "Shower gel", icon: "soap-dispenser-droplet" }
      ]
    },
    {
      category: "Bedroom and laundry",
      items: [
        { name: "Washing machine", icon: "washing-machine" },
        { name: "Dryer", icon: "refresh-cw" },
        { name: "Hangers", icon: "shirt" },
        { name: "Bed linen", icon: "bed-double" },
        { name: "Black-out blinds", icon: "sun-dim" },
        { name: "Iron", icon: "shirt" },
        { name: "Drying rack for clothing", icon: "grid" },
        { name: "Safe", icon: "lock" },
        { name: "Clothing storage", icon: "archive" }
      ]
    },
    {
      category: "Entertainment",
      items: [
        { name: "Ethernet connection", icon: "cable" },
        { name: "TV", icon: "tv" }
      ]
    },
    {
      category: "Family",
      items: [
        { name: "Cot", icon: "baby" },
        { name: "Highchair", icon: "armchair" },
        { name: "Babysitter recommendations", icon: "heart-handshake" }
      ]
    },
    {
      category: "Heating and cooling",
      items: [
        { name: "Air conditioning", icon: "snowflake" },
        { name: "Heating", icon: "thermometer" }
      ]
    },
    {
      category: "Home safety",
      items: [
        { name: "Exterior security cameras on property", subtext: "Security cameras cover all external areas only, including the entrance, pool, outdoor kitchen and balcony.", icon: "cctv" },
        { name: "Fire extinguisher", icon: "shield-alert" },
        { name: "First aid kit", icon: "cross" }
      ]
    },
    {
      category: "Internet and office",
      items: [
        { name: "Wifi", icon: "wifi" },
        { name: "Dedicated workspace", icon: "laptop" }
      ]
    },
    {
      category: "Kitchen and dining",
      items: [
        { name: "Kitchen", subtext: "Space where guests can cook their own meals", icon: "utensils" },
        { name: "Refrigerator", icon: "refrigerator" },
        { name: "Microwave", icon: "microwave" },
        { name: "Cooking basics", subtext: "Pots and pans, oil, salt and pepper", icon: "soup" },
        { name: "Dishes and cutlery", subtext: "Bowls, chopsticks, plates, cups, etc.", icon: "utensils-crossed" },
        { name: "Mini fridge", icon: "refrigerator" },
        { name: "Stove", icon: "flame" },
        { name: "Oven", icon: "box" },
        { name: "Hot water kettle", icon: "cup-soda" },
        { name: "Coffee maker", icon: "coffee" },
        { name: "Wine Glasses", icon: "wine" },
        { name: "Toaster", icon: "sandwich" },
        { name: "Barbecue utensils", subtext: "Grill, charcoal, bamboo skewers/iron skewers, etc.", icon: "flame-kindling" },
        { name: "Dining table", icon: "layout-grid" },
        { name: "Coffee", icon: "coffee" },
        { name: "Bread maker", icon: "chef-hat" }
      ]
    },
    {
      category: "Location features",
      items: [
        { name: "Beach access", subtext: "Guests can enjoy a nearby beach", icon: "parasol" },
        { name: "Private entrance", subtext: "Separate street or building entrance", icon: "door-open" },
        { name: "Laundromat nearby", icon: "store" }
      ]
    },
    {
      category: "Outdoor",
      items: [
        { name: "Patio or balcony", icon: "sun" },
        { name: "Backyard", subtext: "An open space on the property usually covered in grass", icon: "trees" },
        { name: "Outdoor furniture", icon: "armchair" },
        { name: "Outdoor dining area", icon: "utensils" },
        { name: "Outdoor kitchen", icon: "utensils" },
        { name: "BBQ grill", icon: "flame" },
        { name: "Beach essentials", subtext: "Beach gear such as towels, chairs and an umbrella", icon: "umbrella" },
        { name: "Sun loungers", icon: "sun-medium" }
      ]
    },
    {
      category: "Parking and facilities",
      items: [
        { name: "Free parking garage on premises", icon: "car" },
        { name: "Free street parking", icon: "circle-parking" },
        { name: "Pool", icon: "waves" },
        { name: "Single level home", subtext: "No stairs in home", icon: "home" }
      ]
    },
    {
      category: "Services",
      items: [
        { name: "Luggage drop-off allowed", subtext: "For guests' convenience when they have early arrival or late departure", icon: "briefcase" },
        { name: "Smoking allowed", icon: "cigarette" },
        { name: "Long-term stays allowed", subtext: "Allow stay for 28 days or more", icon: "calendar" },
        { name: "Self check-in", icon: "key-round" },
        { name: "Building staff", subtext: "Someone is available 24 hours a day to let guests in", icon: "user-check" },
        { name: "Cleaning available during stay", icon: "sparkles" }
      ]
    },
  ]
};

// Reusable 6-Box Preview Card Renderer
function renderPropertyAmenitiesGrid(containerId, amenitiesArray) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = amenitiesArray.map(item => `
    <div class="h-28 p-5 rounded-2xl bg-white border border-gray-200/80 flex flex-col justify-between shadow-sm">
      <i data-lucide="${item.icon}" class="w-5 h-5 text-brand-charcoal stroke-[1.75]"></i>
      <span class="text-sm font-medium text-brand-charcoal leading-snug">${item.title}</span>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

// Global Amenities Render Function (for index & modal)
function renderAmenities() {
  // 1. Index Page: "Everything Considered"
  const indexContainer = document.getElementById("index-amenities-container");
  if (indexContainer) {
    indexContainer.innerHTML = AMENITIES_DATA.featured.map(item => `
      <div class="p-6 rounded-3xl bg-brand-softSand/60 border border-brand-sand/30 flex items-start space-x-4">
        <div class="w-11 h-11 rounded-full bg-white border border-brand-sand/40 flex items-center justify-center shrink-0 ${item.color || 'text-brand-charcoal'} shadow-sm">
          <i data-lucide="${item.icon}" class="w-5 h-5 stroke-[1.75]"></i>
        </div>
        <div>
          <h4 class="font-semibold text-sm text-brand-charcoal mb-1">${item.title}</h4>
          <p class="text-xs text-gray-500 leading-relaxed">${item.description}</p>
        </div>
      </div>
    `).join('');
  }

  // 2. Modal: All Categorized Amenities
  const modalContainer = document.getElementById("modal-amenities-container");
  if (modalContainer) {
    modalContainer.innerHTML = AMENITIES_DATA.categories.map(cat => `
      <div>
        <h3 class="font-bold text-base text-brand-charcoal mb-3">${cat.category}</h3>
        <div class="divide-y divide-gray-100">
          ${cat.items.map(i => `
            <div class="py-3.5 flex items-start gap-4 text-sm text-gray-800">
              <i data-lucide="${i.icon}" class="w-5 h-5 ${i.unavailable ? 'text-gray-400' : 'text-gray-700'} stroke-[1.5] shrink-0 mt-0.5"></i>
              <div>
                <p class="leading-snug ${i.unavailable ? 'line-through text-gray-400' : 'text-brand-charcoal'}">${i.name}</p>
                ${i.subtext ? `<p class="text-xs text-gray-400 font-light mt-0.5">${i.subtext}</p>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Auto-run on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderAmenities);
} else {
  renderAmenities();
}