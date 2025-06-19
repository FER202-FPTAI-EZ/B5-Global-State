import { createContext, useContext, useEffect, useState } from 'react';
import { instance } from '../lib/axios';
const AppContext = createContext();

function AppProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [chosenAge, setChosenAge] = useState('all');
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      const students = await instance.get('/students').then((res) => res.data);
      setStudents(students);
    };

    fetchStudents();
  }, []);

  return (
    <AppContext.Provider
      value={{
        students,
        setStudents,
        chosenAge,
        setChosenAge,
        searchKey,
        setSearchKey,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
