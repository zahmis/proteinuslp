import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Link } from 'react-router-dom';

interface AdminProps {
  id: number;
  index: number;
  name: string;
  email: string;
  destroyAdmin: (id: number) => void;
  showAdmin: (id: number) => void;
}

export const Admin = (props: AdminProps) => {
  return (
    <>
      <tr>
        <td>{props.index + 1}</td>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>
          <Router>
            <Button variant='info' href={`/routers/${props.id}`}>
              詳細
            </Button>
          </Router>

          <Button variant='danger' onClick={() => props.destroyAdmin(props.id)}>
            削除
          </Button>
        </td>
      </tr>
    </>
  );
};
