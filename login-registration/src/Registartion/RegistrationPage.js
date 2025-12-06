import { useState } from "react";
const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    password: "",
  });
  const genders = ["Male", "Female", "Other"];

  const handleSubmit = (e) => {
    // e.preventDefault();

    console.log(formData.name);
    console.log(formData.age);
    console.log(formData.gender);
    console.log(formData.email);
    console.log(formData.password);
  };

  return (
    <>
      <div className="container-fluid vh-100">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="d-flex flex-column justify-content-center align-items-center p-4 border rounded bg-white shadow">
              <h1 className="mb-4">Register </h1>
              <div className="w-100 mb-3">
                <form>
                  <label classNme="form-label">Enter Your name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Name"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                  />
                  <label className="form-label">Age</label>
                  <input
                    type="number"
                    min="18"
                    max="99"
                    className="form-control"
                    onChange={(e) =>
                      setFormData({ ...formData, age: e.target.value })
                    }
                  />
                  <label className="form-lable">Select Gender</label>
                  <select
                    className="form-select "
                    aria-label="default select example"
                    value={formData.gender}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                  >
                    <option>Select Gender</option>
                    {genders &&
                      genders.map((gender) => <option>{gender}</option>)}
                  </select>
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email id"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                  <button
                    type="button"
                    className="btn btn-primary w-100 mb-3"
                    onClick={handleSubmit}
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
