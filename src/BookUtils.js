export const sortAllBooks = (list) => {
  const newList = list.sort((a,b) => {
    const titleA = a.title.toUpperCase();
    const titleB = a.title.toUpperCase();
    
    if (titleA < titleB) {
      return -1;
    } else if (titleA > titleB) {
      return 1;
    } else {
      return 0;
    }
  })
    
    return newList;
}

export const mergeShelfAndSearch = (shelf, search) => {
  // For each book coming from search, check if it is already 
  // existing in the shelf data
  const hashTable = {};
  shelf.forEach(book => hashTable[book.id] = book.shelf);
  
  search.forEach(book => {
    book.shelf = hashTable[book.id] || 'none';
  });
  
  return search;
}