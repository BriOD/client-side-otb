# Layout for Menu Dashboard:
  -MenuItemsDashboard: Parent container
    -EditableMenuItemList: Displays a list of MenuItem containers:
      -MenuItem: Displays a MenuItem
      -MenuItemForm: Displays a given MenuItem's edit form
  -ToggleableMenuItemForm: Displays a button to create a new MenuItem
    -MenuItemForm: Displays a new MenuItem's create form.

# What should be stateful?
  -MenuItemsDashboard:
    -declares two child components. It sets one prop, which is the isOpen boolean passed down to ToggleableMenuItemForm
    -isOpen boolean for ToggleableMenuItemForm. Stateful. The data is defined here. It changes over time. And it cannot be computed from other state or props.

  -EditableMenuItemsList:
    -declares two child components, each which have props corresponding to a given MenuItem's properties.
    -MenuItem properties. Stateful. The data is defined in this component, changes over time, and cannot be computed from other state or props.

  -EditableMenuItem:
    -Uses the prop editFormOpen
    -editFromOpen for a given MenuItem. Stateful. The data is defined in this component, changes over time, and cannot be computed from other state or props.

  -MenuItem:
    -uses all the props for a MenuItem
    -MenuItem properties. In this context, not stateful. Properties are passed down from parent.

  -MenuItemForm:
    -three interactive input fields: title, description, and price. When editing an existing MenuItem, these fields are initialized with the MenItem's current values.
    -Forms are special state managers.


    -MenuItem data will be owned and managed by MenuItemsDashboard.
    -Each EditableMenuItem will manage the state of its MenuItem form.
    -The ToggleableMenuItemForm will manage the state of its form visibilty.

# Inverse Data Flow:
  -MenuItemForm needs to propagate create and update events. Both events will eventually reach MenuItemsDashboard.
  -MenuItem needs to handle delete and edit clicks.
