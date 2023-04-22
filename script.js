// Define an array of taglines
const taglines = [
    "Fighting for your rights, every step of the way",
    "Your legal needs, our top priority",
    "Experience and expertise you can trust",
    "Advocating for justice with integrity",
    "Guiding you through legal challenges with compassion",
    "Protecting your interests, defending your rights",
    "Empowering you with legal knowledge and support",
    "Striving for excellence in every case",
    "Reliable legal representation when it matters most",
    "Dedicated to achieving the best possible outcome for you"
  ];
  
  // Generate a random index number between 0 and the length of the array
  const randomIndex = Math.floor(Math.random() * taglines.length);
  
  // Get a random tagline from the array using the random index
  const randomTagline = taglines[randomIndex];
  
  // Set the random tagline as the text content of the tagline element
  const taglineElement = document.getElementById("tagline");
  taglineElement.textContent = randomTagline;
  