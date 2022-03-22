const categoriesRef = document.querySelector('#categories');

const categoriesNumber = categoriesRef.children.length;
console.log(`Number of categories: ${categoriesNumber}`);

const categoriesArr = Array.from(categoriesRef.children);
categoriesArr.map(category => {
        console.log(`Category: ${category.firstElementChild.textContent}`);
        console.log(`Elements: ${category.lastElementChild.children.length}`);
})
  
