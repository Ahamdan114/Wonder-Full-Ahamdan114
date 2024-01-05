import "./AdditionalInfo.css";

const AdditionalInfo = ({ icon, alt, info }) => {
    return (
        <div>
            <div className="icon">{icon}</div>
            <div className="contact-info">
                {alt}:{info}
            </div>
        </div>
    );
};

export default AdditionalInfo;
