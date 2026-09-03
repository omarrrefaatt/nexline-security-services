import Icon from '../common/Icon.jsx';

function HighlightCard({ icon, title }) {
  return (
    <div className="highlight-card">
      <span className="highlight-card__icon">
        <Icon name={icon} size={18} />
      </span>
      <span className="highlight-card__title">{title}</span>
    </div>
  );
}

export default HighlightCard;
