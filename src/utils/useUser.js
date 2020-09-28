import { useContext } from 'react';

import { UserContext } from '../context/user';

const useUser = () => {

  const context = useContext(UserContext);

  if (!context) throw new Error('useUser must be used whitin a UserProvider');

  const { user, setUser } = context;

  return { user, setUser };
};


export default useUser;