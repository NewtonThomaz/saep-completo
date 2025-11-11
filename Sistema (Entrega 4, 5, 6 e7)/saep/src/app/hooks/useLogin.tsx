'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import api from '../lib/api';

export function useLogin() {
  const router = useRouter();
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const { username, password } = form;

    api.post('/users/auth', { username, password })
      .then(response => {
        localStorage.setItem('logged', 'true');
        localStorage.setItem('userName', response.data.name);
        router.push('/dashboard');
      })
      .catch(() => Swal.fire('Erro', 'Usuário ou senha incorretos!', 'error'));
  };

  return { form, handleChange, handleLogin };
}