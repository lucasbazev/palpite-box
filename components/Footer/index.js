import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-700 p-4'>
            <div className='container mx-auto text-center font-bold text-white'>
                Projeto desenvolvido por: Lucas Azevedo / 
                <a className='hover:underline' href='https://linkedin.com/in/lucasbazev' target='_blank'> LinkedIn </a> / 
                <a className='hover:underline' href='https://github.com/lucasbazev' target='_blank'> GitHub </a>

                <div className='mt-2'>
                    <img className='inline p-4' src='/logo-semana-fsm.png' />
                    <img className='inline p-4' src='/logo-devpleno.png' />
                </div>
            </div>
        </div>
    )
}

export default Footer;