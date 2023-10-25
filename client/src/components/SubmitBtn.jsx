import React from "react";
import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ formbtn }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button
      type="submit"
      className={`btn btn-block ${formbtn && "form-btn"} `}
      disabled={isSubmitting}
    >
      {isSubmitting ? "submitting" : "submit"}
    </button>
  );
};

export default SubmitBtn;
