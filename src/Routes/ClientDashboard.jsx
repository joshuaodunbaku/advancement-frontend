import React, { useState } from "react";
import { ReactComponent as Icon2 } from "../Assets/svg/users-solid.svg";
import { ReactComponent as Icon3 } from "../Assets/svg/square-plus-solid.svg";
import { ReactComponent as Icon5 } from "../Assets/svg/bell-solid.svg";
import { ReactComponent as Icon6 } from "../Assets/svg/user-gear-solid.svg";
import { ReactComponent as Icon7 } from "../Assets/svg/pen-to-square-solid.svg";
import { useNavigate } from "react-router-dom";
import { Badge, CloseButton, Col, Form, Row } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

import WordSpan from "../Components/WordSpan";
import { Hover } from "../Components/Styles/GlobalStyle.css";
import ErrorMessage from "../Components/ErrorMessage";
import ConfirmDialogComp from "../Components/ConfirmDialogComp";
import { industryOptions } from "../the-advancement-place";

const ClientDashboard = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [actionConfirmed, setActionConfirmed] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleConfirmAction = () => {
    setActionConfirmed(true);
    setShowModal(false);
    // Perform the action here
    console.log("Action Confirmed");
  };


  const {
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("the data", data);
  };
  return (
    <>
      <div className="py-2 py-md-4">
        <div className="container-md">
          <h1 className="fw-bold mt-4">
            Hello{" "}
            <WordSpan>
              <span className="bungee-regular">User</span>
            </WordSpan>
          </h1>

          <h3 className="mt-5 fw-bold noto-sans-font">
            Quick<WordSpan color={"lightBlue"}> Menu</WordSpan>
          </h3>
          <div className="py-3 d-flex flex-row flex-wrap mb-3 align-items-center justify-content-stretch gap-2 my-3">
            {[
              // { title: "Add User", IconSrc: Icon1, link: "add-user" },
              { title: "View Users", IconSrc: Icon2, link: "view-users" },
              { title: "Post a Job", IconSrc: Icon3, link: "post-a-job" },
              // { title: "Job Seekers", IconSrc: Icon4, link: "job-seekers" },
              { title: "Edit Profile", IconSrc: Icon6, link: "edit-profile" },
              {
                title: "Notifications",
                IconSrc: Icon5,
                link: "notifications-page",
              },
            ].map(({ title, IconSrc, link }, idx) => (
              <button key={idx} className="btn" onClick={() => navigate(link)}>
                <div className="text-center">
                  <Hover>
                    <div className="p-4 bg-light border border-2 text-center flex-fill rounded-3 onHover">
                      <IconSrc
                        className="danger"
                        color="red"
                        width={100}
                        height={50}
                      />
                    </div>
                  </Hover>
                  <p className="noto-sans-font fw-bold">{title}</p>
                </div>
              </button>
            ))}
          </div>
          <div className="bg-light p-4 rounded-4 border border-2">
            <Form className="bg-light p-4 rounded-4 border border-2">
              <div className="d-flex justify-content-between">
                <h4>User Info</h4>
                <span className="btn">
                  <Icon7 width={130} height={30} onClick={() => navigate("edit-profile")} />
                </span>
              </div>
              <Row className="mb-3">
                <Form.Group
                  className="my-2 my-sm-3"
                  as={Col}
                  sm="6"
                  controlId="firstName"
                >
                  <Form.Label>Firstname</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Firstname..."
                    readOnly
                    disabled
                    defaultValue={"Joshua"}
                  />
                  <ErrorMessage source={errors.fname} />
                </Form.Group>

                <Form.Group
                  className="my-2 my-sm-3"
                  as={Col}
                  sm="6"
                  controlId="lastname"
                >
                  <Form.Label>Lastname</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Lastname..."
                    readOnly
                    disabled
                    defaultValue={"Odunbaku"}
                  />
                  <ErrorMessage source={errors.lname} />
                </Form.Group>

                <Form.Group
                  className="my-2 my-sm-3"
                  as={Col}
                  sm="6"
                  controlId="email"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="name@mail.com"
                    readOnly
                    disabled
                    defaultValue={"joshuaodunbaku@gmail.com"}
                  />
                  <ErrorMessage source={errors.email} />
                </Form.Group>

                <Form.Group
                  className="my-2"
                  as={Col}
                  sm="6"
                  controlId="phoneNumber"
                >
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Phone number..."
                    readOnly
                    disabled
                    defaultValue={"07080792553"}
                  />
                  <ErrorMessage source={errors.phone} />
                </Form.Group>

                <Form.Group
                  className="my-2 my-sm-3"
                  as={Col}
                  sm="6"
                  controlId="gender"
                >
                  <Form.Label>Gender</Form.Label>
                  <Form.Select
                    required
                    aria-label="Default select example"
                    placeholder="Select..."
                    defaultValue={2}
                    disabled
                  >
                    <option>Select...</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                  </Form.Select>
                  <ErrorMessage source={errors.sex} />
                </Form.Group>

                <div className="my-3">
                  <h4>Industries</h4>
                  <div className="d-flex gap-2 flex-wrap">

                    {[
                      { title: "Admin" },
                      { title: "Moderator" },
                      { title: "Manager" },
                      { title: "Chatter" },
                      { title: "Collab Manager" },
                      { title: "Avatar" },
                    ].map(({ title }, index) => (
                      <Badge
                        key={index}
                        className="bg-success-subtle text-dark py-2 fs-6 d-flex align-items-center justify-content-between"
                      >
                        <small className="pe-2 me-2 m-0">{title}</small>
                        <CloseButton className="p-0" onClick={handleOpenModal} aria-label="Hide" />
                      </Badge>
                    ))}
                    <ConfirmDialogComp
                      show={showModal}
                      handleClose={handleCloseModal}
                      handleConfirm={handleConfirmAction}
                      message="Are you sure you want to perform this action?"
                    />
                    {actionConfirmed && <p>Action has been confirmed and processed.</p>}
                  </div>
                  <div style={{ width: "16rem" }}>
                    <Controller
                      name="industries"
                      control={control}
                      render={({ field }) => (
                        <Select
                          isMulti
                          placeholder={"Edit Selected Industries..."}
                          name="industryOption"
                          onChange={(val) => field.onChange(val)}
                          value={field.value}
                          options={industryOptions}
                          className="border-0 bg-secondary mt-3"
                          classNamePrefix="select"
                        />
                      )}
                    />

                  </div>
                  <ErrorMessage source={errors.industries} />

                </div>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientDashboard;