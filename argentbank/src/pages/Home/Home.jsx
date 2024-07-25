import Banner from "../../components/Banner/Banner";
import Feature from "../../components/Feature/Feature";
import HomeBannerImage from "../../imgReact/bank-treeOpti.jpeg";
import logoChat from "../../imgReact/icon-chat.png";
import logoMoney from "../../imgReact/icon-money.png";
import logoSecurity from "../../imgReact/icon-security.png";

function Home() {
    return (
        <main>
            {/*ne pas oublier d'optimiser les images !! */}
            <Banner
                backgroundImage={HomeBannerImage}
                title="Promoted Content"
                subtitles={["No fees.", "No minimum deposit.", "High interest rates."]}
                text="Open a savings account with Argent Bank today!"
            />
            <section className="feature">
            <h2 className="sr-only">Features</h2>
                <Feature 
                    src={logoChat}
                    alt="logo Chat"
                    title="You are our #1 priority"
                    text="Need to talk to a representative? You can get in touch through our
                24/7 chat or through a phone call in less than 5 minutes."
                />
                <Feature 
                    src={logoMoney}
                    alt="logo Money"
                    title="More savings means higher rates"
                    text="The more you save with us, the higher your interest rate will be!"
                />
                <Feature
                    src={logoSecurity}
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