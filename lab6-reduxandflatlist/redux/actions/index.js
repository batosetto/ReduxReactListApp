import {COUNTER_INCREASE, COUNTER_DECREASE, ADD_ITEM} from '../actionTypes/index'

export const increase = (increamentValue) => ({
type: COUNTER_INCREASE,
payload:{
  increament: increamentValue
}
})

export const decrease = (decreamentValue) => ({
type: COUNTER_DECREASE,
payload:{
  decreament: decreamentValue
}
})

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload:{
    item
  }
})