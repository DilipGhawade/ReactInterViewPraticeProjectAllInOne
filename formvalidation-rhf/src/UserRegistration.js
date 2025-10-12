const { useForm } = require("react-hook-form");

const UserRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(`Form data ${data}`);
    reset();
  };
  const errorStyle = { color: "red" };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 1. Text Input: First Name */}
        <div style={{ marginTop: "40px" }}>
          <input
            {...register("firstName", { required: "First Name is required" })}
            placeholder="Enter Your First Name"
          />
          {errors.firstName && (
            <p style={errorStyle}>{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("lastName", { required: "Last Name is required! " })}
            placeholder="Enter Your Last Name"
          />
          {errors.lastName && (
            <p style={errorStyle}>{errors.lastName.message}</p>
          )}
        </div>

        {/* Email  input */}
        <div>
          <input
            type="email"
            {...register("email", {
              required: "Eail is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Enter Your Email"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <input
            type="password"
            {...register("password", { required: "Enter Your password" })}
            placeholder="Enter Your password"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default UserRegistration;
