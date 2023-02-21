import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router } from 'react-router-dom';
import { AdminProps } from 'constants/types';

export const Admin = ({ index, id, name, email, destroyAdmin }: AdminProps) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <Router>
          <Button variant='info' href={`/posts/${id}`}>
            詳細
          </Button>
        </Router>

        <Button variant='danger' onClick={() => destroyAdmin(id)}>
          削除
        </Button>
      </td>
    </tr>
  );
};
