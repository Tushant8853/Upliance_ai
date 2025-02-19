import React, { useState, useEffect, useCallback } from "react";

const UserDataForm = () => {
  const [formData, setFormData] = useState({ name: "", address: "", email: "", phone: "" });
  const [userId, setUserId] = useState(null);
  const [isFormSaved, setIsFormSaved] = useState(true);

  useEffect(() => {
    const savedUserData = JSON.parse(localStorage.getItem("userData"));
    if (savedUserData) {
      setFormData(savedUserData);
      setUserId(savedUserData.userId);
    } else {
      const generatedUserId = "user-" + Date.now();
      setUserId(generatedUserId);
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    setIsFormSaved(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify({ ...formData, userId }));
    setIsFormSaved(true);
    alert("Form submitted and data saved!");
  };

  const handleBeforeUnload = useCallback(
    (e) => {
      if (!isFormSaved) {
        const message = "You have unsaved changes. Do you really want to leave?";
        e.returnValue = message;
        return message;
      }
    },
    [isFormSaved]
  );

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [handleBeforeUnload]);

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} style={styles.input} />
        </label>
        <br />
        <label style={styles.label}>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} style={styles.input} />
        </label>
        <br />
        <label style={styles.label}>
          Phone Number:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={styles.input} />
        </label>
        <br />
        <button type="submit" style={styles.button}>
          Save
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: { width: "100%", margin: "0 auto", padding: "5px" },
  form: { display: "flex", flexDirection: "column" },
  label: { marginBottom: "5px" },
  input: { padding: "8px", marginBottom: "5px", border: "1px solid #ccc", borderRadius: "4px" },
  button: { padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" },
};

export default UserDataForm;
