import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'

export default function ValForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =async (data) => {
    console.log(data);
    try {
        const res = await axios.post("http://localhost:5000/user/Volunteer", data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        if (res.data.success === true) {
          console.log(res.data);
        }
      } catch (error) {
        console.log("Server is not responding");
      }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="fullname">Full name</label>
          <input
            type="text"
            id="fullname"
            {...register("fullname", { required: "Full name is required" })}
          />
          {errors.fullname && (
            <p className="text-sm text-red-500 mt-1">{errors.fullname.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="fullname">email</label>
          <input
            type="text"
            id="fullname"
            {...register("email", { required: "Full name is required" })}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="fullname">phone</label>
          <input
            type="text"
            id="fullname"
            {...register("phone", { required: "Full name is required" })}
          />
          {errors.phone && (
            <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div> <div>
          <label htmlFor="fullname">interest</label>
          <input
            type="text"
            id="fullname"
            {...register("interest", { required: "Full name is required" })}
          />
          {errors.interest && (
            <p className="text-sm text-red-500 mt-1">{errors.interest.message}</p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
