export default window.helpers = (function () {
  function newMenuItem(attrs) {
    const menuItem = {
      title: attrs.title || 'Title',
      description: attrs.description || 'Description',
      price: attrs.price || 'Price',
      id: cuid(),
    };
    return menuItem;
  }
}());
