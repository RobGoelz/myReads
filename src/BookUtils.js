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
    })
    
    return newList;
}