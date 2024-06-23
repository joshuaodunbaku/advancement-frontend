import React from "react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Badge, Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import Select from "react-select";

import { Hover, MyContainer } from "../Components/Styles/GlobalStyle.css";
import WordSpan from "../Components/WordSpan";
import { industryOptions, locationOptions, statusOption } from "../the-advancement-place";
import schema from "../Utils/yup-schema-validators/staff-job-page-schema";
import ErrorMessage from "../Components/ErrorMessage";

import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

const StaffJobPage = () => {
  const navigate = useNavigate();
  const currentDate = new Date();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      more_filter: false,
      startDate: currentDate,
      endDate: currentDate,
    },
  });

  const onSubmit = (data) => {
    console.log(data, moreFilterValue);
  };
  const moreFilterValue = watch("more_filter");
  const startDate = watch('startDate');

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#f0f0e8",
      borderColor: "#cecec8ca",
      borderRadius: "2px",
      padding: "10px 0px",
      boxShadow: state.isFocused
        ? "0 0 0 0.25rem rgba(0, 123, 255, 0.25)"
        : "none",
      "&:hover": {
        borderColor: "transparent",
      },
      "&:focus": {
        boxShadow: "0 0 0 0.25rem rgba(0, 123, 255, 0.25)",
      },
      // height: "48px", // Match Bootstrap's default form control height
      minHeight: "48px", // Ensures the minimum height is 38px
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "rgba(0, 123, 255, 0.75)", // customize color of the dropdown arrow
    }),
  };


  return (
    <>
      <MyContainer $padding_y="40px" className="container">
        <h3 className="bungee-regular mb-4">Find you dream Job</h3>
        <div className="border shadow-sm py-4 px-5 bg-white-subtle rounded-4">
          <Row className="align-items-center">
            <Col sm className="d-flex flex-column pt-3 pb-3">
              <label
                className="fw-bold mb-2 fs-6 mt-auto"
                htmlFor="floatingInput1"
              >
                What
              </label>
              <FloatingLabel
                controlId="floatingInput1"
                label="Job title"
                className="mb-1"
              >
                <Form.Control
                  className="border bg-transparent border-0 outline-none"
                  type="text"
                  placeholder="name@example.com"
                  {...register("what")}
                />
                <ErrorMessage source={errors.what} />
              </FloatingLabel>
            </Col>
            <Col sm className="d-flex flex-column pt-3 pb-3">
              <label
                className="fw-bold mb-2 fs-6 mt-auto"
                htmlFor="floatingInput2"
              >
                Where
              </label>
              <Controller
                name="where"
                control={control}
                render={({ field }) => (
                  <Select
                    isMulti
                    styles={customStyles}
                    placeholder={"Job location"}
                    name="whereOption"
                    {...register("where")}
                    onChange={(val) => field.onChange(val)}
                    value={field.value}
                    options={locationOptions}
                    className="border-0 bg-secondary"
                    classNamePrefix="select"
                  />
                )}
              />
              <ErrorMessage source={errors.where} />
            </Col>
            <Col sm className="d-flex flex-column pt-3 pb-3">
              <label
                className="fw-bold mb-2 fs-6 mt-auto"
                htmlFor="floatingInput3"
              >
                Industry
              </label>
              <Controller
                name="industries"
                control={control}
                render={({ field }) => (
                  <Select
                    isMulti
                    styles={customStyles}
                    placeholder={"Job sector..."}
                    name="industryOption"
                    onChange={(val) => field.onChange(val)}
                    value={field.value}
                    options={industryOptions}
                    className="border-0 bg-secondary"
                    classNamePrefix="select"
                  />
                )}
              />
              <ErrorMessage source={errors.industries} />
            </Col>
          </Row>
          <div className="d-flex gap-3">
            <Form.Group controlId="moreFilterValue">
              <Controller
                name="more_filter"
                control={control}
                render={({ field }) => (
                  <Form.Check
                    type="checkbox"
                    label="More filter"
                    checked={field.value}
                    onChange={(e) => {
                      field.onChange(e.target.checked);
                      console.log(moreFilterValue);
                    }}
                  />
                )}
              />
            </Form.Group>
          </div>
          <ErrorMessage source={errors.more_filter} />
        </div>

        {moreFilterValue && (
          <div className="border shadow-sm py-2 px-5 bg-white-subtle rounded-4 mt-3">
            <Row>
              <Col sm lg="3" className="mt-3 mt-md-0">
                <Form.Group
                  className="w-100"
                  as={Col}
                  sm="6"
                  controlId="status"
                >
                  <Form.Label>Status</Form.Label>
                  <Controller
                    name="status"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <Select
                        required
                        placeholder="Select..."
                        {...register("status")}
                        value={statusOption.find((e) => e.value === value)}
                        options={statusOption}
                        onChange={(val) => onChange(val)}
                      />
                    )}
                  />
                  <ErrorMessage source={errors.status} />
                </Form.Group>
              </Col>
              <Col sm lg="3" className="mt-3 mt-md-0">
                <Form.Label>Start Date</Form.Label>
                <Controller
                  name="startDate"
                  control={control}
                  render={({ field }) => (
                    <Datetime
                      {...field}
                      timeFormat={false}
                      closeOnSelect={true}
                      dateFormat="DD/MM/YYYY"
                      inputProps={{
                        placeholder: 'Choose start date',
                        className: 'form-control',
                        readOnly: true // Optional: makes input read-only
                      }}
                      onChange={(date) => field.onChange(date ? date.toDate() : null)}
                    />
                  )}
                />
                <ErrorMessage source={errors.startDate} />
              </Col>
              <Col sm lg="3" className="mt-3 mt-md-0">
                <Form.Label>End Date</Form.Label>
                <Controller
                  name="endDate"
                  control={control}
                  render={({ field }) => (
                    <Datetime
                      {...field}
                      timeFormat={false}
                      closeOnSelect={true}
                      dateFormat="DD/MM/YYYY"
                      inputProps={{
                        placeholder: 'Choose end date',
                        className: 'form-control',
                        readOnly: true // Optional: makes input read-only
                      }}
                      onChange={(date) => field.onChange(date ? date.toDate() : null)}
                      isValidDate={(current) => {
                        // Ensure end date is after start date
                        return !startDate || current.isSameOrAfter(startDate, 'day');
                      }}
                    />
                  )}
                />
                <ErrorMessage source={errors.endDate} />
              </Col>
              <Col sm lg="3" className="align-self-end text-center mt-3">
                <Button className="w-100" onClick={handleSubmit(onSubmit)}>Search</Button>
              </Col>
            </Row>
          </div>
        )}

        <div className="mt-5">
          <h3 className="fw-bold">Recomended Jobs</h3>
          {Array.from({ length: 10 }).map(() => (
            <div className="p-2">
              <Hover>
                <div
                  className="btn text-start border border-secondary-subtle p-3 rounded-3 onHover"
                  onClick={() => navigate("job-description")}
                >
                  <div className="mb-2">
                    <Badge
                      className={`ms-auto text-dark fw-bold bg-primary-subtle fw-bolder align-self-start p-2 me-3`}
                    >
                      <span>Date: 12/12/1212</span>
                    </Badge>
                    <Badge
                      className={`ms-auto text-dark fw-bold bg-success-subtle fw-bolder align-self-start p-2`}
                    >
                      <span>2 positions</span>
                    </Badge>
                  </div>
                  <div className="mb-2">
                    <h3 className="py-2">
                      <WordSpan>Data Analyst</WordSpan>
                    </h3>
                    <div className="d-flex gap-sm-3 flex-column flex-sm-row">
                      <small className="fw-bold">Toronto-canada</small>
                      <small className="fw-bold">Full-Time</small>
                      <small className="fw-bold">80,000 up to 120,000</small>
                    </div>
                  </div>
                  <div className="mb-2">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed, neque cum quasi impedit quam aut officia tempora.
                      Inventore, praesentium possimus sunt repudiandae excepturi
                      cumque nobis voluptatum voluptatem. Debitis veniam
                      consequatur sed voluptatum assumenda, amet quia tenetur
                      accusamus magni nesciunt itaque.
                    </p>
                  </div>
                  <Badge
                    className={`ms-auto bg-danger-subtle text-secondary fw-bolder align-self-start p-2`}
                  >
                    Job Industry
                  </Badge>
                </div>
              </Hover>
            </div>
          ))}
        </div>
      </MyContainer>
    </>
  );
};

export default StaffJobPage;
