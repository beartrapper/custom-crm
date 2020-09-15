import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          {/* <li class="nav-item nav-profile">
            <a href="#" class="nav-link">
              <div class="profile-image">
                <img class="img-xs rounded-circle" src="../../../assets/images/faces/face8.jpg" alt="profile image">
                <div class="dot-indicator bg-success"></div>
              </div>
           
            </a>
          </li> */}
          {/* <li class="nav-item nav-category">Main Menu</li> */}
          
          <li class="nav-item">
            <Link to="/dashboard/contacts" class="nav-link">
              <i class="menu-icon typcn typcn-document-text"></i>
              <span class="menu-title">Contacts</span>
            </Link>
          </li>
          {/* <li class="nav-item">
            <Link to="/dashboard" class="nav-link">
              <i class="menu-icon typcn typcn-document-text"></i>
              <span class="menu-title">Dashboard</span>
            </Link>
          </li>

          <li class="nav-item">
            <Link to="/dashboard/users" class="nav-link">
              <i class="menu-icon typcn typcn-document-text"></i>
              <span class="menu-title">Users</span>
            </Link>
          </li>
         
        
          <li class="nav-item">
            <Link to="/dashboard/invoices" class="nav-link">
              <i class="menu-icon typcn typcn-document-text"></i>
              <span class="menu-title">Invoices</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/dashboard/products" class="nav-link">
              <i class="menu-icon typcn typcn-document-text"></i>
              <span class="menu-title">Products</span>
            </Link>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#ui-basic"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <i class="menu-icon typcn typcn-coffee"></i>
              <span class="menu-title">Revenue Report</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="ui-basic">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <Link class="nav-link" to="/dashboard/best-customers">
                    Best Customers
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/dashboard/revenue-by-event">
                    Revenue By Month
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/dashboard/revenue-by-months">
                    Revenue By Event
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#aut"
              aria-expanded="false"
              aria-controls="aut"
            >
              <i class="menu-icon typcn typcn-coffee"></i>
              <span class="menu-title">Projects</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="aut">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <Link class="nav-link" to="/dashboard/create-project">
                    Create New
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/dashboard/project">
                    Project 2
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/dashboard/project">
                    Project 3
                  </Link>
                </li>
              </ul>
            </div>
          </li>
       */}
        </ul>
      </nav>
    </>
  );
}
