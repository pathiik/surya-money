import { useState, useEffect } from 'react';
import onlineShoppingData from './onlineShoppingData';

export default function OnlineShopping() {

    const [onlineShopping, setOnlineShopping] = useState([]);
    const [visibleOnlineShopping, setVisibleOnlineShopping] = useState([4]);
    const [iconInfo, setIconInfo] = useState('fa-angle-down');
    const showMore = () => {
        if (visibleOnlineShopping <= 4) {
            setVisibleOnlineShopping(visibleOnlineShopping + 4);
            setIconInfo('fa-angle-up');
        } else {
            setVisibleOnlineShopping(4);
            setIconInfo('fa-angle-down');
        }
    }

    useEffect(() => {
        setOnlineShopping(onlineShoppingData);
    }, []);

    return (
        <section className="online-shopping-sec">
            <div className="container-2">
                <div className="online-shopping-wrapper">
                    <h4>Online Shopping</h4>
                    <div className="online-shopping-area">
                        {onlineShopping.slice(0, visibleOnlineShopping).map((data) => {
                            return (
                                <div className="online-shopping-card">
                                    <div className='online-shopping-card-img-box'>
                                        <img src={`assets/onlineShoppingAssets/${data.img}`} alt={data.title} />
                                    </div>
                                    <p><span>{data.offer}</span></p>
                                    <div className="online-shopping-card-content">
                                        <h4>{data.title}</h4>
                                        <a href="#">View Details</a>
                                    </div>
                                </div>
                            )
                        })}
                    <button onClick={showMore}><i class={`fa-solid ${iconInfo}`} style={{ color: '#000000' }}></i></button>
                    </div>
                </div>
            </div>
        </section>
    )
}