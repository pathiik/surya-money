import banksData from "./banksData";

export default function Banks() {

    return (
        <section className="banks-sec">
            <div className="container-2">
                <div className="banks-wrapper">
                    <h4>Partner Banks</h4>
                    <div className="banks-area">
                        {banksData.map((data) => {
                            return (
                                <div className="banks-card">
                                    <div className='banks-card-img-box'>
                                        <img src={`assets/banksAssets/${data.img}`} alt={data.name} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}