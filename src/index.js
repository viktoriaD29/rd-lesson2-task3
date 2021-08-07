import store from './store'
import { addUser, deleteUser } from './users.actions';

// const onAdd = () => {
//   store.dispatch(addCreator({id: 76, name: 'Tom'}));
// };

// const onDelete = () => {
//   store.dispatch(deleteCreator(76));
// };

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addUser({ id: 76, name: 'Tom' }));
store.dispatch(addUser({ id: 27, name: 'Ann' }));
store.dispatch(deleteUser(76));
store.dispatch(addUser({ id: 3, name: 'Bob' }));