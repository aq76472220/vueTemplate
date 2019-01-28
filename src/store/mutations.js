import  {
  SAVE_ADDDETAIL
} from './mutation-types'

export  default  {
  //选择地址
  [SAVE_ADDDETAIL](state,addAddress){
    state.addAddress = addAddress
  }
}
