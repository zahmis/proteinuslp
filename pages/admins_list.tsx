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

export default function AdminsList() {
  const [admins, setAdmins] = useState<AdminProps[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const fetch = async () => {
    const res = await axios.get<AdminProps[]>(`${ADMIN_URL}`);
    setAdmins(res.data);
  };

  const createAdmin = async () => {
    await axios.post(`${ADMIN_URL}`, {
      name: name,
      email: email,
    });
    setName('');
    setEmail('');
    fetch();
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
              placeholder='名前を入力'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Text className='text-muted'></Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='アドレスを入力'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Button variant='primary' type='submit' onClick={createAdmin}>
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
