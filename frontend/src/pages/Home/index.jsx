import { useState, useEffect } from 'react';
import './Home.css';
import Categories from '../../components/Categorias'
import Card from '../../components/Cards';

export default function Page() {
    return (
        <div>
            <Categories/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}