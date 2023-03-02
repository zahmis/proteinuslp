import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Form, Table } from 'react-bootstrap';
import { Navbar } from '../components/Navbar';
import { Admin } from '../components/Admin';
import { ADMIN_URL } from '../constants/url';
import { AdminProps } from '../constants/types';
import Validation from '../validations/Validation';
import { HelperMessage } from 'types/admin';

export default function AdminsList() {
  const [admins, setAdmins] = useState<AdminProps[]>([]);
  const [name, setName] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();

  const [helperMessage, setHelperMessage] = useState<HelperMessage>({
    name: undefined,
    email: undefined,
  });
  const [loading, setLoading] = useState(false);

  const fetchAdmins = async () => {
    const res = await axios.get<AdminProps[]>(`${ADMIN_URL}`);
    setAdmins(res.data);
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const key = event.target.name;
    const value = event.target.value;

    switch (key) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }

    setHelperMessage({
      ...helperMessage,
      [key]: Validation.formValidate(key, value),
    });
  };

  const createAdmin = async () => {
    try {
      setLoading(true);
      await axios.post(`${ADMIN_URL}`, {
        name: name,
        email: email,
      });
    } catch (error) {
      // TODO: いい感じにする
      console.log(error);
    } finally {
      setLoading(false);
    }

    fetchAdmins();
  };

  const showAdmin = async (id: number) => {
    await axios.get(`${ADMIN_URL}/${id}`);
    fetchAdmins();
  };

  const destroyaAdmin = async (id: number) => {
    try {
      setLoading(true);
      await axios.delete(`${ADMIN_URL}/${id}`);
    } catch (error) {
      // TODO: いい感じにする
      console.log(error);
    } finally {
      setLoading(false);
    }

    fetchAdmins();
  };

  const canSubmit = (): boolean => {
    if (loading) return false;
    if (name == null || email == null) return false;
    if (helperMessage.name || helperMessage.email) return false;
    return true;
  };
  console.log(canSubmit());

  type HelperMessageProps = {
    message?: string;
  };
  const HelperMessage = ({ message }: HelperMessageProps) => (
    <p style={{ color: 'red', fontSize: 14 }}>{message}</p>
  );

  return (
    <>
      <Navbar />
      <Container>
        <h1 className='mt-3'>管理者一覧</h1>
        {/* ここは簡易的に Bootstrap を使う */}
        <Form className='mb-3'>
          <Form.Group className='mb-3' controlId='formBasicName'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              name='name'
              placeholder='名前を入力'
              value={name}
              onChange={handleChange}
            />
            <HelperMessage message={helperMessage.name} />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              name='email'
              placeholder='アドレスを入力'
              value={email}
              onChange={handleChange}
            />

            <HelperMessage message={helperMessage.email} />
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
