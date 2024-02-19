import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../Global";

export default function EditUser() {
  const { userid } = useParams(); 
  console.log(userid);

  const [user, setUser] = useState(null);
  useEffect(() => {
    axios.get(`${API}/${userid}`).then((response) => setUser(response.data));
  }, []);

  console.log(user);

  return user ? <EditUserForm user={user} /> : "Loading...";
}

function EditUserForm({ user }) {
  const navigate = useNavigate();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);
  const [image, setImage] = useState(user.img);
  const [street, setStreet] = useState(user.address.street);
  const [suite, setSuite] = useState(user.address.suite);
  const [city, setCity] = useState(user.address.city);
  const [zipcode, setZipcode] = useState(user.address.zipcode);
  const [lat, setLat] = useState(user.address.geo.lat);
  const [lan, setLan] = useState(user.address.geo.lan);
  const [phone, setPhone] = useState(user.phone);
  const [website, setWebsite] = useState(user.website);
  const [companyname, setCompanyName] = useState(user.company.name);
  const [catchPhrase, setCatchPhrase] = useState(user.company.catchPhrase);
  const [bs, setBS] = useState(user.company.bs);

  return (
    <div className="add-product-form">
      <TextField
        label="Name"
        variant="standard"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <br />
      <TextField
        label="Email"
        variant="standard"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <br />
      <TextField
        label="UserName"
        variant="standard"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <br />
      <br />

      <TextField
        label="Image"
        variant="standard"
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />
      <br />
      <br />

      <TextField
        label="Street"
        variant="standard"
        value={street}
        onChange={(event) => setStreet(event.target.value)}
      />
      <br />
      <br />
      <TextField
        label="Suite"
        variant="standard"
        value={suite}
        onChange={(event) => setSuite(event.target.value)}
      />
      <br />
      <br />
      <TextField
        label="City"
        variant="standard"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <br />
      <br />
      <TextField
        label="Zipcode"
        variant="standard"
        value={zipcode}
        onChange={(event) => setZipcode(event.target.value)}
      />
      <br />
      <br />
      <TextField
        label="Latitute"
        variant="standard"
        value={lat}
        onChange={(event) => setLat(event.target.value)}
      />
      <br />
      <br />
      <TextField
        label="Langitute"
        variant="standard"
        value={lan}
        onChange={(event) => setLan(event.target.value)}
      />
      <br />
      <br />
      <TextField
        label="Phone"
        variant="standard"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      <br />
      <br />
      <TextField
        label="Website"
        variant="standard"
        value={website}
        onChange={(event) => setWebsite(event.target.value)}
      />
      <br />
      <br />
      <TextField
        label="Company Name"
        variant="standard"
        value={companyname}
        onChange={(event) => setCompanyName(event.target.value)}
      />
      <br />
      <br />
      <TextField
        label="Catch Phrase"
        variant="standard"
        value={catchPhrase}
        onChange={(event) => setCatchPhrase(event.target.value)}
      />
      <br />
      <br />
      <TextField
        label="BS"
        variant="standard"
        value={bs}
        onChange={(event) => setBS(event.target.value)}
      />

      <br />
      <br />
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          const updateUser = {
            name: name,
            email: email,
            username: username,
            img: image,
            address: {
              street: street,
              suite: suite,
              city: city,
              zipcode: zipcode,
              geo: {
                lat: lat,
                lan: lan,
              },
            },
            phone: phone,
            website: website,
            company: {
              name: companyname,
              catchPhrase: catchPhrase,
              bs: bs,
            },
          };

          axios
            .put(`${API}/${user.id}`, updateUser, {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            })
            .then((data) => console.log(data))
            .then(() => navigate("/"));
        }}
      >
        Save
      </Button>
    </div>
  );
}
