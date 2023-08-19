export const showOrders = async () => {
  const fetchResponse = await fetch("http://localhost:8088/orders");
  const orders = await fetchResponse.json();

  let ordersHTML = `<section>`;

  ordersHTML += orders
    .map((order) => {
      return `<div>Order #${order.id}</div>`;
    })
    .join("");

  ordersHTML += `</section>`;
  return ordersHTML;
};
