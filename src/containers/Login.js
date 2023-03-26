import React from 'react';

const Login = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '50px',
    }}>
      <form style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        border: '1px solid DodgerBlue',
        borderRadius: '10px',
        boxShadow: '2px 2px 10px LightSkyBlue',
        backgroundColor: 'white',
      }}>
        <h2>Giriş Yap</h2>
        <input type="email" placeholder="E-posta" style={{
          margin: '10px',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid DodgerBlue',
          width: '250px',
          fontSize: '16px',
        }} />
        <input type="password" placeholder="Şifre" style={{
          margin: '10px',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid DodgerBlue',
          width: '250px',
          fontSize: '16px',
        }} />
        <button type="submit" style={{
          backgroundColor: 'DodgerBlue',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}>
          Giriş Yap
        </button>
      </form>
    </div>
  );
};

export default Login;