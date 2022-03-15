const categoriesRef = document.querySelector('#categories');

const categoriesNumber = categoriesRef.children.length;
console.log(`Number of categories: ${categoriesNumber}`);

const firstCategoryRef = categoriesRef.firstElementChild;
console.log(`Category: ${firstCategoryRef.firstElementChild.textContent}`);
console.log(`Elements: ${firstCategoryRef.lastElementChild.children.length}`);

const secondCategoryRef = firstCategoryRef.nextElementSibling;
console.log(`Category: ${secondCategoryRef.firstElementChild.textContent}`);
console.log(`Elements: ${secondCategoryRef.lastElementChild.children.length}`);

const lastCategoryRef = categoriesRef.lastElementChild;
console.log(`Category: ${lastCategoryRef.firstElementChild.textContent}`);
console.log(`Elements: ${lastCategoryRef.lastElementChild.children.length}`);
