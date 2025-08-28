import React from "react";
import { useActionState } from "react";
import { redirect } from "react-router-dom";

const LatestFeature = () => {
  const [error, handleSubmitAction, isPending] = useActionState(
    async (prev, formdata) => {
      const err = await updateName(formdata.get("name"));
      if (err) return err; // ✅ return the actual error string
      redirect("/success"); // ✅ only runs if no error
      return null; // ✅ no error
    },
    null
  );

  // ✅ Mock async API function
  async function updateName(name) {
    // simulate API delay
    await new Promise((res) => setTimeout(res, 1500));

    if (!name || name.trim().length < 3) {
      return "Name must be at least 3 characters long!";
    }
    if (name.toLowerCase() === "error") {
      return "This name is not allowed!";
    }

    // simulate success
    console.log("✅ Name updated successfully:", name);
    return null; // ✅ no error on success
  }

  return (
    <form action={handleSubmitAction}>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        style={{ padding: "8px", marginBottom: "10px" }}
      />

      <button
        type="submit"
        disabled={isPending}
        style={{
          padding: "8px 12px",
          background: isPending ? "#ccc" : "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: isPending ? "not-allowed" : "pointer",
        }}
      >
        {isPending ? "Updating..." : "Update"}
      </button>

      {error && <p style={{ color: "red", marginTop: "10px" }}>⚠️ {error}</p>}
    </form>
  );
};

export default LatestFeature;
