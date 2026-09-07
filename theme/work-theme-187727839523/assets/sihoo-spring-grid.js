(() => {
  if (customElements.get('sihoo-spring-grid')) return;
  customElements.define('sihoo-spring-grid', class extends HTMLElement {
    connectedCallback() {
      if (this.initialised) return;
      this.initialised = true;
      this.addEventListener('change', event => {
        const select = event.target.closest('.product-grid-item-variation-dropdown');
        if (!select || !this.contains(select)) return;
        const card = select.closest('.product-grid-item');
        const option = select.selectedOptions[0];
        if (!card || !option) return;
        const price = card.querySelector('.product-grid-item-price');
        const current = document.createElement('span');
        current.className = 'price__current';
        current.textContent = option.dataset.price;
        price.replaceChildren();
        if (option.dataset.comparePrice) {
          const previous = document.createElement('span');
          previous.className = 'price__was';
          previous.textContent = option.dataset.comparePrice;
          price.append('Now ', current, ' Was ', previous);
        } else price.append(current);
        const image = card.querySelector('.product-grid-item-image img:not(.hover-image)');
        if (image && option.dataset.image) {
          image.src = option.dataset.image;
          image.alt = option.dataset.imageAlt || '';
        }
        let badge = card.querySelector('.product-grid-item-image-sale');
        if (option.dataset.comparePrice) {
          if (!badge) {
            badge = document.createElement('div');
            badge.className = 'product-grid-item-image-sale';
            card.querySelector('.product-grid-item-image').prepend(badge);
          }
          const label = document.createElement('span');
          label.className = 'product-grid-item-image-sale-label';
          label.textContent = `Save ${option.dataset.savings}`;
          badge.replaceChildren(label);
        } else badge?.remove();
        card.querySelector('input[name="id"]').value = option.value;
        const button = card.querySelector('button[type="submit"]');
        button.dataset.variantId = option.value;
        button.disabled = option.disabled;
        button.textContent = option.disabled ? 'Sold Out' : 'Add to Cart';
      });
    }
  });
})();
