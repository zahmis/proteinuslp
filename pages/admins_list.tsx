import { Navbar } from '../components/Navbar';
import React, { useState, useEffect } from 'react';
import { Admin } from '../components/Admin';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ADMIN_URL } from '../constants/url';
import { AdminProps } from '../constants/types';
import Validation from '../validations/Validation';

export default function AdminsList() {
  const [admins, setAdmins] = useState<AdminProps[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [info, setInfo] = useState({
    name: '',
    email: '',
  });
  const [message, setMessage] = useState({
    name: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const key = event.target.name;
    const value = event.target.value;

    setInfo({
      ...info,
      [key]: value,
    });
    setMessage({
      ...message,
      [key]: Validation.formValidate(key, value),
    });
  };

  const fetch = async () => {
    const res = await axios.get<AdminProps[]>(`${ADMIN_URL}`);
    setAdmins(res.data);
  };

  const createAdmin = async () => {
    setLoading(true);
    await axios.post(`${ADMIN_URL}`, {
      name: name,
      email: email,
    });
    setName('');
    setEmail('');
    setInfo({
      name: '',
      email: '',
    });
    setMessage({
      name: '',
      email: '',
    });
    fetch();

    setLoading(false);
  };

  const showAdmin = async (id: number) => {
    await axios.get(`${ADMIN_URL}/${id}`);
    fetch();
  };

  const destroyaAdmin = async (id: number) => {
    await axios.delete(`${ADMIN_URL}/${id}`);
    fetch();
  };

  useEffect(() => {
    fetch();
  }, []);

  const canSubmit = (): boolean => {
    const validInfo =
      Object.values(info).filter((value) => {
        return value === '';
      }).length === 0;
    const validMessage =
      Object.values(message).filter((value) => {
        return value !== '';
      }).length === 0;
    return validInfo && validMessage && !loading;
  };

  return (
    <>
      <Navbar />
      <Container>
        <h1 className='mt-3'>管理者一覧</h1>

        <Form className='mb-3'>
          <Form.Group className='mb-3' controlId='formBasicName'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              name='name'
              placeholder='名前を入力'
              value={info.name}
              onChange={(e) => {
                setName(e.target.value);
                handleChange(e);
              }}
            />
            {message.name && (
              <p style={{ color: 'red', fontSize: 14 }}>{message.name}</p>
            )}
            <Form.Text className='text-muted'></Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              name='email'
              placeholder='アドレスを入力'
              value={info.email}
              onChange={(e) => {
                setEmail(e.target.value);
                handleChange(e);
              }}
            />
            {message.email && (
              <p style={{ color: 'red', fontSize: 14 }}>{message.email}</p>
            )}
          </Form.Group>
          <Button
            variant='primary'
            disabled={!canSubmit()}
            onClick={() => createAdmin()}
          >
            登録
          </Button>
        </Form>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {admins.map(({ id, name, email }, index) => {
              return (
                <Admin
                  id={id}
                  key={index}
                  index={index}
                  name={name}
                  email={email}
                  destroyAdmin={destroyaAdmin}
                  showAdmin={showAdmin}
                />
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
