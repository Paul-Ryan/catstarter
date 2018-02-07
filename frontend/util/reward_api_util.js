export const fetchReward = id => {
  return $.ajax({
    url: `api/rewards/${id}`,
    method: 'GET',
  });
};
