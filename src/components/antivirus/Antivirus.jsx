import { useState, useEffect } from 'react';
import antivirusData from './antivirusData';

export default function Antivirus() {

    const [antivirus, setAntivirus] = useState([]);
    const [visibleAntivirus, setVisibleAntivirus] = useState([4]);
    const [iconInfo, setIconInfo] = useState('fa-angle-down');
    const showMore = () => {
        if (visibleAntivirus <= 4) {
            setVisibleAntivirus(visibleAntivirus + 4);
            setIconInfo('fa-angle-up');
        } else {
            setVisibleAntivirus(4);
            setIconInfo('fa-angle-down');
        }
    }

    useEffect(() => {
        setAntivirus(antivirusData);
    }, []);

    return (
        <section className="antivirus-sec">
            <div className="container-2">
                <div className="antivirus-wrapper">
                    <h4>Antivirus</h4>
                    <div className="antivirus-area">
                        {antivirus.slice(0, visibleAntivirus).map((data) => {
                            return (
                                <div className="antivirus-card">
                                    <div className='antivirus-card-img-box'>
                                        <img src={`assets/antivirusAssets/${data.img}`} alt={data.title} />
                                    </div>
                                    <p><span>{data.offer}</span></p>
                                    <div className="antivirus-card-content">
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