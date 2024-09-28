var laptops = [
    { model: "ASUS", price: "3000 AZN", storage: "256 GB", stock: "Stokda Mövcuddur" },
    { model: "HP", price: "2500 AZN", storage: "128 GB", stock: "Stokda Mövcud deyil" },
    { model: "ACER", price: "2870 AZN", storage: "256 GB", stock: "Stokda Mövcuddur" }
  ];


var tableBody = document.querySelector("#laptopTable tbody");
laptops.forEach(laptop => {
    const row = `
        <tr>
            <td>${laptop.model}</td>
            <td>${laptop.price} </td>
            <td>${laptop.storage}</td>
            <td>${laptop.stock}</td>
        </tr>
    `;
    tableBody.innerHTML += row;
});