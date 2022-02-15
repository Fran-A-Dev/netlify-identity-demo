import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../stores/authContext";
import { logout } from "netlify-identity-widget";

export default function Navbar() {
  const { user, login, logout } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="container">
      <nav>
        <Image src="/rupee.png" width={50} height={48} />
        <h1>Authentication Stoke</h1>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="https://docs.netlify.com/visitor-access/identity/">
              <a>Docs</a>
            </Link>
          </li>
          {!user && (
            <li onClick={login} className="btn">
              Login/Signup
            </li>
          )}
          {user && <li>{user.email}</li>}
          {user && (
            <li onClick={logout} className="btn">
              Logout
            </li>
          )}
        </ul>
      </nav>
      <div className="banner">
        <Image src="/banner.png" width={720} height={276} />
      </div>
    </div>
  );
}
