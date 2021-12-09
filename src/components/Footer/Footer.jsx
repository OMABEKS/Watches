import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {InstagramOutlined , YoutubeOutlined , FacebookOutlined ,TwitterOutlined} from '@ant-design/icons';

function Footer() {
    return (
      <div className='footer-container'>
         <div className="btn-top">
              
                <a onClick={() =>  window.scrollTo({top: 0, behavior: 'smooth'})
}>BACK TO TOPE</a>
              
              </div>
        
        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
             
              <h2>CUSTOMER CARE</h2>
              <Link to='/'>Contact Us</Link>
              <Link to='/'>Delivery</Link>
              <Link to='/'>Click & Collect</Link>
              <Link to='/'>Returns & Refunds </Link>
              <Link to='/'> Payment Options  </Link>
              <Link to='/'> Watches Of Switzerland</Link>
             
            </div>
            <div class='footer-link-items'>
              <h2>WHO WE ARE</h2>
              <Link to='/'>Our History</Link>
              <Link to='/'>Our Showrooms</Link>
              <Link to='/'>Calibre</Link>
              <Link to='/'> Calibre Podcast</Link>
              <Link to= '/'> Glossary  </Link>
              <Link to= '/'> Careers  </Link>
              <Link to= '/'>Corporate Policies  </Link>
              
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>ABOUT WOS US</h2>
              <Link to='/'>About Us</Link>
              <Link to='/'>Press Room</Link>
              <Link to='/'>Careers</Link>
              <Link to='/'>Newsletter Sign Up</Link>
            </div>
            <div class='footer-link-items'>
              <h2>FOLLOW US ON</h2>
              <div style={{width:'100%',  display: 'flex' , justifyContent:'space-around' , alignItems:'center' , fontSize:"150%" }} >
              <a href="https://www.instagram.com/watchesofswitzerland_usa/"><InstagramOutlined /></a>
              <a href="https://www.youtube.com/channel/UC4HEpZwsum3GQVw9AwF-FvA"><YoutubeOutlined /></a>
              <a href="https://www.facebook.com/WatchesofSwitzerland"> <FacebookOutlined /> </a>
              <a href="https://twitter.com/WoS_OfficialUK"> <TwitterOutlined /> </a>  
              </div>
              
            </div>
          </div>
        </div>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
           
        
        <Link to ="/">
          <img src="https://www.watchesofswitzerland.com/medias/usa-payment-options-group-1121.png?context=bWFzdGVyfHJvb3R8NTA1M3xpbWFnZS9wbmd8aDIwL2hkNS85MTIyMTcxMTI1NzkwLnBuZ3wzZDQ5ZGZhMjc2NjM4MzBlZjZhMjk1NzcyOWEyOGUwYzVjNGZiNzAzZGZmYjQ5Y2U5M2E1MTUxYzU5ZWRmMjVj" alt="" />
             
        </Link>
             
            </div>
            <small class='website-rights'> Copyright © 2021 Watches of Switzerland. All rights reserved.</small>

          </div>
        </section>
      </div>
    );
  }
  
  export default Footer;