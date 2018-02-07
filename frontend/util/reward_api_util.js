export const createReward = reward => {
  return $.ajax({
    url: `/api/projects/${reward.project_id}/rewards`,
    method: 'POST',
  });
};

export const deleteReward = id => {
  return $.ajax({
    url: `api/rewards/${id}`,
    method: 'DELETE',
  });
};
