import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Admin {
  id: number;
  name: string;
  email: string;
}

const RoutersPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [admin, setAdmin] = useState<Admin>();

  useEffect(() => {
    const adminData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/admins/${id}`);
        setAdmin(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    adminData();
  }, [id]);

  return (
    <Container>
      <h1 className='mt-5'>管理者ID {id}</h1>
      {admin && (
        <>
          <p>名前: {admin.name}</p>
          <p>メールアドレス: {admin.email}</p>
        </>
      )}
      <Button variant='primary' type='submit' href='/admins_list'>
        戻る
      </Button>
    </Container>
  );
};

export default RoutersPage;
