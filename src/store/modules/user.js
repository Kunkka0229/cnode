import * as types from '../mutation-types';
import {login} from '../../api/publicApi';

const state = {
  userInfo: JSON.parse(localStorage.getItem('userInfo')) || {}
};

const mutations = {
  // 登录
  [types.LOGIN](state, data) {
    state.userInfo = data;
  },
  // 退出登录
  [types.LOGIN_OUT](state) {
    state.userInfo = {};
    localStorage.removeItem('userInfo');
  }
};

const actions = {
  // 登录
  [types.LOGIN]({commit}, data){
    return login(data).then((response) => {
      localStorage.setItem('userInfo', JSON.stringify(response));
      commit(types.LOGIN, response);
    })
  },
  // 退出登录
  [types.LOGIN_OUT]({commit}){
    commit(types.LOGIN_OUT);
  }
};

const getters = {
  userInfo: state => state.userInfo
};

export default {
  state,
  mutations,
  actions,
  getters
}