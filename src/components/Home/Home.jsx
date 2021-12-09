import React from 'react';
import './Home.css'
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import video from "../../assets/videos/watches.mp4"

const { Meta } = Card;
const Home = () => {
    return (
        <div>
            <a><img style={{width: '1000px'}} src="https://www.watchesofswitzerland.com/medias/wosus-desktop-rolex-dec21.jpg?context=bWFzdGVyfHJvb3R8MzQ4NDUyfGltYWdlL2pwZWd8aDdhL2hmMC85MTMwNDc1OTEzMjQ2LmpwZ3wxYmM0NWQ2YmQwODAxMTNmZDcwNTM3NDE1NThjNDcwZjA1Yzk0OGVlMTYyMjg4YWIwNDhmOTEyODcxNDk0YWI5&imwidth=1920" alt="" /></a>

            <div className='img'>
            <a><img style={{width: '100px'}} src='https://content.thewosgroup.com/wosus/homepage/brand-logos/rolex.png' alt='' /></a>
            <a><img style={{width: '100px'}} src='https://content.thewosgroup.com/wosus/homepage/brand-logos/patek-philippe.png' alt='' /></a>
            <a><img style={{width: '100px'}} src='https://content.thewosgroup.com/wosus/homepage/brand-logos/cartier.png' alt='' /></a>
            <a><img style={{width: '100px'}} src='https://content.thewosgroup.com/wosus/homepage/brand-logos/grand-seiko.png' alt='' /></a>
            <a><img style={{width: '100px'}} src='https://content.thewosgroup.com/wosus/homepage/brand-logos/tudor.png' alt='' /></a>
            <a><img style={{width: '100px'}} src='https://content.thewosgroup.com/wosus/homepage/brand-logos/omega.png' alt='' /></a>
            <a><img style={{width: '100px'}} src='https://content.thewosgroup.com/wosus/homepage/brand-logos/breitling-logo-jan20.png' alt='' /></a>
            <a><img style={{width: '100px'}} src='https://content.thewosgroup.com/wosus/homepage/brand-logos/tag-heuer.png' alt='' /></a>
            <a><img style={{width: '100px'}} src='https://content.thewosgroup.com/wosus/homepage/brand-logos/hp-brand-hublot-logo-feb21.png' alt='' /></a>
            </div>
            <div className="link">
                <a style={{display: 'flex', justifyContent: 'center', color: 'black'}}>RECOMENDED FOR YOU</a>
            </div>
            <div className='cards'>
            <Card
            hoverable
            style={{ width: 320 }}
            cover={<img alt="example" src="https://content.thewosgroup.com/productimage/17720258/17720258_1.jpg" />}>
            <Meta title="ULYSSE NARDIN" description="Freak Vision" />
            </Card>
            <Card
            hoverable
            style={{ width: 320 }}
            cover={<img alt="example" src="https://content.thewosgroup.com/productimage/17720258/17720258_1.jpg" />}>
            <Meta title="ULYSSE NARDIN" description="Freak Vision" />
            </Card>
            <Card
            hoverable
            style={{ width: 320 }}
            cover={<img alt="example" src="https://content.thewosgroup.com/productimage/17720258/17720258_1.jpg" />}>
            <Meta title="ULYSSE NARDIN" description="Freak Vision" />
            </Card>
            <Card
            hoverable
            style={{ width: 320 }}
            cover={<img alt="example" src="https://content.thewosgroup.com/productimage/17720258/17720258_1.jpg" />}>
            <Meta title="ULYSSE NARDIN" description="Freak Vision" />
            </Card>

            
            </div>

             <div> 
              <Link to={"/"}>
             <img style={{display:'flex', maxWidth:"1400px", width:"100%", margin:"10% auto", }} src="https://content.thewosgroup.com/wosus/homepage/wosus-1wide-desktop-gwp-nov21-2.jpg"/>
             </Link>
             </div>

             <div className="video-mp4">
                 <video autoPlay muted loop style={{display:'flex', maxWidth:"1400px", width:"100%", margin:"10% auto", }}>
                     <source src={video} type="video/mp4"/>
                 </video>

             </div>
        </div>

    );
};

export default Home;