const header = document.querySelector('.header');
const categoriesContainer = document.querySelector('.categories_container');
const produtsContainer = document.querySelector('.products_container');
const productDetailContainer = document.querySelector('.product-detail_container');


const categories = [
    {id: 1, name: 'Smartphones'},
    {id: 2, name: 'Cameras'},
    {id: 3, name: 'Bicycles'},
];

const products = [
    {id: 1, name: 'Apple iPhone 14 128GB', categoryId: 1, price: 1399, description: 'Top smartphone from Apple'},
    {id: 2, name: 'Samsung Galaxy Fold 4 256GB', categoryId: 1, price: 1599, description: 'Exclusive foldable smartphone from Samsung'},
    {id: 3, name: 'Samsung Galaxy S 22 128GB ', categoryId: 1, price: 1199, description: 'Top smartphone from Samsung'},
    {id: 4, name: 'Canon EOS R6 (body)', categoryId: 2, price: 2499, description: 'Mirrorless camera from iconic brand Canon'},
    {id: 5, name: 'Sony A7 IV (body)', categoryId: 2, price: 2449, description: 'Mirrorless camera from the famous brand Sony'},
    {id: 6, name: 'Pride XC 650', categoryId: 3, price: 499, description: 'Mountain bike from the Ukrainian brand PRIDE'},
    {id: 7, name: 'Cannondale TOPSTONE 4', categoryId: 3, price: 1299, description: 'Gravel bike from the world famous brand Cannondale'},
];

const renderCategories = () => {
    //categoriesContainer.innerHTML = '';

    categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.innerText = category.name;

        categoryElement.addEventListener('click', () => {
            renderProducts(category.id)
            renderProductDetails();
        });
        categoriesContainer.appendChild(categoryElement);
    })
};

const renderProducts = (categoryId) => {
    produtsContainer.innerHTML = '';

    if (!categoryId) {
        return;
    }

    console.log(categoryId);
    const filterProduct = products.filter(product => product.categoryId === categoryId);

    filterProduct.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerText = product.name;

        productElement.addEventListener('click', () => {
            renderProductDetails(product);
            
        })

        produtsContainer.appendChild(productElement);

    })

}

const renderProductDetails = (product) => {
    console.log(renderProductDetails);
    productDetailContainer.innerHTML = '';

    if (!product) {
        return;
    }

    const productDetailsElement = document.createElement('div');

    productDetailsElement.innerHTML = `
        <h4>${product.name}</h4>
        <div>Description:${product.description}</div>
        <div>Price: ${product.price} $</div>
        
        <button class="btn_buy">Buy</button>
        `;

    productDetailsElement.querySelector(".btn_buy").addEventListener("click", () => {
          const orderForm = document.querySelector(".orderForm");
          orderForm.style.display = "block";
          dataTable.style.display = "block";
        });
    
    productDetailContainer.appendChild(productDetailsElement);

};

header.addEventListener('click', () => {
    location.reload();
})

function addDataToTable() {
    let name = document.getElementById("username").value;
    let city = document.getElementById("city").value;
    let postOffice = document.getElementById("post-office").value;
    let payment = document.getElementById("payment-method").value;
    let quantity = document.getElementById("quantity").value;
    let comment = document.getElementById("comment").value;
  
    let table = document.getElementById("dataTable");
    let newRow = table.insertRow();
    let nameCell = newRow.insertCell();
    let cityCell = newRow.insertCell();
    let postOfficeCell = newRow.insertCell();
    let paymentCell = newRow.insertCell();
    let quantityCell = newRow.insertCell();
    let commentCell = newRow.insertCell();
  
    nameCell.innerHTML = name;
    cityCell.innerHTML = city;
    postOfficeCell.innerHTML = postOffice;
    paymentCell.innerHTML = payment;
    quantityCell.innerHTML = quantity;
    commentCell.innerHTML = comment;
  
    document.getElementById("username").value = "";
    document.getElementById("city").value = "";
    document.getElementById("post-office").value = "";
    document.getElementById("payment-method").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("comment").value = "";
  }
  
  const orderForm = document.querySelector(".orderForm");
  orderForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addDataToTable();
    orderForm.reset();
  });
  
  
renderCategories();
renderProducts();
renderProductDetails();