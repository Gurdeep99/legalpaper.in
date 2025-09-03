import React from 'react'

const Footer = () => {
  return (
    <footer className="footer text-center text-sm-start d-print-none">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card mb-0 rounded-bottom-0">
                <div className="card-body">
                  <p className="text-muted mb-0">
                    © Legal Paper
                    <span className="text-muted d-none d-sm-inline-block float-end">
                      Design & Developed with{" "}
                      <i className="iconoir-heart-solid text-danger align-middle" />
                      {" by "}<a href='https://gurdeep.net' target="_blank" rel="noopener noreferrer">Gurdeep Singh</a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer