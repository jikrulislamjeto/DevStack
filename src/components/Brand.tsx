import LogoText from "../assets/logo-text.png";

const Brand = () => {
    return (
        <a href="#home" className="flex items-center">
            <img
                src={LogoText}
                alt="Dev Stack"
                className="h-8 w-auto"
            />
        </a>
    );
};

export default Brand;