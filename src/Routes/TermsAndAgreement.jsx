import React from 'react'
import { MyContainer } from '../Components/Styles/GlobalStyle.css';
import { Button, Form } from 'react-bootstrap';

const TermsAndAgreement = () => {
  return (
    <>
      <MyContainer $padding_y="2rem" className="container">
        <div className="bg-light p-4 rounded-4 border border-2">
          <div className="d-flex justify-content-between">
            <h4>
              <span>#$#</span>Settings Page
            </h4>
          </div>
          <Form className="bg-light p-4 rounded-4 border border-2">
            <h4>Terms and Agreement</h4>

            <textarea
              style={{ minHeight: "200px" }}
              className="form-control mt-3"
              placeholder="Job summary here..."
              value={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam provident ea aperiam, sunt vel harum itaque nesciunt nemo ex cumque accusamus amet reiciendis repudiandae possimus, incidunt, laborum in eum quos deserunt! Corporis facilis eum praesentium, quaerat assumenda repellendus incidunt autem nobis, explicabo consequatur voluptate dolorem mollitia. Quibusdam, natus. Modi nobis nostrum, eligendi, maxime labore veniam nisi ea molestias dolor distinctio expedita tenetur blanditiis asperiores consectetur quam autem minima cumque, vel alias in numquam. Accusamus dolore aspernatur beatae ad necessitatibus commodi dolores vero delectus veniam! Cumque sunt natus laboriosam officia, similique repellendus, quos distinctio officiis quisquam enim voluptatibus. Tempore, debitis minima."}
            ></textarea>

            <div className="d-flex justify-content-center">
              <Button className="mt-3" style={{ width: "14rem" }}>Update</Button>
            </div>
          </Form>
        </div>
      </MyContainer>
    </>
  )
}

export default TermsAndAgreement;