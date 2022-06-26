import { gql, useMutation } from '@apollo/client';
import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { useCreateSubscriberMutation } from '../graphql/generated';
import image from '../assets/code.png'

export const Subscribe: React.FC = () => {

    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('')

    const [createSubscriber, { loading }] = useCreateSubscriberMutation()

    async function handleSubiscribe(event: FormEvent) {
        event.preventDefault();

        await createSubscriber({
            variables: {
                name,
                email
            }
        })

        navigate('/event')
    }

    return (
        <div className='min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center'>
            <div className='w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto md:justify-center md:max-w-[907px] md:flex-col'>
                <div className='max-w-[640px] md:flex md:items-center md:flex-col md:text-center md:mb-8'>
                    <Logo />
                    <h1 className='mt-8 text-[2.5rem] leading-tight md:max-w-[370px]'>Construa uma <strong className='text-blue-500'>aplicação completa</strong>, do zero, com <strong className='text-blue-500'>React</strong></h1>
                    <p className='mt-4 text-gray-200 leading-relaxed md:max-w-[370px]'>
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>
                <div className='p-8 bg-gray-700 border border-gray-500 rounded md:w-full md:max-w-lg'>
                    <strong>Inscreva-se gratuitamente</strong>

                    <form onSubmit={handleSubiscribe} className='flex flex-col gap-2 w-full'>
                        <input
                            className='bg-gray-900 rounded px-5 h-14'
                            type="text"
                            placeholder='Seu nome completo'
                            onChange={event => setName(event.target.value)}
                        />
                        <input
                            className='bg-gray-900 rounded px-5 h-14'
                            type="email"
                            placeholder='Digite seu email'
                            onChange={event => setEmail(event.target.value)}
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className='mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50' 
                        >Garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>
            <img src={image} className='mt-10' alt="" />
        </div>
    )
}
