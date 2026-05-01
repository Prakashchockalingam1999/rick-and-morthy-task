import "./characterCard.css"
const statusConfig = {
  Alive:   { dot: "#1D9E75" },
  Dead:    { dot: "#E24B4A" },
  unknown: { dot: "#888780" },
};

const CharacterCard = ({ char }) => {
  const sc = statusConfig[char.status] || statusConfig.unknown;

  return (
    <div className="card">

      <div className="card__image-wrapper">
        <img src={char.image} alt={char.name} className="card__image" />
      </div>

      <div className="card__body">
        <p className="card__name">{char.name}</p>

        <p className="card__sub">
          <span className="card__badge-dot" style={{ background: sc.dot }} />
          {char.status} - {char.species}
        </p>

        <div className="card__meta">
          <div className="card__meta-row">
            <span className="card__meta-label">Last known location:</span>
            <span className="card__meta-value">{char.location.name}</span>
          </div>
          <div className="card__meta-row">
            <span className="card__meta-label">First seen in:</span>
            <span className="card__meta-value">{char.origin.name}</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CharacterCard;