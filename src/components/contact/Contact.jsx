import Map from "../map/Map";
import "./contact.scss";
export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact" id="contact">
      <div className="contanier">
        <div className="left">
          <form>
            <h1>Contact Us</h1>
            <input type="email" name="" id="" placeholder="email" />
            <input type="text" name="" id="" placeholder="name" />
            <textarea rows={10} placeholder="Write Your message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="right">
          <Map />
        </div>
      </div>
    </div>
  );
}
