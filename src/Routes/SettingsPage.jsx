import React, { useState } from "react";
import { Badge, Button, CloseButton, Col, Form, Row } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

import ErrorMessage from "../Components/ErrorMessage";
import ConfirmDialogComp from "../Components/ConfirmDialogComp";
import { industryOptions } from "../the-advancement-place";
import { ReactComponent as Icon1 } from "../Assets/svg/arrow-rotate-left-solid.svg"
import { MyContainer } from "../Components/Styles/GlobalStyle.css";
import { Link } from "react-router-dom";

const SettingsPage = () => {
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
    register,
    formState: { errors },
  } = useForm();

  return (
    <MyContainer $padding_y="2rem" className="container">
      <div className="bg-light p-4 rounded-4 border border-2">
        <Form className="bg-light p-4 rounded-4 border border-2">
          <div className="d-flex justify-content-between">
            <h4>
              <span>#$#</span>Settings Page
            </h4>
          </div>

          <Form.Group controlId="current_year">
            <Row className="mb-3">
              <Col md="3" className=" d-flex align-items-center">
                <Form.Label>Current Year</Form.Label>
              </Col>
              <Col className="my-2 my-md-0" md="6">
                <Controller
                  name="current_year"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Select
                      required
                      isMulti
                      placeholder="Current Year..."
                      // value={industryOptions.find((e) => e.value === value)}
                      options={industryOptions}
                      onChange={(val) => onChange(val)}
                    />
                  )}
                />
                <ErrorMessage source={errors.current_year} />
              </Col>
              <Col className="my-2 my-md-0" md={"3"}>
                <Button className="w-100">Update</Button>
              </Col>
            </Row>
            <div className="d-flex gap-2 flex-wrap mt-3">
              {industryOptions.map(({ label }, index) => (
                <Badge
                  key={index}
                  className="bg-success-subtle text-dark py-2 fs-6 d-flex align-items-center justify-content-between"
                >
                  <small className="pe-2 me-2 m-0">{label}</small>
                  <div className="d-flex gap-2">
                    <Icon1
                      className="btn p-0"
                      width={"20"}
                      onClick={handleOpenModal}
                    />
                    <CloseButton
                      className="p-0"
                      onClick={handleOpenModal}
                      aria-label="Hide"
                    />
                  </div>
                </Badge>
              ))}
              <ConfirmDialogComp
                show={showModal}
                handleClose={handleCloseModal}
                handleConfirm={handleConfirmAction}
                message="Are you sure you want to perform this action?"
              />
              {actionConfirmed && (
                <p>Action has been confirmed and processed.</p>
              )}
            </div>
          </Form.Group>
          <hr />

          <Form.Group controlId="industry">
            <Row className="mb-3">
              <Col md="3" className=" d-flex align-items-center">
                <Form.Label>Industry</Form.Label>
              </Col>
              <Col className="my-2 my-md-0" md="6">
                <Controller
                  name="industry"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Select
                      required
                      isMulti
                      placeholder="Industry..."
                      // value={industryOptions.find((e) => e.value === value)}
                      options={industryOptions}
                      onChange={(val) => onChange(val)}
                    />
                  )}
                />
                <ErrorMessage source={errors.industry} />
              </Col>
              <Col className="my-2 my-md-0" md={"3"}>
                <Button className="w-100">Update</Button>
              </Col>
            </Row>

            <div className="d-flex gap-2 flex-wrap mt-3">
              {industryOptions.map(({ label }, index) => (
                <Badge
                  key={index}
                  className="bg-success-subtle text-dark py-2 fs-6 d-flex align-items-center justify-content-between"
                >
                  <small className="pe-2 me-2 m-0">{label}</small>
                  <div className="d-flex gap-2">
                    <Icon1
                      className="btn p-0"
                      width={"20"}
                      onClick={handleOpenModal}
                    />
                    <CloseButton
                      className="p-0"
                      onClick={handleOpenModal}
                      aria-label="Hide"
                    />
                  </div>
                </Badge>
              ))}
              <ConfirmDialogComp
                show={showModal}
                handleClose={handleCloseModal}
                handleConfirm={handleConfirmAction}
                message="Are you sure you want to perform this action?"
              />
              {actionConfirmed && (
                <p>Action has been confirmed and processed.</p>
              )}
            </div>
          </Form.Group>
          <hr />

          <Form.Group controlId="location">
            <Row className="mb-3">
              <Col md="3" className=" d-flex align-items-center">
                <Form.Label>Location</Form.Label>
              </Col>
              <Col md="6">
                <Form.Control
                  required
                  type="text"
                  placeholder="Location..."
                />
                <ErrorMessage source={errors.location} />
              </Col>
              <Col className="my-2 my-md-0" md={"3"}>
                <Button className="w-100">Update</Button>
              </Col>
            </Row>
          </Form.Group>
          <hr />

          <Form.Group controlId="qualification">
            <Row className="mb-3">
              <Col md="3" className=" d-flex align-items-center">
                <Form.Label>Qualification</Form.Label>
              </Col>
              <Col md="6">
                <Form.Control
                  required
                  type="text"
                  placeholder="Qualification..."
                />
                <ErrorMessage source={errors.qualification} />
              </Col>
              <Col className="my-2 my-md-0" md={"3"}>
                <Button className="w-100">Update</Button>
              </Col>
            </Row>
          </Form.Group>
          <hr />

          <Form.Group controlId="experience">
            <Row className="mb-3">
              <Col md="3" className=" d-flex align-items-center">
                <Form.Label>Experience</Form.Label>
              </Col>
              <Col md="6">
                <Form.Control
                  required
                  type="text"
                  placeholder="Experience..."
                />
                <ErrorMessage source={errors.experience} />
              </Col>
              <Col className="my-2 my-md-0" md={"3"}>
                <Button className="w-100">Update</Button>
              </Col>
            </Row>
          </Form.Group>
          <hr />

          <Row className="mb-3">
            <div className="my-3">
              <h4>Update Terms and Agreement <Link to={"/terms-and-agreement"}>here</Link></h4>
              <textarea
                style={{ minHeight: "200px" }}
                className="form-control"
                placeholder="Job summary here..."
                value={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam provident ea aperiam, sunt vel harum itaque nesciunt nemo ex cumque accusamus amet reiciendis repudiandae possimus, incidunt, laborum in eum quos deserunt! Corporis facilis eum praesentium, quaerat assumenda repellendus incidunt autem nobis, explicabo consequatur voluptate dolorem mollitia. Quibusdam, natus. Modi nobis nostrum, eligendi, maxime labore veniam nisi ea molestias dolor distinctio expedita tenetur blanditiis asperiores consectetur quam autem minima cumque, vel alias in numquam. Accusamus dolore aspernatur beatae ad necessitatibus commodi dolores vero delectus veniam! Cumque sunt natus laboriosam officia, similique repellendus, quos distinctio officiis quisquam enim voluptatibus. Tempore, debitis minima."}
              ></textarea>
              <div className="d-flex justify-content-center">
                <Button className="mt-3" style={{ width: "14rem" }}>Update</Button>
              </div>
              <ErrorMessage source={errors.industries} />
            </div>
          </Row>

        </Form>
      </div>
    </MyContainer>
  );
}

export default SettingsPage;