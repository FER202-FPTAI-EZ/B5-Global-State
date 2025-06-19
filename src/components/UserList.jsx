import { useAppContext } from '../provider/AppProvider';

function UserList() {
  const { students, chosenAge, searchKey } = useAppContext();

  const filteredStudents = students.filter(
    (student) =>
      (student.age === Number(chosenAge) || chosenAge === 'all') &&
      (student.name.toLowerCase().includes(searchKey.toLowerCase()) ||
        searchKey === ''),
  );

  if (!students || !students.length) return null;

  return (
    <div style={{ padding: '20px 0', backgroundColor: '#f9f9f9' }}>
      <table>
        <thead>
          <tr style={{ textAlign: 'center' }}>
            <th style={{ width: '200px', border: '1px solid' }}>Name</th>
            <th style={{ width: '200px', border: '1px solid' }}>Email</th>
            <th style={{ width: '200px', border: '1px solid' }}>Age</th>
            <th style={{ width: '200px', border: '1px solid' }}>Major</th>
            <th style={{ width: '100px', border: '1px solid' }}>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((user) => (
            <tr key={user.id} style={{ textAlign: 'center' }}>
              <td style={{ border: '1px solid' }}>{user.name}</td>
              <td style={{ border: '1px solid' }}>{user.email}</td>
              <td style={{ border: '1px solid' }}>{user.age}</td>
              <td style={{ border: '1px solid' }}>{user.major}</td>
              <td style={{ border: '1px solid' }}>
                <img
                  src={
                    'https://random-image-pepebigotes.vercel.app/api/random-image'
                  }
                  alt={`${user.name}'s avatar`}
                  width="50"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
