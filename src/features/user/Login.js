import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch, connect } from "react-redux";
import { submitLoginThunk } from "../../store/action/auth";
import { useNavigate } from "react-router-dom";

function Login({ isLoginSuccess, loginError }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginForm] = Form.useForm();

  const handleSubmit = (data) => {
    const payload = {
      email: data.email,
      password: data.password,
    };
    dispatch(submitLoginThunk(payload));
  };

  useEffect(() => {
    if (isLoginSuccess) {
      navigate("/app/dashboard");
    }
  }, [isLoginSuccess]);

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-[400px] shadow-xl">
        <div className="grid  bg-base-100 rounded-xl">
          <div className="py-8 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">
              Selamat Datang
            </h2>
            <p className="text-center text-base font-normal mb-5">
              {" "}
              Silahkan masuk dengan mengisi email <br /> password Anda!
            </p>
            <Form
              layout="vertical"
              form={loginForm}
              onFinish={(all) => handleSubmit(all)}
            >
              <p className="mb-1">Email</p>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Email wajib diisi! ",
                  },
                ]}
              >
                <Input className="h-[40px]" placeholder="Masukan Email Anda" />
              </Form.Item>
              <p className="mb-1">Kata Sandi</p>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Password wajib diisi! ",
                  },
                ]}
              >
                <Input.Password
                  className="h-[40px]"
                  type="password"
                  placeholder="Masukan Password"
                />
              </Form.Item>

              <Button
                className="w-full my-5 h-[40px] font-semibold text-white bg-cyan-700"
                htmlType="submit"
              >
                Masuk
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isLoadingLogin: state.auth.isLoadingLogin,
  loginError: state.auth.loginError,
  isLoginSuccess: state.auth.isLoginSuccess,
});

export default connect(mapStateToProps, null)(Login);
