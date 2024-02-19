import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { API } from "../Global";

const formValidationsSchema = yup.object({
  //custom error message for password and email fields
  name: yup.string().min(2, "Need a longer name").required("Name is mandatory"),

  email: yup
    .string()
    .min(2, "Need a longer name")
    .required("Name is mandatory"),

  username: yup
    .string()
    .min(2, "Need a longer name")
    .required("Name is mandatory"),

  image: yup
    .string()
    .min(2, "Need a longer name")
    .required("Name is mandatory"),

  street: yup
    .string()
    .min(2, "Need a longer name")
    .required("Name is mandatory"),

  suite: yup
    .string()
    .min(2, "Need a longer name")
    .required("Name is mandatory"),

  city: yup.string().min(2, "Need a longer name").required("Name is mandatory"),

  zipcode: yup
    .string()
    .min(2, "Need a longer name")
    .required("Name is mandatory"),

  lat: yup.string().min(2, "Need a longer name").required("Name is mandatory"),

  lan: yup.string().min(2, "Need a longer name").required("Name is mandatory"),

  phone: yup
    .string()
    .min(2, "Need a longer name")
    .required("Name is mandatory"),

  website: yup
    .string()
    .min(2, "Need a longer name")
    .required("Name is mandatory"),

  companyname: yup
    .string()
    .min(2, "Need a longer name")
    .required("Name is mandatory"),

  catchPhrase: yup
    .string()
    .min(2, "Need a longer name")
    .required("Name is mandatory"),

  bs: yup.string().min(2, "Need a longer name").required("Name is mandatory"),
});

export default function AddUser() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      username: "",
      image: "",
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      lat: "",
      lan: "",
      phone: "",
      website: "",
      companyname: "",
      catchPhrase: "",
      bs: "",
    },
    validationSchema: formValidationsSchema,

    onSubmit: (values) => {
      console.log("On Submit", values);
    },
  });

  return (
    <div className="add-product-form">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="name"
          name="name"
          label="Name"
          variant="standard"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
        <br />
        <br />
        <TextField
          id="email"
          name="email"
          label="Email"
          variant="standard"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
        <br />
        <br />
        <TextField
          id="username"
          name="username"
          label="Username"
          variant="standard"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username
          ? formik.errors.username
          : ""}
        <br />
        <br />
        <TextField
          id="image"
          name="image"
          label="Image"
          variant="standard"
          value={formik.values.image}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.image && formik.errors.image ? formik.errors.image : ""}
        <br />
        <br />
        <TextField
          id="street"
          name="street"
          label="Street"
          variant="standard"
          value={formik.values.street}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.street && formik.errors.street
          ? formik.errors.street
          : ""}
        <br />
        <br />
        <TextField
          id="suite"
          name="suite"
          label="Suite"
          variant="standard"
          value={formik.values.suite}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.suite && formik.errors.suite ? formik.errors.suite : ""}
        <br />
        <br />
        <TextField
          id="city"
          name="city"
          label="City"
          variant="standard"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.city && formik.errors.city ? formik.errors.city : ""}
        <br />
        <br />
        <TextField
          id="zipcode"
          name="zipcode"
          label="Zipcode"
          variant="standard"
          value={formik.values.zipcode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.zipcode && formik.errors.zipcode
          ? formik.errors.zipcode
          : ""}
        <br />
        <br />
        <TextField
          id="lat"
          name="lat"
          label="Latitude"
          variant="standard"
          value={formik.values.lat}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lat && formik.errors.lat ? formik.errors.lat : ""}
        <br />
        <br />
        <TextField
          id="lng"
          name="lng"
          label="Langitude"
          variant="standard"
          value={formik.values.lng}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lng && formik.errors.lng ? formik.errors.lng : ""}
        <br />
        <br />
        <TextField
          id="phone"
          name="phone"
          label="Phone"
          variant="standard"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.phone && formik.errors.phone ? formik.errors.phone : ""}
        <br />
        <br />
        <TextField
          id="website"
          name="website"
          label="Website"
          variant="standard"
          value={formik.values.website}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.website && formik.errors.website
          ? formik.errors.website
          : ""}
        <br />
        <br />
        <TextField
          id="companyname"
          name="companyname"
          label="Company name"
          variant="standard"
          value={formik.values.companyname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.companyname && formik.errors.companyname
          ? formik.errors.companyname
          : ""}
        <br />
        <br />
        <TextField
          id="catchPhrase"
          name="catchPhrase"
          label="Catch Phrase"
          variant="standard"
          value={formik.values.catchPhrase}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.catchPhrase && formik.errors.catchPhrase
          ? formik.errors.catchPhrase
          : ""}
        <br />
        <br />
        <TextField
          id="bs"
          name="bs"
          label="BS"
          variant="standard"
          value={formik.values.bs}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.bs && formik.errors.bs ? formik.errors.bs : ""}
      </form>
      <br />
      <br />
      <Button
        type="submit"
        variant="contained"
        onClick={() => {
          const newUser = {
            name: formik.values.name,
            email: formik.values.email,
            username: formik.values.username,
            img: formik.values.image,
            address: {
              street: formik.values.street,
              suite: formik.values.suite,
              city: formik.values.city,
              zipcode: formik.values.zipcode,
              geo: {
                lat: formik.values.lat,
                lan: formik.values.lan,
              },
            },
            phone: formik.values.phone,
            website: formik.values.website,
            company: {
              name: formik.values.companyname,
              catchPhrase: formik.values.catchPhrase,
              bs: formik.values.bs,
            },
          };

          axios
            .post(`${API}`, newUser, {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            })
            .then((newUser) => console.log(newUser))
            .then(() => navigate("/"));
        }}
      >
        Add User
      </Button>
    </div>
  );
}
