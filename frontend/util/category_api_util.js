export const fetchCategories = () => {
  return $.ajax({
    url: 'api/categories',
    method: 'GET'
  });
};

export const fetchCategory = id => {
  return $.ajax({
    url: `api/categories/${id}`,
    method: 'GET',
  });
};
