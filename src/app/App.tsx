import SectionHolder from "../widgets/SectionHolder";
import Header from "../widgets/Header";
import Footer from "../widgets/Footer";
import '/index.css';


const App = () => {
    return (
        <div className={"justify-center flex flex-col gapParam mOfPage"}>
            <Header />
            <SectionHolder />
            <Footer />
        </div>
    );
}
export default App;