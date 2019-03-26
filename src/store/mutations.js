import  {
  SAVE_ADDDETAIL,
  RECORD_USERINFO,
  RECORD_ADDRESS,
  SAVE_GEOHASH
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

  //保存geohash
  [SAVE_GEOHASH](state, geohash) {
    state.geohash = geohash;
  },
  // 记录当前经度纬度
  [RECORD_ADDRESS](state,{latitude,longitude}){
    state.latitude = latitude;
    state.longitude = longitude;
  },

}
