const packs = [
            {
                imgURL: "https://surgesounds.com/wp-content/uploads/SurgeSounds-FutureBounce2Promo4.jpg",
                title: "FUTURE BOUNCE 2",
                subTitle: "Inspired by Brooks Mesto &amp; Mike Williams",
                description: "128 Serum Presets 3 Construction Kits",
                price: "$29"
            },
        ]

        function Pack(){
            return (
                <div>
                    {packs.map(pack => 
                        <a>
                            <img src={pack.imgURL}/>
                            <h2>{pack.title}</h2>
                            <p>{pack.subTitle}</p>
                            <p>{pack.description}</p>
                            <p>{pack.price}</p>
                        </a>
                    )}
                </div>
            )
        }

        ReactDOM.render(
                <Pack/>,
            document.getElementById('root')
        );
