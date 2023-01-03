const snowflakesContainer = document.querySelector('.snowflakes');

for (let i = 0; i < 50; i++) {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflakesContainer.appendChild(snowflake);
}
