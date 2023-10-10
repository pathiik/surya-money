{/* <i class="fa-solid fa-money-bill-trend-up" style={{ color: '#000000' }}></i>
<i class="fa-solid fa-angle-right" style="color: #000000;"></i> */}

import servicesBarData from "./servicesBarData";

export default function Hero() {

    return (
        <section className="hero-sec">
            <div className="container-2">
                <div className="hero-wrapper">
                    <div className="hero-left">
                        <ul className="hero-l-services-area">
                            {servicesBarData.map((item) => {
                                return (
                                    <li>
                                        <div className="hero-l-services-left">
                                            <i class={item.mainIcon} style={{ color: '#000000' }}></i>
                                            <p>{item.title}</p>
                                        </div>
                                        <i class={item.moreIcon} style={{ color: '#000000' }}></i>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="hero-right">
                        <img src="assets/heroAssets/hero.png" alt="Hero Image" />
                    </div>
                </div>
            </div>
        </section>
    )
}