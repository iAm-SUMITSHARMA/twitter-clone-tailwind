const tweetContainer = document.getElementById("tweet-container");

async function loadFakeTweets() {
  try {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const data = await response.json();

    const users = data.results;

    users.forEach(user => {
      const tweetText = generateFakeTweet();

      const tweetHTML = `
        <div class="bg-black shadow-md rounded-lg p-4 flex gap-4">
          <img src="${user.picture.medium}" alt="Profile" class="w-12 h-12 rounded-full">
          <div>
            <h2 class="font-semibold">${user.name.first} ${user.name.last}</h2>
            <p class="text-sm text-gray-500">@${user.login.username}</p>
            <p class="mt-2">${tweetText}</p>
          </div>
        </div>
      `;

      tweetContainer.innerHTML += tweetHTML;
    });
  } catch (error) {
    tweetContainer.innerHTML = "<p class='text-red-500'>Failed to load tweets.</p>";
    console.error("Error fetching users:", error);
  }
}

// Generate random placeholder tweet text
function generateFakeTweet() {
  const tweets = [
    "Just had an amazing day! 🌟",
    "Coding till 2AM 😅",
    "Coffee + Code = Productivity ☕💻",
    "What a beautiful day to build something new!",
    "Debugging is 90% of my job 😩",
    "React or Vue? Still deciding...",
    "Any movie recommendations for the weekend?",
    "Just deployed my first app 🚀",
    "Tailwind is love 💙",
    "Feeling grateful for all the small wins."
  ];
  return tweets[Math.floor(Math.random() * tweets.length)];
}

loadFakeTweets();
