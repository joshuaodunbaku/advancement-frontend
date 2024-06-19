import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { MyContainer } from '../../Components/Styles/GlobalStyle.css';
import WordSpan from '../../Components/WordSpan';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import ErrorMessage from '../../Components/ErrorMessage';
import { useForm } from 'react-hook-form';

const ChangePassword = () => {
  const schema = yup.object().shape({
    current_pw: yup.string().min(6).required("Password must be a min of 6 characters!"),
    new_pw: yup.string().min(6).required("Password must be a min of 6 characters!"),
    confirm_new_pw: yup
      .string()
      .oneOf([yup.ref("new_pw"), null])
      .required("Password Not a match!"),
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("the data", data);
  };
  return (
    <>
      <MyContainer $padding_y="15px">
        <div className="container py-md-5 py-3">
          <div className="text-center">
            <h2 className="fw-bold">
              Change Password
            </h2>
            {/* <p className="lead fs-6">Get started now!</p> */}
          </div>
          <Form className="d-flex justify-content-center">
            <div className="bg-light p-4 rounded-4 border border-2">
              <Row style={{ width: "20rem" }}>
                <Form.Group
                  className="my-2 my-sm-3"
                  // as={Col}
                  // sm="6"
                  controlId="current_pw"
                >
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control
                    className='w-100'
                    required
                    type="password"
                    placeholder="Password..."
                    {...register("current_pw")}
                  />
                  <ErrorMessage source={errors.current_pw} />
                </Form.Group>

                <Form.Group
                  className="my-2 my-sm-3"
                  // as={Col}
                  // sm="6"
                  controlId="new_pw"
                >
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    className='w-100'
                    required
                    type="password"
                    placeholder="Password..."
                    {...register("new_pw")}
                  />
                  <ErrorMessage source={errors.new_pw} />
                </Form.Group>

                <Form.Group
                  className="my-2 my-sm-3"
                  // as={Col}
                  // sm="6"
                  controlId="confirm_new_pw"
                >
                  <Form.Label>Confirm New Password</Form.Label>
                  <Form.Control
                    className='w-100'
                    type="password"
                    placeholder="Confirm Password..."
                    {...register("confirm_new_pw")}
                  />
                  <ErrorMessage source={errors.confirm_new_pw} />
                </Form.Group>
              </Row>
              <div className="text-center">
                <Button
                  variant="primary"
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                >
                  Update
                </Button>
              </div>

            </div>
          </Form>
        </div>
      </MyContainer>
    </>
  )
}

export default ChangePassword;