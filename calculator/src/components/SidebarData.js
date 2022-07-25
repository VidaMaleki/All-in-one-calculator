import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName : 'nav-text'
    },
    {
        title: 'Calculator',
        path: '/Calculator',
        icon: <FaIcons.FaCalculator/>,
        cName : 'nav-text'
    },
    {
        title: 'Currency Converter',
        path: '/currencyconverter',
        icon: <BsIcons.BsCurrencyExchange/>,
        cName : 'nav-text'
    },
    {
        title: 'Loan Calculator',
        path: '/loancalculator',
        icon: <FaIcons.FaClipboardList/>,
        cName : 'nav-text'
    }
];