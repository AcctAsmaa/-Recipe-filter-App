// script.js

const recipes = [
  {
    id: 1,
    title: "Vegan Salad",
    description: "Description:This salad is made with fresh and nutritious ingredients, perfect for a healthy meal. It includes a mix of crisp lettuce, ripe red tomatoes, finely sliced cucumbers, and colorful bell peppers, adding both flavor and vibrant colors.",
    image: "images/vegan salad.jpg",
    category: "vegan",
  },
  {
    id: 2,
    title: "Zucchini Noodles (Zoodles)",
    description: "Description:Zoodles are a healthy, low-carb alternative to traditional pasta, made from fresh zucchini that's spiralized into noodle-like strands. These noodles are light and versatile, offering a mild flavor that pairs well with a variety of sauces.",
    image: "images/noodles.jpeg",
    category: "gluten-free",
  },
  {
    id: 3,
    title: "Falafel Wrap",
    description: "Description: Is a delicious and satisfying meal that features crispy, golden-brown falafel balls made from chickpeas, herbs, and spices. These are wrapped in a soft, warm pita or flatbread, often accompanied by fresh veggies like lettuce, tomatoes, cucumbers, and onions.",
    image: "images/falafel.jpg",
    category: "vegan"
  },
  {
    id: 4,
    title: "Grilled Chicken",
    description: " Description:A classic dish of marinated chicken breasts seasoned with olive oil, garlic, herbs, and lemon juice, then grilled until golden and juicy. Perfect for a quick and healthy meal.",
    image: "images/grilled-chicken.jpg",
    category: "all"
  },
  {
      id: 5,
      title: "Lentil Soup",
      description: "Description:Lentil soup is a hearty, comforting dish made with lentils as the main ingredient. It typically includes vegetables like onions, carrots, celery, and garlic, along with spices .",
      image: "images/lentil.jpg",
      category: "vegan"
    },
    {
      id: 6,
      title: "Vegetarian Pizza",
      description: "Description:A delicious pizza topped with a variety of fresh vegetables like bell peppers, mushrooms, onions, tomatoes, and olives on a tomato sauce base with melted mozzarella cheese.",
      image: "images/pizza.jpg",
      category: "vegetarian"
    },
    {
      id: 7,
      title: "Chicken breast",
      description: "Description:Is a lean and versatile cut of meat known for its mild flavor and tender texture. It can be grilled, baked, sautéed, or pan-fried, making it an easy addition to various dishes. Whether seasoned simply with salt, pepper, and herbs, or marinated in a flavorful sauce,.",
      image: "images/breast.jpeg",
      category: "Protein Foods"
    },
    {
      id: 8,
      title: "Potatoes",
      description: "Description: This dish features tender, golden-brown potatoes, baked to perfection with a crispy exterior and a soft, fluffy interior. The potatoes are usually sliced or cubed and seasoned with olive oil, garlic, and a blend of spices such as paprika, thyme, or rosemary.",
      image: "images/potatoes.jpeg",
      category: "Starchy Foods"
    },
    {
      id: 9,
      title: "Gluten-Free Pasta",
      description: "Description:Is a great alternative for individuals with gluten sensitivities or those following a gluten-free diet. Made from a variety of grains such as rice, corn, quinoa, or chickpeas, gluten-free pasta offers a similar texture and taste to traditional wheat-based pasta..",
      image: "images/free pasta.jpg",
      category: "gluten-free"
    },
    {
      id: 10,
      title: "Salmon",
      description: "Description:Is a flavorful and nutritious fish known for its rich, tender flesh and vibrant pink-orange color. It’s packed with healthy omega-3 fatty acids, protein, and essential vitamins like vitamin D and B12. Salmon can be prepared in a variety of ways, including grilling, baking, pan-searing,.",
      image: "images/salemon.jpg",
      category: "Protein Foods"
    },
    {
      id: 11,
      title: "Chickpeas (Garbanzo Beans)",
      description: "Description:Are small, round legumes that are beige or pale yellow in color. They are a rich source of plant-based protein, fiber, and essential vitamins and minerals. Chickpeas have a mild, nutty flavor and a firm, creamy texture when cooked..",
      image: "images/beans.jpg",
      category: "Protein Foods"
    },
    {
      id: 12,
      title: "Pasta",
      description: "Description: Is a beloved Italian dish made from durum wheat and water, formed into various shapes and sizes such as spaghetti, penne, fusilli, and more. It is typically boiled and served with a variety of sauces, from simple marinara or pesto to rich, creamy Alfredo..",
      image: "images/pasta.jpg",
      category: "Starchy Foods"
    },
    {
      id: 13,
      title: "Chickpea Curry",
      description: "Description: Is a hearty and flavorful dish made with tender chickpeas simmered in a rich, spiced curry sauce. Typically prepared with onions, garlic, tomatoes, and a blend of spices like turmeric, cumin, and coriander, it’s a plant-based, protein-packed meal. Often served with rice or flatbread.",
      image: "images/curry.jpg",
      category: "vegan"
    },
    {
      id: 14,
      title: "Cottage Cheese",
      description: "Description: Is a fresh cheese made from curds of pasteurized milk, offering a mild, creamy texture with a slightly tangy taste. It’s low in fat and high in protein, making it a nutritious option for those looking for a healthy snack or addition to meals..",
      image: "images/cheese.webp",
      category: "Protein Foods"
    },
    {
      id: 15,
      title: "Rice",
      description: "Description: Is a staple food enjoyed worldwide, known for its versatility and mild flavor. It is a rich source of carbohydrates, making it an excellent energy provider. Rice comes in many varieties, including long-grain, short-grain, jasmine, basmati, and brown rice.",
      image: "images/rice.jpg",
      category: "Starchy Foods"
    },
    {
      id: 16,
      title: "Grilled Chicken with Vegetables",
      description: "Description: A simple dish of seasoned grilled chicken breast served alongside roasted or steamed vegetables like carrots, broccoli, and bell peppers..",
      image: "images/chick with veg.jpg",
      category: "gluten-free"
    },
    {
      id: 17,
      title: "Oats",
      description: "Description:Are a versatile and nutritious whole grain, commonly enjoyed as oatmeal or used in baking. They are rich in fiber, particularly beta-glucan, which supports heart health and digestion. Oats can be prepared sweet or savory.",
      image: "images/oats-r.jpg",
      category: "Starchy Foods"
    },
    {
      id: 18,
      title: "Buddha Bowl",
      description: "Description: Is a wholesome and colorful dish made with a variety of nutrient-rich ingredients, including grains like quinoa or rice, fresh or roasted vegetables, a protein source like tofu, chickpeas, or beans, and a flavorful dressing. Often topped with seeds, nuts, or avocado.",
      image: "images/bowl.jpg",
      category:"gluten-free"

    },
    {
      "id": 19,
      "title": "Vegan Tacos",
      "description": "Description: Are a plant-based twist on the traditional Mexican dish, offering a delicious and healthy alternative. The taco shells can be soft corn tortillas or crunchy taco shells, filled with a variety of plant-based ingredients such as seasoned black beans, lentils, or tofu..",
      "image": "images/tacos.jpeg",
      "category": "vegan"
    },
    {
      "id": 20,
      "title": "Quinoa Salad",
      "description": "Description: Is a nutritious and refreshing dish made with cooked quinoa, a protein-packed grain that’s gluten-free and full of essential amino acids. The salad typically includes a variety of fresh vegetables like cucumbers, tomatoes, bell peppers, and red onions.",
      "image": "images/quinoa salad.jpeg",
      "category": "vegan"
    },
    {
      "id": 21,
      "title": "Cauliflower Rice",
      "description": "Description: Is a light, low-carb alternative to traditional rice, made by finely grating or processing cauliflower into rice-sized pieces. It’s quick to cook, versatile, and can be sautéed with herbs, spices, or vegetables for added flavor.",
      "image": "images/cauliflower-rice.jpg",
      "category": "gluten-free"
    },
    {
      "id": 22,
      "title": "Eggplant Parmesan",
      "description": "Description: Is a classic Italian dish featuring breaded and fried or baked slices of eggplant layered with marinara sauce and melted cheese, typically mozzarella and Parmesan. The dish is baked until golden and bubbly, resulting in a rich, hearty casserole with a crispy and creamy texture.",
      "image": "images/eggplant.jpg",
      "category": "vegetarian"
    },
    {
      "id": 23,
      "title": "Baked Salmon with Asparagus",
      "description": "Description: Is a healthy and flavorful dish featuring tender, flaky salmon fillets and crisp asparagus spears cooked together in the oven. Seasoned with olive oil, garlic, lemon, and herbs, the dish is simple yet delicious. It's a quick, nutrient-rich meal perfect for lunch or dinner.",
      "image": "images/baked-salmon with.jpg",
      "category": "Protein Foods"
    },
    {
      "id": 24,
      "title": "Sweet Potato Fries",
      "description": "Description: Are a delicious and healthier alternative to regular fries, made by cutting sweet potatoes into strips and baking or frying them until crispy. Lightly seasoned with salt, pepper, or spices like paprika and garlic powder, they have a naturally sweet and savory flavor.",
      "image": "images/sweet patato.jpg",
      "category": "Starchy Foods"
    },
    {
      "id": 25,
      "title": "Vegan Pancakes",
      "description": "Description: is a quick and healthy dish featuring crispy tofu cubes sautéed with a colorful mix of vegetables like bell peppers, broccoli, and carrots. Tossed in a savory soy-based sauce with garlic and ginger, it’s a protein-packed, plant-based meal perfect over rice or noodles.",
      "image": "images/pancakes.jpg",
      "category": "vegan"
    },
    {
      "id": 26,
      "title": "Tofu Stir-Fry",
      "description": "Description: is a quick and healthy dish featuring crispy tofu cubes sautéed with a colorful mix of vegetables like bell peppers, broccoli, and carrots. Tossed in a savory soy-based sauce with garlic and ginger, it’s a protein-packed, plant-based meal perfect over rice or noodles.",
      "image": "images/tofu.webp",
      "category": "vegan"
    },
    {
      "id": 27,
      "title": "Turkey Meatballs",
      "description": "Description: Are a lighter, leaner alternative to traditional meatballs, made with ground turkey mixed with breadcrumbs, eggs, garlic, herbs, and spices. They are tender, flavorful, and versatile, perfect for pairing with pasta, serving in a sub sandwich, or enjoying as an appetizer. Baked, fried, or simmered in sauce.",
      "image": "images/meatballs.webp",
      "category": "Protein Foods"
    },
    {
      "id": 28,
      "title": "Avocado Toast",
      "description": "Description: Is a simple and trendy dish made by spreading mashed or sliced ripe avocado onto toasted bread. Often seasoned with salt, pepper, and a drizzle of olive oil, it can be topped with extras like tomatoes, poached eggs, chili flakes, or seeds for added flavor and texture.",
      "image": "images/avocat.jpg",
      "category": "vegetarian"
    },
    {
      "id": 29,
      "title": "Tomato Soup",
      "description": "Description: Is a comforting and velvety dish made from ripe tomatoes blended with onions, garlic, and herbs. Often simmered with vegetable or chicken broth, it has a rich, tangy flavor that's perfectly balanced with a touch of cream or milk for added smoothness.",
      "image": "images/tometo.jpeg",
      "category": "vegan"
    },
    {
      "id": 30,
      "title": "Fattoush Salad",
      "description": "Description: Is a fresh and vibrant Middle Eastern dish made with mixed greens, tomatoes, cucumbers, radishes, and crispy pieces of toasted or fried pita bread. It’s flavored with a tangy dressing of olive oil, lemon juice, and sumac, giving it a zesty and slightly citrusy taste.",
      "image": "images/fattoush.jpg",
      "category": "vegan"
    },
    {
      "id": 31,
      "title": "Grilled Seafood",
      "description": "Description: Is a light and flavorful dish featuring fresh fish, shrimp, squid, or other seafood cooked over an open flame or grill. The seafood is often marinated with olive oil, garlic, lemon, and herbs to enhance its natural flavors. Grilling gives it a smoky aroma and perfectly charred edges .",
      "image": "images/seafood.jpg",
      "category": "Protein Foods"
    },
    {
      "id": 32,
      "title": "Vegetable Rice",
      "description": "Description: Is a colorful and nutritious dish made by cooking rice with a variety of fresh vegetables like carrots, peas, bell peppers, and corn. Seasoned with spices or herbs, it’s a versatile dish that can be customized to suit different cuisines, from mild and buttery to spiced and aromatic .",
      "image": "images/veg rice.jpg",
      "category": "Starchy Foods"
    },
    {
      "id": 33,
      "title": "Margherita Pizza",
      "description": "Description: Is a classic Italian pizza known for its simplicity and fresh ingredients. It features a thin, crispy crust topped with a rich tomato sauce, fresh mozzarella cheese, and a few basil leaves. The combination of the creamy mozzarella, the sweet and tangy tomato sauce .",
      "image": "images/mar pizza.webp",
      "category": "vegetarian"
    },
    {
      "id": 34,
      "title": "Veggie Burger",
      "description": "Description: Is a plant-based alternative to traditional meat burgers, made from a variety of vegetables, grains, and legumes. Common ingredients include black beans, chickpeas, lentils, quinoa, or mushrooms, often combined with grated carrots, zucchini, and spices for added flavor..",
      "image": "images/veggie-burgers.webp",
      "category": "vegan"
    },
    {
      "id": 35,
      "title": "Spinach and Cheese Pasta",
      "description": "Description: Is a creamy, comforting dish that combines the richness of cheese with the freshness of spinach. The pasta is typically tossed in a smooth, velvety cheese sauce made from ingredients like ricotta, mozzarella, or Parmesan, creating a deliciously indulgent flavor.",
      "image": "images/Pasta spin.jpg",
      "category": "vegetarian"
    },
    {
      "id": 36,
      "title": "Quinoa Salad with Pomegranate",
      "description": "Description: This vibrant and refreshing quinoa salad is packed with flavor and nutrients. The nutty taste of cooked quinoa pairs beautifully with the juicy, tart sweetness of pomegranate seeds. The salad typically includes a mix of fresh vegetables like cucumber, cherry tomatoes, red onion.",
      "image": "images/salad pom.jpg",
      "category": "gluten-free"
    },
    {
      "id": 37,
      "title": "Herb Roasted Potatoes",
      "description": "Description: Are a simple yet flavorful side dish made by roasting baby potatoes or potato wedges with a blend of aromatic herbs and spices. The potatoes are tossed in olive oil, garlic, and a mix of fresh or dried herbs like rosemary, thyme, oregano, or parsley.",
      "image": "images/herb potato.webp",
      "category": "Starchy Foods"
    },
    {
      "id": 38,
      "title": "Grilled Steak",
      "description": "Description:  Is a popular and flavorful dish known for its tender, juicy texture and smoky, charred exterior. The steak is typically seasoned with salt, pepper, and other spices or marinades to enhance its natural flavor.",
      "image": "images/Grilled-Steak.jpg",
      "category": "Protein Foods"
    },
    {
      "id": 39,
      "title": "Red Lentil Soup",
      "description": "Description: Is a hearty and flavorful dish made from red lentils, which cook quickly and create a creamy texture. The soup is typically seasoned with a variety of spices, such as cumin, turmeric, garlic, and ginger, offering a warm, aromatic base..",
      "image": "images/red lentil.jpg",
      "category": "vegan"
    },
    {
      "id": 40,
      "title": "Vegan Chocolate Cupcake",
      "description": "Description: Is a rich and decadent dessert made without any animal products. It’s made with plant-based ingredients like almond milk, vegetable oil, and a flaxseed mixture instead of eggs. The cupcake itself is moist, soft, and full of deep chocolate flavor.",
      "image": "images/vegan choco.jpg",
      "category": "vegan"
    },
    {
      "id": 41,
      "title": "Mango Smoothie",
      "description": "Description: Is a refreshing and tropical drink made from ripe, juicy mangoes blended with other ingredients like yogurt, milk, or a dairy-free alternative such as almond or coconut milk. The smooth, creamy texture of the mango is perfectly balanced with a hint of sweetness.",
      "image": "images/mango-Smoothie.jpg",
      "category": "vegetarian"
    },
    {
      "id": 42,
      "title": "Chicken Shawarma",
      "description": "Description: Is a popular Middle Eastern dish made from marinated chicken that is slow-cooked on a vertical rotisserie, giving it a tender, juicy texture and smoky flavor. The chicken is typically seasoned with a blend of spices, including garlic, cumin, paprika, turmeric, cinnamon.",
      "image": "images/shawarma.jpg",
      "category": "Protein Foods"
    },
    {
      "id": 43,
      "title": "Fruit Parfait",
      "description": "Description: Is a light, refreshing, and visually appealing dessert or snack, typically made by layering fresh, seasonal fruits with yogurt or dairy-free alternatives, and granola or nuts for added crunch. The fruits used can range from berries like strawberries, blueberries, and raspberries .",
      "image": "images/fruit.jpg",
      "category": "vegetarian"
    },
    {
      "id": 44,
      "title": "Zaatar Manakish",
      "description": "Description: Is a traditional Middle Eastern flatbread, topped with a flavorful mix of za’atar spice blend, olive oil, and sometimes a sprinkle of sesame seeds. The dough is soft and slightly chewy, and the za’atar topping adds a perfect balance of earthy, tangy, and herby flavors.",
      "image": "images/zaater.jpg",
      "category": "vegetarian"
    },
    {
      "id": 45,
      "title": "Beef and Broccoli",
      "description": "Description: Is a classic Chinese-American stir-fry dish that combines tender slices of beef with crisp-tender broccoli in a savory sauce. The beef is usually marinated in soy sauce, garlic, ginger, and a touch of cornstarch to help it stay tender during cooking.",
      "image": "images/beef broc.jpg",
      "category": "Protein Foods"
    },
    {
      "id": 46,
      "title": "Stuffed Bell Peppers",
      "description": "Description: Are a hearty and colorful dish where bell peppers are hollowed out and filled with a flavorful mixture of ingredients. Common fillings include seasoned rice, ground meat, beans, vegetables, and cheese, creating a balanced and satisfying meal. The peppers are then baked until tender.",
      "image": "images/stuf pappers.jpg",
      "category": "vegetarian"
    },
    {
      "id": 47,
      "title": "Shrimp Stir-Fry",
      "description": "Description: Is a quick and flavorful dish that combines succulent shrimp with a variety of fresh vegetables, all cooked in a hot pan or wok. The shrimp is often seasoned with garlic, ginger, and soy sauce, giving it a savory, umami-rich flavor.",
      "image": "images/stir-fry.jpg",
      "category": "Protein Foods"
    },
    {
      "id": 48,
      "title": "Caprese Salad",
      "description": "Description: Is a simple and elegant Italian dish that highlights the fresh flavors of its few key ingredients. It consists of ripe tomatoes, fresh mozzarella cheese, and basil leaves, all drizzled with extra virgin olive oil and a sprinkle of salt and pepper.",
      "image": "images/caprese.jpeg",
      "category": "vegetarian"
    }   
    ];

function displayRecipes(filteredRecipes) {
  const recipeContainer = document.getElementById("recipe-container");
  recipeContainer.innerHTML = ""; // Clear previous content

  filteredRecipes.forEach((recipe) => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}">
      <h2>${recipe.title}</h2>
      <p>${recipe.description}</p>
    `;
    recipeContainer.appendChild(card);
  });
}

// Filter recipes based on category
function filterRecipes(category) {
  if (category === "all") {
    displayRecipes(recipes);
  } else {
    const filtered = recipes.filter((recipe) => recipe.category === category);
    displayRecipes(filtered);
  }
}

// Event listeners for filter buttons
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Update active button styling
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter recipes
      const category = button.getAttribute("data-filter");
      filterRecipes(category);
    });
  });

  // Display all recipes on initial load
  filterRecipes("all");
});
