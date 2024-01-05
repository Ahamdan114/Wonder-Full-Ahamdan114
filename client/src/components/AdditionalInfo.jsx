import "./AdditionalInfo.css";

const AdditionalInfo = ({ icon, alt, info }) => {
    return (
        <>
            <div className="icon">{icon}</div>
            <div className="contact-info">
                {alt}:{info}
            </div>
        </>
    );
};

export default AdditionalInfo;
