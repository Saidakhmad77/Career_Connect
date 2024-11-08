import "./EmployerProfileView.scss";
import placeholderImage from '../../assets/placeholder.jpeg'
function EmployerProfileView({ profileData }) {
  if (!profileData) {
    return <h2>No employer profile data available</h2>;
  }

  return (
    <div>
      <div className="profile-view">
        <h1>{profileData.company_name} Employer Profile</h1>
        <div className="profile-details">
          <img
            src={profileData.company_logo ? profileData.company_logo : placeholderImage}
            alt="Company Logo"
            className="profile-picture"
          />
          <div className="profile-text">
            <p>
              <strong>About the Company:</strong> {profileData.about_company}
            </p>

            {/* Preferential Treatment */}
            <p>
              <strong>Preferential Treatment:</strong>
            </p>
            {profileData.preferential_treatment ? (
              Array.isArray(profileData.preferential_treatment) ? (
                <div className="preferential-treatment-list">
                  {profileData.preferential_treatment.map(
                    (preference, index) => (
                      <div key={index} className="preference-item">
                        {preference}
                      </div>
                    )
                  )}
                </div>
              ) : (
                <p>{profileData.preferential_treatment}</p> // If it's a string, just display it
              )
            ) : (
              <p>No preferential treatments specified.</p>
            )}

            {/* Company Benefits */}
            <p>
              <strong>Company Benefits:</strong>
            </p>
            {Array.isArray(profileData.company_benefits) &&
            profileData.company_benefits.length > 0 ? (
              <div className="company-benefits-list">
                {profileData.company_benefits.map((benefit, index) => (
                  <div key={index} className="benefit-item">
                    {benefit}
                  </div>
                ))}
              </div>
            ) : (
              <p>No company benefits specified.</p>
            )}

            <p>
              <strong>Contact Information:</strong> {profileData.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployerProfileView;
