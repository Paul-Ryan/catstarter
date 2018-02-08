import * as PledgeAPIUtil from '../util/pledge_api_util';

export const RECEIVE_PLEDGE = "RECEIVE_PLEDGE";
export const REMOVE_PLEDGE = "REMOVE_PLEDGE";

const receivePledge = pledge => ({
  type: RECEIVE_PLEDGE,
  pledge
});

const removePledge = id => ({
  type: REMOVE_PLEDGE,
  id
});

export const createPledge = pledge => dispatch => {
  return PledgeAPIUtil.createPledge(pledge)
    .then(dbPledge => (dispatch(receivePledge(dbPledge))
  ));
};

export const deletePledge = id => dispatch => {
  return PledgeAPIUtil.deletePledge(id)
    .then(() => dispatch(removePledge(id))
  );
};

window.createPledge = createPledge;
