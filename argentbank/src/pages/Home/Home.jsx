import Banner from "../../components/Banner/Banner";
import Feature from "../../components/Feature/Feature";


function Home() {
    return (
        <main>
            {/*ne pas oublier d'optimiser les images !! */}
            <Banner
                backgroundImage={`${process.env.PUBLIC_URL}/imgReact/bank-treeOpti.webp`}
                title="Promoted Content"
                subtitles={["No fees.", "No minimum deposit.", "High interest rates."]}
                text="Open a savings account with Argent Bank today!"
            />
            <section className="feature">
            <h2 className="sr-only">Features</h2>
                <Feature 
                    src={`${process.env.PUBLIC_URL}/imgReact/icon-chat.png`}
                    alt="logo Chat"
                    title="You are our #1 priority"
                    text="Need to talk to a representative? You can get in touch through our
                24/7 chat or through a phone call in less than 5 minutes."
                />
                <Feature 
                    src={`${process.env.PUBLIC_URL}/imgReact/icon-money.png`}
                    alt="logo Money"
                    title="More savings means higher rates"
                    text="The more you save with us, the higher your interest rate will be!"
                />
                <Feature
                    src={`${process.env.PUBLIC_URL}/imgReact/icon-security.png`}
                    alt="logo Security"
                    title="Security you can trust"
                    text="We use top of the line encryption to make sure your data and money
                is always safe."
                />
            </section>
        </main>
    );
}
export default Home;