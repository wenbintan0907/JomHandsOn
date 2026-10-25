import './FadeInSection.css';

// Content must remain visible when routes are suspended, restored, or revisited.
const FadeInSection = ({ children }) => (
  <div className="fade-in-section">{children}</div>
);

export default FadeInSection;
