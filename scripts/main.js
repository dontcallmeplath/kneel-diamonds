import { MetalOptions } from "./metalOptions.js";
import { CaratOptions } from "./sizeOptions.js";
import { StyleOptions } from "./styleOptions.js";

const render = async () => {
  const showMetalTypeHTML = await MetalOptions();
  const showCaratSizeHTML = await CaratOptions();
  const showStyleHTML = await StyleOptions();
  const composedHTML = `
 <h1>
      Kneel Diamonds &#128141 <br />
      Custom Jewelry Ordering
    </h1>

    <article class="choices">
    <section class="choices_metals options">
        <h2>
            Metals
        </h2>
        ${showMetalTypeHTML}
    </section>

    <section class="choices_sizes options">
        <h2>
            Sizes
        </h2>
        ${showCaratSizeHTML}
    </section>

    <section class="choices_styles options">
        <h2>
            Styles
        </h2>
        ${showStyleHTML}
    </section>
</article>

<article class="order">

</article>

<article class="customOrders">
    <h2>Custom Jewelry Orders</h2>
</article>

`;

  container.innerHTML = composedHTML;
};

render();
