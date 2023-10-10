import { useState, useEffect } from 'react';
import popularServicesData from './popularServicesData';

export default function PopularServices() {

    const [popularServices, setPopularServices] = useState([]);
    const [visiblePopularServices, setVisiblePopularServices] = useState([4]);
    const [iconInfo, setIconInfo] = useState('fa-angle-down');
    const showMore = () => {
        if (visiblePopularServices <= 4) {
            setVisiblePopularServices(visiblePopularServices + 4);
            setIconInfo('fa-angle-up');
        } else {
            setVisiblePopularServices(4);
            setIconInfo('fa-angle-down');
        }
    }

    useEffect(() => {
        setPopularServices(popularServicesData);
    }, []);

    return (
        <section className="popular-services-sec">
            <div className="container-2">
                <div className="popular-services-wrapper">
                    <h4>Popular Services</h4>
                    <div className="popular-services-area">
                        {popularServices.slice(0, visiblePopularServices).map((data) => {
                            return (
                                <div className="popular-services-card">
                                    <div className='popular-services-card-img-box'>
                                        <img src={`assets/popularServicesAssets/${data.img}`} alt={data.title} />
                                    </div>
                                    <p><span>{data.offer}</span></p>
                                    <div className="popular-services-card-content">
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