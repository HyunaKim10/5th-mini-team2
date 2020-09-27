import React, { useState, useRef } from 'react';
import Button from '@/components/Button';
import TextField from '@/components/TextField';
import { REG_EXP } from '@/const/RegExp';
import TestyImg from '@/assets/images/testy.png';

const Login = () => {
  const loginButton = useRef();
  const [inputs, setInputs] = useState({
    studentName: '',
    classCode: '',
  });
  const { studentName, classCode } = inputs;
  const handleValueChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentName === '' || classCode === '') {
      alert('내용을 입력하세요');
    } else {
      console.log(`${studentName} ${classCode}`);
    }
    loginButton.current.blur();
  };

  return (
    <div className="container">
      <p>시험관리 온라인 서비스</p>
      <div className="col" align="center">
        <img style={{ backgroundColor: 'black', marginBottom: '40px' }} src={TestyImg} />
        <div className="row">
          <TextField
            onChange={handleValueChange}
            value={inputs.studentName}
            name="studentName"
            placeholder="이름"
            style={{ width: '400px', height: '42px', borderRadius: '22px', margin: 'auto' }}
          />
        </div>
        <div className="row">
          <TextField
            onChange={handleValueChange}
            pattern={REG_EXP.Number}
            value={inputs.classCode}
            name="classCode"
            placeholder="학원코드입력"
            style={{ width: '400px', height: '42px', borderRadius: '22px', margin: 'auto' }}
          />
        </div>
        <div className="row justify-content-center">
          <Button
            onClick={handleSubmit}
            ref={loginButton}
            type="submit"
            style={{
              width: '400px',
              height: '42px',
              backgroundColor: '#e4cd84',
              border: 'none',
              borderRadius: '22px',
            }}>
            <span style={{ color: '#4ca2c5', fontWeight: 'bold' }}>로그인</span>
          </Button>
        </div>
      </div>
      <style jsx>
        {`
          p {
            text-align: center;
            font-family: NotoSansCJKkr;
            font-size: 20px;
            line-height: 1.45;
            letter-spacing: -1px;
            color: #ddeaf6;
          }
          .container {
            margin-top: 150px;
            width: 500px;
            justify-content: center;
          }
          .row:nth-child(3) {
            margin-top: 10px;
            margin-bottom: 48px;
          }
        `}
      </style>
    </div>
  );
};

export default Login;