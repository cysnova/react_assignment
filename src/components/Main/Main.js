import "../Main/Main.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Main(props) {
  return (
    <main className="card">
      <div className="card--header">
        <img src={props.avatar} alt="profile-picture"></img>
      </div>
      <div className="card--body">
        <h1 className="card--body--fullName">{props.fullName}</h1>
        <h2 class="card--body--title">{props.title}</h2>
        <h3 class="card--body--email">{props.email}</h3>
        <button class="card--body--btn">
          <span class="card--body--btn--icon">
            <MdEmail />
          </span>
          Email
        </button>
      </div>
      <div className="card--info">
        <div className="card--info--about">
          <h4 className="card--info--about--title">About</h4>
          <p className="card--info--about--content">{props.about}</p>
        </div>
        <div className="card--info--interests">
          <h5 className="card--info--interests--title">Interests</h5>
          <p className="card--info--interests--content">{props.interests}</p>
        </div>
      </div>
      <div className="card--footer">
        <div className="card--footer--icon">
          <FaTwitterSquare />
        </div>
        <div className="card--footer--icon">
          <FaFacebookSquare />
        </div>
        <div className="card--footer--icon">
          <FaInstagramSquare />
        </div>
        <div className="card--footer--icon">
          <FaLinkedin />
        </div>
        <div className="card--footer--icon">
          <FaGithubSquare />
        </div>
      </div>
    </main>
  );
}

export default Main;
