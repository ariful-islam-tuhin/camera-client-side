import React from "react";
import { useForm } from "react-hook-form";
import "./AddReview.css";

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const uri = "http://localhost:5000/reviews";
    fetch(uri, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("added review successfully");
          reset();
        }
      });
  };
  return (
    <div className="addreview-form">
      <form className="review-from p-4 m-4" onSubmit={handleSubmit(onSubmit)}>
        <h2>Please Give a Review</h2>
        <input
          className="textarea w-100 p-1 rounded"
          {...register("img")}
          placeholder="Your img Url"
          required
        />{" "}
        <br />
        <input
          className="textarea w-100 p-1 rounded"
          {...register("name")}
          placeholder="Your Name"
          required
        />
        <br />
        <textarea
          className="textarea w-100 p-1 rounded "
          {...register("review")}
          placeholder="Your Review"
          required
        />
        <br />
        <input
          type="number"
          {...register("rating", { min: 0, max: 5 })}
          placeholder="Please give Rating (0-5)"
          required
        />
        <br />
        <input type="submit" className="confirmbutton bg-warning pt-1 mt-2" />
      </form>
    </div>
  );
};

export default AddReview;
