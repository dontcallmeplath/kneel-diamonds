export const showOrders = async () => {
  const fetchResponse = await fetch(
    "http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size"
  );
  const orders = await fetchResponse.json();
  let ordersHTML = `<section>`;

  ordersHTML += orders
    .map((order) => {
      const orderPrice =
        order.metal.price + order.style.price + order.size.price;
      return `<div>Order #${order.id} costs $${orderPrice} </div>`;
    })
    .join("");

  ordersHTML += `</section>`;
  return ordersHTML;
};
