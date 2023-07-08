const categoriesEl = document.querySelector('#categories');
const categoriesItemsEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesItemsEl.length);

categoriesItemsEl.forEach((item, index) => {
    console.log('Category:', item.firstElementChild.textContent);

    const qwe = item.querySelectorAll('li');
    console.log('Elements:', qwe.length);
});
    



