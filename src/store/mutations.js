import  {
  SAVE_ADDDETAIL,
  RECORD_USERINFO
} from './mutation-types'

export  default  {
  //选择地址
  [SAVE_ADDDETAIL](state, addAddress){
    state.addAddress = addAddress
  },
  [RECORD_USERINFO](state, userInfo) {
    state.userInfo = userInfo;
    state.login = true;
    //setStore('user_id', info.user_id);
  },
}
