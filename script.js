// Get references to the previous and next buttons
const previousBtn = document.querySelector('.pre-btn');
const nextBtn = document.querySelector('.nxt-btn');

// Get a reference to the item container
const itemContainer = document.querySelector('.item-container');

// Add event listeners to the previous and next buttons
previousBtn.addEventListener('click', scrollPrevious);
nextBtn.addEventListener('click', scrollNext);

// Scroll to the previous item
function scrollPrevious() {
  // Calculate the scroll width of each item in the container
  const itemWidth = document.querySelector('#item-card').offsetWidth;

  // Calculate the amount to scroll by subtracting the item width from the current scroll position
  const scrollAmount = itemContainer.scrollLeft - itemWidth;

  // Scroll the item container to the previous position
  itemContainer.scroll({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

// Scroll to the next item
function scrollNext() {
  // Calculate the scroll width of each item in the container
  const itemWidth = document.querySelector('#item-card').offsetWidth;

  // Calculate the amount to scroll by adding the item width to the current scroll position
  const scrollAmount = itemContainer.scrollLeft + itemWidth;

  // Scroll the item container to the next position
  itemContainer.scroll({
    left: scrollAmount,
    behavior: 'smooth'
  });
}
