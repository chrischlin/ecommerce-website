<template>
  <div class="footer">
    <div class="company">
      <p style="font-size: 20px; font-weight: bold">COMPANY</p>
      <a href="#">Our Story</a>
      <a href="#">Store-info</a>
      <a href="#">Cooperation</a>
      <a href="#">Franchising</a>
      <a href="#">Career</a>
    </div>
    <div class="service">
      <p style="font-size: 20px; font-weight: bold">SERVICE</p>
      <a href="#">FAQ</a>
      <a href="#">Shipping & Delivery</a>
      <a href="#">Returns & Exchanges</a>
      <a href="#">Contact Us</a>
      <a href="#">Privacy & Cookie Policy</a>
    </div>
    <div>
      <p style="font-size: 40px; font-weight: bold">Never miss out!</p>
      <p>
        Sign up to our newsletter for 10% off your first order and claim your
        birthday reward!
      </p>
      <Input type="email" placeholder="Enter your Email" />
      <Button> SIGN UP </Button>
      <div class="icons">
        <a href=""
          ><font-awesome-icon icon="fa-brands fa-facebook" size="2x"
        /></a>
        <a href=""
          ><font-awesome-icon icon="fa-brands fa-instagram" size="2x"
        /></a>
        <a href=""
          ><font-awesome-icon icon="fa-brands fa-twitter" size="2x"
        /></a>
        <a href=""><font-awesome-icon icon="fa-brands fa-line" size="2x" /></a>
        <a href=""
          ><font-awesome-icon icon="fa-brands fa-pinterest" size="2x"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faLine,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebook, faInstagram, faLine, faPinterest, faTwitter);

export default {
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style>
button {
  margin-top: 10px;
  width: 100px;
  background-color: black;
  color: white;
  font-family: sans-serif;
  letter-spacing: 1.5px;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 300px;
  background-color: #e5dcd2;
  font-family: "Roboto", sans-serif;
}

.company {
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
}

.service {
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
}

.icons {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
</style>
