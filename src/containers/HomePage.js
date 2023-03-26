import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '50px',
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '30px',
      }}>
        Hoş Geldiniz!
      </h1>
      <p style={{
        fontSize: '1.2rem',
        marginBottom: '30px',
        textAlign: 'center',
      }}>
        Sitemizde en son moda giyim ürünlerini keşfedin ve indirimli fiyatlarımızdan yararlanın!
      </p>
      <Link to="/product" className="item" style={{ color: "white" }}>  
      <button style={{
        backgroundColor: 'DodgerBlue',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        fontSize: '1.2rem',
        cursor: 'pointer',
      }}>
        Alışverişe Başla
      </button></Link>
    </div>
  );
};

export default Homepage;