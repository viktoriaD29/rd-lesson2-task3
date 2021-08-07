import store from './store'
import {addCreator, deleteCreator} from './users.actions'

// const onAdd = () => {
//   store.dispatch(addCreator({id: 76, name: 'Tom'}));
// };

// const onDelete = () => {
//   store.dispatch(deleteCreator(76));
// };

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addCreator({ id: 76, name: 'Tom' }));
store.dispatch(addCreator({ id: 27, name: 'Ann' }));
store.dispatch(deleteCreator(76));
store.dispatch(addCreator({ id: 3, name: 'Bob' }));