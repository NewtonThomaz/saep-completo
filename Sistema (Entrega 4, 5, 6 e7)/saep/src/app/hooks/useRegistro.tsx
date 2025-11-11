'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import api from '../lib/api';

export function useRegistro() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', username: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, username, password } = form;

    api.post('/users/register', { name, username, password })
      .then(() => {
        Swal.fire('Sucesso', 'Usuário cadastrado com sucesso!', 'success')
          .then(() => router.push('/'));
      })
      .catch(() => Swal.fire('Erro', 'Não foi possível cadastrar o usuário.', 'error'));
  };

  return { form, handleChange, handleRegister };
}
