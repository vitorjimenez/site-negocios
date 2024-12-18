'use client';
import Link from "next/link";
import { useEffect } from "react";
import "@styles/navbar.css";

export default function Navbar() {
  
  useEffect(() => {
    const mobileMenu = document.querySelector(".mobile-menu");
    const navList = document.querySelector(".nav-list");
    const navLinks = document.querySelectorAll(".nav-list li");
    const activeClass = "active";

    const animateLinks = () => {
      navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
      });
    };

    const animateList = () => {
      if (navList.style.display == ''){
        navList.style.display = 'flex';
        navList.style.animation = "navListEntrace 0.3s"
      }else if (navList.style.display == 'none'){
        navList.style.display = 'flex'
        navList.style.animation = "navListEntrace 0.3s" 
      } else {
        navList.style.animation = "navListBack 0.3s"
        setTimeout(() => {
          navList.style.display = 'none'
        }, 300)
      }
    }

    const handleClick = () => {
      navList.classList.toggle(activeClass);
      mobileMenu.classList.toggle(activeClass);
      if(navList.classList.contains("active")) {
        window.addEventListener('scroll', () => {
          const navHeight = document.querySelector('.navbar-content').offsetHeight;
          const scrollTop = window.scrollY;
          if (scrollTop > navHeight) {
              navList.style.transform = "translateY(-3.9931875rem)";
          } else {
              navList.style.transform = "translateY(0)";
          }
        });
      }
      animateList();
      animateLinks();
    };
  
    if (mobileMenu) {
      mobileMenu.addEventListener("click", handleClick);
    }
    
    return () => {
      if (mobileMenu) {
        mobileMenu.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div className="navbar-main">
      <nav className="navbar-content">
        <h1><Link href="/" className="logo">Seu logo</Link></h1>
        <div className="mobile-menu">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className="nav-list">
          <li><Link href="/sobre">Sobre nós</Link></li>
          <li><Link href="/orcamento">Fazer orçamento</Link></li>
          <li><Link href="/produtos">Produtos</Link></li>
          <li><Link href="/contatos">Contatos</Link></li>
        </ul>
      </nav>
    </div>
  );
}