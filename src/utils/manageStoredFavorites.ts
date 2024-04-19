import { Movie, User } from 'src/types/types';

export const manageStoredFavorites = (state?: Movie[]) => {
  const userState = localStorage.getItem('userState');
  const storedUser = userState ? JSON.parse(userState).authUserName : '';
  let storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
  const savedUserIndex = storedUsers.findIndex(
    (user: User) => user.userName === storedUser,
  );
  if ( state && savedUserIndex !== -1) {
    storedUsers[savedUserIndex].favorites = state;
    localStorage.setItem('users', JSON.stringify(storedUsers));
  }else{
    return storedUsers[savedUserIndex]&&storedUsers[savedUserIndex].favorites ||[];
  }
};