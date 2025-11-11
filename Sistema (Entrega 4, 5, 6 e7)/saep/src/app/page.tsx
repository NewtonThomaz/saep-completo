'use client';

import Link from 'next/link';
import { useLogin } from './hooks/useLogin';

export default function Home() {

  const { form, handleChange, handleLogin } = useLogin();

  return (
    <section className='text-center mt-[50px]'>
      <main className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f0f0f0]  p-4 text-white rounded-lg'>

        <h1 className='text-black text-[2rem]'>Bem-vindo!</h1>

        <form onSubmit={handleLogin} className='mt-[20px]'>

          <article className='mb-[10px]'>
            <input
              type="text"
              name='username'
              placeholder='Usuário'
              value={form.username}
              onChange={handleChange}
              className="border p-2 rounded w-64 text-black"
            />
          </article>

          <article className='mb-[10px]'>
            <input
              type="password"
              name="password"
              placeholder="Senha"
              value={form.password}
              onChange={handleChange}
              className="border p-2 rounded w-64 text-black"
            />
          </article>

          <button
            type="submit"
            className="bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-500 px-6 py-2"
          >
            Entrar
          </button>
        </form>

        <span className='mt-[20px]'>
          <Link href="/registro" className='text-blue-500 hover:underline'>
            Não tem uma conta? Cadastre-se
          </Link>
        </span>
      </main>
    </section>
  );
}
