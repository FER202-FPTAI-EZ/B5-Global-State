import { Container, FormControl, FormSelect } from 'react-bootstrap';
import UserList from '../UserList';
import { useAppContext } from '../../provider/AppProvider';

function HomePage() {
  const { chosenAge, setChosenAge, searchKey, setSearchKey } = useAppContext();
  return (
    <Container>
      <h1 className="mt-4 mb-4">Welcome to Our Class</h1>
      <FormSelect
        onChange={(e) => setChosenAge(e.target.value)}
        value={chosenAge}
      >
        <option value="all">All Age</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
      </FormSelect>
      <FormControl
        type="text"
        placeholder="Search by name"
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <UserList />
    </Container>
  );
}

export default HomePage;
