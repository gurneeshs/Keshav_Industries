const About = () => {
    return (
        <div className="w-full py-24 home_abt bg-[url('../img/Home_abt_img.jpg')] bg-cover bg-center">
            <div className="flex">
                <div className="w-1/2"></div>
                <div className="w-1/2">
                    <div className="flex flex-col items-start space-y-4">
                        <img className=" h-20" src="../img/Logo_removebg.png" alt="Logo" />
                        <h1 className="mt-5 text-4xl font-bold">
                            Welcome to Keshav <br /> Industry
                        </h1>
                        <p className="text-lg">
                            We, Keshav Industries Private Limited started <br />
                            our journey in 2009 by manufacturing the world's <br />
                            best Soya Refined Oil and Non-GMO Soya<br />
                            Lecithin.<br /><br />
                            After the legacy of more than a decade in the Soya<br />
                            Industry, we have started to manufacture<br />
                            Mustard Oil and provide our best Mustard Oil<br />
                            in the Indian Domestic Market.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About
