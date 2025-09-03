import Footer from '@/components/user/Footer'
import React from 'react'

const page = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
              <h4 className="page-title">Orders</h4>
              <div className="">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="#">Mifty</a>
                  </li>
                  {/*end nav-item*/}
                  <li className="breadcrumb-item">
                    <a href="#">Ecommerce</a>
                  </li>
                  {/*end nav-item*/}
                  <li className="breadcrumb-item active">Orders</li>
                </ol>
              </div>
            </div>
            {/*end page-title-box*/}
          </div>
          {/*end col*/}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h4 className="card-title">Orders</h4>
                  </div>
                  {/*end col*/}
                  <div className="col-auto">
                    <button className="btn btn-primary">
                      <i className="fas fa-plus me-1" /> Add Order
                    </button>
                  </div>
                  {/*end col*/}
                </div>{" "}
                {/*end row*/}
              </div>
              {/*end card-header*/}
              <div className="card-body pt-0">
                <div className="table-responsive">
                  <table className="table mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Date</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th className="text-end">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 1, 1, 1, 1, 1, 1, 1].map((order) => (
                        <tr>
                          <td>
                            <a href="ecommerce-order-details.html">#546987</a>
                          </td>
                          <td>
                            <p className="d-inline-block align-middle mb-0">
                              <span className="d-block align-middle mb-0 product-name text-body">
                                Bata Shoes
                              </span>
                              <span className="text-muted font-13">
                                size-08 (Model 2024)
                              </span>
                            </p>
                          </td>
                          <td>15/08/2023</td>
                          <td>UPI</td>
                          {true ? <td>
                            <span className="badge bg-success-subtle text-success">
                              <i className="fas fa-check me-1" /> Completed
                            </span>
                          </td> : <td>
                            <span className="badge bg-danger-subtle text-danger">
                              <i className="fas fa-xmark me-1" />Cancle</span>
                          </td>}
                          <td>$390</td>
                          <td className="text-end">
                            <a href="#">
                              <i className="las la-trash-alt text-secondary fs-18" />
                            </a>
                          </td>
                        </tr>
                      ))}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end col */}
        </div>
      </div>
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="Appearance"
        aria-labelledby="AppearanceLabel"
      >
        <div className="offcanvas-header border-bottom justify-content-between">
          <h5 className="m-0 font-14" id="AppearanceLabel">
            Appearance
          </h5>
          <button
            type="button"
            className="btn-close text-reset p-0 m-0 align-self-center"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <h6>Account Settings</h6>
          <div className="p-2 text-start mt-3">
            <div className="form-check form-switch mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="settings-switch1"
              />
              <label className="form-check-label" htmlFor="settings-switch1">
                Auto updates
              </label>
            </div>
            {/*end form-switch*/}
            <div className="form-check form-switch mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="settings-switch2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="settings-switch2">
                Location Permission
              </label>
            </div>
            {/*end form-switch*/}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="settings-switch3"
              />
              <label className="form-check-label" htmlFor="settings-switch3">
                Show offline Contacts
              </label>
            </div>
            {/*end form-switch*/}
          </div>
          {/*end /div*/}
          <h6>General Settings</h6>
          <div className="p-2 text-start mt-3">
            <div className="form-check form-switch mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="settings-switch4"
              />
              <label className="form-check-label" htmlFor="settings-switch4">
                Show me Online
              </label>
            </div>
            {/*end form-switch*/}
            <div className="form-check form-switch mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="settings-switch5"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="settings-switch5">
                Status visible to all
              </label>
            </div>
            {/*end form-switch*/}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="settings-switch6"
              />
              <label className="form-check-label" htmlFor="settings-switch6">
                Notifications Popup
              </label>
            </div>
            {/*end form-switch*/}
          </div>
          {/*end /div*/}
        </div>
        {/*end offcanvas-body*/}
      </div>
    </>
  )
}

export default page