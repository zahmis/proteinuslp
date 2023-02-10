import { Navbar } from '../components/Navbar';
import React, { useState, useEffect } from 'react';
import { Admin } from '../components/Admin';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Admin {
  id: number;
  name: string;
  email: string;
}

export default function AdminsList() {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const fetch = async () => {
    const res = await axios.get<Admin[]>('http://0.0.0.0:3000/admins');
    setAdmins(res.data);
  };

  const createAdmin = async () => {
    await axios.post('http://0.0.0.0:3000/admins', {
      name: name,
      email: email,
    });
    setName('');
    setEmail('');
    fetch();
  };

  const showAdmin = async (id: number) => {
    await axios.get(`http://0.0.0.0:3000/admins/${id}`);
    fetch();
  };

  const destroyaAdmin = async (id: number) => {
    await axios.delete(`http://0.0.0.0:3000/admins/${id}`);
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
            {admins.map((admin, index) => {
              return (
                <Admin
                  id={admin.id}
                  key={index}
                  index={index}
                  name={admin.name}
                  email={admin.email}
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
