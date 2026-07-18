import SectionHolder from "../widgets/SectionHolder";
import Header from "../widgets/Header";
import Footer from "../widgets/Footer";
import '/index.css';


const App = () => {
    return (
        <div className={"flex flex-col items-center gap-5 w-full min-h-screen"}>
            <Header />
            <SectionHolder />
            <Footer />
        </div>
    );
}
export default App;