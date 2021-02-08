import React from "react";

export const Assignment = ({
  currentViewingNow = 2,
  title = "Ethnic Wear November 2017",
  lastOpened = "2 minutes",
  visitors = 16,
  unreadVisitors = 6,
  inquiries = 10,
  unreadInquiries = 2,
  productUris = [
    "https://assets.ajio.com/medias/sys_master/root/hb1/hfe/16211000066078/-473Wx593H-461149056-pink-MODEL4.jpg",
    "https://assets.ajio.com/medias/sys_master/root/hb1/hfe/16211000066078/-473Wx593H-461149056-pink-MODEL4.jpg",
    "https://assets.ajio.com/medias/sys_master/root/hb1/hfe/16211000066078/-473Wx593H-461149056-pink-MODEL4.jpg",
    "https://assets.ajio.com/medias/sys_master/root/hb1/hfe/16211000066078/-473Wx593H-461149056-pink-MODEL4.jpg",
  ],
  productCount = 14,
}) => {
  return (
    <div className="container min-vh-100  d-flex justify-content-center align-center">
      <div
        className="card m-auto w-100 bg-dark text-white"
        style={{ maxWidth: "600px" }}
      >
        <div className="card-header">
          <button className="btn btn-danger rounded">
            {" "}
            {currentViewingNow + " Viewing Now"}
          </button>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-8 ">
              <h2>{title}</h2>
              <p className="text-success">Last Opened {lastOpened} ago</p>
              <br />
            </div>
            <div className="col-4">
              <div style={{ position: "relative" }}>
                <img
                  src={productUris[0]}
                  alt=""
                  className="rounded-circle img-thumbnail"
                  width="55"
                  style={{
                    position: "absolute",
                    zIndex: 4,
                    top: 10,
                    left: 20,
                  }}
                />
                <img
                  src={productUris[1]}
                  alt=""
                  className="rounded-circle img-thumbnail"
                  width="55"
                  style={{
                    position: "absolute",
                    zIndex: 3,
                    top: 0,
                    left: 60,
                  }}
                />
                <img
                  src={productUris[2]}
                  alt=""
                  className="rounded-circle img-thumbnail"
                  width="55"
                  style={{
                    position: "absolute",
                    zIndex: 2,
                    top: 45,
                    left: 20,
                  }}
                />
                <img
                  src={productUris[3]}
                  alt=""
                  className="rounded-circle img-thumbnail"
                  width="55"
                  style={{
                    position: "absolute",
                    zIndex: 1,
                    top: 40,
                    left: 60,
                  }}
                />
                <button
                  className="btn btn-light rounded-circle"
                  style={{ position: "absolute", top: 40, left: 50, zIndex: 5 }}
                >
                  {productCount}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="row align-middle">
            <div className="col-8 ">
              <div className="my-3">
                <ul className=" list-group  list-unstyled list-group-horizontal">
                  <li>
                    <img
                      src="https://sx-web.firebaseapp.com/images/eye-fill.svg"
                      alt=""
                      className="mx-1"
                    />
                    <span>{visitors}</span>
                    <span className="btn btn-danger rounded-pill mx-2 py-0">
                      {" "}
                      + {unreadVisitors}
                    </span>
                  </li>
                  <li>
                    <img
                      src="https://sx-web.firebaseapp.com/images/envelope.svg"
                      alt=""
                      className="mx-1"
                    />
                    <span>{inquiries}</span>
                    <span className="btn btn-danger rounded-pill mx-2 py-0">
                      {" "}
                      + {unreadInquiries}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-4 h-100">
              <button className="btn">
                <img
                  src="https://sx-web.firebaseapp.com/images/share-fill.svg"
                  alt=""
                  width="40"
                />
              </button>
              <button className="btn">
                <img
                  src="https://sx-web.firebaseapp.com/images/whatsapp.svg"
                  alt=""
                  width="40"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
