- Changed ActionInterface to a discriminated union. Initially, I tried defining it as a type with partial values, but that approach was not appropriate and caused errors. Therefore, I changed it to a discriminated union, with a separate type for each case.
- Made the createdAt and status properties of TodoInterface optional because createdAt is only required when using the add task function, while these properties are not required for the other functions.
- Made the params property of StateInterface optional because it is only required when routing to the detail route.
- Created separate files for the card and button types because they are not used elsewhere.
- Used generics in ApiResponse so that it can return a response based on the type of the value.

--test pr
