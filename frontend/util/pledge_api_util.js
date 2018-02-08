export const createPledge = pledge => {
  return $.ajax({
    url: `/api/projects/${pledge.project_id}/pledges`,
    method: 'POST',
    data: { pledge: pledge }
  });
};


export const deletePledge = id => {
  return $.ajax({
    url: `api/pledges/${id}`,
    method: 'DELETE'
  });
};
