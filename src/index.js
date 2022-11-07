import React from "react";
import ReactDOM from "react-dom";

const ourData = [
  {
    name: "Beyonce",
    src:
      "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
    phone: "+123 456 789",
    e_mail: "b@beyonce.com"
  },
  {
    name: "Jack Bauer",
    src:
      "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
    phone: "+987 654 321",
    e_mail: "jack@nowhere.com"
  },
  {
    name: "Chuck Norris",
    src:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    phone: "+918 372 574",
    e_mail: "gmail@chucknorris.com"
  }
];

function OurCard(props) {
  return (
    <div>
      {console.log({ props })}
      <h2>{props.name}</h2>
      <img src={props.src} alt="avatar_img" />
      <p>{props.phone}</p>
      <p>{props.e_mail}</p>
    </div>
  );
}

function App() {
  let name, src, phone, e_mail;
  var count_ = 0;

  return (
    <div>
      <h1>My Contacts</h1>
      <OurCard
        key={count_}
        name={ourData[0].name}
        src={ourData[0].src}
        phone={ourData[0].phone}
        e_mail={ourData[0].e_mail}
      />
      {console.log(ourData[0])}
      <br />
      <span
        style={{ border: "3px solid black", padding: "0.5rem", color: "green" }}
      >
        Below using array.map{" "}
      </span>
      {/* why can't we use array.forEach ?? */}
      {ourData.map((x) => {
        name = x.name;
        src = x.src;
        phone = x.phone;
        e_mail = x.e_mail;
        count_++;

        return (
          <OurCard
            key={count_}
            name={name}
            src={src}
            phone={phone}
            e_mail={e_mail}
          />
        );
      })}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
