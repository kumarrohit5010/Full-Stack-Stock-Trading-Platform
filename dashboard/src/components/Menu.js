import React, {useContext, useMemo, useState, useEffect} from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import UserContext from "./UserContext";
import API_BASE_URL from "../config";
const LOGIN_URL = import.meta.env.VITE_LOGIN_URL || "http://localhost:3000/login";

const Menu = () => {
  const { user } = useContext(UserContext);

  const [selectMenu,SetselectMenu]=useState(0);
  const [isProfiledropdown,SetisProfiledropdown]=useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenu =(index)=>{
      SetselectMenu(index);
  }

  const handleMenuAndClose = (index) => {
    handleMenu(index);
    setIsMobileMenuOpen(false);
  }

  const handleProfile=()=>{
      SetisProfiledropdown(!isProfiledropdown);
  }

  const profile = useMemo(() => {
    if (user) {
      return user;
    }

    try {
      const storedUser = localStorage.getItem("zerrodhaUser");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      return null;
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await axios.post(`${API_BASE_URL}/logout`, {}, { withCredentials: true });
    } catch (error) {
      // Continue with client-side cleanup even if the request fails.
    } finally {
      localStorage.removeItem("zerrodhaUser");
      window.location.assign(LOGIN_URL);
    }
  };

  const menuClass="menu";
  const selectMenuClass="menu selected"
  const initials = profile
    ? `${profile.firstName?.[0] || ""}${profile.lastName?.[0] || ""}`.trim().toUpperCase() || "U"
    : "U";
  const displayName = profile ? `${profile.firstName || ""} ${profile.lastName || ""}`.trim() : "Guest";
  const profileDetails = [
    { label: "Full Name", value: displayName || "Guest" },
    { label: "Age", value: profile?.age ?? "N/A" },
    { label: "Gender", value: profile?.gender || "N/A" },
    { label: "Email", value: profile?.email || "No email available" },
  ];

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isMobileMenuOpen]);
  return (
    <div className="menu-container">
      <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
        <img src="logo.png" style={{ width: "50px" }} alt="img" />
        <button
          className="mobile-menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((s) => !s)}
        >
          ☰
        </button>
      </div>
      <div className={`menus ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-profile-card">
          <div className="mobile-profile-badge">Signed in</div>
          <div className="mobile-profile-row">
            <div className="mobile-profile-avatar">{initials}</div>
            <div className="mobile-profile-meta">
              <div className="mobile-profile-name">{displayName}</div>
            </div>
          </div>
          <div className="mobile-profile-details">
            {profileDetails.map((detail) => (
              <div className="profile-detail" key={detail.label}>
                <span className="profile-detail-label">{detail.label}</span>
                <span className="profile-detail-value">{detail.value}</span>
              </div>
            ))}
          </div>
          <button type="button" className="mobile-profile-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/">
              <p onClick={()=>handleMenuAndClose(0)} className={selectMenu===0?selectMenuClass:menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to='/orders'>
              <p onClick={()=>{handleMenuAndClose(1)}} className={selectMenu===1?selectMenuClass:menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to='/holdings'>
              <p onClick={()=>{handleMenuAndClose(2)}} className={selectMenu===2?selectMenuClass:menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to='/positions'>
              <p onClick={()=>{handleMenuAndClose(3)}} className={selectMenu===3?selectMenuClass:menuClass}>Positions</p>
            </Link>
          </li>
          <li>            
            <Link style={{textDecoration:"none"}} to='/funds'>
              <p onClick={()=>{handleMenuAndClose(4)}} className={selectMenu===4?selectMenuClass:menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to='/apps'>
              <p onClick={()=>{handleMenuAndClose(5)}} className={selectMenu===5?selectMenuClass:menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfile} role="button" tabIndex={0}>
          <div className="avatar">{initials}</div>
          <p className="username">{displayName}</p>
          <div className={`profile-dropdown ${isProfiledropdown ? "open" : ""}`}>
            <div className="profile-dropdown-header">
              <div className="profile-dropdown-name">{displayName}</div>
            </div>
            <div className="profile-dropdown-details">
              {profileDetails.map((detail) => (
                <div className="profile-detail" key={detail.label}>
                  <span className="profile-detail-label">{detail.label}</span>
                  <span className="profile-detail-value">{detail.value}</span>
                </div>
              ))}
            </div>
            <button type="button" className="profile-logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
